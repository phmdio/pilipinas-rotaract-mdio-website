import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

const TeamSectionGrid = () => {
  const teamMembers: TeamMember[] = [
    { name: 'Maria Santos', role: 'District 3770 Representative' },
    { name: 'Carlos Reyes', role: 'District 3780 Representative' },
    { name: 'Isabella Cruz', role: 'District 3790 Representative' },
    { name: 'Gabriel Lim', role: 'District 3800 Representative' },
    { name: 'Sofia Tan', role: 'District 3810 Representative' },
    { name: 'Miguel Rodriguez', role: 'District 3820 Representative' },
    { name: 'Camille Aquino', role: 'District 3830 Representative' },
    { name: 'Rafael Mendoza', role: 'District 3850 Representative' },
    { name: 'Patricia Garcia', role: 'District 3860 Representative' },
    { name: 'Antonio Torres', role: 'District 3870 Representative' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-rotaract-magenta mb-8">District Representatives</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSectionGrid;
