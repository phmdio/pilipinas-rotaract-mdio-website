import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import InfoCenter from '@/components/InfoCenter';
import ProgramsSection from '@/components/ProgramsSection';
import StatisticsSection from '@/components/StatisticsSection';
import FoundationSection from '@/components/FoundationSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pilipinas Rotaract",
    "url": "https://pilipinasrotaract.org",
    "logo": "https://pilipinasrotaract.org/logo.png",
    "description": "Empowering young leaders to create positive change in communities across the Philippines.",
    "sameAs": [
      "https://facebook.com/pilipinasrotaract",
      "https://instagram.com/pilipinasrotaract",
      "https://twitter.com/pilipinasrotaract"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Philippines"
    },
    "email": "phmdiowebsite@gmail.com",
    "memberOf": {
      "@type": "Organization",
      "name": "Rotary International"
    },
    "foundingDate": "2006",
    "keywords": "Rotaract, Youth Leadership, Community Service, Philippines, MDIO"
  };

  return (
    <>
      <Helmet>
        <title>Pilipinas Rotaract - Empowering Young Leaders</title>
        <meta name="description" content="Pilipinas Rotaract empowers young leaders to create positive change in communities across the Philippines through service, leadership, and fellowship." />
        <link rel="canonical" href="https://www.pilipinasrotaract.org/" />
        <meta property="og:title" content="Pilipinas Rotaract - Empowering Young Leaders" />
        <meta property="og:description" content="Pilipinas Rotaract empowers young leaders to create positive change in communities across the Philippines through service, leadership, and fellowship." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pilipinasrotaract.org/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pilipinas Rotaract - Empowering Young Leaders" />
        <meta name="twitter:description" content="Pilipinas Rotaract empowers young leaders to create positive change in communities across the Philippines through service, leadership, and fellowship." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header isTransparent={true} />
        <main id="main-content">
          <Hero />
          <AboutSection />
          <InfoCenter />
          <ProgramsSection />
          <StatisticsSection />
          <FoundationSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
