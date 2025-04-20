
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const BoardOfDirectorsSection = () => {
  const directors = [
    { name: "Director Name", role: "Director Role", district: "District 3810" },
    { name: "Director Name", role: "Director Role", district: "District 3810" },
    { name: "Director Name", role: "Director Role", district: "District 3810" },
    { name: "Director Name", role: "Director Role", district: "District 3810" },
    { name: "Director Name", role: "Director Role", district: "District 3810" },
    { name: "Director Name", role: "Director Role", district: "District 3810" },
    { name: "Director Name", role: "Director Role", district: "District 3810" },
    { name: "Director Name", role: "Director Role", district: "District 3810" },
    { name: "Director Name", role: "Director Role", district: "District 3810" },
    { name: "Director Name", role: "Director Role", district: "District 3810" },
  ];

  return (
    <section className="py-16 bg-rotaract-magenta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">Our Board of Directors</h2>
        <p className="text-white/90 mb-8 max-w-3xl">
          Our Board of Directors brings together experienced leaders from various districts, providing strategic guidance and oversight to ensure our organization's success.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {directors.map((director, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src="/placeholder.svg" alt={director.name} />
                <AvatarFallback>{director.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-white mb-1">{director.name}</h3>
              <p className="text-sm text-white/80 mb-1">{director.role}</p>
              <p className="text-sm text-white/60">{director.district}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectorsSection;
