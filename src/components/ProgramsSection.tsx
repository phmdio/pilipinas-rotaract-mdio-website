import { useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import {
  getFeaturedEvents,
  getEvents,
  programsAndActivitiesKeys,
  fallbackFeaturedEvents,
  fallbackEvents
} from '@/lib/contentful';
import { Link } from 'react-router-dom';
import { generateSlugFromTitle } from '@/utils/string';
import useAnalytics from '@/hooks/useAnalytics';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProgramsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { events: analyticsEvents } = useAnalytics();

  // Fetch featured events from Contentful
  const {
    data: featuredEvents = fallbackFeaturedEvents,
    isLoading: isFeaturedEventsLoading,
  } = useQuery({
    queryKey: programsAndActivitiesKeys.featuredEvents,
    queryFn: getFeaturedEvents,
  });

  // Fetch regular events from Contentful
  const {
    data: regularEvents = fallbackEvents,
    isLoading: isEventsLoading,
  } = useQuery({
    queryKey: programsAndActivitiesKeys.events,
    queryFn: getEvents,
  });

  // Merge both event lists with featured events first
  const allEvents = useMemo(() => {
    const events = [...featuredEvents];

    // Add regular events that don't duplicate featured events
    regularEvents.forEach(event => {
      if (!events.some(e => e.id === event.id)) {
        events.push(event);
      }
    });

    return events;
  }, [featuredEvents, regularEvents]);

  // State for events pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allEvents.length / itemsPerPage);

  const handlePrevPage = () => {
    analyticsEvents.buttonClick('programs-carousel-prev', { current_page: currentPage });
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNextPage = () => {
    analyticsEvents.buttonClick('programs-carousel-next', { current_page: currentPage });
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handleEventClick = (eventId: string, eventTitle: string, slug: string) => {
    analyticsEvents.linkClick(`/event/${slug}`, eventTitle, {
      event_id: eventId,
      section: 'programs-section'
    });
  };

  const isLoading = isFeaturedEventsLoading || isEventsLoading;

  return (
    <section id="programs" className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={cn(
          "flex justify-between items-center mb-4 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <h2 className="text-4xl font-bold text-[#D41A69]">Programs and Activities</h2>
          <div className="flex gap-2">
            <Button
              size="icon"
              className="bg-[#FFD9EC] text-[#D41A69] hover:bg-[#fccdea] shadow-none border border-[#FFD9EC]"
              aria-label="Previous slide"
              onClick={handlePrevPage}
              disabled={isLoading || allEvents.length <= itemsPerPage}
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              size="icon"
              className="bg-[#FFD9EC] text-[#D41A69] hover:bg-[#fccdea] shadow-none border border-[#FFD9EC]"
              aria-label="Next slide"
              onClick={handleNextPage}
              disabled={isLoading || allEvents.length <= itemsPerPage}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div className={cn(
          "w-full h-[1px] bg-gray-300 mb-8 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}></div>

        {isLoading ? (
          <div className="flex justify-center items-center h-[400px]">
            <div className="animate-pulse w-12 h-12 rounded-full bg-gray-200"></div>
          </div>
        ) : allEvents.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[400px] bg-gray-50 rounded-lg border border-gray-200">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Available Yet</h3>
            <p className="text-gray-500 text-center max-w-md">
              We're currently planning exciting events. Check back soon for updates!
            </p>
          </div>
        ) : (
          <div className={cn(
            "grid gap-7 grid-cols-1 md:grid-cols-3 transition-all duration-500 opacity-0 translate-y-4",
            inView && "opacity-100 translate-y-0"
          )}>
            {allEvents.slice(currentPage * itemsPerPage, (currentPage * itemsPerPage) + itemsPerPage).map((event) => {
              const slug = event.slug || generateSlugFromTitle(event.title);
              return (
                <Card
                  key={event.id}
                  className="rounded-lg overflow-hidden bg-white shadow-md border border-[#f1e9fc] flex flex-col transition hover:shadow-lg"
                >
                  <div className="aspect-[4/3] bg-gray-200 w-full h-[240px] flex-shrink-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start py-4 px-5 flex-grow">
                    <div className="uppercase tracking-wider text-sm text-gray-400 mb-2 line-clamp-1">
                      {event.date}
                    </div>
                    <div className="text-lg font-semibold text-gray-700 line-clamp-1">
                      {event.title}
                    </div>
                    <div className="mt-8 w-full">
                      <Link
                        to={`${event.isProcon ? `/procon` : `/event/${slug}`}`}
                        onClick={() => handleEventClick(event.id, event.title, slug)}
                        className="block w-full"
                      >
                        <Button
                          variant="outline"
                          className="w-full border-[#16478E]/30 hover:bg-[#f7f3ff] rounded-full text-[#16478E] font-medium py-2"
                        >
                          VIEW EVENT
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <div className={cn(
          "mt-12 flex justify-start transition-all duration-500 delay-300 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <Link
            to="/our-programs-and-activities"
            onClick={() => analyticsEvents.linkClick('/our-programs-and-activities', 'VIEW CALENDAR OF ACTIVITIES', { section: 'programs-section' })}
          >
            <Button
              className="bg-[#16478E] hover:bg-[#0e3266] text-white rounded-full px-8 py-6 h-auto font-medium"
            >
              VIEW CALENDAR OF ACTIVITIES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
