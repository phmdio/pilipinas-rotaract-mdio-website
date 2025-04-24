import { HeroCarouselImage, BaseDistrict, FeaturedEvent, UpcomingEvent, Statistic, StatisticDataPoint, StatisticCardStat, StatisticChartConfig, LeadershipChair, BoardMember, ExecutiveCommitteeMember, StaffMember, RotaryFoundationData } from '@/lib/contentful';

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
  leadershipChair: LeadershipChair[];
  boardMembers: BoardMember[];
  executiveCommittee: ExecutiveCommitteeMember[];
  staffMembers: StaffMember[];
  rotaryFoundationData: RotaryFoundationData;
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
  leadershipChair: [],
  boardMembers: [],
  executiveCommittee: [],
  staffMembers: [],
  rotaryFoundationData: {
    introduction: {
      title: "",
      content: ""
    },
    funds: [],
    donationLink: ""
  }
}; 