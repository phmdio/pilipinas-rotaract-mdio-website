import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useLeadershipTeamQuery from '@/hooks/useLeadershipTeamQuery';
import NoData from '@/components/NoData';
import ReactMarkdown from 'react-markdown';
import MarkdownLink from '@/components/MarkdownLink';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rotaract-magenta"></div>
  </div>
);

const OurChair = () => {
  const { data, isLoading, error } = useLeadershipTeamQuery();
  const chair = data?.chair;

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    console.error('Error loading chair data:', error);
  }

  const hasNoData = !chair;

  return (
    <>
      <Helmet>
        <title>Our Chair | Pilipinas Rotaract MDIO</title>
        <meta 
          name="description" 
          content="Meet the Chair of Pilipinas Rotaract Multi-District Information Organization" 
        />
        <link rel="canonical" href="https://www.pilipinasrotaract.org/our-chair" />
        <meta property="og:title" content="Our Chair | Pilipinas Rotaract MDIO" />
        <meta property="og:description" content="Meet the Chair of Pilipinas Rotaract Multi-District Information Organization" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pilipinasrotaract.org/our-chair" />
        <meta property="og:image" content="https://www.pilipinasrotaract.org/assets/our-leadership.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Chair | Pilipinas Rotaract MDIO" />
        <meta name="twitter:description" content="Meet the Chair of Pilipinas Rotaract Multi-District Information Organization" />
        <meta name="twitter:image" content="https://www.pilipinasrotaract.org/assets/our-leadership.jpeg" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section with Image and Overlay */}
        <div className="relative w-full h-[600px]">
          <img 
            src={chair?.headerImage || chair?.image || "/assets/our-leadership.jpeg"}
            alt={chair?.name || "Our Chair"}
            className="w-full h-full object-cover"
          />
          
          {/* Overlaid Content Box */}
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 lg:translate-x-0 -translate-x-1/2 lg:left-auto lg:right-16 bg-rotaract-magenta p-8 max-w-md text-white">
            <h1 className="text-3xl font-bold mb-2">{chair?.name || "Our Chair"}</h1>
            <p className="text-sm mb-4">Pilipinas Rotaract MDIO | Multi-District Information Organization Chair</p>
            <div className="text-sm prose prose-sm prose-invert max-h-32 overflow-hidden">
              <ReactMarkdown components={{ a: MarkdownLink }}>{chair?.description || ""}</ReactMarkdown>
            </div>
          </div>
        </div>

        {hasNoData ? (
          <NoData message="Chair data is currently unavailable. Please check back soon." />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* If we have actions, render them as alternating sections */}
            {chair.actions && chair.actions.length > 0 ? (
              chair.actions.map((action, index) => (
                <div 
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16 gap-8`}
                >
                  <div className="w-full md:w-1/2">
                    <img 
                      src={action.image || chair.image}
                      alt={action.title}
                      className="w-full h-[300px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold text-rotaract-magenta mb-4">{action.title}</h2>
                    <div className="text-gray-700 prose">
                      <ReactMarkdown components={{ a: MarkdownLink }}>{action.description}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Fallback if no actions are defined
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-12 w-12 text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Actions Added Yet</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Content sections for this chair haven't been added yet. Please check back soon for updates about their activities and initiatives.
                </p>
              </div>
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </>
  );
};

export default OurChair;
