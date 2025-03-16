
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const districtData = [
  { id: '3770', color: '#F39C12' }, // Orange
  { id: '3780', color: '#3498DB' }, // Blue
  { id: '3790', color: '#2ECC71' }, // Green
  { id: '3800', color: '#9B59B6' }, // Purple
  { id: '3810', color: '#E74C3C' }, // Red
  { id: '3820', color: '#8E44AD' }, // Dark Purple
  { id: '3830', color: '#16A085' }, // Teal
  { id: '3850', color: '#E67E22' }, // Dark Orange
  { id: '3860', color: '#27AE60' }, // Dark Green
  { id: '3870', color: '#2980B9' }, // Dark Blue
];

const InfoCenter = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 5,
  };
  
  const getWindowSize = () => {
    if (window.innerWidth < 640) return 'mobile';
    if (window.innerWidth < 1024) return 'tablet';
    return 'desktop';
  };
  
  const [windowSize, setWindowSize] = useState('desktop');
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };
    
    if (typeof window !== 'undefined') {
      setWindowSize(getWindowSize());
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);
  
  const totalSlides = Math.ceil(districtData.length / slidesPerView[windowSize as keyof typeof slidesPerView]);
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const getVisibleCards = () => {
    const slidesPerViewValue = slidesPerView[windowSize as keyof typeof slidesPerView];
    const start = activeSlide * slidesPerViewValue;
    return districtData.slice(start, start + slidesPerViewValue);
  };

  return (
    <section id="info-center" className="relative py-16 bg-gray-100 overflow-hidden">
      {/* Wave top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[70px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.44,118.92,130.61,111.31,191.85,100.88,259.92,89.23,290.81,67.68,321.39,56.44Z"
            fill="#f3f4f6"
          ></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12" ref={ref}>
        <div className={cn(
          "text-center mb-12 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <h2 className="text-3xl font-bold mb-4">Our Information Center</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Multiple Philippine Districts collaborate to make Rotaract a vibrant and impactful organization across the country.
          </p>
        </div>
        
        <div className={cn(
          "relative transition-all duration-500 delay-100 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Member Philippine Districts</h3>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {getVisibleCards().map((district, index) => (
              <div 
                key={district.id} 
                className="district-card" 
                style={{ 
                  backgroundColor: district.color,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30"></div>
                <div className="relative z-10">
                  <p className="text-sm font-medium mb-1">District</p>
                  <h4 className="text-3xl font-bold">{district.id}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button className="btn-rotaract text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave bottom divider */}
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

export default InfoCenter;
