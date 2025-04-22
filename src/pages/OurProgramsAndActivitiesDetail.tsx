
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CalendarDays, LayoutList, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Placeholder images for upcoming events and event card
const bannerImage = "/lovable-uploads/9fd84289-5060-4393-a74d-7846bfb24434.png";
const upcomingImages = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
];

const OurProgramsAndActivitiesDetail = () => {
  return (
    <>
      <Helmet>
        <title>District Rotaract Representative Elect Training Seminar | Pilipinas Rotaract MDIO</title>
        <meta 
          name="description" 
          content="District Rotaract Representative Elect Training Seminar event details and highlights." 
        />
      </Helmet>

      <Header />

      <div className="bg-[#D41A69] w-full min-h-[180px] flex flex-col items-center pt-12 pb-8 px-4">
        <div className="w-full max-w-5xl flex flex-col md:flex-row md:items-end gap-8">
          <div className="flex-1 mb-4 md:mb-0">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
              District Rotaract Representative<br className="hidden md:block" /> Elect Training Seminar
            </h1>
            <div className="text-pink-100 text-sm md:text-base font-medium mb-2 flex items-center gap-3 uppercase tracking-widest">
              <CalendarDays size={16} className="inline mr-1 opacity-70" />
              September 1, 2024 &nbsp; &bull; &nbsp; <span className="font-bold">Total Province</span>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-[330px] mx-auto relative rounded-lg bg-white shadow-lg overflow-hidden aspect-[1.5/1]">
            <img 
              src={bannerImage}
              alt="District Rotaract Representative Elect Training Seminar"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#010101cc] to-transparent py-2 px-4">
              <span className="text-yellow-300 text-xs font-bold tracking-widest uppercase">Flagship Conference</span>
            </div>
          </div>
        </div>
      </div>

      <main className="bg-[#fafbff] py-10 px-3">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">

          {/* Lead Paragraph */}
          <section>
            <h2 className="sr-only">Event Introduction</h2>
            <p className="text-[#232b3d] text-base md:text-lg mb-6">
              <strong>
                Lorem ipsum dolor sit amet, Transe of food sociological headline, suit up at Cityconvene.
              </strong>
              &nbsp;Bucharest and south of town for trends admin graphic in management at scale. Summary of some of what attendees should know, what to bring, or highlights of the program. This can be 2-3 sentences.
            </p>
          </section>

          {/* Objective / Details / Goals */}
          <section>
            <h3 className="text-[#232b3d] text-lg font-semibold mb-3">Objective/Details/Goals of the Event</h3>
            <Card className="bg-[#f6f3fa] border-none py-6 px-4 md:px-8">
              <ul className="space-y-4 pl-4 md:pl-8 relative">
                {/* vertical pink line for timeline effect */}
                <span className="absolute left-1.5 top-1 h-[83%] w-1 bg-[#D41A69] rounded-full opacity-20 hidden md:block"></span>
                <li className="flex gap-3 items-start relative">
                  <span className="mt-1">
                    <LayoutList size={18} strokeWidth={2.5} className="text-[#D41A69]" />
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, Transe of food sociological headline, suit up at Cityconvene. Bucharest and south of town for trends admin graphic in management at scale.
                  </span>
                </li>
                <li className="flex gap-3 items-start relative">
                  <span className="mt-1">
                    <LayoutList size={18} strokeWidth={2.5} className="text-[#D41A69]" />
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet, Transe of food sociological headline, suit up at Cityconvene. Trends admin graphic in management at scale. Summary of some of what attendees should know, what to bring, or highlights of the program.
                  </span>
                </li>
                <li className="flex gap-3 items-start relative">
                  <span className="mt-1">
                    <LayoutList size={18} strokeWidth={2.5} className="text-[#D41A69]" />
                  </span>
                  <span>
                    Higher guarantee to network with fellow DRREs &amp; gain new learnings at the flagship event!
                  </span>
                </li>
              </ul>
            </Card>
          </section>

          {/* More Info Section */}
          <section>
            <h3 className="text-[#232b3d] text-lg font-semibold mb-3">More Info About the Event</h3>
            <p className="text-[#232b3d]">
              Lorem ipsum dolor sit amet, Transe of food sociological headline, suit up at Cityconvene. Bucharest and south of town for trends admin graphic in management at scale. <br/> Trends admin graphic in management at scale. Summary of some of what attendees should know, what to bring, or highlights of the program. Always add clarity.
            </p>
          </section>

          {/* More Details in colored card */}
          <section>
            <Card className="bg-[#fef3fa] border-none py-6 px-4 md:px-8">
              <h4 className="text-[#D41A69] font-semibold mb-3">More Details About the Event</h4>
              <ul className="pl-4 space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="mt-1">
                    <LayoutList size={16} className="text-[#D41A69]" />
                  </span>
                  <span>
                    Point: Lorem ipsum dolor sit amet, Transe of food sociological headline &amp; meeting at Cityconvene, Bucharest.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1">
                    <LayoutList size={16} className="text-[#D41A69]" />
                  </span>
                  <span>
                    Point: Trends admin graphic in management at scale, suit up at food sociological headline &amp; meeting at Cityconvene, Bucharest.
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1">
                    <LayoutList size={16} className="text-[#D41A69]" />
                  </span>
                  <span>
                    Point: Lorem ipsum dolor sit amet, Transe of food sociological headline &amp; meeting at Cityconvene, Bucharest.
                  </span>
                </li>
              </ul>
            </Card>
          </section>

          {/* Closing */}
          <section>
            <h3 className="text-[#232b3d] text-lg font-semibold mb-3">Closing Details</h3>
            <p className="text-[#232b3d] mb-8">
              Lorem ipsum sit amet food headline suit up at Cityconvene. Transe of food sociological headline, suit up at Cityconvene. Bucharest and south of town for trends admin graphic in management at scale. Summary of some of what attendees should know, what to bring, or highlights of the program. Always add clarity and positivity.
            </p>
            <div className="flex">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full md:w-auto"
              >
                <Button className="w-full md:w-auto px-6 py-3 rounded-full bg-[#16478E] hover:bg-[#0e3266] text-white text-base font-medium shadow transition">
                  VISIT EVENT PAGE OR REGISTER
                </Button>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Upcoming Events */}
      <section className="bg-[#f6f3fa] py-10 px-3">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row items-center justify-between mb-8">
            <h2 className="text-[#D41A69] text-2xl font-bold">Upcoming Events</h2>
            <div className="flex gap-2">
              <Button
                size="icon"
                className="bg-[#FFD9EC] text-[#D41A69] hover:bg-[#fccdea] shadow-none border border-[#FFD9EC]"
                aria-label="Prev"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                size="icon"
                className="bg-[#FFD9EC] text-[#D41A69] hover:bg-[#fccdea] shadow-none border border-[#FFD9EC]"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
          <div className="grid gap-7 grid-cols-1 md:grid-cols-3">
            {[0,1,2].map((ix) => (
              <Card
                key={ix}
                className="rounded-lg overflow-hidden bg-white shadow-md border border-[#f1e9fc] flex flex-col transition hover:shadow-lg"
              >
                <div className="aspect-[4/3] bg-gray-200 w-full">
                  <img 
                    src={upcomingImages[ix]}
                    alt={`Upcoming Event ${ix+1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start py-4 px-5">
                  <div className="uppercase tracking-wider text-sm text-gray-400 mb-2">
                    January 01, 2025
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-3">
                    Sample Upcoming Event Title
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#16478E]/30 hover:bg-[#f7f3ff] rounded-full text-[#16478E] font-medium py-2 mt-auto"
                  >
                    VIEW EVENT
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/our-programs-and-activities">
              <Button className="bg-[#16478E] hover:bg-[#0e3266] text-white rounded-full px-8 py-6 h-auto font-medium">
                VIEW CALENDAR OF ACTIVITIES
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OurProgramsAndActivitiesDetail;
