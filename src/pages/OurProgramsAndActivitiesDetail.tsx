import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CalendarDays, LayoutList, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getEventDetail,
  getEventDetailBySlug,
  getEvents,
  EventDetail,
  Event,
  eventKeys,
  programsAndActivitiesKeys,
  fallbackEvents
} from "@/lib/contentful";

// Fallback banner image if none provided
const defaultBannerImage = "/lovable-uploads/9fd84289-5060-4393-a74d-7846bfb24434.png";

const OurProgramsAndActivitiesDetail = () => {
  const { eventId, eventSlug } = useParams<{ eventId?: string; eventSlug?: string }>();
  const navigate = useNavigate();

  // Determine if we're using a slug or ID route
  const isSlugRoute = !!eventSlug;
  const lookupValue = eventSlug || eventId;

  // Fetch event details
  const {
    data: event,
    isLoading,
    isError
  } = useQuery({
    queryKey: isSlugRoute
      ? ['event', 'slug', lookupValue]
      : [...eventKeys.eventDetail, lookupValue],
    queryFn: () => {
      if (!lookupValue) return Promise.resolve(null);
      return isSlugRoute
        ? getEventDetailBySlug(lookupValue)
        : getEventDetail(lookupValue);
    },
    retry: 1
  });

  // Fetch events for the bottom section
  const {
    data: events = fallbackEvents,
    isLoading: isEventsLoading
  } = useQuery({
    queryKey: programsAndActivitiesKeys.events,
    queryFn: getEvents,
  });

  // Redirect to modern URL format if using the old ID-based URL
  React.useEffect(() => {
    if (!isLoading && event && !isSlugRoute) {
      navigate(`/event/${event.slug}`, { replace: true });
    }
  }, [isLoading, event, isSlugRoute, navigate]);

  // If event not found, redirect to programs page after a short delay
  React.useEffect(() => {
    if (!isLoading && !event) {
      const timeoutId = setTimeout(() => {
        navigate('/our-programs-and-activities');
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoading, event, navigate]);

  // Loading state
  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-[50vh] flex items-center justify-center bg-[#fafbff]">
          <div className="animate-pulse w-12 h-12 rounded-full bg-gray-200"></div>
        </div>
        <Footer />
      </>
    );
  }

  // Error state
  if (isError || !event) {
    return (
      <>
        <Header />
        <div className="min-h-[50vh] flex flex-col items-center justify-center bg-[#fafbff] p-8">
          <div className="text-5xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-700 mb-3">Event Not Found</h1>
          <p className="text-gray-500 mb-6 text-center max-w-md">
            We couldn't find the event you're looking for. You'll be redirected to our main events page.
          </p>
          <Link to="/our-programs-and-activities">
            <Button className="bg-[#16478E] hover:bg-[#0e3266] text-white">
              Go to Programs & Activities
            </Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Prepare structured data for JSON-LD
  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description,
    "startDate": event.date,
    "datePublished": event.publishedDate,
    "location": {
      "@type": "Place",
      "name": event.location
    },
    "image": event.image || "https://www.pilipinasrotaract.org/lovable-uploads/9fd84289-5060-4393-a74d-7846bfb24434.png",
    "organizer": {
      "@type": "Organization",
      "name": "Pilipinas Rotaract",
      "url": "https://www.pilipinasrotaract.org"
    },
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "offers": event.eventUrl ? {
      "@type": "Offer",
      "url": event.eventUrl,
      "availability": "https://schema.org/InStock"
    } : undefined,
    "sameAs": event.facebookPageUrl ? [event.facebookPageUrl] : undefined
  };

  return (
    <>
      <Helmet>
        <title>{event.title} | Pilipinas Rotaract MDIO</title>
        <meta
          name="description"
          content={`${event.title} - ${event.description.substring(0, 155)}...`}
        />
        <link rel="canonical" href={`https://www.pilipinasrotaract.org/event/${event.slug}`} />
        <meta property="og:title" content={`${event.title} | Pilipinas Rotaract MDIO`} />
        <meta property="og:description" content={`${event.title} - ${event.description.substring(0, 155)}...`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.pilipinasrotaract.org/event/${event.slug}`} />
        <meta property="og:image" content={event.image || "https://www.pilipinasrotaract.org/lovable-uploads/9fd84289-5060-4393-a74d-7846bfb24434.png"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${event.title} | Pilipinas Rotaract MDIO`} />
        <meta name="twitter:description" content={`${event.title} - ${event.description.substring(0, 155)}...`} />
        <meta name="twitter:image" content={event.image || "https://www.pilipinasrotaract.org/lovable-uploads/9fd84289-5060-4393-a74d-7846bfb24434.png"} />
        <meta property="article:published_time" content={event.publishedDate} />
        <script type="application/ld+json">
          {JSON.stringify(eventStructuredData)}
        </script>
      </Helmet>

      <Header />

      <div className="bg-rotaract-magenta w-full min-h-[180px] flex flex-col items-center pt-32 pb-8 px-4">
        <div className="w-full max-w-5xl flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1 mb-4 md:mb-0">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
              {event.title}
            </h1>
            <div className="text-pink-100 text-sm md:text-base font-medium mb-2 flex items-center gap-3 uppercase tracking-widest">
              <CalendarDays size={16} className="inline mr-1 opacity-70" />
              {event.date} &nbsp; &bull; &nbsp;
              <span className="font-bold flex items-center">
                <MapPin size={16} className="inline mr-1 opacity-70" />
                {event.location}
              </span>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-[330px] mx-auto relative rounded-lg bg-white shadow-lg overflow-hidden aspect-auto">
            <img
              src={event.image || defaultBannerImage}
              alt={event.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#010101cc] to-transparent py-2 px-4">
              <span className="text-yellow-300 text-xs font-bold tracking-widest uppercase">
                {event.isFeatured ? 'Featured Event' : 'Event'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="bg-[#fafbff] py-10 px-3">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">

          {/* Lead Paragraph */}
          <section>
            <h2 className="sr-only">Event Introduction</h2>
            <p className="text-[#232b3d] text-base md:text-lg mb-6">
              <strong>
                {event.description.split('.')[0]}.
              </strong>
              {event.description.split('.').length > 1 &&
                ` ${event.description.split('.').slice(1).join('.')}`
              }
            </p>
          </section>

          {/* Objective / Details / Goals */}
          {event.objectiveDetails && event.objectiveDetails.length > 0 && (
            <section>
              <h3 className="text-[#232b3d] text-lg font-semibold mb-3">Objective/Details/Goals of the Event</h3>
              <Card className="bg-[#f6f3fa] border-none py-6 px-4 md:px-8">
                <ul className="space-y-4 pl-4 md:pl-8 relative">
                  {/* vertical pink line for timeline effect */}
                  <span className="absolute left-1.5 top-1 h-[83%] w-1 bg-[#D41A69] rounded-full opacity-20 hidden md:block"></span>

                  {event.objectiveDetails.map((detail, index) => (
                    <li key={index} className="flex gap-3 items-start relative">
                      <span className="mt-1">
                        <LayoutList size={18} strokeWidth={2.5} className="text-[#D41A69]" />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>
          )}

          {/* More Info Section */}
          {event.moreInfo && (
            <section>
              <h3 className="text-[#232b3d] text-lg font-semibold mb-3">More Info About the Event</h3>
              <p className="text-[#232b3d]">{event.moreInfo}</p>
            </section>
          )}

          {/* More Details in colored card */}
          {event.additionalDetails && event.additionalDetails.length > 0 && (
            <section>
              <Card className="bg-[#fef3fa] border-none py-6 px-4 md:px-8">
                <h4 className="text-[#D41A69] font-semibold mb-3">More Details About the Event</h4>
                <ul className="pl-4 space-y-3">
                  {event.additionalDetails.map((detail, index) => (
                    <li key={index} className="flex gap-2 items-start">
                      <span className="mt-1">
                        <LayoutList size={16} className="text-[#D41A69]" />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>
          )}

          {/* Closing */}
          <section>
            <h3 className="text-[#232b3d] text-lg font-semibold mb-3">Closing Details</h3>
            <p className="text-[#232b3d] mb-8">{event.closingDetails}</p>

            {event.eventUrl && (
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href={event.eventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full md:w-auto"
                >
                  <Button className="w-full md:w-auto px-6 py-3 rounded-full bg-[#16478E] hover:bg-[#0e3266] text-white text-base font-medium shadow transition">
                    VISIT EVENT PAGE OR REGISTRATION FORM
                  </Button>
                </a>

                {event.facebookPageUrl && (
                  <a
                    href={event.facebookPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full md:w-auto"
                  >
                    <Button className="w-full md:w-auto px-6 py-3 rounded-full bg-[#16478E] hover:bg-[#0e3266] text-white text-base font-medium shadow transition">
                      VISIT FACEBOOK PAGE
                    </Button>
                  </a>
                )}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Events */}
      <section className="bg-[#f6f3fa] py-10 px-3">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row items-center justify-between mb-8">
            <h2 className="text-[#D41A69] text-2xl font-bold">Events</h2>
            <div className="flex gap-2">
              <Button
                size="icon"
                className="bg-[#FFD9EC] text-[#D41A69] hover:bg-[#fccdea] shadow-none border border-[#FFD9EC]"
                aria-label="Prev"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                size="icon"
                className="bg-[#FFD9EC] text-[#D41A69] hover:bg-[#fccdea] shadow-none border border-[#FFD9EC]"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

          {isEventsLoading ? (
            <div className="min-h-[300px] flex items-center justify-center">
              <div className="animate-pulse w-12 h-12 rounded-full bg-gray-200"></div>
            </div>
          ) : (
            <div className="grid gap-7 grid-cols-1 md:grid-cols-3">
              {events.slice(0, 3).map((event: Event) => (
                <Card
                  key={event.id}
                  className="rounded-lg overflow-hidden bg-white shadow-md border border-[#f1e9fc] flex flex-col transition hover:shadow-lg"
                >
                  <div className="aspect-[4/3] bg-gray-200 w-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start py-4 px-5">
                    <div className="uppercase tracking-wider text-sm text-gray-400 mb-2">
                      {event.date}
                    </div>
                    <div className="text-lg font-semibold text-gray-700 mb-3">
                      {event.title}
                    </div>
                    <Link to={`/event/${event.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-[#16478E]/30 hover:bg-[#f7f3ff] rounded-full text-[#16478E] font-medium py-2 mt-auto"
                      >
                        VIEW EVENT
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="mt-10 flex justify-center">
            <Link to="/our-programs-and-activities">
              <Button className="bg-[#16478E] hover:bg-[#0e3266] text-white rounded-full px-8 py-6 h-auto font-medium">
                VIEW CALENDAR OF ACTIVITIES
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OurProgramsAndActivitiesDetail;
