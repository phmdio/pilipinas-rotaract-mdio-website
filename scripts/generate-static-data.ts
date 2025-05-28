// Script to fetch data from Contentful at build time
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { createClient, EntryCollection, Entry, Asset } from 'contentful';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define a type for the slug generator function
type SlugGenerator = (title: string) => string;

// Type for Contentful fields
interface ContentfulFields {
  [key: string]: any;
  fields: Record<string, any>;
  contentTypeId: string;
}

// Import the generateSlugFromTitle function from utils
// We need to use a dynamic import since ES modules don't support synchronous imports
let generateSlugFromTitle: SlugGenerator;

async function importUtils(): Promise<void> {
  try {
    // Import the TS file by using ts-node to transpile it on the fly
    const utilsPath = path.join(__dirname, '..', 'src', 'utils', 'string.ts');
    if (fs.existsSync(utilsPath)) {
      // For production, we use a simpler version directly
      generateSlugFromTitle = function(title: string): string {
        return title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/--+/g, '-')
          .trim()
          .replace(/^-+|-+$/g, '');
      };
    }
  } catch (error) {
    console.warn('Could not import utils, using fallback implementation:', error);
    // Fallback implementation
    generateSlugFromTitle = function(title: string): string {
      return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim()
        .replace(/^-+|-+$/g, '');
    };
  }
}

// Initialize Contentful client
const client = createClient({
  space: process.env.VITE_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
  environment: process.env.VITE_CONTENTFUL_ENVIRONMENT as string || 'master',
});

// Output directory for static data
const OUTPUT_DIR = path.resolve('public/static-data');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Define interfaces for the data types
interface HeroCarouselImage {
  title: string;
  imageUrl: string;
  alt: string;
}

interface District {
  id: string;
  color: string;
  image: string;
  summary: string;
}

interface FeaturedEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  isProcon: boolean;
  slug: string;
  location: string;
  objectiveDetails: string[];
  moreInfo: string;
  additionalDetails: string[];
  closingDetails: string;
  eventUrl: string;
  facebookPageUrl?: string;
}

interface Event {
  id: string;
  date: string;
  title: string;
  image: string;
  slug: string;
  location: string;
  objectiveDetails: string[];
  moreInfo: string;
  additionalDetails: string[];
  closingDetails: string;
  eventUrl: string;
  facebookPageUrl?: string;
}

interface Statistic {
  id: string;
  value: string;
  label: string;
  iconUrl?: string;
}

interface RotaractDistrictData {
  year: string;
  district: string;
  [key: string]: any;
}

interface RotaractContributionsData {
  district: string;
  [key: string]: any;
}

interface RotaractStatisticCard {
  id: string;
  number: string;
  title: string;
  description: string;
  iconUrl: string;
}

interface RotaractChartConfig {
  id: string;
  title: string;
  dataKey: string[];
  colors: string[];
  dataSource: string;
  xAxisKey: string;
  asOfDate?: string;
}

interface LeadershipChair {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  club: string;
  isCurrentChair: boolean;
  rotaryYear: string;
}

interface BoardMember {
  id: string;
  name: string;
  title: string;
  district: string;
  club: string;
  image: string;
}

interface ExecutiveCommitteeMember {
  id: string;
  name: string;
  title: string;
  district: string;
  club: string;
  image: string;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  district: string;
  club: string;
  image: string;
}

interface RotaryFoundationIntroduction {
  title: string;
  content: string;
}

