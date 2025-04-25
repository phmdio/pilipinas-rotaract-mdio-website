
import React from 'react';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

const OurChair = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Overlay */}
      <PageHero 
        title="Cristofer Bator"
        backgroundImage="/lovable-uploads/bf57f875-d2f4-4e95-bf20-55ea193287dd.png"
      />

      <main className="relative">
        {/* Subtitle Box */}
        <div className="absolute -top-32 right-0 max-w-xl bg-rotaract-magenta p-8 text-white">
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing. Duo probo prima quaestione. Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere?
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Text Section */}
            <div>
              <h2 className="text-2xl font-bold text-rotaract-magenta mb-4">Lorem Ipsum</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere? His enim rebus detractis negat se reperire in asotorum vita quod reprehendat.
              </p>
            </div>
            {/* Image Section */}
            <div>
              <img 
                src="/lovable-uploads/bf57f875-d2f4-4e95-bf20-55ea193287dd.png"
                alt="Chair activity 1"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Image Section */}
            <div>
              <img 
                src="/lovable-uploads/bf57f875-d2f4-4e95-bf20-55ea193287dd.png"
                alt="Chair activity 2"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            {/* Text Section */}
            <div>
              <h2 className="text-2xl font-bold text-rotaract-magenta mb-4">Lorem Ipsum</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere? His enim rebus detractis negat se reperire in asotorum vita quod reprehendat.
              </p>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="mb-16">
            <img 
              src="/lovable-uploads/bf57f875-d2f4-4e95-bf20-55ea193287dd.png"
              alt="Chair with team"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurChair;
