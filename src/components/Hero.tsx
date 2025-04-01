
import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
} from '@/components/ui/carousel';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [rightSideApi, setRightSideApi] = useState<any>(null);
  const [rightSideCurrent, setRightSideCurrent] = useState(0);

  // Images for the right side carousel
  const rightSideImages = [
    "/assets/carousel.png",
    "/assets/carousel.png",
    "/assets/carousel.png",
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-scroll functionality for right side carousel
  useEffect(() => {
    if (!rightSideApi) return;

    // Set up interval for auto-scrolling
    const interval = setInterval(() => {
      rightSideApi.scrollNext();
    }, 4000); // Auto scroll every 4 seconds

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [rightSideApi]);

  // Update current slide index when right side carousel changes
  const handleRightSideSelect = useCallback(() => {
    if (!rightSideApi) return;
    setRightSideCurrent(rightSideApi.selectedScrollSnap());
  }, [rightSideApi]);

  // Set up event listeners for the right side carousel
  useEffect(() => {
    if (!rightSideApi) return;
    
    rightSideApi.on("select", handleRightSideSelect);
    rightSideApi.on("reInit", handleRightSideSelect);
    
    return () => {
      rightSideApi.off("select", handleRightSideSelect);
      rightSideApi.off("reInit", handleRightSideSelect);
    };
  }, [rightSideApi, handleRightSideSelect]);

  return (
    <section 
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: `url('/lovable-uploads/34013148-4140-4618-9d1a-adad2f192367.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
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
          
          {/* Right side carousel */}
          <div className={cn(
            "w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-700 delay-300 opacity-0 translate-y-4",
            isLoaded && "opacity-100 translate-y-0"
          )}>
            <div className="relative mx-auto max-w-md">
              <Carousel
                setApi={setRightSideApi}
                opts={{
                  loop: true,
                  skipSnaps: false,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {rightSideImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square w-full relative">
                        <img 
                          src={image} 
                          alt={`Rotaract members ${index + 1}`} 
                          className="relative z-10 rounded-lg shadow-xl w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Right side carousel indicators */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                  {rightSideImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => rightSideApi?.scrollTo(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all bg-white bg-opacity-70",
                        rightSideCurrent === index ? "w-6" : ""
                      )}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </Carousel>
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

