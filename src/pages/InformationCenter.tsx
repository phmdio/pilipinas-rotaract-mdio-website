import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import DistrictGrid from '@/components/DistrictGrid';
import { districtData } from '@/data/districtData';

const InformationCenter = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  // Carousel images
  const carouselImages = [
    "/assets/district/3810.jpeg",
  ];
  
  return (
    <>
      <Helmet>
        <title>Information Center | Pilipinas Rotaract MDIO</title>
        <meta name="description" content="Information Center for Pilipinas Rotaract Multi-District Information Organization" />
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
              <h2 className="text-4xl font-bold text-rotaract-magenta mb-3">Hipster ipsum tattooed brunch I'm baby.</h2>
              <p className="text-gray-700">
                Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man bun batch hella bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>
        
        {/* Districts grid section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DistrictGrid districts={districtData} />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default InformationCenter;
