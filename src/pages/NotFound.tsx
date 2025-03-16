
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found - Pilipinas Rotaract</title>
        <meta name="description" content="Sorry, the page you are looking for does not exist." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md p-8">
          <h1 className="text-6xl font-bold text-rotaract-magenta mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-rotaract-blue hover:bg-rotaract-darkblue">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
