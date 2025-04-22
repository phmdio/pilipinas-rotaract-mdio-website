import { createClient } from 'contentful';
import { StaticContentfulData } from '@/data/contentful-static';

// Static data flag - set to true to use static data from JSON files
const USE_STATIC_DATA = import.meta.env.MODE === 'production';

// Initialize the Contentful client
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
});

// Type definition for Hero carousel images
export interface HeroCarouselImage {
  title: string;
  imageUrl: string;
  alt: string;
}

// Type definition for District Representative
export interface DistrictRepresentative {
  name: string;
  club: string;
  year: string;
  rotaryYear: string;
  dates: string;
}

// Base District type with required minimal fields
export interface BaseDistrict {
  id: string;
  color: string;
  image: string;
}

// Full District type with all details
export interface District extends BaseDistrict {
  title: string;
  description: string;
  composition: string[];
  highlights: string;
  gallery: string[];
  representatives: DistrictRepresentative[];
  headerImage: string;
  mainClub: string;
  activities: string[];
  // Markdown content fields
  mission: string; // Markdown content
  vision: string; // Markdown content
  facebookPageUrl: string;
}

// Update the imported StaticContentfulData interface to include districts
// This should be done in the contentful-static.ts file, but we're adding a declare here
// to augment the existing interface
declare module '@/data/contentful-static' {
  interface StaticContentfulData {
    heroCarouselImages: HeroCarouselImage[];
    districts: BaseDistrict[];
    featuredEvents: FeaturedEvent[];
    upcomingEvents: UpcomingEvent[];
    statistics: Statistic[];
    rotaractStatisticsDistrict: StatisticDataPoint[];
    rotaractStatisticsContributions: StatisticDataPoint[];
    rotaractStatisticsCards: StatisticCardStat[];
    rotaractStatisticsCharts: StatisticChartConfig[];
  }
}

// Query keys for React Query
export const contentfulKeys = {
  heroCarousel: ['contentful', 'heroCarousel'] as const,
  districts: ['contentful', 'districts'] as const,
  districtDetail: ['contentful', 'districtDetail'] as const,
  statistics: ['contentful', 'statistics'] as const,
  rotaractStatistics: ['contentful', 'rotaractStatistics'] as const,
};

// Type definitions for Programs and Activities
export interface FeaturedEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  landscape?: boolean;
}

export interface UpcomingEvent {
  id: string;
  date: string;
  title: string;
  image: string;
}

// Query keys for programs and activities
export const programsAndActivitiesKeys = {
  featuredEvents: ['contentful', 'featuredEvents'] as const,
  upcomingEvents: ['contentful', 'upcomingEvents'] as const,
};

// Type definition for Statistics
export interface Statistic {
  id: string;
  value: string;
  label: string;
  iconUrl?: string;
}

// Types for Rotaract Statistics page
export interface StatisticDataPoint {
  year?: string;
  district?: string;
  [key: string]: string | number | undefined;
}

export interface StatisticCardStat {
  id: string;
  number: string;
  title: string;
  description: string;
  iconUrl: string;
}

export interface StatisticChartConfig {
  id: string;
  title: string;
  dataKey: string[];
  colors: string[];
  dataSource: string;
  xAxisKey?: string;
  asOfDate?: string;
}

export interface RotaractStatisticsData {
  districtData: StatisticDataPoint[];
  contributionsData: StatisticDataPoint[];
  cardStats: StatisticCardStat[];
  chartConfig: StatisticChartConfig[];
}

// Helper function to load static data
async function loadStaticData<T>(key: keyof StaticContentfulData): Promise<T[]> {
  try {
    if (USE_STATIC_DATA) {
      const response = await fetch('/static-data/contentful-data.json');
      const data = await response.json() as StaticContentfulData;
      return data[key] as T[];
    }
    throw new Error('Static data not available or disabled');
  } catch (error) {
    console.warn(`Failed to load static data for ${key}, falling back to API:`, error);
    throw error;
  }
}

