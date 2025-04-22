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

// Main function to generate all static data
async function generateStaticData() {
  console.log('Generating static data from Contentful...');
  
  try {
    // Fetch all required data
    const heroCarouselImages = await fetchHeroCarouselImages();
    const districts = await fetchDistricts();
    
    // Combine all data
    const staticData = {
      heroCarouselImages,
      districts
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