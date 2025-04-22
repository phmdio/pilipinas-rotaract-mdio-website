import { BaseDistrict } from '@/lib/contentful';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DistrictCard from './DistrictCard';

interface DistrictGridProps {
  districts: BaseDistrict[];
  windowSize: 'mobile' | 'tablet' | 'desktop';
}

const DistrictGrid = ({ districts, windowSize }: DistrictGridProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slidesPerView = {
    mobile: 2,
    tablet: 5,
    desktop: 5,
  };
  
  const totalSlides = Math.ceil(districts.length / slidesPerView[windowSize]);
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const getVisibleCards = () => {
    const slidesPerViewValue = slidesPerView[windowSize];
    const start = activeSlide * slidesPerViewValue;
    return districts.slice(start, start + slidesPerViewValue);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
      {windowSize === 'mobile' ? (
        <>
          <div className="flex justify-between items-center col-span-2 mb-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          {getVisibleCards().map((district, index) => (
            <DistrictCard key={district.id} district={district} index={index} />
          ))}
        </>
      ) : (
        districts.map((district, index) => (
          <DistrictCard key={district.id} district={district} index={index} />
        ))
      )}
    </div>
  );
};

export default DistrictGrid;