// Function to fetch hero carousel images
export async function getHeroCarouselImages(): Promise<HeroCarouselImage[]> {
  // Try to load from static data first
  if (USE_STATIC_DATA) {
    try {
      return await loadStaticData<HeroCarouselImage>('heroCarouselImages');
    } catch (error) {
      console.warn('Falling back to API for hero carousel images');
    }
  }
  
  // Fall back to API if static data loading fails or is disabled
  const entries = await client.getEntries({
    content_type: 'heroCarouselImage',
    order: ['sys.createdAt'],
  });

  return entries.items.map((item: any) => ({
    title: item.fields.title,
    imageUrl: item.fields.image?.fields?.file?.url 
      ? `https:${item.fields.image.fields.file.url}` 
      : '/assets/carousel.png', // Fallback image
    alt: item.fields.alt || item.fields.title || 'Rotaract carousel image',
  }));
}

// Function to fetch district data
export async function getDistricts(): Promise<BaseDistrict[]> {
  // Try to load from static data first
  if (USE_STATIC_DATA) {
    try {
      return await loadStaticData<BaseDistrict>('districts');
    } catch (error) {
      console.warn('Falling back to API for districts data');
    }
  }
  
  // Fall back to API if static data loading fails or is disabled
  const entries = await client.getEntries({
    content_type: 'district',
    order: ['sys.createdAt'],
  });

  return entries.items.map((item: any) => ({
    id: item.fields.id || '',
    color: item.fields.color || '#003366',
    image: item.fields.image?.fields?.file?.url 
      ? `https:${item.fields.image.fields.file.url}` 
      : '/assets/district/default.jpeg',
    description: item.fields.description || 'Rotaract Clubs of Rotary International District #',
  }));
}

// Function to fetch district detail data
export async function getDistrictDetail(districtId: string): Promise<District> {
  // Try to load from static data first
  if (USE_STATIC_DATA) {
    try {
      const districts = await loadStaticData<BaseDistrict>('districts');
      const district = districts.find(d => d.id === districtId);
      if (district) {
        // Fetch full detail from API since static data only has BaseDistrict
        return await fetchDistrictFromContentful(districtId);
      }
      console.warn(`District detail for ${districtId} not found in static data`);
    } catch (error) {
      console.warn('Falling back to API for district detail data');
    }
  }
  
  return fetchDistrictFromContentful(districtId);
}

// Helper function to fetch complete district data from Contentful
async function fetchDistrictFromContentful(districtId: string): Promise<District> {
  const entries = await client.getEntries({
    content_type: 'district',
    'fields.id': districtId,
    include: 2
  });

  if (entries.items.length === 0) {
    return createFallbackDistrictDetail(districtId);
  }

  const item = entries.items[0];
  return mapContentfulDistrictDetail(item, districtId);
}

// Helper function to map Contentful response to District
function mapContentfulDistrictDetail(item: any, districtId: string): District {
  // Map gallery images
  const gallery = item.fields.gallery?.map((img: any) => 
    img.fields?.file?.url ? `https:${img.fields.file.url}` : '/assets/district/default.jpeg'
  ) || [`/assets/district/${districtId}.jpeg`];

  // Map representatives
  const representatives = item.fields.representatives?.map((rep: any) => ({
    name: rep.fields?.name || 'District Representative',
    club: rep.fields?.club || '',
    year: rep.fields?.year || '',
    rotaryYear: rep.fields?.rotaryYear || '',
    dates: rep.fields?.dates || ''
  })) || [];

  // Construct full district detail object
  return {
    id: districtId,
    color: item.fields.color || '#003366',
    image: item.fields.image?.fields?.file?.url 
      ? `https:${item.fields.image.fields.file.url}` 
      : '/assets/district/default.jpeg',
    description: item.fields.description || '',
    title: item.fields.title || `District ${districtId}`,
    composition: item.fields.composition || [],
    highlights: item.fields.highlights || '',
    gallery,
    representatives,
    headerImage: item.fields.headerImage?.fields?.file?.url 
      ? `https:${item.fields.headerImage.fields.file.url}` 
      : `/assets/district/${districtId}.jpeg`,
    mainClub: item.fields.mainClub || '',
    activities: item.fields.activities || [],
    // Preserve markdown formatting from Contentful
    mission: item.fields.mission || '',
    vision: item.fields.vision || '',
    facebookPageUrl: item.fields.facebookPageUrl || `https://www.facebook.com/district${districtId}rotaract`
  };
}

