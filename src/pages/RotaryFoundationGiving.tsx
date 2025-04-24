import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useRotaryFoundationQuery } from '@/hooks/useRotaryFoundationQuery';
import { fallbackRotaryFoundationData } from '@/lib/contentful';
import { AlertTriangle } from 'lucide-react';

// Fallback component for errors or no data
const FoundationFallback = ({ error }: { error?: unknown }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-sm p-8 my-10 text-center">
      <div className="flex justify-center mb-4">
        <AlertTriangle className="h-12 w-12 text-amber-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {error ? 'Something went wrong' : 'No foundation data found'}
      </h3>
      <p className="text-gray-600 mb-6">
        {error 
          ? 'We encountered an error while loading Rotary Foundation information. Please try again later.'
          : 'We couldn\'t find information about the Rotary Foundation programs. Please check back soon.'}
      </p>
      <Link 
        to="/"
        className="btn-rotaract inline-block uppercase font-bold"
      >
        Return to Home
      </Link>
    </div>
  );
};

const RotaryFoundationGiving = () => {
  // Fetch Rotary Foundation data using React Query
  const { 
    data: foundationData = fallbackRotaryFoundationData,
    isLoading,
    error
  } = useRotaryFoundationQuery();

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-blue-600 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  // Check if we have valid data in both the fetched data and fallback
  const hasValidData = foundationData && 
    foundationData.funds && 
    foundationData.funds.length > 0 && 
    foundationData.introduction && 
    foundationData.introduction.title;

  return (
    <>
      <Helmet>
        <title>The Rotary Foundation Giving | Pilipinas Rotaract MDIO</title>
        <meta 
          name="description" 
          content="Support The Rotary Foundation through giving and donations" 
        />
      </Helmet>
      
      <Header />
      
      <main>
        <PageHero 
          title="The Rotary Foundation Giving" 
          backgroundImage="/assets/trf.png"
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {error ? (
              // Display error fallback
              <FoundationFallback error={error} />
            ) : !hasValidData ? (
              // Display no data fallback
              <FoundationFallback />
            ) : (
              // Display foundation content when data is available
              <>
                {/* Introduction */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-rotaract-magenta mb-4">
                    {foundationData.introduction.title}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {foundationData.introduction.content}
                  </p>
                </div>

                {/* Single Column with Landscape Cards */}
                <div className="space-y-8 mb-16">
                  {foundationData.funds.map((fund, index) => (
                    <div 
                      key={fund.id}
                      className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-rotaract-magenta/5 rounded-lg shadow-sm p-6`}
                    >
                      <div className="w-full md:w-1/2">
                        <img 
                          src={fund.imageUrl}
                          alt={fund.alt}
                          className="rounded-lg w-full h-64 object-cover"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <h3 className="text-xl font-bold text-rotaract-magenta mb-3">{fund.title}</h3>
                        <p className="text-gray-700">
                          {fund.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Donation Button */}
                <div className="text-center">
                  <Link 
                    to={foundationData.donationLink}
                    className="btn-rotaract inline-block uppercase font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate to the Rotary Foundation
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default RotaryFoundationGiving;
