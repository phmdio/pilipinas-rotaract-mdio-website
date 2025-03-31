
import React from "react";
import { Helmet } from "react-helmet-async";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const ComingSoon = () => {
  return (
    <>
      <Helmet>
        <title>Coming Soon - Pilipinas Rotaract</title>
        <meta name="description" content="Our new website is launching soon. Stay tuned for our fresh new site!" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rotaract-magenta to-rotaract-purple text-white px-4 py-12">
        <div className="w-full max-w-3xl mx-auto text-center">
          {/* Logo and Organization Name */}
          <div className="mb-8 flex flex-col items-center justify-center">
            <img 
              src="/lovable-uploads/2615036e-7e61-4bfd-a424-b05a53721814.png" 
              alt="Rotaract Logo" 
              className="w-full max-w-[500px] h-auto"
            />
          </div>
          
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              OUR NEW WEBSITE IS <br />
              <span className="text-6xl md:text-8xl">LAUNCHING</span><br />
              <span className="text-8xl md:text-9xl">SOON</span>
            </h1>
            
            <p className="text-xl mt-6">
              WE'RE ALMOST READY TO SHOW OFF OUR FRESH NEW SITE—STAY TUNED!
            </p>
            
            <div className="flex justify-center my-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full bg-black/30 border-white hover:bg-black/50"
              >
                <Play className="mr-2" size={24} />
                Watch Teaser
              </Button>
            </div>
            
            <div className="w-full max-w-lg mx-auto mt-16">
              <Progress value={75} className="h-2 bg-gray-300/30" />
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-12">
            <p className="text-sm opacity-80">
              &copy; {new Date().getFullYear()} Pilipinas Rotaract Multi-District Information Organization
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