interface RotaryFoundationFund {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

interface RotaryFoundationData {
  introduction: RotaryFoundationIntroduction;
  funds: RotaryFoundationFund[];
  donationLink: string;
}

interface StaticData {
  heroCarouselImages: HeroCarouselImage[];
  districts: District[];
  featuredEvents: FeaturedEvent[];
  events: Event[];
  statistics: Statistic[];
  rotaractStatisticsDistrict: RotaractDistrictData[];
  rotaractStatisticsContributions: RotaractContributionsData[];
  rotaractStatisticsCards: RotaractStatisticCard[];
  rotaractStatisticsCharts: RotaractChartConfig[];
  leadershipChair: LeadershipChair[];
  boardMembers: BoardMember[];
  executiveCommittee: ExecutiveCommitteeMember[];
  staffMembers: StaffMember[];
  rotaryFoundationData: RotaryFoundationData;
}

// Helper function to safely access Contentful entry fields
function getFieldValue<T>(item: Entry<ContentfulFields>, field: string, defaultValue: T): T {
  if (item?.fields && field in item.fields) {
    return item.fields[field] as T;
  }
  return defaultValue;
}

// Function to fetch hero carousel images
async function fetchHeroCarouselImages(): Promise<HeroCarouselImage[]> {
  console.log('Fetching hero carousel images...');
  try {
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'heroCarouselImage',
      order: ['sys.createdAt'],
    });

    return entries.items.map((item: any) => ({
      title: getFieldValue(item, 'title', ''),
      imageUrl: item.fields.image?.fields?.file?.url 
        ? `https:${item.fields.image.fields.file.url}` 
        : '/assets/carousel.png', // Fallback image
      alt: getFieldValue(item, 'alt', getFieldValue(item, 'title', 'Rotaract carousel image')),
    }));
  } catch (error) {
    console.error('Error fetching hero carousel images:', error);
    return [];
  }
}

// Function to fetch districts with all details
async function fetchDistricts(): Promise<District[]> {
  console.log('Fetching districts with basic details...');
  try {
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'district',
      order: ['sys.createdAt'],
    });

    return entries.items.map((item: any) => {
      const districtId = getFieldValue(item, 'id', '');
      
      return {
        id: districtId,
        color: getFieldValue(item, 'color', '#003366'),
        image: item.fields.image?.fields?.file?.url 
          ? `https:${item.fields.image.fields.file.url}` 
          : '/assets/district/default.jpeg',
        summary: getFieldValue(item, 'summary', 'Discover the vibrant community of Rotaract clubs in this district, where young professionals develop leadership skills and implement innovative service projects addressing local needs. Join us in making a positive impact through fellowship, professional development, and community service.'),
      };
    });
  } catch (error) {
    console.error('Error fetching districts:', error);
    return [];
  }
}

// Function to fetch featured events
async function fetchFeaturedEvents(): Promise<FeaturedEvent[]> {
  console.log('Fetching featured events...');
  try {
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'featuredEvent',
      order: ['fields.date'],
    });

    return entries.items.map((item: any) => {
      const title = getFieldValue(item, 'title', 'Featured Event');
      return {
        id: item.sys.id,
        date: typeof item.fields.date === 'string' ? item.fields.date : new Date().toLocaleDateString(),
        title,
        description: typeof item.fields.description === 'string' ? item.fields.description : 'Details coming soon.',
        image: item.fields.image?.fields?.file?.url 
          ? `https:${item.fields.image.fields.file.url}` 
          : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        isProcon: typeof item.fields.isProcon === 'boolean' ? item.fields.isProcon : false,
        procon: item.fields.procon?.map((event: any) => ({
          id: event.sys.id,
          date: event.fields.date || '',
          title: event.fields.title || '',
          description: event.fields.description || '',
          image: event.fields.image?.fields?.file?.url
              ? `https:${event.fields.image.fields.file.url}`
              : '',
          slug: event.fields.slug || generateSlugFromTitle(event.fields.title || '')
        })) || [],
        location: typeof item.fields.location === 'string' ? item.fields.location : 'Philippines',
        objectiveDetails: Array.isArray(item.fields.objectiveDetails) ? item.fields.objectiveDetails : ['Learn more about this event at the event page.'],
        moreInfo: typeof item.fields.moreInfo === 'string' ? item.fields.moreInfo : 
                  typeof item.fields.description === 'string' ? item.fields.description : 'Details coming soon.',
        additionalDetails: Array.isArray(item.fields.additionalDetails) ? item.fields.additionalDetails : [],
        closingDetails: typeof item.fields.closingDetails === 'string' ? item.fields.closingDetails : 'Visit the event page for more information.',
        eventUrl: typeof item.fields.eventUrl === 'string' ? item.fields.eventUrl : undefined,
        facebookPageUrl: typeof item.fields.facebookPageUrl === 'string' ? item.fields.facebookPageUrl : undefined,
        slug: generateSlugFromTitle(title),
        publishedDate: item.sys.updatedAt || item.sys.createdAt
      };
    });
  } catch (error) {
    console.error('Error fetching featured events:', error);
    return [];
  }
}

