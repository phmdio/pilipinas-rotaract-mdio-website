import { useQuery } from '@tanstack/react-query';
import { getRotaryFoundationData, contentfulKeys, RotaryFoundationData } from '@/lib/contentful';

/**
 * Custom hook for fetching Rotary Foundation data from Contentful
 * @returns Query object containing Rotary Foundation data, loading state, and error
 */
export const useRotaryFoundationQuery = () => {
  return useQuery<RotaryFoundationData>({
    queryKey: contentfulKeys.rotaryFoundation,
    queryFn: getRotaryFoundationData,
  });
}; 