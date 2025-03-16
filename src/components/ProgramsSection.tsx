
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const programs = [
  {
    id: 1,
    title: 'Community Service',
    description: 'Projects focused on improving local communities through direct action.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },
  {
    id: 2,
    title: 'Professional Development',
    description: 'Workshops and seminars to build career skills and networks.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
  },
  {
    id: 3,
    title: 'Fellowship Events',
    description: 'Social gatherings that strengthen bonds between members.',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
  },
];

const ProgramsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="programs" className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={cn(
          "text-center mb-12 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <h2 className="text-3xl font-bold mb-4">Programs and Activities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Through various programs and activities, Rotaract members develop leadership skills, serve their communities, and build international understanding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className={cn(
                "bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 opacity-0 translate-y-4",
                inView && "opacity-100 translate-y-0",
                inView && `transition-delay-${index * 100}`
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-rotaract-blue font-medium hover:text-rotaract-darkblue transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "mt-12 text-center transition-all duration-500 delay-300 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          <button className="btn-rotaract">
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
