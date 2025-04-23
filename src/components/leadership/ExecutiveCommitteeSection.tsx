import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ExecutiveCommitteeMember } from '@/lib/contentful';

interface ExecutiveCommitteeSectionProps {
  executives: ExecutiveCommitteeMember[];
}

const ExecutiveCommitteeSection = ({ executives }: ExecutiveCommitteeSectionProps) => {
  if (!executives.length) return null;
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-rotaract-magenta mb-2">Our Executive Committee</h2>
        <p className="text-sm text-black mb-4">Rotary Year 2023-2024</p>
        <Separator className="bg-rotaract-magenta/20 my-6" />
        <p className="text-black/80 mb-12 max-w-3xl">
          Our executive committee leads key initiatives and coordinates activities across all Rotaract districts in the Philippines, ensuring alignment with our strategic goals.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {executives.map((executive) => (
            <div key={executive.id} className="flex flex-col items-start">
              <Avatar className="w-full h-auto aspect-square mb-4 rounded-none bg-gray-200">
                <AvatarImage src={executive.image} alt={executive.name} className="object-cover" />
                <AvatarFallback className="text-2xl">
                  {executive.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-rotaract-magenta text-lg mb-1">{executive.name}</h3>
              <p className="text-sm text-black mb-1">{executive.title}</p>
              <p className="text-sm text-black mb-1">{executive.district}</p>
              <p className="text-sm text-black/80">{executive.club}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCommitteeSection;
