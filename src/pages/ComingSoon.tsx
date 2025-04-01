
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Progress } from "@/components/ui/progress";

const ComingSoon = () => {
  const [progress, setProgress] = useState(15);
  
  useEffect(() => {
    // Start with a lower progress to show animation
    setProgress(15);
    
    // Set up a timer to gradually increase progress
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        // Increase progress slowly, max at 95 (never fully complete)
        const newProgress = Math.min(prevProgress + 0.5, 95);
        
        // Once we reach 95%, clear the interval
        if (newProgress >= 95) {
          clearInterval(timer);
        }
        
        return newProgress;
      });
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Coming Soon - Pilipinas Rotaract</title>
        <meta
          name="description"
          content="The new Pilipinas Rotaract website is launching soon. Stay tuned for updates, events, and information about Rotaract clubs in the Philippines."
        />
        <meta name="keywords" content="Rotaract, Philippines, MDIO, Coming Soon, Launch, Pilipinas, Youth Service" />
        <meta property="og:title" content="Coming Soon - Pilipinas Rotaract" />
        <meta property="og:description" content="The new Pilipinas Rotaract website is launching soon. Stay tuned for updates, events, and information about Rotaract clubs in the Philippines." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coming Soon - Pilipinas Rotaract" />
        <meta name="twitter:description" content="The new Pilipinas Rotaract website is launching soon. Stay tuned for updates, events, and information about Rotaract clubs in the Philippines." />
        <link rel="canonical" href="https://pilipinasrotaract.org/coming-soon" />
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
              <h3 className="text-xl md:text-2xl text-white font-light">OUR NEW WEBSITE IS</h3>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mt-2 mb-0">LAUNCHING</h1>
              <h1 className="text-7xl sm:text-9xl md:text-[10rem] font-bold text-white leading-none">SOON</h1>
            </div>

            <p className="text-white/90 text-lg sm:text-xl font-light max-w-2xl mx-auto px-4">
              WE'RE ALMOST READY TO SHOW OFF OUR FRESH NEW SITE—STAY TUNED!
            </p>

            {/* Progress bar */}
            <div className="mt-10 max-w-lg mx-auto w-full px-4">
              <Progress value={progress} className="h-2 md:h-3 bg-gray-400/30" />
              <p className="text-white/80 text-sm mt-2">{Math.round(progress)}% Complete</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