// Function to fetch events
async function fetchEvents(): Promise<Event[]> {
  console.log('Fetching events...');
  try {
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'event',
      order: ['fields.date'],
      limit: 5,
    });

    return entries.items.map((item: any) => {
      const title = getFieldValue(item, 'title', 'Event');
      return {
        id: item.sys.id,
        date: typeof item.fields.date === 'string' ? item.fields.date : new Date().toLocaleDateString(),
        title,
        description: typeof item.fields.description === 'string' ? item.fields.description : 'Details coming soon.',
        image: item.fields.image?.fields?.file?.url 
          ? `https:${item.fields.image.fields.file.url}` 
          : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        location: typeof item.fields.location === 'string' ? item.fields.location : 'Philippines',
        objectiveDetails: Array.isArray(item.fields.objectiveDetails) ? item.fields.objectiveDetails : ['Learn more about this event at the event page.'],
        moreInfo: typeof item.fields.moreInfo === 'string' ? item.fields.moreInfo : 
                  typeof item.fields.description === 'string' ? item.fields.description : 'Details coming soon.',
        additionalDetails: Array.isArray(item.fields.additionalDetails) ? item.fields.additionalDetails : [],
        closingDetails: typeof item.fields.closingDetails === 'string' ? item.fields.closingDetails : 'Visit the event page for more information.',
        eventUrl: typeof item.fields.eventUrl === 'string' ? item.fields.eventUrl : undefined,
        facebookPageUrl: typeof item.fields.facebookPageUrl === 'string' ? item.fields.facebookPageUrl : undefined,
        slug: generateSlugFromTitle(title),
        publishedDate: item.sys.updatedAt || item.sys.createdAt
      };
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

// Function to fetch statistics
async function fetchStatistics(): Promise<Statistic[]> {
  console.log('Fetching statistics...');
  try {
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'statistic',
      order: ['sys.createdAt'],
    });

    return entries.items.map((item: any) => ({
      id: item.sys.id,
      value: getFieldValue(item, 'value', '0'),
      label: getFieldValue(item, 'label', 'Statistic'),
      iconUrl: item.fields.icon?.fields?.file?.url 
        ? `https:${item.fields.icon.fields.file.url}` 
        : undefined
    }));
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return [];
  }
}

// Function to fetch Rotaract district data
async function fetchRotaractDistrictData(): Promise<RotaractDistrictData[]> {
  console.log('Fetching Rotaract district data...');
  try {
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'rotaractDistrictData',
      order: ['fields.year', 'fields.district'],
    });

    return entries.items.map((item: any) => {
      const data: RotaractDistrictData = {
        year: getFieldValue(item, 'year', ''),
        district: getFieldValue(item, 'district', ''),
      };
      
      // Add any dynamic fields
      Object.keys(item.fields).forEach(key => {
        if (key !== 'year' && key !== 'district') {
          data[key] = item.fields[key];
        }
      });
      
      return data;
    });
  } catch (error) {
    console.error('Error fetching Rotaract district data:', error);
    return [];
  }
}

// Function to fetch Rotaract contributions data
async function fetchRotaractContributionsData(): Promise<RotaractContributionsData[]> {
  console.log('Fetching Rotaract contributions data...');
  try {
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'rotaractContributionsData',
      order: ['fields.district'],
    });

    return entries.items.map((item: any) => {
      const data: RotaractContributionsData = {
        district: getFieldValue(item, 'district', ''),
      };
      
      // Add any dynamic fields
      Object.keys(item.fields).forEach(key => {
        if (key !== 'district') {
          data[key] = item.fields[key];
        }
      });
      
      return data;
    });
  } catch (error) {
    console.error('Error fetching Rotaract contributions data:', error);
    return [];
  }
}

