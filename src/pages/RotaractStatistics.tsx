import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { getRotaractStatistics, contentfulKeys, fallbackRotaractStatistics, StatisticDataPoint } from '@/lib/contentful';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Counter } from '@/components/ui/counter';

// Types for our statistics data
type CardStat = {
  id: string;
  number: string;
  title: string;
  description: string;
  iconUrl: string;
};

type ChartConfig = {
  id: string;
  title: string;
  dataKey: string[];
  colors: string[];
  dataSource: string;
  xAxisKey?: string;
  asOfDate?: string;
};

const StatCard = ({
  number,
  title,
  description,
  icon,
  reverse = false
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  reverse?: boolean;
}) => {
  return (
    <div className={`md:flex items-stretch ${reverse ? 'md:flex-row-reverse' : ''} bg-white/5 rounded-lg overflow-hidden`}>
      <div className="w-full md:w-1/2 p-4 md:p-8 bg-[#0F3B7F] text-white min-h-[250px] md:min-h-[300px] flex flex-col justify-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
        <p className="text-white/80 text-sm md:text-base">{description}</p>
      </div>
      <div className={`w-full md:w-1/2 py-8 md:py-8 min-h-[250px] md:min-h-[300px] flex flex-col items-center justify-center bg-rotaract-magenta text-white`}>
        <div className="mb-4">
          {icon}
        </div>
        <div className="text-4xl md:text-6xl font-bold">
          <Counter value={number} />
        </div>
        <div className="text-base md:text-lg mt-2">{title}</div>
      </div>
    </div>
  );
};

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

const RotaractStatistics = () => {
  // Fetch statistics data from Contentful using React Query
  const { 
    data: statisticsData = fallbackRotaractStatistics,
    isLoading
  } = useQuery({
    queryKey: contentfulKeys.rotaractStatistics,
    queryFn: getRotaractStatistics,
  });

  // Helper function to get data based on dataSource string
  const getDataSource = (source: string): StatisticDataPoint[] => {
    switch (source) {
      case 'districtData': return statisticsData.districtData;
      case 'contributionsData': return statisticsData.contributionsData;
      default: return [];
    }
  };

  // Check if there's no data available at all
  const hasNoData = !isLoading && 
    statisticsData.districtData.length === 0 && 
    statisticsData.contributionsData.length === 0 && 
    statisticsData.cardStats.length === 0 && 
    statisticsData.chartConfig.length === 0;

  return (
    <>
      <Helmet>
        <title>Rotaract Statistics | Pilipinas Rotaract MDIO</title>
        <meta 
          name="description" 
          content="View statistics about Rotaract in the Philippines, including membership data, club information, and humanitarian contributions." 
        />
      </Helmet>

      <Header />

      <main>
        {isLoading ? (
          <div className="pt-24 md:pt-36 pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-[60vh]">
              <div className="animate-pulse w-16 h-16 rounded-full bg-rotaract-magenta/20"></div>
            </div>
          </div>
        ) : hasNoData ? (
          <div className="pt-24 md:pt-36 pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-rotaract-magenta">Rotaract Statistics</h1>
              
              <div className="bg-blue-50 rounded-lg border border-blue-100 p-8 md:p-12 mt-8 mb-12 shadow-sm">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                  <div className="text-7xl">📊</div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Statistics Coming Soon</h2>
                    <p className="text-blue-700 mb-4">
                      We're currently gathering comprehensive statistical data about Rotaract across the Philippines. 
                      Our team is working diligently to compile accurate information from all districts.
                    </p>
                    <p className="text-blue-700">
                      Please check back soon to explore our interactive charts and statistics showcasing the 
                      impact and growth of Rotaract in the Philippines. In the meantime, you can learn more about 
                      our programs and activities by visiting our other pages.
                    </p>
                    <div className="mt-8">
                      <Link to="/our-programs-and-activities">
                        <Button className="bg-[#16478E] hover:bg-[#0e3266] text-white rounded-full px-6 py-2 font-medium">
                          Explore Programs & Activities
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-24 md:pt-36 pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-rotaract-magenta">Rotaract Statistics</h1>
              <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 text-justify">
                It has always been a dream for the Philippine District Rotaract Representatives (DRRs) to establish a Multi-District Information Organization ever since. There were numerous generations of DRRs who tried to create such an organization. But that dream had just begun to realize when the Philippine Rotaract was given a chance to host the 3rd Asia Pacific Regional Rotaract Conference (APRRC) in 2006. During that time, the DRRs worked as one as they met various challenges while planning and preparing for the important event. The successful hosting of APRRC Pilipinas became the strongest force that made the Philippine MDIO into a reality.
              </p>

              {statisticsData.cardStats.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-50 rounded-lg border border-gray-200 p-8 mb-8">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-2xl font-semibold text-gray-600 mb-2">Statistics Coming Soon</h3>
                  <p className="text-gray-500 text-center max-w-lg">
                    We're currently collecting and organizing comprehensive statistics about Rotaract across the Philippines. Please check back soon for detailed insights about our membership, clubs, and impact.
                  </p>
                </div>
              ) : (
                <div className="space-y-6 md:space-y-8">
                  {statisticsData.cardStats.map((stat, index) => (
                    <StatCard
                      key={stat.id}
                      number={stat.number}
                      title={stat.title}
                      description={stat.description}
                      icon={<img src={stat.iconUrl} alt={stat.title} className="w-16 h-16 md:w-auto md:h-auto" />}
                      reverse={index % 2 !== 0}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default RotaractStatistics;
