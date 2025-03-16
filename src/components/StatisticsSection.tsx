
import { useInView } from 'react-intersection-observer';
import { Users, Globe, Star, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  {
    id: 1,
    value: '170K',
    label: 'Members Worldwide',
    icon: Users,
  },
  {
    id: 2,
    value: '800',
    label: 'Philippine Clubs',
    icon: Globe,
  },
  {
    id: 3,
    value: '15K',
    label: 'Active Projects',
    icon: Star,
  },
];

const StatisticsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="statistics" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-rotaract-magenta text-white overflow-hidden">
      {/* Wave top divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto pt-12" ref={ref}>
        <div className={cn(
          "text-center mb-12 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <h2 className="text-3xl font-bold mb-4">Rotaract Statistics</h2>
          <p className="text-white/90 max-w-3xl mx-auto">
            Our global impact continues to grow through committed members and meaningful projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className={cn(
                "flex flex-col items-center transition-all duration-500 opacity-0 translate-y-4",
                inView && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 rounded-full bg-white/10 mb-4">
                <stat.icon size={32} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "text-center transition-all duration-500 delay-300 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <button className="bg-white text-rotaract-magenta px-6 py-3 rounded-md font-medium transition-all hover:bg-white/90">
            Learn More
          </button>
        </div>
      </div>
      
      {/* The Rotary Foundation Giving section */}
      <div className="relative mt-16">
        {/* Magenta wave divider */}
        <div className="absolute -top-1 left-0 w-full overflow-hidden z-10">
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
        
        <div className="bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8 relative" 
             style={{ 
               backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/7afa51f9-9c8a-492e-8284-6f45c494e982.png')",
               paddingTop: "5rem",
               paddingBottom: "5rem"
             }}>
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">The Rotary Foundation Giving</h2>
              <div className="w-full max-w-xl h-0.5 bg-white mb-6"></div>
              <p className="text-white/90 mb-8">
                Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man batch hella bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun.
              </p>
              <a href="#" className="inline-block bg-[#FF9500] text-white font-medium uppercase tracking-wider px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
                Donate to the Rotary Foundation
              </a>
              
              <div className="mt-16">
                <h3 className="text-xl font-medium text-white mb-4">Follow us:</h3>
                <div className="flex space-x-6">
                  <a href="#" className="bg-white rounded-full p-3 inline-flex items-center justify-center hover:opacity-90 transition-all">
                    <Facebook size={24} className="text-[#1877F2]" />
                  </a>
                  <a href="#" className="bg-white rounded-full p-3 inline-flex items-center justify-center hover:opacity-90 transition-all">
                    <Instagram size={24} className="text-[#E4405F]" />
                  </a>
                  <a href="#" className="bg-white rounded-full p-3 inline-flex items-center justify-center hover:opacity-90 transition-all">
                    <Youtube size={24} className="text-[#FF0000]" />
                  </a>
                  <a href="#" className="bg-white rounded-full p-3 inline-flex items-center justify-center hover:opacity-90 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000" stroke="none">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-white rounded-full p-3 inline-flex items-center justify-center hover:opacity-90 transition-all">
                    <Twitter size={24} className="text-[#1DA1F2]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
