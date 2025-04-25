import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Event } from "@/lib/contentful";

const EventItem = ({ event }: { event: Event }) => {
  return (
    <Link to={`/event/${event.slug}`} className="block">
      <div className="flex items-center bg-white rounded-lg shadow-sm border hover:shadow-md transition px-4 py-3 gap-4">
        {/* Image */}
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Info */}
        <div className="flex-grow min-w-0">
          <p className="text-[13px] text-[#D41A69] font-medium mb-1">
            {event.date}
          </p>
          <p className="font-bold text-base truncate">{event.title}</p>
        </div>
        {/* Arrow */}
        <div className="ml-2 flex-shrink-0">
          <ArrowRight className="text-[#D41A69]" />
        </div>
      </div>
    </Link>
  );
};

export default EventItem;
