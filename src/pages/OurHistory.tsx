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
        <link rel="canonical" href="https://www.pilipinasrotaract.org/our-history" />
        <meta property="og:title" content="Our History | Pilipinas Rotaract MDIO" />
        <meta property="og:description" content="The history of Pilipinas Rotaract Multi-District Information Organization" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pilipinasrotaract.org/our-history" />
        <meta property="og:image" content="https://www.pilipinasrotaract.org/assets/our-history.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our History | Pilipinas Rotaract MDIO" />
        <meta name="twitter:description" content="The history of Pilipinas Rotaract Multi-District Information Organization" />
        <meta name="twitter:image" content="https://www.pilipinasrotaract.org/assets/our-history.png" />
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
