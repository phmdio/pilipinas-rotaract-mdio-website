
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CoreTeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6">Our Chair</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Our Chair leads with vision and dedication, guiding our organization towards its goals while fostering collaboration and innovation across all districts.
        </p>
        
        <Card className="max-w-2xl">
          <CardContent className="p-6">
            <div className="flex gap-6">
              <img 
                src="/lovable-uploads/72ccb478-ebdb-4e4f-8672-3bbfba7917f4.png"
                alt="Lerwin Bazar"
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold mb-1">Lerwin Bazar</h3>
                <p className="text-gray-600 mb-4">Multi-District Information Organization Chair</p>
                <button className="bg-rotaract-magenta text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  Contact our Chair
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CoreTeamSection;
