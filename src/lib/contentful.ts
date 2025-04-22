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

// Query keys for React Query
export const contentfulKeys = {
  heroCarousel: ['contentful', 'heroCarousel'] as const,
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

// Fallback carousel images
export const fallbackCarouselImages: HeroCarouselImage[] = [
  { title: 'Fallback Image 1', imageUrl: '/assets/carousel.png', alt: 'Rotaract members 1' },
  { title: 'Fallback Image 2', imageUrl: '/assets/carousel.png', alt: 'Rotaract members 2' },
  { title: 'Fallback Image 3', imageUrl: '/assets/carousel.png', alt: 'Rotaract members 3' },
]; 