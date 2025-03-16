
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const districtData = [
  { 
    id: '3770', 
    color: '#F39C12',
    image: '/lovable-uploads/da3eab74-3776-4624-9054-81bdf47e8d38.png',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3780', 
    color: '#3498DB',
    image: '/lovable-uploads/da3eab74-3776-4624-9054-81bdf47e8d38.png',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3790', 
    color: '#2ECC71',
    image: '/lovable-uploads/da3eab74-3776-4624-9054-81bdf47e8d38.png',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3800', 
    color: '#9B59B6',
    image: '/lovable-uploads/da3eab74-3776-4624-9054-81bdf47e8d38.png',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3810', 
    color: '#E74C3C',
    image: '/lovable-uploads/da3eab74-3776-4624-9054-81bdf47e8d38.png',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3820', 
    color: '#8E44AD',
    image: '/lovable-uploads/da3eab74-3776-4624-9054-81bdf47e8d38.png',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3830', 
    color: '#16A085',
    image: '/lovable-uploads/da3eab74-3776-4624-9054-81bdf47e8d38.png',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3850', 
    color: '#E67E22',
    image: '/lovable-uploads/da3eab74-3776-4624-9054-81bdf47e8d38.png',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3860', 
    color: '#27AE60',
    image: '/lovable-uploads/da3eab74-3776-4624-9054-81bdf47e8d38.png',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3870', 
    color: '#2980B9',
    image: '/lovable-uploads/da3eab74-3776-4624-9054-81bdf47e8d38.png',
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
    <section id="info-center" className="relative py-0 bg-rotaract-magenta overflow-hidden">
      {/* Wave top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          className="relative block w-full h-[70px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.44,118.92,130.61,111.31,191.85,100.88,259.92,89.23,290.81,67.68,321.39,56.44Z"
            fill="#E30B5C"
          ></path>
        </svg>
      </div>
      
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
          
          <div className="flex justify-center mt-10">
            <Button 
              className="bg-[#003366] hover:bg-[#002244] text-white rounded-full px-8 py-6 h-auto font-medium tracking-wider text-base uppercase"
            >
              Learn More
            </Button>
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
            fill="#E30B5C"
          ></path>
        </svg>
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
        <div className="absolute inset-0" style={{ backgroundColor: `${district.color}88` }}></div>
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
