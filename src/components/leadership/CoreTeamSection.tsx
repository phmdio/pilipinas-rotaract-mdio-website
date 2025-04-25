import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LeadershipChair } from '@/lib/contentful';
import { Link } from 'react-router-dom';

interface CoreTeamSectionProps {
  chair?: LeadershipChair;
}

const CoreTeamSection = ({ chair }: CoreTeamSectionProps) => {
  if (!chair) return null;
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-full">
          <h2 className="text-rotaract-magenta text-4xl font-bold mb-2">Our Chair</h2>
          <p className="text-sm text-black mb-4">Rotary Year 2023-2024</p>
          <Separator className="bg-rotaract-magenta/20 my-6" />
          <p className="text-black/80 mb-12 max-w-3xl">
            The MDIO Chair leads with vision and dedication, working closely with District Rotaract Representatives to strengthen Rotaract across the Philippines while fostering collaboration and innovation across all districts.
          </p>
        </div>

        <Card className="max-w-full border-0 rounded-lg overflow-hidden shadow-md">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="w-full md:w-1/4">
                <img 
                  src={chair.image}
                  alt={chair.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-3/4 p-8 bg-white">
                <h3 className="text-2xl font-bold mb-1">{chair.name}</h3>
                <p className="text-black mb-6">{chair.title}</p>
                <Separator className="my-4 bg-rotaract-magenta/20 w-full" />
                <p className="text-black/80 mb-8">
                  {chair.description}
                </p>
                <Link to="/our-chair">
                  <Button 
                    variant="default"
                    className="bg-rotaract-blue hover:bg-rotaract-darkblue text-white w-full md:w-auto rounded-full"
                  >
                    LEARN MORE ABOUT OUR CHAIR
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CoreTeamSection;

