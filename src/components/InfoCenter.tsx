import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import SectionHeading from './districts/SectionHeading';
import DistrictGrid from './districts/DistrictGrid';
import { Link } from 'react-router-dom';
import { useDistrictsQuery } from '@/hooks/useDistrictsQuery';

const InfoCenter = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const getWindowSize = () => {
    if (window.innerWidth < 640) return 'mobile';
    if (window.innerWidth < 1024) return 'tablet';
    return 'desktop';
  };
  
  const [windowSize, setWindowSize] = useState('desktop');
  
  // Fetch districts using React Query
  const { data: districts, isLoading } = useDistrictsQuery();
  
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

  return (
    <section id="info-center" className="relative py-0 overflow-hidden bg-cover" style={{ backgroundImage: 'url("/assets/magenta-wave-background.png")' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32" ref={ref}>
        <SectionHeading inView={inView} />
        
        <div className={cn(
          "relative transition-all duration-500 delay-100 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-spin h-8 w-8 border-4 border-blue-600 rounded-full border-t-transparent"></div>
            </div>
          ) : (
            <DistrictGrid 
              districts={districts} 
              windowSize={windowSize as 'mobile' | 'tablet' | 'desktop'} 
            />
          )}
          
          <div className="flex justify-start mt-10">
            <Link to="/information-center">
              <Button 
                className="bg-[#003366] hover:bg-[#002244] text-white rounded-full px-8 py-6 h-auto font-medium tracking-wider text-base uppercase"
              >
              Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCenter;
