// Script to fetch data from Contentful at build time
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { createClient } from 'contentful';

// Load environment variables
dotenv.config();

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
        description: item.fields.description || 'Rotaract Clubs of Rotary International District #',
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

    return entries.items.map((item) => ({
      id: item.sys.id,
      date: item.fields.date || new Date().toLocaleDateString(),
      title: item.fields.title || 'Featured Event',
      description: item.fields.description || '',
      image: item.fields.image?.fields?.file?.url 
        ? `https:${item.fields.image.fields.file.url}` 
        : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      landscape: item.fields.landscape || false,
    }));
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

    return entries.items.map((item) => ({
      id: item.sys.id,
      date: item.fields.date || new Date().toLocaleDateString(),
      title: item.fields.title || 'Upcoming Event',
      image: item.fields.image?.fields?.file?.url 
        ? `https:${item.fields.image.fields.file.url}` 
        : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    }));
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

// Main function to generate all static data
async function generateStaticData() {
  console.log('Generating static data from Contentful...');
  
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
      rotaractStatisticsCharts
    };
    
    // Write combined data to a JSON file
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'contentful-data.json'),
      JSON.stringify(staticData, null, 2)
    );
    
    console.log('Static data generated successfully!');
  } catch (error) {
    console.error('Error generating static data:', error);
    process.exit(1);
  }
}

// Run the generator
generateStaticData(); 