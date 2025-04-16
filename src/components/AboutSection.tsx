import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 overflow-hidden bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8" ref={ref}>       
        {/* Tabs */}
        <div role="tablist" aria-label="About Rotaract" className="flex flex-col sm:flex-row sm:justify-start sm:space-x-8 mb-12">
          <button
            role="tab"
            aria-selected={activeTab === 'about'}
            aria-controls="about-panel"
            id="about-tab"
            className={cn(
              "text-2xl md:text-3xl font-bold transition-all duration-300 pb-2 relative mb-4 sm:mb-0",
              activeTab === 'about' 
                ? "text-rotaract-magenta border-b-4 border-rotaract-magenta" 
                : "text-pink-300 hover:text-pink-400"
            )}
            onClick={() => setActiveTab('about')}
          >
            About Us
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'stories'}
            aria-controls="stories-panel"
            id="stories-tab"
            className={cn(
              "text-2xl md:text-3xl font-bold transition-all duration-300 pb-2 relative",
              activeTab === 'stories' 
                ? "text-rotaract-magenta border-b-4 border-rotaract-magenta" 
                : "text-pink-300 hover:text-pink-400"
            )}
            onClick={() => setActiveTab('stories')}
          >
            Our Stories
          </button>
        </div>
        
        {/* Content based on active tab */}
        <div
          role="tabpanel"
          id="about-panel"
          aria-labelledby="about-tab"
          className={cn(
            "transition-all duration-500",
            activeTab === 'about' ? "block" : "hidden"
          )}
        >
          <div className={cn(
            "transition-all duration-500 opacity-0 translate-y-4",
            inView && "opacity-100 translate-y-0"
          )}>
            <p className="text-gray-700 mb-8 text-justify">
              Rotaract clubs bring together people ages 18 and older to exchange ideas with leaders in the community, develop leadership and professional skills, and have fun through service. In communities worldwide, Rotary and Rotaract members work side by side to take action through service.
            </p>
            
            {/* Image Sections */}
            <div className="space-y-8 mt-12">
              {/* Our History Section */}
              <article className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg">
                <div className="md:w-2/3">
                  <AspectRatio ratio={16/9} className="h-full">
                    <img 
                      src="/assets/our-history.png"
                      alt="Rotaract collaboration team working together" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="md:w-1/3 bg-rotaract-blue p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our History</h3>
                  <p className="text-white mb-4">
                    Learn how Rotaract evolved over the years to become what it is today. Discover our rich heritage and the milestones that have shaped our organization.
                  </p>
                  <Link to="/our-history" className="text-white font-medium underline underline-offset-2 self-start">
                    Read More
                  </Link>
                </div>
              </article>
              
              {/* Leadership Team Section */}
              <article className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg">
                <div className="md:w-2/3">
                  <AspectRatio ratio={16/9} className="h-full">
                    <img 
                      src="/assets/our-leadership.jpeg" 
                      alt="Rotaract collaboration team working together" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="md:w-1/3 bg-rotaract-magenta p-8 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Leadership Team</h3>
                  <p className="text-white mb-4">
                    Meet the dedicated individuals who guide our organization and help implement our vision across Pilipinas Rotaract.
                  </p>
                  <a href="/under-construction" className="text-white font-medium underline underline-offset-2 self-start">
                    View Team
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
        
        <div
          role="tabpanel"
          id="stories-panel"
          aria-labelledby="stories-tab"
          className={cn(
            "transition-all duration-500",
            activeTab === 'stories' ? "block" : "hidden"
          )}
        >
          <div className={cn(
            "transition-all duration-500 opacity-0 translate-y-4",
            inView && "opacity-100 translate-y-0"
          )}>
            <p className="text-gray-700 mb-8">
              Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man batch hella bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun.
            </p>
            
            <div className="space-y-8 mt-12">
              {/* Philippine Rotaract Magazine */}
              <article className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg">
                <div className="md:w-2/3">
                  <AspectRatio ratio={16/9} className="h-full">
                    <img 
                      src="/assets/concert.png" 
                      alt="Rotaract event with concert lights" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="md:w-1/3 bg-green-600 p-8 flex flex-col justify-center text-right">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Philippine Rotaract Magazine</h3>
                  <p className="text-white mb-4">
                    Hipster ipsum tattooed brunch I'm baby. Distillery bulb green whatever etsy godard vhs tumeric.
                  </p>
                </div>
              </article>
              
              {/* Ang Balangay */}
              <article className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg">
                <div className="md:w-2/3">
                  <AspectRatio ratio={16/9} className="h-full">
                    <img 
                      src="/assets/masquerade.png" 
                      alt="Rotaract members at masquerade event" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="md:w-1/3 bg-red-600 p-8 flex flex-col justify-center text-right order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ang Balangay</h3>
                  <p className="text-white mb-4">
                    Hipster ipsum tattooed brunch I'm baby. Distillery bulb green whatever etsy godard vhs tumeric.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
