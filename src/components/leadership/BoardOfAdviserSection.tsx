
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const BoardOfAdviserSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-rotaract-magenta mb-8">Board of Advisers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/placeholder.svg" alt="Adviser" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mb-1">Adviser Name</h3>
              <p className="text-sm text-gray-600">Advisory Role</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfAdviserSection;
