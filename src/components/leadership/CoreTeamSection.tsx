
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CoreTeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-full">
          <h2 className="text-rotaract-magenta text-3xl font-bold mb-2">Our Chair</h2>
          <p className="text-sm text-gray-600 mb-8">Rotary Year 2023-2024</p>
          <p className="text-gray-600 mb-12">
            The MDIO Chair leads with vision and dedication, working closely with District Rotaract Representatives to strengthen Rotaract across the Philippines while fostering collaboration and innovation across all districts.
          </p>
        </div>

        <Card className="max-w-full border-0 rounded-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="w-full md:w-1/4">
                <img 
                  src="https://i.pravatar.cc/1500"
                  alt="Lerwin Bazar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-3/4 p-8 bg-white">
                <h3 className="text-2xl font-bold mb-1">Lerwin Bazar</h3>
                <p className="text-gray-600 mb-6">Pilipinas Multi-District Information Organization, Chair</p>
                <p className="text-gray-600 mb-8">
                  Leading with dedication and innovation, our Chair works tirelessly to strengthen Rotaract's presence and impact across the Philippines, fostering collaboration between districts and empowering the next generation of leaders.
                </p>
                <Button 
                  variant="default"
                  className="bg-rotaract-blue hover:bg-rotaract-darkblue text-white w-full md:w-auto rounded-full"
                >
                  LEARN MORE ABOUT OUR CHAIR
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CoreTeamSection;
