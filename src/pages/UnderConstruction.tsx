
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle } from "lucide-react";

const UnderConstruction = () => {
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
        <title>Under Construction - Pilipinas Rotaract</title>
        <meta
          name="description"
          content="This section of the Pilipinas Rotaract website is currently under construction. Check back soon for updates."
        />
        <meta name="keywords" content="Rotaract, Philippines, MDIO, Under Construction, Pilipinas, Coming Soon" />
        <meta property="og:title" content="Under Construction - Pilipinas Rotaract" />
        <meta property="og:description" content="This section of the Pilipinas Rotaract website is currently under construction. Check back soon for updates." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Under Construction - Pilipinas Rotaract" />
        <meta name="twitter:description" content="This section of the Pilipinas Rotaract website is currently under construction. Check back soon for updates." />
        <link rel="canonical" href="https://pilipinasrotaract.org/under-construction" />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rotaract-blue to-[#1a237e] p-4">
        <div className="max-w-3xl w-full text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="text-center">
              <img 
                src="/lovable-uploads/b0829b94-1fd3-453f-be41-c4bee8820588.png" 
                alt="Rotaract Logo" 
                className="h-20 w-auto mb-2"
              />
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
            <div className="flex justify-center mb-4">
              <AlertTriangle size={60} className="text-yellow-300" />
            </div>
            
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">UNDER CONSTRUCTION</h1>
              <div className="w-24 h-1 bg-rotaract-magenta mx-auto mb-6"></div>
            </div>

            <p className="text-white/90 text-lg sm:text-xl font-light max-w-2xl mx-auto px-4">
              We're currently working on this section of our website to bring you a better experience.
              <br />
              Please check back soon!
            </p>

            {/* Progress bar */}
            <div className="mt-10 max-w-lg mx-auto w-full px-4">
              <Progress value={progress} className="h-2 md:h-3 bg-gray-400/30" />
              <p className="text-white/80 text-sm mt-2">Page construction {Math.round(progress)}% complete</p>
            </div>
            
            {/* Return to homepage */}
            <div className="mt-8">
              <a href="/" className="inline-flex items-center justify-center rounded-md bg-rotaract-magenta px-6 py-3 text-white font-medium transition-all hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-rotaract-magenta focus:ring-offset-2">
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
