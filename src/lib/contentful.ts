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
  summary: string;
}

// Full District type with all details
export interface District extends BaseDistrict {
  title: string;
  description: string;
  composition: string[];
  gallery: string[];
  representatives: DistrictRepresentative[];
  headerImage: string;
  mainClub: string;
  activities?: string[];
  mission?: string;
  vision?: string;
  facebookPageUrl: string;
}

// Type definitions for Leadership Team members
export interface LeadershipChair {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  headerImage?: string;
  club: string;
  isCurrentChair?: boolean;
  actions?: {
    title: string;
    description: string;
    image: string;
  }[];
}

export interface BoardMember {
  id: string;
  name: string;
  title: string;
  district: string;
  club: string;
  image: string;
}

export interface ExecutiveCommitteeMember {
  id: string;
  name: string;
  title: string;
  district: string;
  club: string;
  image: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  district: string;
  club: string;
  image: string;
}

export interface LeadershipTeamData {
  chair: LeadershipChair;
  boardMembers: BoardMember[];
  executiveCommittee: ExecutiveCommitteeMember[];
  staff: StaffMember[];
}

// Update the imported StaticContentfulData interface to include districts
// This should be done in the contentful-static.ts file, but we're adding a declare here
// to augment the existing interface
declare module '@/data/contentful-static' {
  interface StaticContentfulData {
    heroCarouselImages: HeroCarouselImage[];
    districts: BaseDistrict[];
    featuredEvents: FeaturedEvent[];
    events: Event[];
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
  }
}

// Query keys for React Query
export const contentfulKeys = {
  heroCarousel: ['contentful', 'heroCarousel'] as const,
  districts: ['contentful', 'districts'] as const,
  districtDetail: ['contentful', 'districtDetail'] as const,
  statistics: ['contentful', 'statistics'] as const,
  rotaractStatistics: ['contentful', 'rotaractStatistics'] as const,
  rotaryFoundation: ['contentful', 'rotaryFoundation'] as const,
};

// Type definitions for Programs and Activities
export interface FeaturedEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  landscape?: boolean;
  slug?: string;
}

export interface Event {
  id: string;
  date: string;
  title: string;
  image: string;
  slug?: string;
}

// Query keys for programs and activities
export const programsAndActivitiesKeys = {
  featuredEvents: ['contentful', 'featuredEvents'] as const,
  events: ['contentful', 'events'] as const,
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

// Type for detailed event information
export interface EventDetail {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  location: string;
  objectiveDetails: string[];
  moreInfo: string;
  additionalDetails: string[];
  closingDetails: string;
  eventUrl?: string;
  isFeatured: boolean;
  slug: string;
}

// Query keys for event details
export const eventKeys = {
  eventDetail: ['contentful', 'eventDetail'] as const,
};

// Add query keys for leadership team
export const leadershipKeys = {
  leadershipTeam: ['contentful', 'leadershipTeam'] as const,
  chair: ['contentful', 'leadershipChair'] as const,
  boardMembers: ['contentful', 'boardMembers'] as const,
  executiveCommittee: ['contentful', 'executiveCommitteeMember'] as const,
  staff: ['contentful', 'staff'] as const,
};

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/--+/g, '-') // Replace multiple dashes with single dash
    .trim(); // Trim any leading/trailing spaces or dashes
}

// Helper function to load static data (array version)
async function loadStaticData<T>(key: keyof StaticContentfulData): Promise<T[]> {
  try {
    if (USE_STATIC_DATA) {
      try {
        const response = await fetch('/static-data/contentful-data.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch static data: ${response.status} ${response.statusText}`);
        }
        
        const text = await response.text();
        let data: StaticContentfulData;
        
        try {
          data = JSON.parse(text) as StaticContentfulData;
        } catch (parseError) {
          console.error('Failed to parse static data JSON:', parseError);
          throw new Error('Invalid JSON in static data');
        }
        
        if (!data || typeof data !== 'object') {
          throw new Error('Invalid data format in static data');
        }
        
        if (!data[key] || !Array.isArray(data[key])) {
          console.warn(`Key "${key}" not found in static data or not an array`);
          return [] as T[];
        }
        
        return data[key] as T[];
      } catch (fetchError) {
        console.error('Error fetching static data:', fetchError);
        throw fetchError;
      }
    }
    throw new Error('Static data not available or disabled');
  } catch (error) {
    console.warn(`Failed to load static data for ${key}, falling back to API:`, error);
    throw error;
  }
}

