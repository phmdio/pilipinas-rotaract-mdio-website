
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Director {
  name: string;
  title: string;
  district: string;
  club: string;
  image?: string;
}

const BoardOfDirectorsSection = () => {
  const directors: Director[] = [
    {
      name: "Justin Curtis",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Janine Bazar",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Marinjoe Phillip",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Shyron Lubis",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Crisostomo Burro",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Karlynn Goose",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Allison Siphron",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Angel Donin",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Jakob Rhod Madsen",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
    {
      name: "Ryan Donin",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of San Jose Del Monte"
    },
  ];

  return (
    <section className="py-16 bg-rotaract-magenta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-2">Our Board of Directors</h2>
        <p className="text-sm text-white/90 mb-4">Rotary Year 2023-2024</p>
        <p className="text-white/90 mb-12 max-w-3xl">
          Meet our dedicated Board of Directors who provide strategic guidance and leadership to strengthen Rotaract across the Philippines.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {directors.map((director, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <Avatar className="w-full h-auto aspect-square mb-4 rounded-none">
                <AvatarImage src={director.image || "/placeholder.svg"} alt={director.name} className="object-cover" />
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