// Create a fallback district detail for when no data is found
function createFallbackDistrictDetail(districtId: string): District {
  return {
    id: districtId,
    color: '#003366',
    image: `/assets/district/${districtId}.jpeg`,
    title: `District ${districtId}`,
    description: "This district is currently updating its information. Please check back soon for a complete profile of its activities, membership, and achievements.",
    composition: ["Community-Based Clubs", "University-Based Clubs", "Active Rotaractors"],
    highlights: "Information about district highlights and achievements coming soon.",
    gallery: [`/assets/district/${districtId}.jpeg`, `/assets/district/default.jpeg`],
    representatives: [],
    headerImage: `/assets/district/${districtId}.jpeg`,
    mainClub: "District Headquarters",
    activities: [],
    mission: "",
    vision: "",
    facebookPageUrl: `https://www.facebook.com/district${districtId}rotaract`
  };
}

// Fallback district data
export const fallbackDistrictData: BaseDistrict[] = [
  { 
    id: '3770', 
    color: '#F6A81C',
    image: '/assets/district/3770.jpeg'
  },
  { 
    id: '3780', 
    color: '#16478E',
    image: '/assets/district/3780.jpeg',
  },
  { 
    id: '3790', 
    color: '#00A2E1',
    image: '/assets/district/3790.jpeg',
  },
  { 
    id: '3800', 
    color: '#003366',
    image: '/assets/district/3800.jpeg',
  },
  { 
    id: '3810', 
    color: '#F47621',
    image: '/assets/district/3810.jpeg',
  },
  { 
    id: '3820', 
    color: '#8E288F',
    image: '/assets/district/3820.jpeg',
  },
  { 
    id: '3830', 
    color: '#0D9648',
    image: '/assets/district/3830.jpeg',
  },
  { 
    id: '3850', 
    color: '#E22626',
    image: '/assets/district/3850.jpeg',
  },
  { 
    id: '3860', 
    color: '#66819A',
    image: '/assets/district/3860.jpeg',
  },
  { 
    id: '3870', 
    color: '#00ACBB',
    image: '/assets/district/3870.jpeg',
  },
];

// Fallback carousel images
export const fallbackCarouselImages: HeroCarouselImage[] = [
  { title: 'Fallback Image 1', imageUrl: '/assets/carousel.png', alt: 'Rotaract members 1' },
  { title: 'Fallback Image 2', imageUrl: '/assets/carousel.png', alt: 'Rotaract members 2' },
  { title: 'Fallback Image 3', imageUrl: '/assets/carousel.png', alt: 'Rotaract members 3' },
];

// Function to fetch featured events
export async function getFeaturedEvents(): Promise<FeaturedEvent[]> {
  // Try to load from static data first
  if (USE_STATIC_DATA) {
    try {
      return await loadStaticData<FeaturedEvent>('featuredEvents');
    } catch (error) {
      console.warn('Falling back to API for featured events');
    }
  }
  
  // Fall back to API if static data loading fails or is disabled
  const entries = await client.getEntries({
    content_type: 'featuredEvent',
    order: ['-sys.createdAt'],
    limit: 5,
  });

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    date: item.fields.date || new Date().toLocaleDateString(),
    title: item.fields.title || 'Featured Event',
    description: item.fields.description || '',
    image: item.fields.image?.fields?.file?.url 
      ? `https:${item.fields.image.fields.file.url}` 
      : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    landscape: item.fields.landscape || false,
  }));
}

// Function to fetch upcoming events
export async function getUpcomingEvents(): Promise<UpcomingEvent[]> {
  // Try to load from static data first
  if (USE_STATIC_DATA) {
    try {
      return await loadStaticData<UpcomingEvent>('upcomingEvents');
    } catch (error) {
      console.warn('Falling back to API for upcoming events');
    }
  }
  
  // Fall back to API if static data loading fails or is disabled
  const entries = await client.getEntries({
    content_type: 'upcomingEvent',
    order: ['fields.date'],
    limit: 5,
  });

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    date: item.fields.date || new Date().toLocaleDateString(),
    title: item.fields.title || 'Upcoming Event',
    image: item.fields.image?.fields?.file?.url 
      ? `https:${item.fields.image.fields.file.url}` 
      : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
  }));
}

