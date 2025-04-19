
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import DistrictGrid from './districts/DistrictGrid';
import { districtData } from '../data/districtData';
import { Link } from 'react-router-dom';
import Section from './shared/Section';
import SectionTitle from './shared/SectionTitle';

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
    <Section 
      id="info-center" 
      className="py-0"
      backgroundImage="/assets/magenta-wave-background.png"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32" ref={ref}>
        <div className={cn(
          "text-white mb-12 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <SectionTitle
            title="Our Information Center"
            subtitle="Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man batch hella bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art."
            color="light"
          />
        </div>
        
        <div className={cn(
          "relative transition-all duration-500 delay-100 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <DistrictGrid 
            districts={districtData} 
            windowSize={windowSize as 'mobile' | 'tablet' | 'desktop'} 
          />
          
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
    </Section>
  );
};

export default InfoCenter;
