
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

interface ExecutiveMember {
  name: string;
  title: string;
  district: string;
  club: string;
  image?: string;
}

const ExecutiveCommitteeSection = () => {
  const executives: ExecutiveMember[] = [
    {
      name: "Tiana Bator",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Tatiana Mongo",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Jocelyn Botsch",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Meron Aminoff",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Crisostomo Burra",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Dolce Gelft",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Haylie Curtis",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Marley Aminoff",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Rayna Franci",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Agent Lipshitz",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Skylar Goose",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Aaliyah Cottons",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-rotaract-magenta mb-2">Our Executive Committee</h2>
        <p className="text-sm text-black mb-4">Rotary Year 2023-2024</p>
        <Separator className="bg-rotaract-magenta/20 my-6" />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {executives.map((executive, index) => (
            <div key={index} className="flex flex-col items-start">
              <Avatar className="w-full h-auto aspect-square mb-4 rounded-none bg-gray-200">
                <AvatarImage src={executive.image || "/placeholder.svg"} alt={executive.name} className="object-cover" />
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
