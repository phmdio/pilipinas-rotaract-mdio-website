// Script to fetch data from Contentful at build time
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { createClient } from 'contentful';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import the generateSlugFromTitle function from utils
// We need to use a dynamic import since ES modules don't support synchronous imports
let generateSlugFromTitle;

async function importUtils() {
  try {
    // Import the TS file by using ts-node to transpile it on the fly
    const utilsPath = path.join(__dirname, '..', 'src', 'utils', 'string.ts');
    if (fs.existsSync(utilsPath)) {
      // For production, we use a simpler version directly
      generateSlugFromTitle = function(title) {
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
    generateSlugFromTitle = function(title) {
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
  space: process.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
});

// Output directory for static data
const OUTPUT_DIR = path.resolve('public/static-data');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Helper function to generate slug from title - removed and replaced with imported version

// Function to fetch hero carousel images
async function fetchHeroCarouselImages() {
  console.log('Fetching hero carousel images...');
  try {
    const entries = await client.getEntries({
      content_type: 'heroCarouselImage',
      order: ['sys.createdAt'],
    });

    return entries.items.map((item) => ({
      title: item.fields.title,
      imageUrl: item.fields.image?.fields?.file?.url 
        ? `https:${item.fields.image.fields.file.url}` 
        : '/assets/carousel.png', // Fallback image
      alt: item.fields.alt || item.fields.title || 'Rotaract carousel image',
    }));
  } catch (error) {
    console.error('Error fetching hero carousel images:', error);
    return [];
  }
}

// Function to fetch districts with all details
async function fetchDistricts() {
  console.log('Fetching districts with basic details...');
  try {
    const entries = await client.getEntries({
      content_type: 'district',
      order: ['sys.createdAt'],
    });

    return entries.items.map((item) => {
      const districtId = item.fields.id || '';
      
      return {
        id: districtId,
        color: item.fields.color || '#003366',
        image: item.fields.image?.fields?.file?.url 
          ? `https:${item.fields.image.fields.file.url}` 
          : '/assets/district/default.jpeg',
        summary: item.fields.summary || 'Discover the vibrant community of Rotaract clubs in this district, where young professionals develop leadership skills and implement innovative service projects addressing local needs. Join us in making a positive impact through fellowship, professional development, and community service.',
      };
    });
  } catch (error) {
    console.error('Error fetching districts:', error);
    return [];
  }
}

// Function to fetch featured events
async function fetchFeaturedEvents() {
  console.log('Fetching featured events...');
  try {
    const entries = await client.getEntries({
      content_type: 'featuredEvent',
      order: ['-sys.createdAt'],
      limit: 5,
    });

    return entries.items.map((item) => {
      const title = item.fields.title || 'Featured Event';
      return {
        id: item.sys.id,
        date: item.fields.date || new Date().toLocaleDateString(),
        title: title,
        description: item.fields.description || '',
        image: item.fields.image?.fields?.file?.url 
          ? `https:${item.fields.image.fields.file.url}` 
          : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        landscape: item.fields.landscape || false,
        slug: item.fields.slug || generateSlugFromTitle(title)
      };
    });
  } catch (error) {
    console.error('Error fetching featured events:', error);
    return [];
  }
}

// Function to fetch upcoming events
async function fetchUpcomingEvents() {
  console.log('Fetching upcoming events...');
  try {
    const entries = await client.getEntries({
      content_type: 'upcomingEvent',
      order: ['fields.date'],
      limit: 5,
    });

    return entries.items.map((item) => {
      const title = item.fields.title || 'Upcoming Event';
      return {
        id: item.sys.id,
        date: item.fields.date || new Date().toLocaleDateString(),
        title: title,
        image: item.fields.image?.fields?.file?.url 
          ? `https:${item.fields.image.fields.file.url}` 
          : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
        slug: item.fields.slug || generateSlugFromTitle(title)
      };
    });
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    return [];
  }
}

// Function to fetch statistics
async function fetchStatistics() {
  console.log('Fetching statistics...');
  try {
    const entries = await client.getEntries({
      content_type: 'statistic',
      order: ['sys.createdAt'],
    });

    return entries.items.map((item) => ({
      id: item.sys.id,
      value: item.fields.value || '0',
      label: item.fields.label || 'Statistic',
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
async function fetchRotaractDistrictData() {
  console.log('Fetching Rotaract district data...');
  try {
    const entries = await client.getEntries({
      content_type: 'rotaractDistrictData',
      order: ['fields.year', 'fields.district'],
    });

    return entries.items.map((item) => {
      const data = {
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
  } catch (error) {
    console.error('Error fetching Rotaract district data:', error);
    return [];
  }
}

// Function to fetch Rotaract contributions data
async function fetchRotaractContributionsData() {
  console.log('Fetching Rotaract contributions data...');
  try {
    const entries = await client.getEntries({
      content_type: 'rotaractContributionsData',
      order: ['fields.district'],
    });

    return entries.items.map((item) => {
      const data = {
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
  } catch (error) {
    console.error('Error fetching Rotaract contributions data:', error);
    return [];
  }
}

// Function to fetch Rotaract statistic cards
async function fetchRotaractStatisticCards() {
  console.log('Fetching Rotaract statistic cards...');
  try {
    const entries = await client.getEntries({
      content_type: 'rotaractStatisticCard',
      order: ['sys.createdAt'],
    });

    return entries.items.map((item) => ({
      id: item.sys.id,
      number: item.fields.number || '0',
      title: item.fields.title || 'Statistic',
      description: item.fields.description || '',
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
async function fetchRotaractChartConfigs() {
  console.log('Fetching Rotaract chart configs...');
  try {
    const entries = await client.getEntries({
      content_type: 'rotaractChartConfig',
      order: ['sys.createdAt'],
    });

    return entries.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title || 'Chart',
      dataKey: item.fields.dataKey || [],
      colors: item.fields.colors || ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
      dataSource: item.fields.dataSource || 'districtData',
      xAxisKey: item.fields.xAxisKey || 'year',
      asOfDate: item.fields.asOfDate,
    }));
  } catch (error) {
    console.error('Error fetching Rotaract chart configs:', error);
    return [];
  }
}

// Function to fetch leadership chair data
async function fetchLeadershipChair() {
  console.log('Fetching leadership chair data...');
  try {
    // First try to get current chair
    let entries = await client.getEntries({
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
    
    return entries.items.map((item) => ({
      id: item.sys.id,
      name: item.fields.name || 'MDIO Chair',
      title: item.fields.title || 'Pilipinas Multi-District Information Organization, Chair',
      description: item.fields.description || '',
      image: item.fields.image?.fields?.file?.url 
        ? `https:${item.fields.image.fields.file.url}` 
        : 'https://i.pravatar.cc/1500',
      club: item.fields.club || '',
      isCurrentChair: item.fields.isCurrentChair || false
    }));
  } catch (error) {
    console.error('Error fetching leadership chair data:', error);
    return [];
  }
}

// Function to fetch board members
async function fetchBoardMembers() {
  console.log('Fetching board members data...');
  try {
    const entries = await client.getEntries({
      content_type: 'boardMember',
      order: ['fields.name'],
    });
    
    return entries.items.map((item) => ({
      id: item.sys.id,
      name: item.fields.name || '',
      title: item.fields.title || 'District Rotaract Representative',
      district: item.fields.district || '',
      club: item.fields.club || '',
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
async function fetchExecutiveCommittee() {
  console.log('Fetching executive committee data...');
  try {
    const entries = await client.getEntries({
      content_type: 'executiveCommitteeMember',
      order: ['fields.name'],
    });
    
    return entries.items.map((item) => ({
      id: item.sys.id,
      name: item.fields.name || '',
      title: item.fields.title || '',
      district: item.fields.district || '',
      club: item.fields.club || '',
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
async function fetchStaffMembers() {
  console.log('Fetching staff members data...');
  try {
    const entries = await client.getEntries({
      content_type: 'staffMember',
      order: ['fields.name'],
    });
    
    return entries.items.map((item) => ({
      id: item.sys.id,
      name: item.fields.name || '',
      role: item.fields.role || '',
      district: item.fields.district || '',
      club: item.fields.club || '',
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
async function fetchRotaryFoundationData() {
  console.log('Fetching Rotary Foundation data...');
  try {
    // Fetch from single content type
    const entries = await client.getEntries({
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
    const introduction = {
      title: String(fields.introductionTitle || "Supporting The Rotary Foundation's Global Impact"),
      content: String(fields.introductionContent || "The Rotary Foundation transforms your gifts into service projects that change lives both close to home and around the world.")
    };

    // Extract funds from references
    const funds = Array.isArray(fields.funds) 
      ? fields.funds.map((fund) => ({
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
    const donationLink = fields.donationLink
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
export async function generateStaticData() {
  console.log('Generating static data from Contentful...');
  
  // Import utils
  await importUtils();
  
  try {
    // Fetch all required data
    const heroCarouselImages = await fetchHeroCarouselImages();
    const districts = await fetchDistricts();
    const featuredEvents = await fetchFeaturedEvents();
    const upcomingEvents = await fetchUpcomingEvents();
    const statistics = await fetchStatistics();
    const rotaractStatisticsDistrict = await fetchRotaractDistrictData();
    const rotaractStatisticsContributions = await fetchRotaractContributionsData();
    const rotaractStatisticsCards = await fetchRotaractStatisticCards();
    const rotaractStatisticsCharts = await fetchRotaractChartConfigs();
    
    // Fetch leadership team data
    const leadershipChair = await fetchLeadershipChair();
    const boardMembers = await fetchBoardMembers();
    const executiveCommittee = await fetchExecutiveCommittee();
    const staffMembers = await fetchStaffMembers();
    
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
    
    if (!Array.isArray(upcomingEvents)) {
      console.warn('upcomingEvents is not an array, using empty array instead');
      upcomingEvents = [];
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
    const staticData = {
      heroCarouselImages,
      districts,
      featuredEvents,
      upcomingEvents,
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