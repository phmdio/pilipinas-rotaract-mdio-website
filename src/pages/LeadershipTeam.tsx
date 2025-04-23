import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CoreTeamSection from '@/components/leadership/CoreTeamSection';
import BoardOfDirectorsSection from '@/components/leadership/BoardOfDirectorsSection';
import ExecutiveCommitteeSection from '@/components/leadership/ExecutiveCommitteeSection';
import StaffSection from '@/components/leadership/StaffSection';
import useLeadershipTeamQuery from '@/hooks/useLeadershipTeamQuery';
import NoData from '@/components/NoData';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rotaract-magenta"></div>
  </div>
);

const LeadershipTeam = () => {
  const { data, isLoading, error } = useLeadershipTeamQuery();

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    console.error('Error loading leadership team data:', error);
  }

  const hasNoData = !data || 
    (!data.chair && 
     !data.boardMembers?.length && 
     !data.executiveCommittee?.length && 
     !data.staff?.length);

  return (
    <>
      <Helmet>
        <title>Our Leadership Team | Pilipinas Rotaract MDIO</title>
        <meta 
          name="description" 
          content="Meet the dedicated leadership team of Pilipinas Rotaract Multi-District Information Organization" 
        />
      </Helmet>
      
      <Header />
      
      <main>
        <PageHero 
          title="Our Leadership Team" 
          backgroundImage="/assets/our-leadership.jpeg"
        />
        
        {hasNoData ? (
          <NoData message="Leadership team data is currently unavailable. Please check back soon to meet our team." />
        ) : (
          <>
            <CoreTeamSection chair={data?.chair} />
            <BoardOfDirectorsSection directors={data?.boardMembers || []} />
            <ExecutiveCommitteeSection executives={data?.executiveCommittee || []} />
            <StaffSection staffMembers={data?.staff || []} />
          </>
        )}
      </main>
      
      <Footer />
    </>
  );
};

export default LeadershipTeam;
