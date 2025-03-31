
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Play } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const ComingSoon = () => {
  const [progress, setProgress] = useState(70);

  useEffect(() => {
    // Simulate progress increasing over time
    const timer = setTimeout(() => {
      setProgress(Math.min(progress + 1, 95));
    }, 3000);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <>
      <Helmet>
        <title>Coming Soon - Pilipinas Rotaract</title>
        <meta
          name="description"
          content="The new Pilipinas Rotaract website is launching soon. Stay tuned!"
        />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rotaract-magenta to-rotaract-purple p-4">
        <div className="max-w-3xl w-full text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-1">Rotaract</h2>
              <p className="text-white/90 text-sm">
                Pilipinas Multi-District
                <br />
                Information Organization
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl text-white font-light">OUR NEW WEBSITE IS</h3>
              <h1 className="text-6xl md:text-8xl font-bold text-white mt-2 mb-0">LAUNCHING</h1>
              <h1 className="text-9xl md:text-[10rem] font-bold text-white leading-none">SOON</h1>
            </div>

            {/* Play button */}
            <div className="flex justify-center my-4">
              <Button
                size="icon"
                className="rounded-full bg-black/20 hover:bg-black/40 h-16 w-16 backdrop-blur-sm"
              >
                <Play className="h-6 w-6 text-white" />
              </Button>
            </div>

            <p className="text-white/90 text-xl font-light max-w-2xl mx-auto">
              WE'RE ALMOST READY TO SHOW OFF OUR FRESH NEW SITE—STAY TUNED!
            </p>

            {/* Progress bar */}
            <div className="mt-10 max-w-lg mx-auto w-full px-4">
              <Progress value={progress} className="h-3 bg-gray-400/30" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
