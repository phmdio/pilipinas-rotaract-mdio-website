import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const BoardOfAdviserSection = () => {
  const advisers = [
    { name: "PDG Ricardo Pangilinan", role: "Senior Adviser" },
    { name: "PDG Maria Santos", role: "Youth Services Adviser" },
    { name: "PDG Roberto Cruz", role: "Programs Adviser" },
    { name: "PDG Elena Reyes", role: "International Relations Adviser" },
    { name: "PDG Carlos Medina", role: "Development Adviser" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-rotaract-magenta mb-8">Board of Advisers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {advisers.map((adviser, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/placeholder.svg" alt={adviser.name} />
                <AvatarFallback>{adviser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mb-1">{adviser.name}</h3>
              <p className="text-sm text-gray-600">{adviser.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfAdviserSection;