// Fallback data for featured events
export const fallbackFeaturedEvents: FeaturedEvent[] = [
  {
    id: '1',
    date: "January 1, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    description:
      "Annual training seminar for incoming District Rotaract Representatives to prepare them for their leadership roles in the upcoming Rotary year.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    landscape: true,
  },
  {
    id: '2',
    date: "March 1, 2024",
    title: "Pilipinas Gear Awards",
    description:
      "Recognition event celebrating outstanding Rotaract clubs and individuals across the Philippines who have made significant contributions to their communities.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: '3',
    date: "March 5, 2024",
    title: "Pilipinas Rotaract Convention",
    description:
      "Annual national convention bringing together Rotaractors from across the Philippines for fellowship, learning, and service.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: '4',
    date: "April 10, 2024",
    title: "Rotaract Branding Academy",
    description:
      "Workshop focused on strengthening Rotaract brand identity and improving club marketing and communications strategies.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: '5',
    date: "April 15, 2024",
    title: "People of Action Campaign",
    description:
      "Service initiative highlighting Rotaractors as people of action through community service projects across the Philippines.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

// Fallback data for upcoming events
export const fallbackUpcomingEvents: UpcomingEvent[] = [
  {
    id: '1',
    date: "February 01, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: '2',
    date: "February 03, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: '3',
    date: "February 07, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: '4',
    date: "February 11, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: '5',
    date: "February 17, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
];

// Function to fetch statistics
export async function getStatistics(): Promise<Statistic[]> {
  // Try to load from static data first
  if (USE_STATIC_DATA) {
    try {
      return await loadStaticData<Statistic>('statistics');
    } catch (error) {
      console.warn('Falling back to API for statistics');
    }
  }
  
  // Fall back to API if static data loading fails or is disabled
  const entries = await client.getEntries({
    content_type: 'statistic',
    order: ['sys.createdAt'],
  });

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    value: item.fields.value || '0',
    label: item.fields.label || 'Statistic',
    iconUrl: item.fields.icon?.fields?.file?.url 
      ? `https:${item.fields.icon.fields.file.url}` 
      : undefined
  }));
}

// Fallback data for statistics
export const fallbackStatistics: Statistic[] = [
  {
    id: '1',
    value: '170K',
    label: 'Rotaract Around the World',
  },
  {
    id: '2',
    value: '800',
    label: 'Rotaract Clubs in the District',
  },
  {
    id: '3',
    value: '15K',
    label: 'Rotaract Members in the Philippines',
  },
];

// Function to fetch detailed Rotaract statistics
export async function getRotaractStatistics(): Promise<RotaractStatisticsData> {
  // Try to load from static data first
  if (USE_STATIC_DATA) {
    try {
      const districtData = await loadStaticData<StatisticDataPoint>('rotaractStatisticsDistrict');
      const contributionsData = await loadStaticData<StatisticDataPoint>('rotaractStatisticsContributions');
      const cardStats = await loadStaticData<StatisticCardStat>('rotaractStatisticsCards');
      const chartConfig = await loadStaticData<StatisticChartConfig>('rotaractStatisticsCharts');
      
      return {
        districtData,
        contributionsData,
        cardStats,
        chartConfig
      };
    } catch (error) {
      console.warn('Falling back to API for Rotaract statistics');
    }
  }
  
  // Fetch card stats
  const cardStatsEntries = await client.getEntries({
    content_type: 'rotaractStatisticCard',
    order: ['sys.createdAt'],
  });
  
  const cardStats = cardStatsEntries.items.map((item: any) => ({
    id: item.sys.id,
    number: item.fields.number || '0',
    title: item.fields.title || 'Statistic',
    description: item.fields.description || '',
    iconUrl: item.fields.icon?.fields?.file?.url 
      ? `https:${item.fields.icon.fields.file.url}` 
      : '/assets/statistics-icon.svg',
  }));
  
  // Fetch district data
  const districtDataEntries = await client.getEntries({
    content_type: 'rotaractDistrictData',
    order: ['fields.year', 'fields.district'],
  });
  
  const districtData = districtDataEntries.items.map((item: any) => {
    const data: StatisticDataPoint = {
      year: item.fields.year,
      district: item.fields.district,
    };
    
    // Add any dynamic fields
    Object.keys(item.fields).forEach(key => {
      if (key !== 'year' && key !== 'district') {
        data[key] = item.fields[key];
      }
    });
    
    return data;
  });
  
  // Fetch contributions data
  const contributionsDataEntries = await client.getEntries({
    content_type: 'rotaractContributionsData',
    order: ['fields.district'],
  });
  
  const contributionsData = contributionsDataEntries.items.map((item: any) => {
    const data: StatisticDataPoint = {
      district: item.fields.district,
    };
    
    // Add any dynamic fields
    Object.keys(item.fields).forEach(key => {
      if (key !== 'district') {
        data[key] = item.fields[key];
      }
    });
    
    return data;
  });
  
  // Fetch chart configs
  const chartConfigEntries = await client.getEntries({
    content_type: 'rotaractChartConfig',
    order: ['sys.createdAt'],
  });
  
  const chartConfig = chartConfigEntries.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title || 'Chart',
    dataKey: item.fields.dataKey || [],
    colors: item.fields.colors || ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    dataSource: item.fields.dataSource || 'districtData',
    xAxisKey: item.fields.xAxisKey || 'year',
    asOfDate: item.fields.asOfDate,
  }));
  
  return {
    districtData,
    contributionsData,
    cardStats,
    chartConfig
  };
}

