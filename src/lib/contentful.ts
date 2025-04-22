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

// Type definition for District data
export interface District {
  id: string;
  color: string;
  image: string;
  description: string;
}

// Update the imported StaticContentfulData interface to include districts
// This should be done in the contentful-static.ts file, but we're adding a declare here
// to augment the existing interface
declare module '@/data/contentful-static' {
  interface StaticContentfulData {
    heroCarouselImages: HeroCarouselImage[];
    districts: District[];
  }
}

// Query keys for React Query
export const contentfulKeys = {
  heroCarousel: ['contentful', 'heroCarousel'] as const,
  districts: ['contentful', 'districts'] as const,
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
export async function getDistricts(): Promise<District[]> {
  // Try to load from static data first
  if (USE_STATIC_DATA) {
    try {
      return await loadStaticData<District>('districts');
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

// Fallback district data
export const fallbackDistrictData: District[] = [
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