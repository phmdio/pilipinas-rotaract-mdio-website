import { HeroCarouselImage } from '@/lib/contentful';

// Interfaces for static data
export interface StaticContentfulData {
  heroCarouselImages: HeroCarouselImage[];
  // Add other content types here as needed
}

// Default empty data structure
export const emptyStaticData: StaticContentfulData = {
  heroCarouselImages: [],
  // Initialize other content types with empty values
}; 