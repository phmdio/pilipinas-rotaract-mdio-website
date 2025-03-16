
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('about');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-16 overflow-hidden bg-white relative">
      {/* Remove the top curved divider as it conflicts with Hero wave */}
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8" ref={ref}>
        {/* Section title with separator */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rotaract-magenta mb-4">Discover Rotaract</h2>
          <div className="flex justify-center items-center gap-4 w-full max-w-xs mx-auto">
            <Separator className="bg-rotaract-magenta h-0.5" />
            <div className="bg-rotaract-magenta h-2 w-2 rounded-full"></div>
            <Separator className="bg-rotaract-magenta h-0.5" />
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 mb-12">
          <button
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
        {activeTab === 'about' && (
          <div className={cn(
            "transition-all duration-500 opacity-0 translate-y-4",
            inView && "opacity-100 translate-y-0"
          )}>
            <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Rotaract clubs bring together people ages 18 and older to exchange ideas with leaders in the community, develop leadership and professional skills, and have fun through service. In communities worldwide, Rotary and Rotaract members work side by side to take action through service.
            </p>
            
            {/* Image Sections */}
            <div className="space-y-8 mt-12">
              {/* Our History Section */}
              <div className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg">
                <div className="md:w-2/3">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                    alt="Rotaract collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/3 bg-rotaract-blue p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our History</h3>
                  <p className="text-white mb-4">
                    Learn how Rotaract evolved over the years to become what it is today. Discover our rich heritage and the milestones that have shaped our organization.
                  </p>
                  <button className="text-white font-medium underline underline-offset-2 self-start">
                    Read More
                  </button>
                </div>
              </div>
              
              {/* Leadership Team Section */}
              <div className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg">
                <div className="md:w-2/3 order-1 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                    alt="Rotaract Leadership Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/3 bg-rotaract-magenta p-8 flex flex-col justify-center order-2 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Leadership Team</h3>
                  <p className="text-white mb-4">
                    Meet the dedicated individuals who guide our organization and help implement our vision across Pilipinas Rotaract.
                  </p>
                  <button className="text-white font-medium underline underline-offset-2 self-start">
                    View Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'stories' && (
          <div className={cn(
            "transition-all duration-500 opacity-0 translate-y-4",
            inView && "opacity-100 translate-y-0"
          )}>
            <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              From big cities to rural villages, Rotaract is changing communities like yours. Explore the stories of our members and the impact they're making across the Philippines.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1" 
                  alt="Community service project" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Community Impact</h3>
                  <p className="text-gray-700">
                    Stories of how our service projects have transformed communities and lives across the Philippines.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                  alt="Member growth" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Member Journeys</h3>
                  <p className="text-gray-700">
                    Personal stories from our members about how Rotaract has changed their lives and perspectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
