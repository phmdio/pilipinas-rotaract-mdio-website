
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Globe, Book } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StatCard = ({ 
  number, 
  title, 
  description, 
  icon,
  reverse = false 
}: { 
  number: string; 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  reverse?: boolean;
}) => {
  return (
    <div className={`flex items-center ${reverse ? 'flex-row-reverse' : ''} bg-white/5 rounded-lg overflow-hidden`}>
      <div className="flex-1 p-8 bg-[#0F3B7F] text-white">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
      <div className={`w-[400px] h-[300px] flex flex-col items-center justify-center bg-rotaract-magenta text-white`}>
        <div className="mb-4">
          {icon}
        </div>
        <div className="text-6xl font-bold">{number}</div>
        <div className="text-lg mt-2">{title}</div>
      </div>
    </div>
  );
};

const RotaractStatistics = () => {
  return (
    <>
      <Helmet>
        <title>Rotaract Statistics | Pilipinas Rotaract MDIO</title>
      </Helmet>

      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Rotaract Statistics</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            It has always been a dream for the Philippine District Rotaract Representatives (DRRs) to establish a Multi-District Information Organization ever since. There were numerous generations of DRRs who tried to create such an organization. But that dream had just begun to realize when the Philippine Rotaract was given a chance to host the 3rd Asia Pacific Regional Rotaract Conference (APRRC) in 2006. During that time, the DRRs worked as one as they met various challenges while planning and preparing for the important event. The successful hosting of APRRC Pilipinas became the strongest force that made the Philippine MDIO into a reality.
          </p>
          
          <div className="space-y-8">
            <StatCard 
              number="170K"
              title="Rotaract Around the World"
              description="Hipster ipsum tattooed brunch I'm baby. Schlitz seitan listicle mixtape boys trust vice. Occupy tbh street brunch keffiyeh bicycle diy blog banjo fingerstache tote on locavore coffee pabst. Vibecession plant scenester affogato yr pinterest cred. Mug freegan leggings chicken booth pabst direct biodiesel them. Mixtape organic cornhole selvage big a mumblecore. Crucifix lo-fi tbh pour-over goth aesthetic."
              icon={<Globe className="w-16 h-16" />}
            />
            
            <StatCard 
              number="800"
              title="Rotaract Clubs in the District"
              description="Hipster ipsum tattooed brunch I'm baby. Schlitz seitan listicle mixtape boys trust vice. Occupy tbh street brunch keffiyeh. Bicycle diy blog banjo fingerstache tote on locavore coffee pabst. Vibecession plant scenester affogato yr pinterest cred. Mug freegan leggings chicken booth pabst direct biodiesel them. Mixtape organic cornhole selvage big a mumblecore. Crucifix lo-fi tbh pour-over goth aesthetic."
              icon={<Book className="w-16 h-16" />}
              reverse
            />
            
            <StatCard 
              number="15K"
              title="Rotaract Members in the Philippines"
              description="Hipster ipsum tattooed brunch I'm baby. Schlitz seitan listicle mixtape boys trust vice. Occupy tbh street brunch keffiyeh. Bicycle diy blog banjo fingerstache tote on locavore coffee pabst. Vibecession plant scenester affogato yr pinterest cred. Mug freegan leggings chicken booth pabst direct biodiesel them. Mixtape organic cornhole selvage big a mumblecore. Crucifix lo-fi tbh pour-over goth aesthetic."
              icon={<Users className="w-16 h-16" />}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default RotaractStatistics;
