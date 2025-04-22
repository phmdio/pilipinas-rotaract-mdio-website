import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeaturedEvent } from "@/lib/contentful";

const FeaturedEventCard = ({ event }: { event: FeaturedEvent }) => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-[#204a8a] rounded-lg overflow-hidden shadow-md">
      {/* Image */}
      <div className="md:w-1/2 w-full min-h-[220px]">
        <img
          src={event.image}
          alt={event.title}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col justify-center p-8 md:w-1/2 w-full text-white">
        <p className="font-medium text-base opacity-90 mb-2">{event.date}</p>
        <h3 className="font-bold text-2xl mb-3">{event.title}</h3>
        <p className="text-white/90 mb-5">{event.description}</p>
        <Link to={`/event/${event.slug}`}>
          <Button
            variant="outline"
            className="text-white border-white bg-transparent hover:bg-white/10 w-fit px-8 mt-2"
          >
            LEARN MORE
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedEventCard;
