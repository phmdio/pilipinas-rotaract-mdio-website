import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useRotaryFoundationQuery } from '@/hooks/useRotaryFoundationQuery';
import { fallbackRotaryFoundationData, fallbackRotaractStatistics, StatisticDataPoint } from '@/lib/contentful';
import { AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

// LineChartCard component for displaying charts
const LineChartCard = ({ 
  title, 
  data, 
  dataKeys, 
  colors,
  xAxisKey = "year",
  asOfDate
}: { 
  title: string; 
  data: StatisticDataPoint[]; 
  dataKeys: string[];
  colors: string[];
  xAxisKey?: string;
  asOfDate?: string;
}) => {
  // Check if this is the contributions chart
  const isContributionsChart = dataKeys.includes('annualFund') || dataKeys.includes('polioPlus');

  // Get friendly display names for data keys
  const getKeyDisplayName = (key: string): string => {
    switch(key) {
      case 'annualFund': return 'Annual Fund';
      case 'polioPlus': return 'Polio Plus Fund';
      case 'members': return 'Members';
      case 'clubs': return 'Clubs';
      default: return key;
    }
  };

  // Format Y-axis ticks for currency if needed
  const formatYAxis = (value: any): string => {
    if (isContributionsChart) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return value.toLocaleString();
  };

  // Format tooltip values
  const formatTooltip = (value: any, name: string) => {
    if (name === 'Annual Fund' || name === 'Polio Plus Fund') {
      return [`$${value.toLocaleString()}`, name];
    }
    return [value.toLocaleString(), name];
  };

  // Custom dot for the line chart that displays values
  const CustomizedDot = (props: any) => {
    const { cx, cy, value, dataKey } = props;
    
    // Format the display value based on the data type
    const displayValue = (dataKey === 'annualFund' || dataKey === 'polioPlus')
      ? `$${(value / 1000).toFixed(0)}K`
      : value.toLocaleString();
    
    return (
      <g>
        <circle cx={cx} cy={cy} r={6} fill={props.stroke} />
        <text 
          x={cx} 
          y={cy - 10} 
          textAnchor="middle" 
          fill={props.stroke}
          fontSize={12}
          fontWeight="bold"
        >
          {displayValue}
        </text>
      </g>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-[#0F3B7F]">{title}</h3>
        {asOfDate && (
          <div className="text-sm text-gray-500 italic">
            As of {asOfDate}
          </div>
        )}
      </div>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis 
              dataKey={xAxisKey} 
              angle={xAxisKey === 'district' ? -45 : 0} 
              textAnchor={xAxisKey === 'district' ? "end" : "middle"}
              height={xAxisKey === 'district' ? 60 : 30}
            />
            <YAxis 
              tickFormatter={isContributionsChart ? formatYAxis : undefined}
            >
              {isContributionsChart && (
                <Label 
                  value="Thousands (USD)" 
                  angle={-90} 
                  position="insideLeft" 
                  style={{ textAnchor: 'middle' }}
                  offset={-10}
                />
              )}
            </YAxis>
            <Tooltip 
              formatter={formatTooltip}
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <Legend />
            {dataKeys.map((key, index) => (
              <Line 
                key={key}
                type="monotone" 
                dataKey={key} 
                name={getKeyDisplayName(key)}
                stroke={colors[index % colors.length]} 
                strokeWidth={2} 
                dot={<CustomizedDot />}
                activeDot={{ r: 8 }} 
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// Fallback component for errors or no data
const FoundationFallback = ({ error }: { error?: unknown }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-sm p-8 my-10 text-center">
      <div className="flex justify-center mb-4">
        <AlertTriangle className="h-12 w-12 text-amber-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {error ? 'Something went wrong' : 'No foundation data found'}
      </h3>
      <p className="text-gray-600 mb-6">
        {error 
          ? 'We encountered an error while loading Rotary Foundation information. Please try again later.'
          : 'We couldn\'t find information about the Rotary Foundation programs. Please check back soon.'}
      </p>
      <Link 
        to="/"
        className="btn-rotaract inline-block uppercase font-bold"
      >
        Return to Home
      </Link>
    </div>
  );
};

const RotaryFoundationGiving = () => {
  // Fetch Rotary Foundation data using React Query
  const { 
    data: foundationData = fallbackRotaryFoundationData,
    isLoading,
    error
  } = useRotaryFoundationQuery();

  // Helper function to get data based on dataSource string
  const getDataSource = (source: string): StatisticDataPoint[] => {
    if (!foundationData.statisticsData) return [];
    
    switch (source) {
      case 'districtData': return foundationData.statisticsData.districtData || [];
      case 'contributionsData': return foundationData.statisticsData.contributionsData || [];
      default: return [];
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-blue-600 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  // Check if we have valid data in both the fetched data and fallback
  const hasValidData = foundationData && 
    foundationData.funds && 
    foundationData.funds.length > 0 && 
    foundationData.introduction && 
    foundationData.introduction.title;

  return (
    <>
      <Helmet>
        <title>The Rotary Foundation Giving | Pilipinas Rotaract MDIO</title>
        <meta 
          name="description" 
          content="Support The Rotary Foundation through giving and donations" 
        />
      </Helmet>
      
      <Header />
      
      <main>
        <PageHero 
          title="The Rotary Foundation Giving" 
          backgroundImage="/assets/trf.png"
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {error ? (
              // Display error fallback
              <FoundationFallback error={error} />
            ) : !hasValidData ? (
              // Display no data fallback
              <FoundationFallback />
            ) : (
              // Display foundation content when data is available
              <>
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-rotaract-magenta mb-4">
                    {foundationData.introduction.title}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {foundationData.introduction.content}
                  </p>
                </div>

                {/* Single Column with Landscape Cards */}
                <div className="space-y-8 mb-16">
                  {foundationData.funds.map((fund, index) => (
                    <div 
                      key={fund.id}
                      className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-rotaract-magenta/5 rounded-lg shadow-sm p-6`}
                    >
                      <div className="w-full md:w-1/2">
                        <img 
                          src={fund.imageUrl}
                          alt={fund.alt}
                          className="rounded-lg w-full h-64 object-cover"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <h3 className="text-xl font-bold text-rotaract-magenta mb-3">{fund.title}</h3>
                        <p className="text-gray-700">
                          {fund.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Donation Button */}
                <div className="text-center mb-16">
                  <Link 
                    to={foundationData.donationLink}
                    className="btn-rotaract inline-block uppercase font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate to the Rotary Foundation
                  </Link>
                </div>

                {/* Charts Section */}
                {foundationData.statisticsData && foundationData.statisticsData.chartConfig && foundationData.statisticsData.chartConfig.length > 0 && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold my-8 md:my-12 text-[#0F3B7F]">Foundation Contribution Trends</h2>
                    <div className="grid grid-cols-1 gap-8">
                      {foundationData.statisticsData.chartConfig.map((config, index) => {
                        const data = getDataSource(config.dataSource);
                        
                        // Skip rendering the chart if there's no data
                        if (data.length === 0) return null;

                        return (
                          <LineChartCard
                            key={config.id}
                            title={config.title} 
                            data={data} 
                            dataKeys={config.dataKey} 
                            colors={config.colors}
                            xAxisKey={config.xAxisKey || "year"}
                            asOfDate={config.asOfDate}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default RotaryFoundationGiving;
