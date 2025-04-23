import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { BoardMember } from '@/lib/contentful';

interface BoardOfDirectorsSectionProps {
  directors: BoardMember[];
}

const BoardOfDirectorsSection = ({ directors }: BoardOfDirectorsSectionProps) => {
  if (!directors.length) return null;
  
  return (
    <section className="py-16 bg-rotaract-magenta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-2">Our Board of Directors</h2>
        <p className="text-sm text-white/90 mb-4">Rotary Year 2023-2024</p>
        <Separator className="bg-white/20 my-6" />
        <p className="text-white/90 mb-12 max-w-3xl">
          Meet our dedicated Board of Directors who provide strategic guidance and leadership to strengthen Rotaract across the Philippines.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {directors.map((director) => (
            <div key={director.id} className="flex flex-col items-start text-left">
              <Avatar className="w-full h-auto aspect-square mb-4 rounded-none">
                <AvatarImage src={director.image} alt={director.name} className="object-cover" />
                <AvatarFallback className="text-2xl">
                  {director.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-white text-lg mb-1">{director.name}</h3>
              <p className="text-sm text-white/90 mb-1">{director.title}</p>
              <p className="text-sm text-white/90 mb-1">{director.district}</p>
              <p className="text-sm text-white/80">{director.club}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectorsSection;
