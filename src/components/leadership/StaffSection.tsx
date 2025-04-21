import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const staffMembers = [
  {
    name: "Patricia Mendoza",
    role: "Executive Assistant",
    district: "Rotary International District 3830",
    club: "Member, Rotaract Club of Manila"
  },
  {
    name: "Jose Santos",
    role: "Communications Coordinator",
    district: "Rotary International District 3780",
    club: "Member, Rotaract Club of Quezon City"
  },
  {
    name: "Maria Reyes",
    role: "Events Manager",
    district: "Rotary International District 3810",
    club: "Member, Rotaract Club of Parañaque"
  },
  {
    name: "Antonio Cruz",
    role: "Technology Officer",
    district: "Rotary International District 3800",
    club: "Member, Rotaract Club of Makati"
  },
  {
    name: "Sofia Lim",
    role: "Project Coordinator",
    district: "Rotary International District 3770",
    club: "Member, Rotaract Club of Baguio"
  },
  {
    name: "Carlos Tan",
    role: "Training Coordinator",
    district: "Rotary International District 3850",
    club: "Member, Rotaract Club of Bacolod"
  },
  {
    name: "Anna Rodriguez",
    role: "Grants Officer",
    district: "Rotary International District 3860",
    club: "Member, Rotaract Club of Cebu"
  },
  {
    name: "Miguel Santos",
    role: "Public Relations Specialist",
    district: "Rotary International District 3790",
    club: "Member, Rotaract Club of San Fernando"
  },
  {
    name: "Isabella Garcia",
    role: "Membership Coordinator",
    district: "Rotary International District 3870",
    club: "Member, Rotaract Club of Davao"
  },
];

const StaffSection = () => {
  return (
    <section className="py-16 bg-rotaract-magenta/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-rotaract-magenta mb-2">Our Staff</h2>
          <p className="text-sm text-black">Rotary Year 2023-2024</p>
          <div className="h-px bg-gray-200 w-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {staffMembers.map((member, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="flex flex-col items-start">
                  <Avatar className="w-full h-auto aspect-square mb-4 rounded-none bg-gray-100">
                    <AvatarImage src={`/placeholder.svg`} alt={member.name} className="object-cover" />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-rotaract-magenta text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-black mb-1">{member.role}</p>
                  <p className="text-sm text-black mb-1">{member.district}</p>
                  <p className="text-sm text-black/80">{member.club}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
