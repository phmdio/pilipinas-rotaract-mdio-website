import { HeroCarouselImage, District } from '@/lib/contentful';

// Interfaces for static data
export interface StaticContentfulData {
  heroCarouselImages: HeroCarouselImage[];
  districts: District[];
  // Add other content types here as needed
}

// Default empty data structure
export const emptyStaticData: StaticContentfulData = {
  heroCarouselImages: [],
  districts: [],
  // Initialize other content types with empty values
}; 