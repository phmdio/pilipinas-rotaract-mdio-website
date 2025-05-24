import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Link } from "react-router-dom";

const PhilippineRotaractMagazine = () => {
  return (
    <>
      <Helmet>
        <title>Philippine Rotaract Magazine | Pilipinas Rotaract MDIO</title>
        <meta 
          name="description" 
          content="Philippine Rotaract Magazine - The official publication of Pilipinas Rotaract MDIO" 
        />
        <link rel="canonical" href="https://www.pilipinasrotaract.org/philippine-rotaract-magazine" />
        <meta property="og:title" content="Philippine Rotaract Magazine | Pilipinas Rotaract MDIO" />
        <meta property="og:description" content="Philippine Rotaract Magazine - The official publication of Pilipinas Rotaract MDIO" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pilipinasrotaract.org/philippine-rotaract-magazine" />
        <meta property="og:image" content="https://www.pilipinasrotaract.org/assets/concert.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Philippine Rotaract Magazine | Pilipinas Rotaract MDIO" />
        <meta name="twitter:description" content="Philippine Rotaract Magazine - The official publication of Pilipinas Rotaract MDIO" />
      </Helmet>
      
      <Header />
      
      <main>
        <PageHero 
          title="Philippine Rotaract Magazine" 
          backgroundImage="/assets/concert.png"
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Castle Image */}
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/assets/castle.png"
                  alt="Historical castle"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-rotaract-magenta mb-6">
                  Philippine Rotaract Magazine
                </h2>
                <p className="text-gray-700 mb-6">
                  From always being a dream to our Philippine Districts first own publication magazine. The Philippine Rotaract Magazine started as the successor s official online newsletter magazine, from then it became a growing aspiration of Philippine Rotaract leaders as we achieve its milestone It was a dream that was finally achieved as it can fina This time, the Philippine Rotaract was given a chance to have its kind of newsletter magazine, that is made for Rotaractors, made by fellow Rotaractors as they sail along the same boat in reaching out to co-Rotaractor sharing their service through words and content stories by other Philippine become the strongest force that made the Philippine district In a whole.
                </p>
                <Link
                  to="https://rotaract.rotaryphilippines.com/"
                  className="btn-rotaract inline-block"
                  target="_blank"
                >
                  VISIT WEBSITE
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

export default PhilippineRotaractMagazine;
