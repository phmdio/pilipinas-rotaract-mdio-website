
import React from "react";
import { Button } from "@/components/ui/button";

const FeaturedGridCard = ({ event }: { event: any }) => {
  return (
    <div className="flex flex-col h-full bg-[#204a8a] rounded-lg overflow-hidden shadow-md">
      {/* Image */}
      <div className="h-[180px] w-full">
        <img
          src={event.image}
          alt={event.title}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-6 text-white">
        <div>
          <p className="font-medium text-base opacity-90 mb-2">{event.date}</p>
          <h3 className="font-bold text-lg mb-2">{event.title}</h3>
          <p className="text-white/90 mb-5">{event.description}</p>
        </div>
        <Button
          variant="outline"
          className="text-white border-white bg-transparent hover:bg-white/10 w-fit px-8"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};

export default FeaturedGridCard;
