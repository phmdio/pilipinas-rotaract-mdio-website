
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
    </section>
  );
};

export default StatisticsSection;
