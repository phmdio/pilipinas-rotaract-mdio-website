import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { useProConEventsQuery } from '@/hooks/useProConEventsQuery';
import { fallbackFeaturedEvents } from '@/lib/contentful';
import { AlertTriangle } from 'lucide-react';
import { log } from 'console';

// Fallback component for errors or no data
const ProConFallback = ({ error }: { error?: unknown }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-sm p-8 my-10 text-center">
      <div className="flex justify-center mb-4">
        <AlertTriangle className="h-12 w-12 text-amber-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {error ? 'Something went wrong' : 'No PROCON events found'}
      </h3>
      <p className="text-gray-600 mb-6">
        {error 
          ? 'We encountered an error while loading PROCON events. Please try again later.'
          : 'We couldn\'t find any PROCON events at the moment. Please check back soon.'}
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

// ProCon Event Card component
const ProConEventCard = ({ 
  title, 
  date, 
  description, 
  image, 
  slug 
}: { 
  title: string; 
  date: string; 
  description: string; 
  image: string; 
  slug?: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover" 
      />
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-bold text-rotaract-magenta mb-3">{title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        {slug && (
          <Link 
            to={`/events/${slug}`}
            className="text-rotaract-blue font-medium hover:underline"
          >
            Learn More &rarr;
          </Link>
        )}
      </div>
    </div>
  );
};

const ProCon = () => {
  // Fetch PROCON events using React Query
  const { 
    data: proconEvents = fallbackFeaturedEvents.filter(event => event.isProcon),
    isLoading,
    error
  } = useProConEventsQuery();

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-blue-600 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  // Check if we have valid data
  const hasValidData = proconEvents && proconEvents.length > 0;

  return (
    <>
      <Helmet>
        <title>PROCON Events | Pilipinas Rotaract MDIO</title>
        <meta 
          name="description" 
          content="Pilipinas Rotaract Convention (PROCON) events organized by Pilipinas Rotaract MDIO" 
        />
        <link rel="canonical" href="https://www.pilipinasrotaract.org/procon" />
        <meta property="og:title" content="PROCON Events | Pilipinas Rotaract MDIO" />
        <meta property="og:description" content="Pilipinas Rotaract Convention (PROCON) events organized by Pilipinas Rotaract MDIO" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pilipinasrotaract.org/procon" />
        <meta property="og:image" content="https://www.pilipinasrotaract.org/assets/procon.avif" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PROCON Events | Pilipinas Rotaract MDIO" />
        <meta name="twitter:description" content="Pilipinas Rotaract Convention (PROCON) events organized by Pilipinas Rotaract MDIO" />
        <meta name="twitter:image" content="https://www.pilipinasrotaract.org/assets/procon.avif" />
      </Helmet>
      
      <Header />
      
      <main>
        <PageHero 
          title="PROCON Events" 
          backgroundImage="/assets/procon.avif"
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {error ? (
              // Display error fallback
              <ProConFallback error={error} />
            ) : !hasValidData ? (
              // Display no data fallback
              <ProConFallback />
            ) : (
              // Display PROCON content when data is available
              <>
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-rotaract-magenta mb-4">
                    Pilipinas Rotaract Convention (PROCON) Events
                  </h2>
                  <p className="text-gray-700 mb-6">
                  PROCON events are the premier annual conventions organized by Pilipinas Rotaract MDIO. 
                    These national gatherings bring together Rotaractors from across the Philippines for 
                    fellowship, leadership development, service project collaboration, and celebrating 
                    the achievements of Rotaract clubs nationwide.
                  </p>
                </div>

                {/* PROCON THROUGH THE YEARS */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-[#0F3B7F] mb-8 text-center uppercase">
                  PROCON Through The Years
                  </h2>
                  <div className="space-y-12">
                    {proconEvents[0]?.procon?.map((event, index) => (
                      <div 
                        key={event.id}
                        className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-rotaract-magenta/5 rounded-lg shadow-sm p-6`}
                      >
                        <div className="w-full md:w-1/2">
                          <img 
                            src={event.image}
                            alt={event.title}
                            className="rounded-lg w-full h-64 object-contain"
                          />
                        </div>
                        <div className="w-full md:w-1/2">
                          <div className="text-sm text-gray-500 mb-2">{event.date}</div>
                          <h3 className="text-xl font-bold text-rotaract-magenta mb-3">{event.title}</h3>
                          <p className="text-gray-700 mb-4">
                            {event.description}
                          </p>
                          {event.slug && (
                            <Link 
                              to={`/event/${event.slug}`}
                              className="text-rotaract-blue font-medium hover:underline"
                            >
                              Learn More &rarr;
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
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

export default ProCon; 