import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { getFeaturedEvents, programsAndActivitiesKeys, fallbackFeaturedEvents } from '@/lib/contentful';
import { Link } from 'react-router-dom';
import { generateSlugFromTitle } from '@/utils/string';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Fetch featured events from Contentful
  const { 
    data: programs = fallbackFeaturedEvents,
    isLoading,
  } = useQuery({
    queryKey: programsAndActivitiesKeys.featuredEvents,
    queryFn: getFeaturedEvents,
  });

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(programs.length / 3);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section id="programs" className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={cn(
          "flex justify-between items-center mb-4 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <h2 className="text-4xl font-bold text-[#D41A69]">Programs and Activities</h2>
          <div className="flex gap-2">
            <button 
              onClick={handlePrevPage}
              className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-sm"
              aria-label="Previous slide"
              disabled={isLoading || programs.length <= 3}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNextPage}
              className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-sm"
              aria-label="Next slide"
              disabled={isLoading || programs.length <= 3}
            >
              <ChevronRight size={24} />
            </button>
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
        ) : programs.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[400px] bg-gray-50 rounded-lg border border-gray-200">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Available Yet</h3>
            <p className="text-gray-500 text-center max-w-md">
              We're currently planning exciting events and activities. Check back soon for updates!
            </p>
          </div>
        ) : (
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 opacity-0 translate-y-4",
            inView && "opacity-100 translate-y-0"
          )}>
            {programs.slice(currentPage * 3, (currentPage * 3) + 3).map((program) => (
              <div key={program.id} className="flex flex-col h-full bg-[#f0f8ff] rounded-md overflow-hidden">
                <p className="text-gray-600 font-medium p-4">{program.date}</p>
                <div 
                  className="relative h-[300px] overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredId(program.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className={cn(
                      "absolute inset-0 flex flex-col justify-center p-6 bg-[#D41A69]/80 transition-opacity duration-300",
                      hoveredId === program.id ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <h3 className="text-3xl font-bold mb-4 text-white">{program.title}</h3>
                    <p className="text-base text-white mb-2">{program.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <Link to={`/event/${generateSlugFromTitle(program.title)}`}>
                    <Button 
                      className="w-full bg-[#16478E] text-white hover:bg-blue-800 rounded-full"
                    >
                      VIEW EVENT
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className={cn(
          "mt-12 flex justify-start transition-all duration-500 delay-300 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <Link to="/our-programs-and-activities">
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
