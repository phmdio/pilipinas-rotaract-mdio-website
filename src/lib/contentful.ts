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
  }
}

// Query keys for React Query
export const contentfulKeys = {
  heroCarousel: ['contentful', 'heroCarousel'] as const,
  districts: ['contentful', 'districts'] as const,
  districtDetail: ['contentful', 'districtDetail'] as const,
};

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
    image: '/assets/district/3770.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3780', 
    color: '#16478E',
    image: '/assets/district/3780.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3790', 
    color: '#00A2E1',
    image: '/assets/district/3790.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3800', 
    color: '#003366',
    image: '/assets/district/3800.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3810', 
    color: '#F47621',
    image: '/assets/district/3810.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3820', 
    color: '#8E288F',
    image: '/assets/district/3820.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3830', 
    color: '#0D9648',
    image: '/assets/district/3830.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3850', 
    color: '#E22626',
    image: '/assets/district/3850.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3860', 
    color: '#66819A',
    image: '/assets/district/3860.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3870', 
    color: '#00ACBB',
    image: '/assets/district/3870.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
];

// Fallback carousel images
export const fallbackCarouselImages: HeroCarouselImage[] = [
  { title: 'Fallback Image 1', imageUrl: '/assets/carousel.png', alt: 'Rotaract members 1' },
  { title: 'Fallback Image 2', imageUrl: '/assets/carousel.png', alt: 'Rotaract members 2' },
  { title: 'Fallback Image 3', imageUrl: '/assets/carousel.png', alt: 'Rotaract members 3' },
]; 