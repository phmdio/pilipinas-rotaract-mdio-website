
import { useEffect } from 'react';
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutSection />
      <InfoCenter />
      <ProgramsSection />
      <StatisticsSection />
      <FoundationSection />
      <Footer />
    </div>
  );
};

export default Index;
