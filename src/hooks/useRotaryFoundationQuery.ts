import { useQuery } from '@tanstack/react-query';
import { getRotaryFoundationData, getRotaractStatistics, contentfulKeys, RotaryFoundationData } from '@/lib/contentful';

/**
 * Custom hook for fetching Rotary Foundation data from Contentful
 * @returns Query object containing Rotary Foundation data, loading state, and error
 */
export const useRotaryFoundationQuery = () => {
  const foundationQuery = useQuery<RotaryFoundationData>({
    queryKey: contentfulKeys.rotaryFoundation,
    queryFn: getRotaryFoundationData,
  });
  
  const statisticsQuery = useQuery({
    queryKey: contentfulKeys.rotaractStatistics,
    queryFn: getRotaractStatistics,
  });
  
  // Combine the foundation data with statistics data
  const combinedData = foundationQuery.data 
    ? {
        ...foundationQuery.data,
        statisticsData: statisticsQuery.data || undefined
      }
    : undefined;
  
  return {
    ...foundationQuery,
    data: combinedData
  };
}; 