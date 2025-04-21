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
      name: "Maria Gonzales",
      title: "District Rotaract Representative",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of Baguio"
    },
    {
      name: "Carlos Santos",
      title: "District Rotaract Representative",
      district: "Rotary International District 3780",
      club: "Past President, Rotaract Club of Quezon City"
    },
    {
      name: "Isabella Reyes",
      title: "District Rotaract Representative",
      district: "Rotary International District 3790",
      club: "Past President, Rotaract Club of Dagupan"
    },
    {
      name: "Gabriel Tan",
      title: "District Rotaract Representative",
      district: "Rotary International District 3800",
      club: "Past President, Rotaract Club of Manila"
    },
    {
      name: "Sofia Cruz",
      title: "District Rotaract Representative",
      district: "Rotary International District 3810",
      club: "Past President, Rotaract Club of Pasay"
    },
    {
      name: "Miguel Lim",
      title: "District Rotaract Representative",
      district: "Rotary International District 3820",
      club: "Past President, Rotaract Club of Lucena"
    },
    {
      name: "Camille Aquino",
      title: "District Rotaract Representative",
      district: "Rotary International District 3830",
      club: "Past President, Rotaract Club of Makati"
    },
    {
      name: "Angelo Dela Cruz",
      title: "District Rotaract Representative",
      district: "Rotary International District 3850",
      club: "Past President, Rotaract Club of Bacolod"
    },
    {
      name: "Patricia Mendoza",
      title: "District Rotaract Representative",
      district: "Rotary International District 3860",
      club: "Past President, Rotaract Club of Cebu"
    },
    {
      name: "Rafael Torres",
      title: "District Rotaract Representative",
      district: "Rotary International District 3870",
      club: "Past President, Rotaract Club of Cagayan de Oro"
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
