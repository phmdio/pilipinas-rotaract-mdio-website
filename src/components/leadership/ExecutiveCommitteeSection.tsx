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
      name: "Ana Luisa Torres",
      title: "Chairperson",
      district: "Rotary International District 3830",
      club: "Past President, Rotaract Club of Makati Business District"
    },
    {
      name: "Ramon Mercado",
      title: "Vice Chair - Luzon",
      district: "Rotary International District 3780",
      club: "Past President, Rotaract Club of University of the Philippines"
    },
    {
      name: "Marielle Santiago",
      title: "Vice Chair - Visayas",
      district: "Rotary International District 3860",
      club: "Past President, Rotaract Club of Metro Cebu"
    },
    {
      name: "Paolo Mendoza",
      title: "Vice Chair - Mindanao",
      district: "Rotary International District 3870",
      club: "Past President, Rotaract Club of Davao City"
    },
    {
      name: "Christine Reyes",
      title: "Secretary",
      district: "Rotary International District 3800",
      club: "Past President, Rotaract Club of Manila Central"
    },
    {
      name: "Daniel Cruz",
      title: "Treasurer",
      district: "Rotary International District 3810",
      club: "Past President, Rotaract Club of Manila Bay"
    },
    {
      name: "Angelica Santos",
      title: "Communications Director",
      district: "Rotary International District 3770",
      club: "Past President, Rotaract Club of Baguio Central"
    },
    {
      name: "Marco Rodriguez",
      title: "Professional Development Chair",
      district: "Rotary International District 3820",
      club: "Past President, Rotaract Club of Batangas City"
    },
    {
      name: "Jasmine Lim",
      title: "Community Service Chair",
      district: "Rotary International District 3790",
      club: "Past President, Rotaract Club of Tarlac"
    },
    {
      name: "Roberto Garcia",
      title: "International Service Chair",
      district: "Rotary International District 3850",
      club: "Past President, Rotaract Club of Iloilo"
    },
    {
      name: "Sophia Aquino",
      title: "Youth Service Chair",
      district: "Rotary International District 3780",
      club: "Past President, Rotaract Club of Katipunan"
    },
    {
      name: "Miguel Tan",
      title: "Membership Development Chair",
      district: "Rotary International District 3830",
      club: "Past President, Rotaract Club of San Juan"
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
