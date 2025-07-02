import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { StaffMember } from '@/lib/contentful';

interface StaffSectionProps {
  staffMembers: StaffMember[];
  rotaryYear: string;
}

const StaffSection = ({ staffMembers, rotaryYear }: StaffSectionProps) => {
  if (!staffMembers.length) return null;

  // Define the team order
  const teamOrder = [
    'GOVERNANCE AND SUPPORT TEAM',
    'PROGRAMS TEAM',
    'INFORMATION AND COMMUNICATIONS TEAM',
    'MEMBERSHIP ENGAGEMENT TEAM',
    'LEARNING AND DEVELOPMENT TEAM'
  ];

  // Group staff members by team
  const staffByTeam = staffMembers.reduce((acc, member) => {
    const team = member.team || 'OTHER';
    if (!acc[team]) {
      acc[team] = [];
    }
    acc[team].push(member);
    return acc;
  }, {} as Record<string, StaffMember[]>);

  // Sort teams according to the defined order
  const sortedTeams = teamOrder.filter(team => staffByTeam[team]);
  
  // Add any teams not in the predefined order at the end
  const otherTeams = Object.keys(staffByTeam).filter(team => !teamOrder.includes(team));
  const allTeams = [...sortedTeams, ...otherTeams];
  
  return (
    <section className="py-16 bg-rotaract-magenta/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-rotaract-magenta mb-2">Our Staff</h2>
          <p className="text-sm text-black mb-4">{rotaryYear}</p>
          <Separator className="bg-rotaract-magenta/20 my-6" />
          <p className="text-black/80 mb-8 max-w-3xl">
            Our dedicated staff members support all MDIO operations and provide administrative assistance to ensure smooth execution of our programs and initiatives.
          </p>
        </div>
        
        {allTeams.map((teamName) => (
          <div key={teamName} className="mb-16 last:mb-0">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-rotaract-magenta mb-4">
                {teamName}
              </h3>
              <Separator className="bg-rotaract-magenta/10" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {staffByTeam[teamName].map((member) => (
                <Card key={member.id} className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-start">
                      <Avatar className="w-full h-auto aspect-square mb-4 rounded-none bg-gray-100">
                        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold text-rotaract-magenta text-lg mb-1">{member.name}</h4>
                      <p className="text-sm text-black mb-1">{member.role}</p>
                      <p className="text-sm text-black mb-1">{member.district}</p>
                      <p className="text-sm text-black/80">{member.club}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaffSection;
