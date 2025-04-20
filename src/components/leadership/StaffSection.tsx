
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const StaffSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-rotaract-magenta mb-8">Our Staff</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/placeholder.svg" alt="Staff member" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mb-1">Staff Name</h3>
              <p className="text-sm text-gray-600">Staff Role</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
