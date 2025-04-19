
import { FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import AutoScrollCarousel from '@/components/shared/AutoScrollCarousel';
import { useAnimation } from '@/hooks/use-animation';

const FoundationSection = () => {
  const { ref, isVisible } = useAnimation();
  
  // Background carousel images
  const carouselImages = [
    "/assets/carousel.png",
    "/assets/concert.png",
    "/assets/masquerade.png",
    "/assets/our-history.png",
  ];

  return (
    <section id="foundation" className="relative">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AutoScrollCarousel
          images={carouselImages}
          interval={5000}
          fullHeight={true}
          renderItem={(image, index) => (
            <div className="w-full h-full">
              <img 
                src={image} 
                alt={`Foundation background ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            </div>
          )}
        />
      </div>
      
      <div 
        className="py-16 px-4 sm:px-6 lg:px-8 relative z-10" 
        style={{ 
          paddingTop: "5rem",
          paddingBottom: "5rem"
        }}
        ref={ref}
      >
        <div className="max-w-7xl mx-auto">
          <div className={cn(
            "max-w-3xl transition-all duration-500 opacity-0 translate-y-4",
            isVisible && "opacity-100 translate-y-0"
          )}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">The Rotary Foundation Giving</h2>
            <div className="w-full max-w-xl h-0.5 bg-white mb-6"></div>
            <p className="text-gray-200 mb-8">
              Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man batch hella bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun.
            </p>
            <a href="/under-construction" className="inline-block bg-[#FF9500] text-white font-medium uppercase tracking-wider px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
              Donate to the Rotary Foundation
            </a>
            
            <div className="mt-16">
              <h3 className="text-xl font-medium text-white mb-4">Follow us:</h3>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/PilipinasRotaractMDIO" target="_blank" className="text-white hover:opacity-90 transition-all">
                  <FacebookIcon size={24} />
                </a>
                <a href="https://www.instagram.com/phrotaractmdio" target="_blank" className="text-white hover:opacity-90 transition-all">
                  <InstagramIcon size={24} />
                </a>
                <a href="https://www.youtube.com/@PilipinasRotaractMDIO" target="_blank" className="text-white hover:opacity-90 transition-all">
                  <YoutubeIcon size={24} />
                </a>
                <a href="https://www.tiktok.com/@phrotaractmdio" target="_blank" className="text-white hover:opacity-90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="https://x.com/PHRotaractMDIO" target="_blank" className="text-white hover:opacity-90 transition-all">
                  <TwitterIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
