
import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  // Images for the carousel
  const carouselImages = [
    "/lovable-uploads/34013148-4140-4618-9d1a-adad2f192367.png",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920",
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    // Set up interval for auto-scrolling
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [api]);

  // Update current slide index when carousel changes
  const handleSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  // Set up event listeners for the carousel
  useEffect(() => {
    if (!api) return;
    
    api.on("select", handleSelect);
    api.on("reInit", handleSelect);
    
    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api, handleSelect]);

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Carousel 
          setApi={setApi}
          opts={{
            loop: true,
            skipSnaps: false,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <img 
                  src={image}
                  alt={`Rotaract community ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Carousel indicators */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  current === index ? "bg-white w-4" : "bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className={cn(
            "w-full md:w-1/2 text-white transition-all duration-700 opacity-0 translate-y-4",
            isLoaded && "opacity-100 translate-y-0"
          )}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-1">
              Welcome to
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-white">
              Pilipinas
              <br />
              Rotaract
            </h2>
          </div>
          
          <div className={cn(
            "w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-700 delay-300 opacity-0 translate-y-4",
            isLoaded && "opacity-100 translate-y-0"
          )}>
            <div className="relative mx-auto max-w-md">
              <img 
                src="/lovable-uploads/8124ea27-b99c-4f37-8cdf-559344457e8f.png" 
                alt="Rotaract members" 
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
