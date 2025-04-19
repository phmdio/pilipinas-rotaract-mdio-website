
import { FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import AutoScrollCarousel from '@/components/shared/AutoScrollCarousel';
import { useAnimation } from '@/hooks/use-animation';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';

const FoundationSection = () => {
  const { ref, isVisible } = useAnimation();
  
  const carouselImages = [
    "/assets/masquerade.png",
    "/assets/concert.png",
    "/assets/our-history.png",
  ];

  return (
    <Section 
      id="foundation" 
      className="relative min-h-screen flex items-center justify-center"
      hasOverlay={true}
      overlayOpacity="dark"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AutoScrollCarousel
          images={carouselImages}
          interval={5000}
          fullHeight={true}
          overlay={false} // Section already has overlay
          renderItem={(image, index) => (
            <div className="w-full h-full">
              <img 
                src={image} 
                alt={`Foundation background ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        />
      </div>
      
      <div 
        className="container mx-auto px-4 py-16 max-w-4xl relative text-center" 
        ref={ref}
      >
        <div className={cn(
          "transition-all duration-500 opacity-0 translate-y-4",
          isVisible && "opacity-100 translate-y-0"
        )}>
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Rotary Foundation Giving</h2>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-lg text-white/90 mb-12">
              Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man batch hella bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun.
            </p>
          </div>
          
          <div className="mb-16">
            <a 
              href="/under-construction" 
              className="inline-block bg-[#FF9500] text-white font-medium uppercase tracking-wider px-10 py-4 rounded-full hover:bg-opacity-90 transition-all text-lg"
            >
              DONATE TO THE ROTARY FOUNDATION
            </a>
          </div>
          
          <div className="mt-24">
            <h3 className="text-2xl font-medium text-white mb-6">Follow us:</h3>
            <div className="flex justify-center space-x-10">
              <a href="https://www.facebook.com/PilipinasRotaractMDIO" target="_blank" className="text-white hover:opacity-80 transition-all">
                <FacebookIcon size={36} />
              </a>
              <a href="https://www.instagram.com/phrotaractmdio" target="_blank" className="text-white hover:opacity-80 transition-all">
                <InstagramIcon size={36} />
              </a>
              <a href="https://www.youtube.com/@PilipinasRotaractMDIO" target="_blank" className="text-white hover:opacity-80 transition-all">
                <YoutubeIcon size={36} />
              </a>
              <a href="https://www.tiktok.com/@phrotaractmdio" target="_blank" className="text-white hover:opacity-80 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://x.com/PHRotaractMDIO" target="_blank" className="text-white hover:opacity-80 transition-all">
                <TwitterIcon size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FoundationSection;