// Function to fetch Rotaract statistic cards
async function fetchRotaractStatisticCards(): Promise<RotaractStatisticCard[]> {
  console.log('Fetching Rotaract statistic cards...');
  try {
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'rotaractStatisticCard',
      order: ['sys.createdAt'],
    });

    return entries.items.map((item: any) => ({
      id: item.sys.id,
      number: getFieldValue(item, 'number', '0'),
      title: getFieldValue(item, 'title', 'Statistic'),
      description: getFieldValue(item, 'description', ''),
      iconUrl: item.fields.icon?.fields?.file?.url 
        ? `https:${item.fields.icon.fields.file.url}` 
        : '/assets/statistics-icon.svg',
    }));
  } catch (error) {
    console.error('Error fetching Rotaract statistic cards:', error);
    return [];
  }
}

// Function to fetch Rotaract chart configs
async function fetchRotaractChartConfigs(): Promise<RotaractChartConfig[]> {
  console.log('Fetching Rotaract chart configs...');
  try {
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'rotaractChartConfig',
      order: ['sys.createdAt'],
    });

    return entries.items.map((item: any) => ({
      id: item.sys.id,
      title: getFieldValue(item, 'title', 'Chart'),
      dataKey: getFieldValue<string[]>(item, 'dataKey', []),
      colors: getFieldValue<string[]>(item, 'colors', ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']),
      dataSource: getFieldValue(item, 'dataSource', 'districtData'),
      xAxisKey: getFieldValue(item, 'xAxisKey', 'year'),
      asOfDate: getFieldValue<string | undefined>(item, 'asOfDate', undefined),
    }));
  } catch (error) {
    console.error('Error fetching Rotaract chart configs:', error);
    return [];
  }
}

// Function to fetch leadership chair data
async function fetchLeadershipChair(): Promise<LeadershipChair[]> {
  console.log('Fetching leadership chair data...');
  try {
    // First try to get current chair
    let entries = await client.getEntries<ContentfulFields>({
      content_type: 'leadershipChair',
      'fields.isCurrentChair': true,
      limit: 1,
    });
    
    // If no current chair found, fall back to any chair
    if (entries.items.length === 0) {
      entries = await client.getEntries({
        content_type: 'leadershipChair',
        limit: 1,
      });
    }
    
    return entries.items.map((item: any) => ({
      id: item.sys.id,
      name: getFieldValue(item, 'name', 'MDIO Chair'),
      title: getFieldValue(item, 'title', 'Pilipinas Multi-District Information Organization, Chair'),
      description: getFieldValue(item, 'description', ''),
      image: item.fields.image?.fields?.file?.url 
        ? `https:${item.fields.image.fields.file.url}` 
        : 'https://i.pravatar.cc/1500',
      club: getFieldValue(item, 'club', ''),
      isCurrentChair: getFieldValue(item, 'isCurrentChair', false),
      rotaryYear: getFieldValue(item, 'rotaryYear', 'Rotary Year 2024-2025'),
    }));
  } catch (error) {
    console.error('Error fetching leadership chair data:', error);
    return [];
  }
}

// Function to fetch board members
async function fetchBoardMembers(): Promise<BoardMember[]> {
  console.log('Fetching board members data...');
  try {
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'boardMember',
      order: ['fields.district'],
    });
    
    return entries.items.map((item: any) => ({
      id: item.sys.id,
      name: getFieldValue(item, 'name', ''),
      title: getFieldValue(item, 'title', 'District Rotaract Representative'),
      district: getFieldValue(item, 'district', ''),
      club: getFieldValue(item, 'club', ''),
      image: item.fields.image?.fields?.file?.url 
        ? `https:${item.fields.image.fields.file.url}` 
        : '/placeholder.svg',
    }));
  } catch (error) {
    console.error('Error fetching board members data:', error);
    return [];
  }
}

