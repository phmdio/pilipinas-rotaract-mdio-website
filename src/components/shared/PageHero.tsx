
import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  backgroundImage: string;
  className?: string;
  overlay?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  backgroundImage,
  className,
  overlay = true 
}) => {
  return (
    <section className="relative h-96 flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url("${backgroundImage}")` }}
        />
        {overlay && <div className="absolute inset-0 bg-black/20" />}
      </div>
      
      {/* Content */}
      <div className={cn(
        "relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white z-10",
        className
      )}>
        <h1 className="text-5xl sm:text-6xl font-bold text-start text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHero;
