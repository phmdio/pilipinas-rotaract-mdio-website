import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => {
  const currentHostname = window.location.hostname;
  const customDomain = 'www.pilipinasrotaract.org';
  const customDomainWithoutWWW = 'pilipinasrotaract.org';

  if (currentHostname === customDomain || currentHostname === customDomainWithoutWWW) {
    return (
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </QueryClientProvider>
    );
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </QueryClientProvider>
    );
  }
};

export default App;
