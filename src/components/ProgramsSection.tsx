
import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: 1,
    title: 'Fellowship Dinner',
    description: 'Join us for our monthly fellowship dinner with Rotarians.',
    date: 'JANUARY 01, 2025',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },
  {
    id: 2,
    title: 'Professional Development Workshop',
    description: 'Workshops and seminars to build career skills and networks.',
    date: 'JANUARY 01, 2025',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
  },
  {
    id: 3,
    title: 'District Rotaract Representative Election Training Seminar',
    description: 'Hipster ipsum tattooed brunch I\'m baby. Mumblecore pug man batch hella bitters batch offal pitchfork.',
    date: 'JANUARY 01, 2025',
    image: '/lovable-uploads/f9aafe95-7dc7-4718-82dc-afd6f69cbfb7.png',
    overlayColor: 'rgba(212, 26, 105, 0.8)',
    textColor: 'white'
  },
  {
    id: 4,
    title: 'Community Service Project',
    description: 'Projects focused on improving local communities through direct action.',
    date: 'JANUARY 01, 2025',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
  },
];

const ProgramsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(programs.length / 3);
  
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
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNextPage}
              className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-sm"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className={cn(
          "w-full h-[1px] bg-gray-300 mb-8 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}></div>
        
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          {programs.slice(currentPage * 3, (currentPage * 3) + 3).map((program) => (
            <div key={program.id} className="flex flex-col h-full">
              <p className="text-gray-600 font-medium mb-4">{program.date}</p>
              <div className="relative h-[300px] mb-4 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                {program.overlayColor && (
                  <div className="absolute inset-0 flex flex-col justify-center p-6" style={{ backgroundColor: program.overlayColor }}>
                    <h3 className={`text-3xl font-bold mb-4 ${program.textColor || 'text-white'}`}>{program.title}</h3>
                    <p className={`text-base ${program.textColor || 'text-white'} mb-2`}>{program.description}</p>
                  </div>
                )}
              </div>
              {!program.overlayColor && (
                <>
                  <Button 
                    className="w-full mb-4 bg-[#f0f8ff] text-[#16478E] hover:bg-blue-50 border border-blue-100 rounded-full"
                  >
                    VIEW EVENT
                  </Button>
                </>
              )}
              {program.overlayColor && (
                <Button 
                  className="w-full mb-4 bg-[#16478E] text-white hover:bg-blue-800 rounded-full"
                >
                  VIEW EVENT
                </Button>
              )}
            </div>
          ))}
        </div>
        
        <div className={cn(
          "mt-12 flex justify-center transition-all duration-500 delay-300 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <Button 
            className="bg-[#16478E] hover:bg-[#0e3266] text-white rounded-full px-8 py-6 h-auto font-medium"
          >
            VIEW CALENDAR OF ACTIVITIES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
