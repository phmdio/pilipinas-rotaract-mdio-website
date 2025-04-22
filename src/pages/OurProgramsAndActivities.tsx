
import React from "react";
import FeaturedEventCard from "../components/FeaturedEventCard";
import FeaturedGridCard from "../components/FeaturedGridCard";
import UpcomingEventItem from "../components/UpcomingEventItem";

const heroImage = "/lovable-uploads/ddad2c87-4b73-4256-b9f7-e07a0e1f1aba.png";

const featuredEvents = [
  {
    id: 1,
    date: "January 1, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    description:
      "Hasten ipsum tincidunt faucibus in baby. Sollicitudin laoreet molestie lacus lectus. Quisquam interdum euismod turpis. Etiam dictum turpis turpis, dignissim eget facilisis eros rhoncus eu. Duis egestas euismod sollicitudin.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    landscape: true,
  },
  {
    id: 2,
    date: "March 1, 2024",
    title: "Pilipinas Gear Awards",
    description:
      "Hasten ipsum tincidunt faucibus in baby. Sollicitudin laoreet molestie lacus lectus. Quisquam interdum euismod turpis.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    date: "March 5, 2024",
    title: "Pilipinas Rotaract Convention",
    description:
      "Hasten ipsum tincidunt faucibus in baby. Sollicitudin laoreet molestie lacus lectus. Quisquam interdum euismod turpis.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    date: "April 10, 2024",
    title: "Rotaract Branding Academy",
    description:
      "Hasten ipsum tincidunt faucibus in baby. Sollicitudin laoreet molestie lacus lectus. Quisquam interdum euismod turpis.",
    image:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    date: "April 15, 2024",
    title: "People of Action Campaign",
    description:
      "Hasten ipsum tincidunt faucibus in baby. Sollicitudin laoreet molestie lacus lectus. Quisquam interdum euismod turpis.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

const upcomingEvents = [
  {
    id: 1,
    date: "February 01, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    date: "February 03, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    date: "February 07, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    date: "February 11, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    date: "February 17, 2024",
    title: "District Rotaract Representative Elect Training Seminar",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
];

const OurProgramsAndActivities = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[280px] md:h-[320px] flex items-end">
        <img
          src={heroImage}
          alt="Program and Activities"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative w-full max-w-7xl mx-auto px-6 py-8 z-10">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
            Program and Activities
          </h1>
        </div>
      </section>

      {/* Featured Events */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-[#D41A69] text-2xl lg:text-3xl font-bold mb-6">
          Featured Events
        </h2>
        <div className="grid gap-8">
          {/* First featured event: landscape card */}
          <FeaturedEventCard event={featuredEvents[0]} />
          {/* Next four: grid, 2 columns per row, stack on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredEvents.slice(1).map((event) => (
              <FeaturedGridCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-[#D41A69] text-2xl lg:text-3xl font-bold mb-6">
          Upcoming Events
        </h2>
        <div className="flex flex-col gap-4">
          {upcomingEvents.map((event) => (
            <UpcomingEventItem key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurProgramsAndActivities;
