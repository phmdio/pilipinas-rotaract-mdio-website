
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const AngBalangay = () => {
  return (
    <>
      <Helmet>
        <title>Ang Balangay | Pilipinas Rotaract MDIO</title>
        <meta 
          name="description" 
          content="Ang Balangay - The official newsletter of Pilipinas Rotaract MDIO" 
        />
      </Helmet>
      
      <Header />
      
      <main>
        <PageHero 
          title="Ang Balangay" 
          backgroundImage="/assets/masquerade.png"
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Newsletter Image */}
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/assets/carousel.png"
                  alt="Ang Balangay Newsletter"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-rotaract-magenta mb-2">
                  Ang Balangay
                </h2>
                <p className="text-sm text-black mb-6">
                  Volume 2 Issue No.1
                </p>
                <Separator className="bg-black mb-6" />
                <p className="text-black mb-6">
                  It has always been a dream for the Philippine District Rotaract newsletter to have its own publication. With all the programs and activities of clubs, there were numerous generations of PDRRs who aspired to achieve it's milestone. It was merely a dream that was long until such a time when the Philippine Rotaract was given a chance to have the full support of the people behind it who saw the urge and wanted to amplify all the voices from the field as our very own service to fulfill the commitment to our organization be seen. With unity, determination and hard work, Philippine became the strongest force thru made the Philippine District in a whole.
                </p>
                <Link 
                  to="/ang-balangay"
                  className="btn-rotaract inline-block rounded-full"
                >
                  READ ANG BALANGAY HERE
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AngBalangay;
