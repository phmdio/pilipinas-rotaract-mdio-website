import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
const stats = [
  {
    id: 1,
    value: '170K',
    label: 'Rotaract Around the World',
  },
  {
    id: 2,
    value: '800',
    label: 'Rotaract Clubs in the District',
  },
  {
    id: 3,
    value: '15K',
    label: 'Rotaract Members in the Philippines',
  },
];

const StatisticsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
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
              <div className={cn(
                "w-48 h-48 rounded-full border-4 border-white",
                "flex flex-col items-center justify-center",
                "mb-4"
              )}>
                <div className="text-white flex items-center justify-center mb-1">
                  {stat.id === 1 && (
                    <img src="/assets/rotaract_around_the_world.svg" alt="Rotaract Around the World" />
                  )}
                  {stat.id === 2 && (
                    <img src="/assets/rotaract_clubs_in_the_district.svg" alt="Rotaract Clubs in the District" />
                  )}
                  {stat.id === 3 && (
                    <img src="/assets/rotaract_members_in_the_philippines.svg" alt="Rotaract Members in the Philippines" />
                  )}
                </div>
                <h3 className="text-4xl font-bold mt-1">{stat.value}</h3>

              </div>
              <p className="text-lg text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className={cn(
          "text-start transition-all duration-500 delay-300 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <Link to="/rotaract-statistics">
            <Button
              className="bg-[#16478E] hover:bg-[#0e3266] text-white px-8 py-6  rounded-full text-lg font-medium"
            >
              LEARN MORE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;