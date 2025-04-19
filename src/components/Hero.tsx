
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AutoScrollCarousel from '@/components/shared/AutoScrollCarousel';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Images for the right side carousel
  const rightSideImages = [
    "/assets/carousel.png",
    "/assets/carousel.png",
    "/assets/carousel.png",
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
              <AutoScrollCarousel 
                images={rightSideImages}
                interval={4000}
                indicators={true}
                renderItem={(image, index) => (
                  <div className="aspect-square w-full relative">
                    <img 
                      src={image} 
                      alt={`Rotaract members ${index + 1}`} 
                      className="relative z-10 rounded-lg shadow-xl w-full h-full object-cover"
                    />
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
