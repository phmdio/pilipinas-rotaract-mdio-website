import React from 'react';

interface PageHeroProps {
  title: string;
  backgroundImage: string;
  carousel?: boolean;
  carouselImages?: string[];
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  backgroundImage,
  carousel = false,
  carouselImages = []
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  React.useEffect(() => {
    if (!carousel || carouselImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [carousel, carouselImages]);

  return (
    <>
      {/* Spacer div to push content below fixed header */}
      <div className="h-16 md:h-20 w-full"></div>
      
      {/* Hero content */}
      <section className="relative h-96 flex items-end">
        {/* Background image or carousel */}
        <div className="absolute inset-0 w-full h-full">
          {carousel && carouselImages.length > 0 ? (
            carouselImages.map((image, index) => (
              <div 
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 bg-cover bg-center ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url("${image}")` }}
              />
            ))
          ) : (
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url("${backgroundImage}")` }}
            />
          )}
        </div>
        
        {/* Content overlaid on background */}
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-start text-white">{title}</h1>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>
    </>
  );
};

export default PageHero; 