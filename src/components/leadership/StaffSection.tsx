
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const staffMembers = [
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
  { name: "Staff Name", role: "Staff Role", committee: "Committee Name" },
];

const StaffSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-rotaract-magenta mb-6">Our Staff</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Our dedicated staff members work tirelessly behind the scenes to ensure smooth operations and successful implementation of our initiatives.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {staffMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/placeholder.svg" alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{member.role}</p>
              <p className="text-xs text-gray-500">{member.committee}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