// Function to fetch executive committee members
async function fetchExecutiveCommittee(): Promise<ExecutiveCommitteeMember[]> {
  console.log('Fetching executive committee data...');
  try {
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'executiveCommitteeMember',
      order: ['fields.district'],
    });
    
    return entries.items.map((item: any) => ({
      id: item.sys.id,
      name: getFieldValue(item, 'name', ''),
      title: getFieldValue(item, 'title', ''),
      district: getFieldValue(item, 'district', ''),
      club: getFieldValue(item, 'club', ''),
      image: item.fields.image?.fields?.file?.url 
        ? `https:${item.fields.image.fields.file.url}` 
        : '/placeholder.svg',
    }));
  } catch (error) {
    console.error('Error fetching executive committee data:', error);
    return [];
  }
}

// Function to fetch staff members
async function fetchStaffMembers(): Promise<StaffMember[]> {
  console.log('Fetching staff members data...');
  try {
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'staffMember',
      order: ['fields.district'],
    });
    
    return entries.items.map((item: any) => ({
      id: item.sys.id,
      name: getFieldValue(item, 'name', ''),
      role: getFieldValue(item, 'role', ''),
      district: getFieldValue(item, 'district', ''),
      club: getFieldValue(item, 'club', ''),
      image: item.fields.image?.fields?.file?.url 
        ? `https:${item.fields.image.fields.file.url}` 
        : '/placeholder.svg',
    }));
  } catch (error) {
    console.error('Error fetching staff members data:', error);
    return [];
  }
}

// Function to fetch Rotary Foundation data
async function fetchRotaryFoundationData(): Promise<RotaryFoundationData> {
  console.log('Fetching Rotary Foundation data...');
  try {
    // Fetch from single content type
    const entries = await client.getEntries<ContentfulFields>({
      content_type: 'rotaryFoundation',
      limit: 1,
      include: 2 // Include linked entries (funds)
    });

    if (entries.items.length === 0) {
      return {
        introduction: {
          title: "Supporting The Rotary Foundation's Global Impact",
          content: "The Rotary Foundation transforms your gifts into service projects that change lives both close to home and around the world."
        },
        funds: [],
        donationLink: "https://www.rotary.org/en/get-involved/ways-to-give"
      };
    }

    const item = entries.items[0];
    const fields = item.fields;
    
    // Extract the introduction
    const introduction: RotaryFoundationIntroduction = {
      title: String(fields.introductionTitle || "Supporting The Rotary Foundation's Global Impact"),
      content: String(fields.introductionContent || "The Rotary Foundation transforms your gifts into service projects that change lives both close to home and around the world.")
    };

    // Extract funds from references
    const funds: RotaryFoundationFund[] = Array.isArray(fields.funds) 
      ? fields.funds.map((fund: any) => ({
          id: fund.sys?.id || `fund-${Math.random().toString(36).substr(2, 9)}`,
          title: String(fund.fields?.title || ''),
          description: String(fund.fields?.description || ''),
          imageUrl: fund.fields?.image?.fields?.file?.url 
            ? `https:${fund.fields.image.fields.file.url}` 
            : '/assets/trf.png',
          alt: String(fund.fields?.alt || fund.fields?.title || 'Rotary Foundation image')
        }))
      : [];

    // Extract donation link
    const donationLink: string = fields.donationLink
      ? String(fields.donationLink)
      : "https://www.rotary.org/en/get-involved/ways-to-give";

    return {
      introduction,
      funds,
      donationLink
    };
  } catch (error) {
    console.error('Error fetching Rotary Foundation data:', error);
    return {
      introduction: {
        title: "Supporting The Rotary Foundation's Global Impact",
        content: "The Rotary Foundation transforms your gifts into service projects that change lives both close to home and around the world."
      },
      funds: [],
      donationLink: "https://www.rotary.org/en/get-involved/ways-to-give"
    };
  }
}

