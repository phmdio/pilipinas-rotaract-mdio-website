
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CoreTeamSection from '@/components/leadership/CoreTeamSection';
import TeamSectionGrid from '@/components/leadership/TeamSectionGrid';
import BoardOfAdviserSection from '@/components/leadership/BoardOfAdviserSection';
import StaffSection from '@/components/leadership/StaffSection';

const LeadershipTeam = () => {
  return (
    <>
      <Helmet>
        <title>Our Leadership Team | Pilipinas Rotaract MDIO</title>
        <meta name="description" content="Meet the leadership team of Pilipinas Rotaract Multi-District Information Organization" />
      </Helmet>
      
      <Header />
      
      <main>
        <PageHero 
          title="Our Leadership Team" 
          backgroundImage="/assets/our-leadership.jpeg"
        />
        <CoreTeamSection />
        <TeamSectionGrid />
        <BoardOfAdviserSection />
        <StaffSection />
      </main>
      
      <Footer />
    </>
  );
};

export default LeadershipTeam;
