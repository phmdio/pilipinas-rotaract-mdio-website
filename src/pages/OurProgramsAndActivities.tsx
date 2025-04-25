import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

import FeaturedEventCard from "@/components/FeaturedEventCard";
import FeaturedGridCard from "@/components/FeaturedGridCard";
import EventItem from "@/components/EventItem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  getFeaturedEvents, 
  getEvents, 
  programsAndActivitiesKeys,
  fallbackFeaturedEvents,
  fallbackEvents
} from "@/lib/contentful";

const heroImage = "/assets/our-programs-and-activities.png";

const OurProgramsAndActivities = () => {
  // Fetch featured events
  const { 
    data: featuredEvents = fallbackFeaturedEvents,
    isLoading: isFeaturedEventsLoading 
  } = useQuery({
    queryKey: programsAndActivitiesKeys.featuredEvents,
    queryFn: getFeaturedEvents,
  });

  // Fetch events
  const { 
    data: events = fallbackEvents,
    isLoading: isEventsLoading 
  } = useQuery({
    queryKey: programsAndActivitiesKeys.events,
    queryFn: getEvents,
  });

  return (
    <>
     <Helmet>
        <title>Programs and Activities | Pilipinas Rotaract MDIO</title>
        <meta 
          name="description" 
          content="Discover the impactful programs and activities of Pilipinas Rotaract MDIO - serving communities across the Philippines." 
        />
      </Helmet>
      
      <Header />
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[280px] md:h-[320px] flex items-end">
        <img
          src={heroImage}
          alt="Program and Activities"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative w-full max-w-7xl mx-auto px-6 py-8 z-10">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
            Program and Activities
          </h1>
        </div>
      </section>

      {/* Featured Events */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-[#D41A69] text-2xl lg:text-3xl font-bold mb-6">
          Featured Events
        </h2>
        <div className="grid gap-8">
          {isFeaturedEventsLoading ? (
            <div className="min-h-[300px] flex items-center justify-center">
              <div className="animate-pulse w-12 h-12 rounded-full bg-gray-200"></div>
            </div>
          ) : featuredEvents.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-50 rounded-lg border border-gray-200 p-8">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Featured Events Yet</h3>
              <p className="text-gray-500 text-center max-w-md">
                We're planning featured events to showcase our impact. Check back soon to see our flagship programs!
              </p>
            </div>
          ) : (
            <>
              {/* First featured event: landscape card */}
              <FeaturedEventCard event={featuredEvents[0]} />
              {/* Next four: grid, 2 columns per row, stack on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredEvents.slice(1).map((event) => (
                  <FeaturedGridCard key={event.id} event={event} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-[#D41A69] text-2xl lg:text-3xl font-bold mb-6">
          Events
        </h2>
        <div className="flex flex-col gap-4">
          {isEventsLoading ? (
            <div className="min-h-[200px] flex items-center justify-center">
              <div className="animate-pulse w-12 h-12 rounded-full bg-gray-200"></div>
            </div>
          ) : events.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[200px] bg-gray-50 rounded-lg border border-gray-200 p-8">
              <div className="text-5xl mb-4">📆</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Scheduled</h3>
              <p className="text-gray-500 text-center max-w-md">
                We're currently planning our calendar of activities. Please check back soon for events and opportunities to participate!
              </p>
            </div>
          ) : (
            events.map((event) => (
              <EventItem key={event.id} event={event} />
            ))
          )}
        </div>
      </section>
    </div>

    <Footer />
    </>
  );
};

export default OurProgramsAndActivities;
