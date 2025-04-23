import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { LeadershipChair, leadershipKeys, getLeadershipTeam } from '@/lib/contentful';
import LoadingSpinner from '@/components/LoadingSpinner';

const MDIOChairsSection = () => {
  // Fetch chairs data from Contentful
  const { data: leadershipData, isLoading, error } = useQuery({
    queryKey: leadershipKeys.leadershipTeam,
    queryFn: getLeadershipTeam,
  });

  // Sort chairs data to ensure current chair appears first and then by year
  const sortedChairs = React.useMemo<LeadershipChair[]>(() => {
    if (!leadershipData) return [];
    
    // Get all chair data - first the current chair, then any past chairs from Contentful
    const allChairs: LeadershipChair[] = [leadershipData.chair];
    
    // Add past chairs if they exist in the data
    if (leadershipData.boardMembers && leadershipData.boardMembers.length > 0) {
      // Convert board members to chairs format for display (if needed)
      const pastChairs = leadershipData.boardMembers
        .filter(member => member.title && member.title.toLowerCase().includes('chair'))
        .map(member => ({
          id: member.id,
          name: member.name,
          title: member.title,
          description: `Former MDIO Chair from ${member.district || 'a district'}`, // Add required description
          image: member.image,
          club: member.club,
          isCurrentChair: false
        } as LeadershipChair));
      
      allChairs.push(...pastChairs);
    }
    
    // Sort the chairs
    return allChairs.sort((a, b) => {
      // Current chair first
      if (a.isCurrentChair && !b.isCurrentChair) return -1;
      if (!a.isCurrentChair && b.isCurrentChair) return 1;
      
      // Then sort by year (descending) if available in the title
      const yearA = a.title && a.title.match(/(\d{4})-(\d{4})/) 
        ? parseInt(a.title.match(/(\d{4})-(\d{4})/)[1]) 
        : 0;
      const yearB = b.title && b.title.match(/(\d{4})-(\d{4})/) 
        ? parseInt(b.title.match(/(\d{4})-(\d{4})/)[1]) 
        : 0;
        
      return yearB - yearA;
    });
  }, [leadershipData]);

  if (isLoading) {
    return (
      <section className="py-12 bg-rotaract-magenta text-white flex justify-center items-center min-h-[300px]">
        <LoadingSpinner />
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-rotaract-magenta text-white">
        <div className="container mx-auto px-4 text-center">
          <p>Unable to load MDIO Chairs data.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-rotaract-magenta text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">MDIO Chairs Through the Years</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sortedChairs.map((chair) => (
            <div key={chair.id} className="text-center">
              <img 
                src={chair.image} 
                alt={`${chair.name}`} 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold">{chair.name}</h3>
              <p className="text-sm">{chair.title && chair.title.includes('-') ? chair.title : 'MDIO Chair'}</p>
              <p className="text-sm">District{chair.club}</p>
              {chair.isCurrentChair && (
                <span className="inline-block px-2 py-1 mt-2 text-xs bg-white text-rotaract-magenta rounded-full">
                  Current Chair
                </span>
              )}
            </div>
          ))}
          
          {/* If no chairs data available, show placeholder */}
          {(!sortedChairs || sortedChairs.length === 0) && (
            <div className="col-span-full text-center py-8">
              <p>No chairs data available at this time.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MDIOChairsSection;
