import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/our-history/ContentSection';
import SigningDRRsSection from '@/components/our-history/SigningDRRsSection';
import MDIOChairsSection from '@/components/our-history/MDIOChairsSection';
import VisionMissionSection from '@/components/our-history/VisionMissionSection';

const OurHistory = () => {
  return (
    <>
      <Helmet>
        <title>Our History | Pilipinas Rotaract MDIO</title>
        <meta name="description" content="The history of Pilipinas Rotaract Multi-District Information Organization" />
      </Helmet>
      
      <Header />
      
      <main>
        <PageHero 
          title="Our History" 
          backgroundImage="/assets/our-history.png" 
        />
        <ContentSection />
        <SigningDRRsSection />
        <VisionMissionSection />
        <MDIOChairsSection />
      </main>
      
      <Footer />
    </>
  );
};

export default OurHistory;
