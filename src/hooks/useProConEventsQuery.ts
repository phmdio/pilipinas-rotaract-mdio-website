import { useQuery } from '@tanstack/react-query';
import { getFeaturedEvents, FeaturedEvent, programsAndActivitiesKeys } from '@/lib/contentful';

/**
 * Custom hook for fetching PROCON events from Contentful
 * @returns Query object containing PROCON events, loading state, and error
 */
export const useProConEventsQuery = () => {
  const eventsQuery = useQuery<FeaturedEvent[]>({
    queryKey: programsAndActivitiesKeys.featuredEvents,
    queryFn: getFeaturedEvents,
    select: (data) => data.filter(event => event.isProcon === true)
  });
  
  return eventsQuery;
}; 