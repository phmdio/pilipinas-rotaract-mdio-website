import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const districtData = [
  { 
    id: '3770', 
    color: '#F6A81C',
    image: '/assets/district/3770.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3780', 
    color: '#16478E',
    image: '/assets/district/3780.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3790', 
    color: '#00A2E1',
    image: '/assets/district/3790.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3800', 
    color: '#003366',
    image: '/assets/district/3800.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3810', 
    color: '#F47621',
    image: '/assets/district/3810.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3820', 
    color: '#8E288F',
    image: '/assets/district/3820.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3830', 
    color: '#0D9648',
    image: '/assets/district/3830.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3850', 
    color: '#E22626',
    image: '/assets/district/3850.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3860', 
    color: '#66819A',
    image: '/assets/district/3860.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3870', 
    color: '#00ACBB',
    image: '/assets/district/3870.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
];

const InfoCenter = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesPerView = {
    mobile: 2,
    tablet: 5,
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
    <section id="info-center" className="relative py-0 overflow-hidden bg-cover" style={{ backgroundImage: 'url("/assets/magenta-wave-background.png")' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32" ref={ref}>
        <div className={cn(
          "text-white mb-12 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <h2 className="text-4xl font-bold mb-2">Our Information Center</h2>
          <h3 className="text-2xl font-medium mb-6">Member Philippine Districts</h3>
          <p className="text-white/90 max-w-3xl mb-8">
            Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man batch hella bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun.
          </p>
        </div>
        
        <div className={cn(
          "relative transition-all duration-500 delay-100 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
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
              districtData.map((district, index) => (
                <DistrictCard key={district.id} district={district} index={index} />
              ))
            )}
          </div>
          
          <div className="flex justify-start mt-10">
            <Button 
              className="bg-[#003366] hover:bg-[#002244] text-white rounded-full px-8 py-6 h-auto font-medium tracking-wider text-base uppercase"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// District Card component
const DistrictCard = ({ district, index }: { district: any, index: number }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg aspect-square"
      style={{ 
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${district.image})` }}>
        <div className="absolute inset-0 opacity-75" style={{ backgroundColor: `${district.color}` }}></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <p className="text-sm font-medium mb-1 opacity-90">{district.description}</p>
        <h4 className="text-5xl font-bold">{district.id}</h4>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default InfoCenter;
