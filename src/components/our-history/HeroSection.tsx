
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-96 flex items-end">
      {/* Carousel container */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url("/assets/our-history.png")` }}
        ></div>
      </div>
      
      {/* Content overlaid on carousel */}
      <div className="relative w-full mx-auto px-auto sm:px-6 lg:px-8 py-8 text-white">
        <h1 className="text-6xl sm:text-5xl font-bold text-start text-white">Our History</h1>
        {/* Dark overlay */}
        <div className="absolute w-full inset-0 bg-black/20"></div>
      </div>
    </section>
  );
};

export default HeroSection;
