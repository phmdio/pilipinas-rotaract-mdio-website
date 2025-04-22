import { useQuery } from '@tanstack/react-query';
import { getDistricts, fallbackDistrictData, contentfulKeys, BaseDistrict } from '@/lib/contentful';

/**
 * Custom hook for fetching districts data
 * @returns Query object containing districts data, loading state, and error
 */
export const useDistrictsQuery = () => {
  return useQuery<BaseDistrict[]>({
    queryKey: contentfulKeys.districts,
    queryFn: async () => {
      try {
        const data = await getDistricts();
        return data;
      } catch (error) {
        console.error('Error fetching districts data:', error);
        // Return fallback data if there's an error
        return fallbackDistrictData;
      }
    },
    // Use fallback data as placeholders
    placeholderData: fallbackDistrictData
  });
};

/**
 * Custom hook for fetching a single district by ID
 * @param districtId The ID of the district to fetch
 * @returns Query object containing the district data, loading state, and error
 */
export const useDistrictByIdQuery = (districtId: string | undefined) => {
  return useQuery<BaseDistrict>({
    queryKey: [...contentfulKeys.districts, districtId],
    queryFn: async () => {
      if (!districtId) {
        throw new Error('District ID is required');
      }
      
      const districts = await getDistricts();
      const district = districts.find(d => d.id === districtId);
      
      if (!district) {
        throw new Error(`District with ID ${districtId} not found`);
      }
      
      return district;
    },
    // Skip the query if no districtId is provided
    enabled: !!districtId
  });
}; 