// Fallback data for Rotaract statistics
export const fallbackRotaractStatistics: RotaractStatisticsData = {
  districtData: [
    { year: '2020', district: '3770', members: 420, clubs: 15 },
    { year: '2021', district: '3770', members: 450, clubs: 16 },
    { year: '2022', district: '3770', members: 480, clubs: 17 },
    { year: '2023', district: '3770', members: 510, clubs: 18 },
    { year: '2020', district: '3780', members: 520, clubs: 22 },
    { year: '2021', district: '3780', members: 560, clubs: 24 },
    { year: '2022', district: '3780', members: 580, clubs: 26 },
    { year: '2023', district: '3780', members: 610, clubs: 28 },
  ],
  contributionsData: [
    { district: '3770', annualFund: 25000, polioPlus: 12000 },
    { district: '3780', annualFund: 28000, polioPlus: 14000 },
    { district: '3790', annualFund: 32000, polioPlus: 15000 },
    { district: '3800', annualFund: 38000, polioPlus: 18000 },
    { district: '3810', annualFund: 22000, polioPlus: 10000 },
    { district: '3820', annualFund: 30000, polioPlus: 16000 },
    { district: '3830', annualFund: 35000, polioPlus: 17000 },
    { district: '3850', annualFund: 20000, polioPlus: 9000 },
    { district: '3860', annualFund: 26000, polioPlus: 13000 },
    { district: '3870', annualFund: 24000, polioPlus: 11000 },
  ],
  cardStats: [
    {
      id: '1',
      number: '10',
      title: 'Rotary Districts',
      description: 'Pilipinas Rotaract MDIO proudly represents 10 Rotary Districts across the Philippines, working together to create positive change and develop young leaders.',
      iconUrl: '/assets/statistics-icon-districts.svg'
    },
    {
      id: '2',
      number: '800+',
      title: 'Rotaract Clubs',
      description: 'With over 800 Rotaract clubs throughout the Philippines, our network creates significant impact through service projects and professional development initiatives.',
      iconUrl: '/assets/statistics-icon-clubs.svg'
    },
    {
      id: '3',
      number: '20K+',
      title: 'Rotaractors',
      description: 'More than 20,000 young professionals and students across the Philippines are engaged in community service, leadership development, and professional networking.',
      iconUrl: '/assets/statistics-icon-members.svg'
    }
  ],
  chartConfig: [
    {
      id: '1',
      title: 'Members by District (2020-2023)',
      dataKey: ['members'],
      colors: ['#D41A69'],
      dataSource: 'districtData',
      xAxisKey: 'district',
      asOfDate: 'December 2023'
    },
    {
      id: '2',
      title: 'Clubs by District (2020-2023)',
      dataKey: ['clubs'],
      colors: ['#16478E'],
      dataSource: 'districtData',
      xAxisKey: 'district',
      asOfDate: 'December 2023'
    },
    {
      id: '3',
      title: 'Foundation Contributions by District',
      dataKey: ['annualFund', 'polioPlus'],
      colors: ['#D41A69', '#16478E'],
      dataSource: 'contributionsData',
      xAxisKey: 'district',
      asOfDate: 'December 2023'
    }
  ]
}; 