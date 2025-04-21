import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  inView: boolean;
}

const SectionHeading = ({ inView }: SectionHeadingProps) => {
  return (
    <div className={cn(
      "text-white mb-12 transition-all duration-500 opacity-0 translate-y-4",
      inView && "opacity-100 translate-y-0"
    )}>
      <h2 className="text-4xl font-bold mb-2">Our Information Center</h2>
      <h3 className="text-2xl font-medium mb-6">Member Philippine Districts</h3>
      <p className="text-white/90 max-w-3xl mb-8">
        Explore the diverse Rotaract districts across the Philippines, each with unique initiatives and vibrant communities of young leaders. Our Information Center provides resources, contacts, and highlights from all ten districts that make up the Pilipinas Rotaract MDIO, showcasing their impactful service projects and collaborative efforts.
      </p>
    </div>
  );
};

export default SectionHeading;
