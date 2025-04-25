import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { initPostHog } from "./lib/posthog";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LaunchingSoon from "./pages/LaunchingSoon";
import UnderConstruction from "./pages/UnderConstruction";
import InformationCenter from "./pages/InformationCenter";
import DistrictDetail from "./pages/DistrictDetail";
import OurHistory from "./pages/OurHistory";
import RotaractStatistics from "./pages/RotaractStatistics";
import LeadershipTeam from "./pages/LeadershipTeam";
import PhilippineRotaractMagazine from "./pages/PhilippineRotaractMagazine";
import AngBalangay from "./pages/AngBalangay";
import RotaryFoundationGiving from "./pages/RotaryFoundationGiving";
import OurProgramsAndActivities from "./pages/OurProgramsAndActivities";
import OurProgramsAndActivitiesDetail from "./pages/OurProgramsAndActivitiesDetail";
import OurChair from "./pages/OurChair";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Disable refetching on window focus for SSG
      refetchOnWindowFocus: false,
      // Cache the data for 24 hours
      staleTime: 1000 * 60 * 60 * 24,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

const App = () => {
  // Check if we're in the browser environment
  const isBrowser = typeof window !== 'undefined';
  const currentHostname = isBrowser ? window.location.hostname : '';
  const customDomain = 'www.pilipinasrotaract.org';
  const customDomainWithoutWWW = 'pilipinasrotaract.org';

  const isCustomDomain = isBrowser && 
    (currentHostname === customDomain || currentHostname === customDomainWithoutWWW);
    
  // Initialize PostHog when the app loads
  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Routes>
            {isCustomDomain ? (
              <>
                <Route path="/" element={<LaunchingSoon />} />
                <Route path="/under-construction" element={<UnderConstruction />} />
                <Route path="/information-center" element={<InformationCenter />} />
                <Route path="/district/:districtId" element={<DistrictDetail />} />
                <Route path="/our-history" element={<OurHistory />} />
                <Route path="/our-leadership-team" element={<LeadershipTeam />} />
                <Route path="/rotaract-statistics" element={<RotaractStatistics />} />
                <Route path="/philippine-rotaract-magazine" element={<PhilippineRotaractMagazine />} />
                <Route path="/ang-balangay" element={<AngBalangay />} />
                <Route path="/the-rotary-foundation-giving" element={<RotaryFoundationGiving />} />
                <Route path="/our-programs-and-activities" element={<OurProgramsAndActivities />} />
                <Route path="/our-programs-and-activities/:eventId" element={<OurProgramsAndActivitiesDetail />} />
                <Route path="/event/:eventSlug" element={<OurProgramsAndActivitiesDetail />} />
                <Route path="/our-chair" element={<OurChair />} />
                <Route path="*" element={<NotFound />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Index />} />
                <Route path="/launching-soon" element={<LaunchingSoon />} />
                <Route path="/under-construction" element={<UnderConstruction />} />
                <Route path="/information-center" element={<InformationCenter />} />
                <Route path="/district/:districtId" element={<DistrictDetail />} />
                <Route path="/our-history" element={<OurHistory />} />
                <Route path="/our-leadership-team" element={<LeadershipTeam />} />
                <Route path="/rotaract-statistics" element={<RotaractStatistics />} />
                <Route path="/philippine-rotaract-magazine" element={<PhilippineRotaractMagazine />} />
                <Route path="/ang-balangay" element={<AngBalangay />} />
                <Route path="/the-rotary-foundation-giving" element={<RotaryFoundationGiving />} />
                <Route path="/our-programs-and-activities" element={<OurProgramsAndActivities />} />
                <Route path="/our-programs-and-activities/:eventId" element={<OurProgramsAndActivitiesDetail />} />
                <Route path="/event/:eventSlug" element={<OurProgramsAndActivitiesDetail />} />
                <Route path="/our-chair" element={<OurChair />} />
                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Routes>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
