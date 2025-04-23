import { useQuery } from '@tanstack/react-query';
import { getLeadershipTeam, leadershipKeys, LeadershipTeamData } from '@/lib/contentful';

/**
 * Custom hook for fetching leadership team data from Contentful
 */
export const useLeadershipTeamQuery = () => {
  return useQuery<LeadershipTeamData>({
    queryKey: leadershipKeys.leadershipTeam,
    queryFn: getLeadershipTeam,
  });
};

export default useLeadershipTeamQuery; 