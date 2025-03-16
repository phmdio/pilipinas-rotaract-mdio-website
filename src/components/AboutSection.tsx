
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <h2 className={cn(
          "text-2xl md:text-3xl font-bold text-rotaract-magenta mb-8 transition-all duration-500 opacity-0 translate-y-4",
          inView && "opacity-100 translate-y-0"
        )}>
          About Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={cn(
            "transition-all duration-500 delay-100 opacity-0 translate-y-4",
            inView && "opacity-100 translate-y-0"
          )}>
            <p className="text-gray-700 mb-4">
              Rotaract clubs bring together people ages 18 and older to exchange ideas with leaders in the community, develop leadership and professional skills, and have fun through service.
            </p>
            <p className="text-gray-700 mb-4">
              In communities worldwide, Rotary and Rotaract members work side by side to take action through service. From big cities to rural villages, Rotaract is changing communities like yours.
            </p>
            <p className="text-gray-700">
              Pilipinas Rotaract brings together all Rotaract clubs across the Philippines, fostering collaboration and amplifying our impact on communities nationwide.
            </p>
          </div>
          
          <div className={cn(
            "grid grid-cols-2 gap-4 transition-all duration-500 delay-200 opacity-0 translate-y-4",
            inView && "opacity-100 translate-y-0"
          )}>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Rotaract collaboration" 
                className="rounded-lg shadow-md aspect-video object-cover"
              />
            </div>
            <div className="bg-rotaract-blue rounded-lg p-6 text-white flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">Our History</h3>
              <p className="text-sm">Learn how Rotaract evolved over the years to become what it is today.</p>
              <button className="mt-4 text-sm font-medium underline underline-offset-2">Read More</button>
            </div>
            <div className="bg-rotaract-magenta rounded-lg p-6 text-white flex flex-col justify-center col-span-1">
              <h3 className="text-xl font-semibold mb-2">Our Leadership Team</h3>
              <p className="text-sm">Meet the dedicated individuals who guide our organization.</p>
              <button className="mt-4 text-sm font-medium underline underline-offset-2">View Team</button>
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="Rotaract meeting"
                className="rounded-lg shadow-md aspect-video object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
