import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getStatistics, contentfulKeys, fallbackStatistics } from '@/lib/contentful';

const StatisticsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Fetch statistics from Contentful
  const { 
    data: stats = fallbackStatistics,
    isLoading 
  } = useQuery({
    queryKey: contentfulKeys.statistics,
    queryFn: getStatistics,
  });

  return (
    <section id="statistics" className="relative py-16 px-4 sm:px-6 lg:px-8  text-white overflow-hidden" style={{ backgroundImage: 'url("/assets/magenta-wave-background.png")' }}>
      <div className="max-w-7xl mx-auto pt-12" ref={ref}>
        <div className={cn(
          "text-start mb-12 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <h2 className="text-4xl font-bold mb-4">Rotaract Statistics</h2>
          <p className="text-white/90">
            Rotaract continues to grow as a global network of young leaders. These figures reflect our expanding impact across the Philippines and around the world. Each number represents passionate individuals working together to create positive change in their communities through professional development, leadership opportunities, and service projects.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-[200px]">
            <div className="animate-pulse w-12 h-12 rounded-full bg-white/20"></div>
          </div>
        ) : stats.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[200px] bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-2">Statistics Coming Soon</h3>
            <p className="text-white/80 text-center max-w-md">
              We're gathering the latest statistics about Rotaract's impact. Check back soon for updates!
            </p>
          </div>
        ) : (
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
                <div className={cn(
                  "w-48 h-48 rounded-full border-4 border-white",
                  "flex flex-col items-center justify-center",
                  "mb-4"
                )}>
                  <div className="text-white flex items-center justify-center mb-1">
                    {stat.iconUrl ? (
                      <img src={stat.iconUrl} alt={stat.label} />
                    ) : (
                      <>
                        {stat.id === '1' && (
                          <img src="/assets/rotaract_around_the_world.svg" alt="Rotaract Around the World" />
                        )}
                        {stat.id === '2' && (
                          <img src="/assets/rotaract_clubs_in_the_district.svg" alt="Rotaract Clubs in the District" />
                        )}
                        {stat.id === '3' && (
                          <img src="/assets/rotaract_members_in_the_philippines.svg" alt="Rotaract Members in the Philippines" />
                        )}
                      </>
                    )}
                  </div>
                  <h3 className="text-4xl font-bold mt-1">{stat.value}</h3>
                </div>
                <p className="text-lg text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className={cn(
          "text-start transition-all duration-500 delay-300 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <Link to="/rotaract-statistics">
            <Button
              className="bg-[#003366] hover:bg-[#002244] text-white rounded-full px-8 py-6 h-auto font-medium tracking-wider text-base uppercase"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;