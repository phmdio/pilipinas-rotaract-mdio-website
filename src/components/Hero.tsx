import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
} from '@/components/ui/carousel';
import { useQuery } from '@tanstack/react-query';
import { 
  getHeroCarouselImages, 
  contentfulKeys, 
  fallbackCarouselImages,
  HeroCarouselImage
} from '@/lib/contentful';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [rightSideApi, setRightSideApi] = useState<any>(null);
  const [rightSideCurrent, setRightSideCurrent] = useState(0);

  // Fetch carousel images using React Query with extended cache times for SSG
  const { 
    data: carouselImages = fallbackCarouselImages,
    isLoading,
    isError,
  } = useQuery({
    queryKey: contentfulKeys.heroCarousel,
    queryFn: getHeroCarouselImages,
  });

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
            <div className="relative mx-auto max-w-2xl">
              {isLoading ? (
                <div className="aspect-square w-full flex items-center justify-center bg-gray-200 rounded-lg">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
              ) : isError ? (
                <div className="aspect-square w-full flex items-center justify-center bg-gray-200 rounded-lg">
                  <p className="text-gray-600 text-center px-4">
                    Couldn't load images. Please try again later.
                  </p>
                </div>
              ) : (
                <Carousel
                  setApi={setRightSideApi}
                  opts={{
                    loop: true,
                    skipSnaps: false,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {carouselImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-auto w-full relative">
                          <img 
                            src={image.imageUrl} 
                            alt={image.alt} 
                            className="relative z-10 rounded-lg shadow-xl w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {/* Right side carousel indicators */}
                  <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => rightSideApi?.scrollTo(index)}
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          rightSideCurrent === index 
                            ? "w-8 bg-white" 
                            : "w-2 bg-white/50 hover:bg-white/70"
                        )}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

