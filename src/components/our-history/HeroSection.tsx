
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-96 flex items-end">
      {/* Carousel container */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url("/assets/our-history.png")` }}
        >
        </div>
      </div>
      
      {/* Content overlaid on carousel */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white z-10">
        <h1 className="text-5xl sm:text-6xl font-bold text-start text-white">Our History</h1>
         {/* Dark overlay */}
         <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  );
};

export default HeroSection;
