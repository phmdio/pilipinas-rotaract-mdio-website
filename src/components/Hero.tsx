
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-rotaract-magenta overflow-hidden">
      {/* Background overlay with slight transparency */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E30B5C] to-[#CC0052] opacity-90"></div>
      
      {/* Background shapes */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[#E30B5C] opacity-70 transform -skew-x-12"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className={cn(
            "w-full md:w-1/2 text-white transition-all duration-700 opacity-0 translate-y-4",
            isLoaded && "opacity-100 translate-y-0"
          )}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              Welcome to
              <br />
              <span className="text-white">Pilipinas</span>
              <br />
              <span className="text-white">Rotaract</span>
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Empowering young leaders to create positive change in communities across the Philippines.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="btn-rotaract">
                Learn More
              </a>
              <a href="#contact" className="btn-rotaract-secondary">
                Join Us
              </a>
            </div>
          </div>
          
          <div className={cn(
            "w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-700 delay-300 opacity-0 translate-y-4",
            isLoaded && "opacity-100 translate-y-0"
          )}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-white/20 rounded-lg transform rotate-3 scale-105"></div>
              <img 
                src="/lovable-uploads/6d8d0de1-a332-4cb7-a5ba-0f50b8abbc30.png" 
                alt="Rotaract members at an event" 
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[70px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.44,118.92,130.61,111.31,191.85,100.88,259.92,89.23,290.81,67.68,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
