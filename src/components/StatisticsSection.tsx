
import { useInView } from 'react-intersection-observer';
import { Users, Globe, Star } from 'lucide-react';
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
      
      {/* Wave bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
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

export default StatisticsSection;
