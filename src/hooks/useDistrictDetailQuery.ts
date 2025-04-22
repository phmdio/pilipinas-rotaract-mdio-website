import { useQuery } from '@tanstack/react-query';
import { getDistrictDetail } from '@/data/districtDetailData';

/**
 * Custom hook for fetching district detail data
 * @param districtId The ID of the district to fetch details for
 * @returns Query object containing district detail data, loading state, and error
 */
export const useDistrictDetailQuery = (districtId: string | undefined) => {
  return useQuery({
    queryKey: ['districtDetail', districtId],
    queryFn: async () => {
      if (!districtId) {
        throw new Error('District ID is required');
      }
      
      const districtDetail = getDistrictDetail(districtId);
      return districtDetail;
    },
    // Skip the query if no districtId is provided
    enabled: !!districtId
  });
}; 