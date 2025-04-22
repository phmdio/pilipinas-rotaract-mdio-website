import { HeroCarouselImage, BaseDistrict } from '@/lib/contentful';

// Interfaces for static data
export interface StaticContentfulData {
  heroCarouselImages: HeroCarouselImage[];
  districts: BaseDistrict[];
  // Add other content types here as needed
}

// Default empty data structure
export const emptyStaticData: StaticContentfulData = {
  heroCarouselImages: [],
  districts: [],
  // Initialize other content types with empty values
}; 