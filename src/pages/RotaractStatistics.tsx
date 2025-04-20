import React from 'react';
import { Helmet } from 'react-helmet-async';
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
    <div className={`md:flex items-center ${reverse ? 'md:flex-row-reverse' : ''} bg-white/5 rounded-lg overflow-hidden`}>
      <div className="flex-1 p-4 md:p-8 bg-[#0F3B7F] text-white">
        <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
        <p className="text-white/80 text-sm md:text-base">{description}</p>
      </div>
      <div className={`w-full md:w-[400px] py-8 md:h-[300px] flex flex-col items-center justify-center bg-rotaract-magenta text-white`}>
        <div className="mb-4">
          {icon}
        </div>
        <div className="text-4xl md:text-6xl font-bold">{number}</div>
        <div className="text-base md:text-lg mt-2">{title}</div>
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

      <main>
        <div className="pt-24 md:pt-36 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-rotaract-magenta">Rotaract Statistics</h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 text-justify">
              It has always been a dream for the Philippine District Rotaract Representatives (DRRs) to establish a Multi-District Information Organization ever since. There were numerous generations of DRRs who tried to create such an organization. But that dream had just begun to realize when the Philippine Rotaract was given a chance to host the 3rd Asia Pacific Regional Rotaract Conference (APRRC) in 2006. During that time, the DRRs worked as one as they met various challenges while planning and preparing for the important event. The successful hosting of APRRC Pilipinas became the strongest force that made the Philippine MDIO into a reality.
            </p>

            <div className="space-y-6 md:space-y-8">
              <StatCard
                number="170K"
                title="Rotaract Around the World"
                description="Hipster ipsum tattooed brunch I'm baby. Schlitz seitan listicle mixtape boys trust vice. Occupy tbh street brunch keffiyeh bicycle diy blog banjo fingerstache tote on locavore coffee pabst. Vibecession plant scenester affogato yr pinterest cred. Mug freegan leggings chicken booth pabst direct biodiesel them. Mixtape organic cornhole selvage big a mumblecore. Crucifix lo-fi tbh pour-over goth aesthetic."
                icon={<img src="/assets/rotaract_around_the_world.svg" alt="Rotaract Around the World" className="w-16 h-16 md:w-auto md:h-auto" />}
              />

              <StatCard
                number="800"
                title="Rotaract Clubs in the District"
                description="Hipster ipsum tattooed brunch I'm baby. Schlitz seitan listicle mixtape boys trust vice. Occupy tbh street brunch keffiyeh. Bicycle diy blog banjo fingerstache tote on locavore coffee pabst. Vibecession plant scenester affogato yr pinterest cred. Mug freegan leggings chicken booth pabst direct biodiesel them. Mixtape organic cornhole selvage big a mumblecore. Crucifix lo-fi tbh pour-over goth aesthetic."
                icon={<img src="/assets/rotaract_clubs_in_the_district.svg" alt="Rotaract Clubs in the District" className="w-16 h-16 md:w-auto md:h-auto" />}
                reverse
              />

              <StatCard
                number="15K"
                title="Rotaract Members in the Philippines"
                description="Hipster ipsum tattooed brunch I'm baby. Schlitz seitan listicle mixtape boys trust vice. Occupy tbh street brunch keffiyeh. Bicycle diy blog banjo fingerstache tote on locavore coffee pabst. Vibecession plant scenester affogato yr pinterest cred. Mug freegan leggings chicken booth pabst direct biodiesel them. Mixtape organic cornhole selvage big a mumblecore. Crucifix lo-fi tbh pour-over goth aesthetic."
                icon={<img src="/assets/rotaract_members_in_the_philippines.svg" alt="Rotaract Members in the Philippines" className="w-16 h-16 md:w-auto md:h-auto" />}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RotaractStatistics;