// Main function to generate all static data
export async function generateStaticData(): Promise<void> {
  console.log('Generating static data from Contentful...');
  
  // Import utils
  await importUtils();
  
  try {
    // Fetch all required data
    let heroCarouselImages = await fetchHeroCarouselImages();
    let districts = await fetchDistricts();
    let featuredEvents = await fetchFeaturedEvents();
    let events = await fetchEvents();
    let statistics = await fetchStatistics();
    let rotaractStatisticsDistrict = await fetchRotaractDistrictData();
    let rotaractStatisticsContributions = await fetchRotaractContributionsData();
    let rotaractStatisticsCards = await fetchRotaractStatisticCards();
    let rotaractStatisticsCharts = await fetchRotaractChartConfigs();
    
    // Fetch leadership team data
    let leadershipChair = await fetchLeadershipChair();
    let boardMembers = await fetchBoardMembers();
    let executiveCommittee = await fetchExecutiveCommittee();
    let staffMembers = await fetchStaffMembers();
    
    // Fetch Rotary Foundation data
    const rotaryFoundationData = await fetchRotaryFoundationData();
    
    // Validate that each data set is an array (even if empty)
    if (!Array.isArray(heroCarouselImages)) {
      console.warn('heroCarouselImages is not an array, using empty array instead');
      heroCarouselImages = [];
    }
    
    if (!Array.isArray(districts)) {
      console.warn('districts is not an array, using empty array instead');
      districts = [];
    }
    
    if (!Array.isArray(featuredEvents)) {
      console.warn('featuredEvents is not an array, using empty array instead');
      featuredEvents = [];
    }
    
    if (!Array.isArray(events)) {
      console.warn('events is not an array, using empty array instead');
      events = [];
    }
    
    if (!Array.isArray(statistics)) {
      console.warn('statistics is not an array, using empty array instead');
      statistics = [];
    }
    
    if (!Array.isArray(rotaractStatisticsDistrict)) {
      console.warn('rotaractStatisticsDistrict is not an array, using empty array instead');
      rotaractStatisticsDistrict = [];
    }
    
    if (!Array.isArray(rotaractStatisticsContributions)) {
      console.warn('rotaractStatisticsContributions is not an array, using empty array instead');
      rotaractStatisticsContributions = [];
    }
    
    if (!Array.isArray(rotaractStatisticsCards)) {
      console.warn('rotaractStatisticsCards is not an array, using empty array instead');
      rotaractStatisticsCards = [];
    }
    
    if (!Array.isArray(rotaractStatisticsCharts)) {
      console.warn('rotaractStatisticsCharts is not an array, using empty array instead');
      rotaractStatisticsCharts = [];
    }
    
    if (!Array.isArray(leadershipChair)) {
      console.warn('leadershipChair is not an array, using empty array instead');
      leadershipChair = [];
    }
    
    if (!Array.isArray(boardMembers)) {
      console.warn('boardMembers is not an array, using empty array instead');
      boardMembers = [];
    }
    
    if (!Array.isArray(executiveCommittee)) {
      console.warn('executiveCommittee is not an array, using empty array instead');
      executiveCommittee = [];
    }
    
    if (!Array.isArray(staffMembers)) {
      console.warn('staffMembers is not an array, using empty array instead');
      staffMembers = [];
    }
    
    // Combine all data
    const staticData: StaticData = {
      heroCarouselImages,
      districts,
      featuredEvents,
      events,
      statistics,
      rotaractStatisticsDistrict,
      rotaractStatisticsContributions,
      rotaractStatisticsCards,
      rotaractStatisticsCharts,
      leadershipChair,
      boardMembers,
      executiveCommittee,
      staffMembers,
      rotaryFoundationData
    };
    
    // Ensure the output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    const outputPath = path.join(OUTPUT_DIR, 'contentful-data.json');
    
    try {
      // Validate that the data can be properly serialized
      const jsonString = JSON.stringify(staticData, null, 2);
      
      // Test parsing the string back to ensure it's valid JSON
      JSON.parse(jsonString);
      
      // Write the file
      fs.writeFileSync(outputPath, jsonString);
      console.log(`Static data successfully written to ${outputPath}`);
    } catch (writeError) {
      console.error('Error writing static data file:', writeError);
      process.exit(1);
    }
    
    console.log('Static data generation completed successfully!');
  } catch (error) {
    console.error('Error generating static data:', error);
    process.exit(1);
  }
}

// Run the generator if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateStaticData();
} 