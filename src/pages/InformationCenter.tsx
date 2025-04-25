import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import DistrictGrid from '@/components/DistrictGrid';
import { useDistrictsQuery } from '@/hooks/useDistrictsQuery';

const InformationCenter = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  // Use React Query to fetch the districts
  const { data: districts, isLoading } = useDistrictsQuery();
  
  // Carousel images
  const carouselImages = [
    "/assets/district/3810.jpeg",
  ];
  
  return (
    <>
      <Helmet>
        <title>Information Center | Pilipinas Rotaract MDIO</title>
        <meta name="description" content="Information Center for Pilipinas Rotaract Multi-District Information Organization" />
        <link rel="canonical" href="https://www.pilipinasrotaract.org/information-center" />
        <meta property="og:title" content="Information Center | Pilipinas Rotaract MDIO" />
        <meta property="og:description" content="Information Center for Pilipinas Rotaract Multi-District Information Organization" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pilipinasrotaract.org/information-center" />
        <meta property="og:image" content="https://www.pilipinasrotaract.org/assets/district/3810.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Information Center | Pilipinas Rotaract MDIO" />
        <meta name="twitter:description" content="Information Center for Pilipinas Rotaract Multi-District Information Organization" />
        <meta name="twitter:image" content="https://www.pilipinasrotaract.org/assets/district/3810.jpeg" />
      </Helmet>
      
      <Header />
      
      <main>
        <PageHero 
          title="Our Members District" 
          backgroundImage={carouselImages[0]}
          carousel={carouselImages.length > 1}
          carouselImages={carouselImages}
        />
        
        {/* Description section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold text-rotaract-magenta mb-3">Welcome to Our District Information Center</h2>
              <p className="text-gray-700">
                Explore the vibrant Rotaract districts across the Philippines. Each district represents a dynamic community of young professionals dedicated to service, leadership development, and creating positive change in their communities. With diverse projects spanning professional development, community service, and international understanding, our districts embody the Rotaract spirit of "Service Above Self." Browse through our district information to learn more about their initiatives, achievements, and impact.
              </p>
            </div>
          </div>
        </section>
        
        {/* Districts grid section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin h-8 w-8 border-4 border-blue-600 rounded-full border-t-transparent"></div>
              </div>
            ) : (
              <DistrictGrid districts={districts} />
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default InformationCenter;
