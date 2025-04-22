import { HeroCarouselImage, BaseDistrict, FeaturedEvent, UpcomingEvent, Statistic, StatisticDataPoint, StatisticCardStat, StatisticChartConfig } from '@/lib/contentful';

// Interfaces for static data
export interface StaticContentfulData {
  heroCarouselImages: HeroCarouselImage[];
  districts: BaseDistrict[];
  featuredEvents: FeaturedEvent[];
  upcomingEvents: UpcomingEvent[];
  statistics: Statistic[];
  rotaractStatisticsDistrict: StatisticDataPoint[];
  rotaractStatisticsContributions: StatisticDataPoint[];
  rotaractStatisticsCards: StatisticCardStat[];
  rotaractStatisticsCharts: StatisticChartConfig[];
  // Add other content types here as needed
}

// Default empty data structure
export const emptyStaticData: StaticContentfulData = {
  heroCarouselImages: [],
  districts: [],
  featuredEvents: [],
  upcomingEvents: [],
  statistics: [],
  rotaractStatisticsDistrict: [],
  rotaractStatisticsContributions: [],
  rotaractStatisticsCards: [],
  rotaractStatisticsCharts: [],
  // Initialize other content types with empty values
}; 