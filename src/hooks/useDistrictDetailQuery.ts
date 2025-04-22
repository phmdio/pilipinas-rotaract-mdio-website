import { useQuery } from '@tanstack/react-query';
import { getDistrictDetail, contentfulKeys, District } from '@/lib/contentful';

/**
 * Custom hook for fetching district detail data from Contentful
 * @param districtId The ID of the district to fetch details for
 * @returns Query object containing district detail data, loading state, and error
 */
export const useDistrictDetailQuery = (districtId: string | undefined) => {
  return useQuery<District>({
    queryKey: [...contentfulKeys.districtDetail, districtId],
    queryFn: async () => {
      if (!districtId) {
        throw new Error('District ID is required');
      }
      
      return await getDistrictDetail(districtId);
    },
    // Skip the query if no districtId is provided
    enabled: !!districtId
  });
}; 