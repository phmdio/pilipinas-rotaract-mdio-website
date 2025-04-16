
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const stats = [
  {
    id: 1,
    value: '170K',
    label: 'Rotaract Around the World',
    icon: '/lovable-uploads/63a8f402-8f7f-471c-bd9e-5e603c7a594a.png',
    iconPosition: 'left',
  },
  {
    id: 2,
    value: '800',
    label: 'Rotaract Clubs in the District',
    icon: '/lovable-uploads/63a8f402-8f7f-471c-bd9e-5e603c7a594a.png',
    iconPosition: 'center',
  },
  {
    id: 3,
    value: '15K',
    label: 'Rotaract Members in the Philippines',
    icon: '/lovable-uploads/63a8f402-8f7f-471c-bd9e-5e603c7a594a.png',
    iconPosition: 'right',
  },
];

const StatisticsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="statistics" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-rotaract-magenta text-white overflow-hidden">
      {/* Top curved edge */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{ borderRadius: '0 0 100% 100%' }}></div>
      
      <div className="max-w-7xl mx-auto pt-12" ref={ref}>
        <div className={cn(
          "text-center mb-12 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <h2 className="text-4xl font-bold mb-4">Rotaract Statistics</h2>
          <p className="text-white/90 max-w-3xl mx-auto">
            Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man batch hella bitters batch offal pitchfork. Crucifx fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun.
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
              <div className="relative w-36 h-36 rounded-full border-2 border-white flex items-center justify-center mb-4">
                {stat.id === 1 && (
                  <div className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                )}
                {stat.id === 2 && (
                  <div className="text-white">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.04938L9.7785 6.61511L4.79649 7.43259L8.39825 11.0145L7.5445 16.0135L12 13.6595L16.4555 16.0135L15.6018 11.0145L19.2035 7.43259L14.2215 6.61511L12 2.04938ZM12 4.31699L13.4533 7.32134L16.7123 7.86064L14.3562 10.2043L14.9188 13.4732L12 11.9522L9.0812 13.4732L9.64385 10.2043L7.28775 7.86064L10.5468 7.32134L12 4.31699Z"/>
                      <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" fill="white"/>
                    </svg>
                  </div>
                )}
                {stat.id === 3 && (
                  <div className="text-white">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" fill="white"/>
                      <path d="M12 6L13.2 9.6H17.1L14 12L15.2 15.6L12 13.2L8.8 15.6L10 12L6.9 9.6H10.8L12 6Z" fill="white"/>
                      <path d="M12 7L12.8 9.4H15.3L13.2 11L14 13.4L12 11.8L10 13.4L10.8 11L8.7 9.4H11.2L12 7Z" fill="white"/>
                    </svg>
                  </div>
                )}
                <h3 className="text-4xl font-bold absolute text-center">{stat.value}</h3>
              </div>
              <p className="text-center text-lg text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "text-center transition-all duration-500 delay-300 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <Button 
            className="bg-[#1F2D59] hover:bg-[#161F3D] text-white px-8 py-2 rounded-full text-sm font-medium"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
      
      {/* Bottom curved edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ borderRadius: '100% 100% 0 0' }}></div>
    </section>
  );
};

export default StatisticsSection;