// Helper function to load non-array static data
async function loadStaticSingleData<T>(key: keyof StaticContentfulData): Promise<T> {
  try {
    if (USE_STATIC_DATA) {
      try {
        const response = await fetch('/static-data/contentful-data.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch static data: ${response.status} ${response.statusText}`);
        }
        
        const text = await response.text();
        let data: StaticContentfulData;
        
        try {
          data = JSON.parse(text) as StaticContentfulData;
        } catch (parseError) {
          console.error('Failed to parse static data JSON:', parseError);
          throw new Error('Invalid JSON in static data');
        }
        
        if (!data || typeof data !== 'object') {
          throw new Error('Invalid data format in static data');
        }
        
        if (!data[key]) {
          console.warn(`Key "${key}" not found in static data`);
          throw new Error(`Key "${key}" not found in static data`);
        }
        
        return data[key] as T;
      } catch (fetchError) {
        console.error('Error fetching static data:', fetchError);
        throw fetchError;
      }
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
    summary: item.fields.summary || 'Discover the vibrant community of Rotaract clubs in this district, where young professionals develop leadership skills and implement innovative service projects addressing local needs. Join us in making a positive impact through fellowship, professional development, and community service.',
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
    summary: item.fields.summary || '',
    title: item.fields.title || `District ${districtId}`,
    composition: item.fields.composition || [],
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
    summary: "This district is currently updating its information. Please check back soon for a complete profile of its activities, membership, and achievements.",
    description: "This district is currently updating its information. Please check back soon for a complete profile of its activities, membership, and achievements.",
    composition: ["Community-Based Clubs", "University-Based Clubs", "Active Rotaractors"],
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
    image: '/assets/district/3770.jpeg',
    summary: 'Discover the vibrant community of Rotaract clubs in this district, where young professionals develop leadership skills and implement innovative service projects addressing local needs.'
  },
  { 
    id: '3780', 
    color: '#16478E',
    image: '/assets/district/3780.jpeg',
    summary: 'A dynamic district fostering leadership, service, and fellowship among diverse Rotaract clubs across the region.'
  },
  { 
    id: '3790', 
    color: '#00A2E1',
    image: '/assets/district/3790.jpeg',
    summary: 'Empowering youth through service projects and leadership development opportunities in communities throughout the district.'
  },
  { 
    id: '3800', 
    color: '#003366',
    image: '/assets/district/3800.jpeg',
    summary: 'Uniting Rotaractors to create positive change through community service, professional development, and international understanding.'
  },
  { 
    id: '3810', 
    color: '#F47621',
    image: '/assets/district/3810.jpeg',
    summary: 'Building connections and serving communities through innovative projects and collaborative initiatives across the district.'
  },
  { 
    id: '3820', 
    color: '#8E288F',
    image: '/assets/district/3820.jpeg',
    summary: 'Promoting service above self through impactful community projects and leadership development programs for young professionals.'
  },
  { 
    id: '3830', 
    color: '#0D9648',
    image: '/assets/district/3830.jpeg',
    summary: 'Cultivating future leaders through service projects, professional networking, and cross-cultural exchange opportunities.'
  },
  { 
    id: '3850', 
    color: '#E22626',
    image: '/assets/district/3850.jpeg',
    summary: 'Engaging Rotaractors in meaningful service projects and leadership initiatives that address local and global challenges.'
  },
  { 
    id: '3860', 
    color: '#66819A',
    image: '/assets/district/3860.jpeg',
    summary: 'Inspiring action through service projects that improve communities while developing leadership skills and fostering international understanding.'
  },
  { 
    id: '3870', 
    color: '#00ACBB',
    image: '/assets/district/3870.jpeg',
    summary: 'Creating lasting change through targeted service projects and leadership development opportunities for young professionals.'
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
      const events = await loadStaticData<FeaturedEvent>('featuredEvents');
      // Add slugs to any events that don't have them
      return events.map(event => ({
        ...event,
        slug: event.slug || generateSlug(event.title)
      }));
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

  return entries.items.map((item: any) => {
    const title = item.fields.title || 'Featured Event';
    return {
      id: item.sys.id,
      date: item.fields.date || new Date().toLocaleDateString(),
      title,
      description: item.fields.description || '',
      image: item.fields.image?.fields?.file?.url 
        ? `https:${item.fields.image.fields.file.url}` 
        : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      landscape: item.fields.landscape || false,
      slug: item.fields.slug || generateSlug(title)
    };
  });
}

// Function to fetch  events
export async function getEvents(): Promise<Event[]> {
  // Try to load from static data first
  if (USE_STATIC_DATA) {
    try {
      const events = await loadStaticData<Event>('events');
      // Add slugs to any events that don't have them
      return events.map(event => ({
        ...event,
        slug: event.slug || generateSlug(event.title)
      }));
    } catch (error) {
      console.warn('Falling back to API for events');
    }
  }
  
  // Fall back to API if static data loading fails or is disabled
  const entries = await client.getEntries({
    content_type: 'upcomingEvent',
    order: ['fields.date'],
    limit: 5,
  });

  return entries.items.map((item: any) => {
    const title = item.fields.title || 'Upcoming Event';
    return {
      id: item.sys.id,
      date: item.fields.date || new Date().toLocaleDateString(),
      title,
      image: item.fields.image?.fields?.file?.url 
        ? `https:${item.fields.image.fields.file.url}` 
        : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
      slug: item.fields.slug || generateSlug(title)
    };
  });
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
    slug: "district-rotaract-representative-elect-training-seminar"
  },
  {
    id: '2',
    date: "March 1, 2024",
    title: "Pilipinas Gear Awards",
    description:
      "Recognition event celebrating outstanding Rotaract clubs and individuals across the Philippines who have made significant contributions to their communities.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    slug: "pilipinas-gear-awards"
  },
  {
    id: '3',
    date: "March 5, 2024",
    title: "Pilipinas Rotaract Convention",
    description:
      "Annual national convention bringing together Rotaractors from across the Philippines for fellowship, learning, and service.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    slug: "pilipinas-rotaract-convention"
  },
  {
    id: '4',
    date: "April 10, 2024",
    title: "Rotaract Branding Academy",
    description:
      "Workshop focused on strengthening Rotaract brand identity and improving club marketing and communications strategies.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
    slug: "rotaract-branding-academy"
  },
  {
    id: '5',
    date: "April 15, 2024",
    title: "People of Action Campaign",
    description:
      "Service initiative highlighting Rotaractors as people of action through community service projects across the Philippines.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    slug: "people-of-action-campaign"
  },
];

// Fallback data for events
export const fallbackEvents: Event[] = [
  {
    id: '1',
    date: "February 01, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    slug: "district-rotaract-representative-elect-training-seminar-feb-01"
  },
  {
    id: '2',
    date: "February 03, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
    slug: "district-rotaract-representative-elect-training-seminar-feb-03"
  },
  {
    id: '3',
    date: "February 07, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    slug: "district-rotaract-representative-elect-training-seminar-feb-07"
  },
  {
    id: '4',
    date: "February 11, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
    slug: "district-rotaract-representative-elect-training-seminar-feb-11"
  },
  {
    id: '5',
    date: "February 17, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    slug: "district-rotaract-representative-elect-training-seminar-feb-17"
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

// Function to fetch event details by slug
export async function getEventDetailBySlug(slug: string): Promise<EventDetail | null> {
  // Try to find in featured events first
  const featuredEvents = await getFeaturedEvents();
  const featuredEvent = featuredEvents.find(e => e.slug === slug);
  
  if (featuredEvent) {
    return getEventDetail(featuredEvent.id);
  }
  
  // Then try in events
  const events = await getEvents();
  const event = events.find(e => e.slug === slug);
  
  if (event) {
    return getEventDetail(event.id);
  }
  
  return null;
}

// Function to fetch event details by ID
export async function getEventDetail(eventId: string): Promise<EventDetail | null> {
  // Try to load from static data first
  if (USE_STATIC_DATA) {
    try {
      // Check in featured events
      const featuredEvents = await loadStaticData<FeaturedEvent>('featuredEvents');
      const featuredEvent = featuredEvents.find(e => e.id === eventId);
      
      if (featuredEvent) {
        // Convert featured event to event detail with default values for additional fields
        return {
          id: featuredEvent.id,
          date: featuredEvent.date,
          title: featuredEvent.title,
          description: featuredEvent.description,
          image: featuredEvent.image,
          location: 'Philippines',
          objectiveDetails: ['Learn more about this event at the event page.'],
          moreInfo: featuredEvent.description,
          additionalDetails: [],
          closingDetails: 'Visit the event page for more information.',
          isFeatured: true,
          slug: generateSlug(featuredEvent.title)
        };
      }
      
      // Check in upcoming events if not found in featured
      const events = await loadStaticData<Event>('events');
      const event = events.find(e => e.id === eventId);
      
      if (event) {
        // Convert event to event detail with default values
        return {
          id: event.id,
          date: event.date,
          title: event.title,
          description: 'Details coming soon.',
          image: event.image,
          location: 'Philippines',
          objectiveDetails: ['Learn more about this event at the event page.'],
          moreInfo: 'Details coming soon.',
          additionalDetails: [],
          closingDetails: 'Visit the event page for more information.',
          isFeatured: false,
          slug: generateSlug(event.title)
        };
      }
      
      console.warn(`Event detail for ${eventId} not found in static data`);
      return null;
    } catch (error) {
      console.warn('Falling back to API for event detail');
    }
  }
  
  // Fall back to API
  try {
    // First try featured events
    const featuredEntries = await client.getEntries({
      content_type: 'featuredEvent',
      'sys.id': eventId,
    });
    
    if (featuredEntries.items.length > 0) {
      const item = featuredEntries.items[0];
      const fields = item.fields as Record<string, any>;
      const title = typeof fields.title === 'string' ? fields.title : 'Event';
      
      return {
        id: item.sys.id,
        date: typeof fields.date === 'string' ? fields.date : new Date().toLocaleDateString(),
        title,
        description: typeof fields.description === 'string' ? fields.description : '',
        image: fields.image?.fields?.file?.url 
          ? `https:${fields.image.fields.file.url}` 
          : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        location: typeof fields.location === 'string' ? fields.location : 'Philippines',
        objectiveDetails: Array.isArray(fields.objectiveDetails) ? fields.objectiveDetails : ['Learn more about this event at the event page.'],
        moreInfo: typeof fields.moreInfo === 'string' ? fields.moreInfo : 
                  typeof fields.description === 'string' ? fields.description : '',
        additionalDetails: Array.isArray(fields.additionalDetails) ? fields.additionalDetails : [],
        closingDetails: typeof fields.closingDetails === 'string' ? fields.closingDetails : 'Visit the event page for more information.',
        eventUrl: typeof fields.eventUrl === 'string' ? fields.eventUrl : undefined,
        isFeatured: true,
        slug: generateSlug(title)
      };
    }
    
    // Then try upcoming events
    const events = await client.getEntries({
      content_type: 'event',
      'sys.id': eventId,
    });
    
    if (events.items.length > 0) {
      const item = events.items[0];
      const fields = item.fields as Record<string, any>;
      const title = typeof fields.title === 'string' ? fields.title : 'Event';
      
      return {
        id: item.sys.id,
        date: typeof fields.date === 'string' ? fields.date : new Date().toLocaleDateString(),
        title,
        description: typeof fields.description === 'string' ? fields.description : 'Details coming soon.',
        image: fields.image?.fields?.file?.url 
          ? `https:${fields.image.fields.file.url}` 
          : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        location: typeof fields.location === 'string' ? fields.location : 'Philippines',
        objectiveDetails: Array.isArray(fields.objectiveDetails) ? fields.objectiveDetails : ['Learn more about this event at the event page.'],
        moreInfo: typeof fields.moreInfo === 'string' ? fields.moreInfo : 
                  typeof fields.description === 'string' ? fields.description : 'Details coming soon.',
        additionalDetails: Array.isArray(fields.additionalDetails) ? fields.additionalDetails : [],
        closingDetails: typeof fields.closingDetails === 'string' ? fields.closingDetails : 'Visit the event page for more information.',
        eventUrl: typeof fields.eventUrl === 'string' ? fields.eventUrl : undefined,
        isFeatured: false,
        slug: generateSlug(title)
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching event detail:', error);
    return null;
  }
}

// Helper function to safely extract image URL from Contentful response
function getImageUrl(imageField: any, fallbackUrl: string): string {
  try {
    if (imageField && 
        typeof imageField === 'object' && 
        'fields' in imageField && 
        imageField.fields && 
        'file' in imageField.fields && 
        imageField.fields.file && 
        'url' in imageField.fields.file && 
        imageField.fields.file.url) {
      return `https:${imageField.fields.file.url}`;
    }
    return fallbackUrl;
  } catch (error) {
    return fallbackUrl;
  }
}

// Function to fetch leadership team data
export async function getLeadershipTeam(): Promise<LeadershipTeamData> {
  // Try to load from static data first
  if (USE_STATIC_DATA) {
    try {
      const chairData = await loadStaticData<LeadershipChair>('leadershipChair');
      const chair = chairData.length > 0 ? chairData[0] : fallbackLeadershipChair;
      const boardMembers = await loadStaticData<BoardMember>('boardMembers');
      const executiveCommittee = await loadStaticData<ExecutiveCommitteeMember>('executiveCommittee');
      const staffMembers = await loadStaticData<StaffMember>('staffMembers');
      
      return {
        chair,
        boardMembers,
        executiveCommittee,
        staff: staffMembers
      };
    } catch (error) {
      console.warn('Falling back to API for leadership team data');
    }
  }
  
  // Fetch chair data - filter by isCurrentChair field
  const chairEntries = await client.getEntries({
    content_type: 'leadershipChair',
    'fields.isCurrentChair': true,
    limit: 1,
  });
  
  // If no current chair found, fall back to fetch any chair
  let chairData = chairEntries.items;
  if (chairData.length === 0) {
    const anyChairEntries = await client.getEntries({
      content_type: 'leadershipChair',
      limit: 1,
    });
    chairData = anyChairEntries.items;
  }
  
  // Map chair data
  let mappedChair: LeadershipChair;
  
  if (chairData.length > 0) {
    const item = chairData[0];
    const fields = item.fields || {};
    
    // Extract actions if they exist
    let actions;
    try {
      if (fields.actions && Array.isArray(fields.actions)) {
        actions = fields.actions.map((actionItem: any) => {
          try {
            const actionFields = actionItem.fields || {};
            return {
              title: String(actionFields.title || ''),
              description: String(actionFields.description || ''),
              image: actionFields.image && actionFields.image.fields && actionFields.image.fields.file && actionFields.image.fields.file.url
                ? `https:${actionFields.image.fields.file.url}`
                : getImageUrl(fields.image, 'https://i.pravatar.cc/1500')
            };
          } catch (e) {
            console.error('Error mapping action item:', e);
            return {
              title: 'Action Item',
              description: 'Content unavailable',
              image: getImageUrl(fields.image, 'https://i.pravatar.cc/1500')
            };
          }
        });
      }
    } catch (e) {
      console.error('Error mapping actions array:', e);
    }
    
    mappedChair = {
      id: item.sys.id,
      name: String(fields.name || 'MDIO Chair'),
      title: String(fields.title || 'Pilipinas Multi-District Information Organization, Chair'),
      description: String(fields.description || ''),
      image: getImageUrl(fields.image, 'https://i.pravatar.cc/1500'),
      headerImage: getImageUrl(fields.headerImage, undefined),
      club: String(fields.club || ''),
      isCurrentChair: Boolean(fields.isCurrentChair || false),
      actions
    };
  } else {
    mappedChair = fallbackLeadershipChair;
  }
  
  const chair = mappedChair;
  
  // Fetch board members
  const boardEntries = await client.getEntries({
    content_type: 'boardMember',
    order: ['fields.name'],
  });
  
  // Fetch executive committee
  const executiveEntries = await client.getEntries({
    content_type: 'executiveCommitteeMember',
    order: ['fields.name'],
  });
  
  // Fetch staff members
  const staffEntries = await client.getEntries({
    content_type: 'staffMember',
    order: ['fields.name'],
  });
  
  // Map board members
  const boardMembers: BoardMember[] = boardEntries.items.map((item: any) => ({
    id: item.sys.id,
    name: String(item.fields.name || ''),
    title: String(item.fields.title || 'District Rotaract Representative'),
    district: String(item.fields.district || ''),
    club: String(item.fields.club || ''),
    image: getImageUrl(item.fields.image, '/placeholder.svg'),
  }));
  
  // Map executive committee
  const executiveCommittee: ExecutiveCommitteeMember[] = executiveEntries.items.map((item: any) => ({
    id: item.sys.id,
    name: String(item.fields.name || ''),
    title: String(item.fields.title || ''),
    district: String(item.fields.district || ''),
    club: String(item.fields.club || ''),
    image: getImageUrl(item.fields.image, '/placeholder.svg'),
  }));
  
  // Map staff members
  const staff: StaffMember[] = staffEntries.items.map((item: any) => ({
    id: item.sys.id,
    name: String(item.fields.name || ''),
    role: String(item.fields.role || ''),
    district: String(item.fields.district || ''),
    club: String(item.fields.club || ''),
    image: getImageUrl(item.fields.image, '/placeholder.svg'),
  }));
  
  return {
    chair,
    boardMembers: boardMembers.length > 0 ? boardMembers : fallbackBoardMembers,
    executiveCommittee: executiveCommittee.length > 0 ? executiveCommittee : fallbackExecutiveCommittee,
    staff: staff.length > 0 ? staff : fallbackStaffMembers,
  };
}

// Fallback data for leadership team
export const fallbackLeadershipChair: LeadershipChair = {
  id: 'fallback-chair',
  name: 'Lerwin Bazar',
  title: 'Pilipinas Multi-District Information Organization, Chair',
  description: 'Leading with dedication and innovation, our Chair works tirelessly to strengthen Rotaract\'s presence and impact across the Philippines, fostering collaboration between districts and empowering the next generation of leaders.',
  image: 'https://i.pravatar.cc/1500',
  headerImage: 'https://i.pravatar.cc/1800',
  club: 'Past President, Rotaract Club of Manila',
  isCurrentChair: true,
  actions: [
    {
      title: 'About the Chair',
      description: 'Our Chair is committed to elevating Rotaract across the Philippines through strategic initiatives and collaborative leadership. With years of experience in Rotaract service, they bring valuable insights and a passion for community development.',
      image: 'https://i.pravatar.cc/1200'
    },
    {
      title: 'Vision & Leadership',
      description: 'Under the current leadership, Pilipinas Rotaract MDIO is focused on strengthening connections between districts, enhancing member development programs, and increasing the impact of service projects nationwide.',
      image: 'https://i.pravatar.cc/1201'
    },
    {
      title: 'Achievements',
      description: 'Throughout their term, our Chair has successfully launched several key initiatives, including nationwide service campaigns, leadership training programs, and improved communication channels between Rotaract clubs.',
      image: 'https://i.pravatar.cc/1202'
    }
  ]
};

export const fallbackBoardMembers: BoardMember[] = [
  {
    id: 'board-1',
    name: "Maria Gonzales",
    title: "District Rotaract Representative",
    district: "Rotary International District 3770",
    club: "Past President, Rotaract Club of Baguio",
    image: "/placeholder.svg"
  },
  {
    id: 'board-2',
    name: "Carlos Santos",
    title: "District Rotaract Representative",
    district: "Rotary International District 3780",
    club: "Past President, Rotaract Club of Quezon City",
    image: "/placeholder.svg"
  },
  // Additional fallback board members...
];

export const fallbackExecutiveCommittee: ExecutiveCommitteeMember[] = [
  {
    id: 'exec-1',
    name: "Ana Luisa Torres",
    title: "Chairperson",
    district: "Rotary International District 3830",
    club: "Past President, Rotaract Club of Makati Business District",
    image: "/placeholder.svg"
  },
  {
    id: 'exec-2',
    name: "Ramon Mercado",
    title: "Vice Chair - Luzon",
    district: "Rotary International District 3780",
    club: "Past President, Rotaract Club of University of the Philippines",
    image: "/placeholder.svg"
  },
  // Additional fallback executive committee members...
];

export const fallbackStaffMembers: StaffMember[] = [
  {
    id: 'staff-1',
    name: "Patricia Mendoza",
    role: "Executive Assistant",
    district: "Rotary International District 3830",
    club: "Member, Rotaract Club of Manila",
    image: "/placeholder.svg"
  },
  {
    id: 'staff-2',
    name: "Jose Santos",
    role: "Communications Coordinator",
    district: "Rotary International District 3780",
    club: "Member, Rotaract Club of Quezon City",
    image: "/placeholder.svg"
  },
  // Additional fallback staff members...
];

// Type definition for Rotary Foundation Fund
export interface RotaryFoundationFund {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

// Type definition for Rotary Foundation data
export interface RotaryFoundationData {
  introduction: {
    title: string;
    content: string;
  };
  funds: RotaryFoundationFund[];
  donationLink: string;
  statisticsData?: RotaractStatisticsData;
}

// Fallback data for Rotary Foundation
export const fallbackRotaryFoundationData: RotaryFoundationData = {
  introduction: {
    title: "Supporting The Rotary Foundation's Global Impact",
    content: "The Rotary Foundation transforms your gifts into service projects that change lives both close to home and around the world. Since 1917, the Foundation has spent more than $4 billion on life-changing, sustainable projects that help people in need with access to safe water, medical care, literacy, education, and other critical needs. By giving to the Foundation, you become an essential part of these ongoing efforts to create lasting positive change in communities everywhere."
  },
  funds: [
    {
      id: "annual-fund",
      title: "Annual Fund",
      description: "The Annual Fund is the primary source of funding for Foundation activities. Your contributions to the Annual Fund help Rotary clubs take action to create positive change in communities at home and around the world. Through grants and projects, Rotary members combat diseases like polio and malaria, provide clean water, improve economic opportunities, and promote peace.",
      imageUrl: "/assets/trf.png",
      alt: "People celebrating"
    },
    {
      id: "polioplus-fund",
      title: "PolioPlus Fund",
      description: "Rotary has been working to eradicate polio for more than 35 years. Our goal of ridding the world of this disease is closer than ever. When you contribute to the PolioPlus Fund, you're supporting Rotary's top priority - ensuring that polio is eradicated and that it never returns. Your donation helps deliver vaccinations, transportation, and educational materials.",
      imageUrl: "/assets/trf.png",
      alt: "Construction site volunteer"
    },
    {
      id: "endowment-fund",
      title: "Endowment Fund",
      description: "The Endowment Fund ensures the long-term financial stability of the Foundation and provides essential support for Rotary's programs. Contributions to the Endowment Fund are invested in perpetuity, with a portion of the fund's earnings spent on Foundation programs each year. This provides a steady and reliable source of income to meet the world's greatest needs.",
      imageUrl: "/assets/trf.png",
      alt: "Community service"
    },
    {
      id: "disaster-response-fund",
      title: "Disaster Response Fund",
      description: "The Rotary Disaster Response Fund provides a ready mechanism for Rotary districts to respond quickly to local disasters. Districts in affected areas may receive disaster response grants to provide basic items such as water, food, medicine, and clothing. Your support enables our communities to recover more quickly after devastating natural disasters.",
      imageUrl: "/assets/trf.png",
      alt: "Foundation work"
    }
  ],
  donationLink: "https://www.rotary.org/en/get-involved/ways-to-give?utm_source=pilipinas_rotaract_mdio&utm_medium=website&utm_campaign=foundation_giving",
  statisticsData: {
    districtData: [],
    contributionsData: [],
    cardStats: [],
    chartConfig: []
  }
};

// Function to fetch Rotary Foundation data
export async function getRotaryFoundationData(): Promise<RotaryFoundationData> {
  // Try to load from static data first
  if (USE_STATIC_DATA) {
    try {
      return await loadStaticSingleData<RotaryFoundationData>('rotaryFoundationData');
    } catch (error) {
      console.warn('Falling back to API for Rotary Foundation data');
    }
  }
  
  // Fall back to API if static data loading fails or is disabled
  try {
    // Fetch from single content type
    const entries = await client.getEntries({
      content_type: 'rotaryFoundation',
      limit: 1
    });

    if (entries.items.length === 0) {
      return fallbackRotaryFoundationData;
    }

    const item = entries.items[0];
    const fields = item.fields;
    
    // Extract the introduction
    const introduction = {
      title: String(fields.introductionTitle || fallbackRotaryFoundationData.introduction.title),
      content: String(fields.introductionContent || fallbackRotaryFoundationData.introduction.content)
    };

    // Extract funds from references
    const funds = Array.isArray(fields.funds) 
      ? fields.funds.map((fund: any) => ({
          id: fund.sys?.id || `fund-${Math.random().toString(36).substr(2, 9)}`,
          title: String(fund.fields?.title || ''),
          description: String(fund.fields?.description || ''),
          imageUrl: fund.fields?.image?.fields?.file?.url 
            ? `https:${fund.fields.image.fields.file.url}` 
            : '/assets/trf.png',
          alt: String(fund.fields?.alt || fund.fields?.title || 'Rotary Foundation image')
        }))
      : fallbackRotaryFoundationData.funds;

    // Extract donation link
    const donationLink = fields.donationLink
      ? String(fields.donationLink)
      : fallbackRotaryFoundationData.donationLink;

    return {
      introduction,
      funds,
      donationLink,
      statisticsData: fallbackRotaractStatistics
    };
  } catch (error) {
    console.error('Error fetching Rotary Foundation data:', error);
    return fallbackRotaryFoundationData;
  }
} 