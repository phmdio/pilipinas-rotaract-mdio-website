
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
        Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man batch hella bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun.
      </p>
    </div>
  );
};

export default SectionHeading;
