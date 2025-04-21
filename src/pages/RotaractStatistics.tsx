import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import statisticsData from '../data/rotaractStatistics.json';

// Types for our statistics data
type DataPoint = {
  year?: string;
  district?: string;
  [key: string]: string | number | undefined;
};

type CardStat = {
  number: string;
  title: string;
  description: string;
  iconPath: string;
};

type ChartConfig = {
  title: string;
  dataKey: string[];
  colors: string[];
  dataSource: string;
  xAxisKey?: string;
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
        <div className="text-4xl md:text-6xl font-bold">{number}</div>
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
  xAxisKey = "year"
}: { 
  title: string; 
  data: DataPoint[]; 
  dataKeys: string[];
  colors: string[];
  xAxisKey?: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <h3 className="text-xl font-bold mb-4 text-[#0F3B7F]">{title}</h3>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip 
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
                stroke={colors[index]} 
                strokeWidth={2} 
                activeDot={{ r: 8 }} 
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const BarChartCard = ({ 
  title, 
  data, 
  dataKeys, 
  colors,
  xAxisKey = "district" 
}: { 
  title: string; 
  data: DataPoint[]; 
  dataKeys: string[];
  colors: string[];
  xAxisKey?: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
      <h3 className="text-xl font-bold mb-4 text-[#0F3B7F]">{title}</h3>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis 
              dataKey={xAxisKey} 
              angle={-45} 
              textAnchor="end" 
              height={60}
            />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <Legend />
            {dataKeys.map((key, index) => (
              <Bar 
                key={key}
                dataKey={key} 
                fill={colors[index]} 
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const RotaractStatistics = () => {
  // Type assertions for our imported data
  const worldData = statisticsData.worldData as DataPoint[];
  const philippinesData = statisticsData.philippinesData as DataPoint[];
  const districtData = statisticsData.districtData as DataPoint[];
  const contributionsData = statisticsData.contributionsData as DataPoint[];
  const cardStats = statisticsData.cardStats as CardStat[];
  const chartConfig = statisticsData.chartConfig as ChartConfig[];

  // Helper function to get data based on dataSource string
  const getDataSource = (source: string): DataPoint[] => {
    switch(source) {
      case 'worldData': return worldData;
      case 'philippinesData': return philippinesData;
      case 'districtData': return districtData;
      case 'contributionsData': return contributionsData;
      default: return [];
    }
  };

  return (
    <>
      <Helmet>
        <title>Rotaract Statistics | Pilipinas Rotaract MDIO</title>
      </Helmet>

      <Header />

      <main>
        <div className="pt-24 md:pt-36 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-rotaract-magenta">Rotaract Statistics</h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 text-justify">
              It has always been a dream for the Philippine District Rotaract Representatives (DRRs) to establish a Multi-District Information Organization ever since. There were numerous generations of DRRs who tried to create such an organization. But that dream had just begun to realize when the Philippine Rotaract was given a chance to host the 3rd Asia Pacific Regional Rotaract Conference (APRRC) in 2006. During that time, the DRRs worked as one as they met various challenges while planning and preparing for the important event. The successful hosting of APRRC Pilipinas became the strongest force that made the Philippine MDIO into a reality.
            </p>

            <div className="space-y-6 md:space-y-8">
              {cardStats.map((stat, index) => (
                <StatCard
                  key={index}
                  number={stat.number}
                  title={stat.title}
                  description={stat.description}
                  icon={<img src={stat.iconPath} alt={stat.title} className="w-16 h-16 md:w-auto md:h-auto" />}
                  reverse={index % 2 !== 0}
                />
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold my-8 md:my-12 text-[#0F3B7F]">Rotaract Growth Trends</h2>
            <div className="grid grid-cols-1 gap-8">
              {chartConfig.map((config, index) => {
                const data = getDataSource(config.dataSource);
                
                // Use line charts for time series data (first two charts)
                if (index < 2) {
                  return (
                    <LineChartCard 
                      key={index}
                      title={config.title} 
                      data={data} 
                      dataKeys={config.dataKey} 
                      colors={config.colors}
                      xAxisKey={config.xAxisKey || "year"}
                    />
                  );
                }
                
                // Use bar charts for district data (last two charts)
                return (
                  <BarChartCard 
                    key={index}
                    title={config.title} 
                    data={data} 
                    dataKeys={config.dataKey} 
                    colors={config.colors}
                    xAxisKey={config.xAxisKey || "district"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RotaractStatistics;
