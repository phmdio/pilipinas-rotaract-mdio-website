
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { districtData } from '@/data/districtData';

const InformationCenter = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel images
  const carouselImages = [
    "/assets/district/3810.jpeg",
  ];
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);
  
  // Calculate progress percentage
  const progressPercentage = ((currentSlide + 1) / carouselImages.length) * 100;
  
  return (
    <>
      <Helmet>
        <title>Information Center | Pilipinas Rotaract MDIO</title>
        <meta name="description" content="Information Center for Pilipinas Rotaract Multi-District Information Organization" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero section with carousel */}
        <section className="relative h-96 flex items-end">
          {/* Carousel container */}
          <div className="absolute inset-0 w-full h-full">
            {carouselImages.map((image, index) => (
              <div 
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 bg-cover bg-center ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url("${image}")` }}
              />
            ))}
          </div>
          
          {/* Content overlaid on carousel */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-white">
            <h1 className="text-4xl sm:text-5xl font-bold">Our Members District</h1>
            {/* Dark overlay */}
            <div className="absolute w-full inset-0 bg-black/40"></div>
          </div>
        </section>
        
        {/* Description section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold text-rotaract-magenta mb-3">Hipster ipsum tattooed brunch I'm baby.</h2>
              <p className="text-gray-700">
                Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man bun batch hella bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>
        
        {/* Districts grid section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {districtData.map((district) => (
                <div 
                  key={district.id}
                  className="overflow-hidden flex flex-col h-[500px]"
                >
                  <div 
                    className="relative h-[350px] bg-cover bg-center" 
                    style={{ backgroundImage: `url(${district.image})` }}
                  >
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-black/50 flex items-center justify-between px-5">
                      <div className="text-white">
                        <p className="font-medium">Rotaract Clubs of Rotary</p>
                        <p className="font-medium">International District #</p>
                      </div>
                      <div className="text-white text-5xl font-bold">
                        {district.id}
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-white/30"></div>
                  <div 
                    style={{ backgroundColor: district.color }}
                    className="p-6 text-white flex-grow flex flex-col"
                  >
                    <p className="mb-5">
                      Hipster ipsum tattooed brunch I'm baby. Schlitz seitan listicle mixtape boys trust vice. Occupy tbh street brunch keffiyeh. Bicycle diy blog banjo fingerstache tote on locavore coffee pabst.
                    </p>
                    <div className="mt-auto flex flex-col justify-center">
                      <Link to={`/district/${district.id}`}>
                        <Button 
                          variant="outline" 
                          className="text-white border-white hover:bg-white/20 w-full py-2 rounded-full bg-transparent text-center"
                        >
                          LEARN MORE
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default InformationCenter;
