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

  // Combine team members for structured data
  const allTeamMembers = [
    ...(data?.boardMembers || []),
    ...(data?.executiveCommittee || []),
    ...(data?.staff || [])
  ];

  // Define schema type that allows additional properties
  type SchemaPersonType = {
    "@type": string;
    name: string;
    jobTitle: string;
    image: string;
    [key: string]: any; // Allow additional properties
  }

  // Prepare structured data
  const leadershipStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pilipinas Rotaract MDIO",
    "url": "https://www.pilipinasrotaract.org",
    "logo": "https://www.pilipinasrotaract.org/logo.png",
    "member": allTeamMembers.map((member: any) => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.title || member.role,
      "image": member.image
    } as SchemaPersonType))
  };

  // Add the chair separately at the beginning if available
  if (data?.chair) {
    const chairPerson: SchemaPersonType = {
      "@type": "Person",
      "name": data.chair.name,
      "jobTitle": data.chair.title,
      "image": data.chair.image,
      "description": data.chair.description
    };
    leadershipStructuredData.member.unshift(chairPerson);
  }

  return (
    <>
      <Helmet>
        <title>Our Leadership Team | Pilipinas Rotaract MDIO</title>
        <meta 
          name="description" 
          content="Meet the dedicated leadership team of Pilipinas Rotaract Multi-District Information Organization" 
        />
        <link rel="canonical" href="https://www.pilipinasrotaract.org/our-leadership-team" />
        <meta property="og:title" content="Our Leadership Team | Pilipinas Rotaract MDIO" />
        <meta property="og:description" content="Meet the dedicated leadership team of Pilipinas Rotaract Multi-District Information Organization" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pilipinasrotaract.org/our-leadership-team" />
        <meta property="og:image" content="https://www.pilipinasrotaract.org/assets/our-leadership.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Leadership Team | Pilipinas Rotaract MDIO" />
        <meta name="twitter:description" content="Meet the dedicated leadership team of Pilipinas Rotaract Multi-District Information Organization" />
        <meta name="twitter:image" content="https://www.pilipinasrotaract.org/assets/our-leadership.jpeg" />
        <script type="application/ld+json">
          {JSON.stringify(leadershipStructuredData)}
        </script>
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
