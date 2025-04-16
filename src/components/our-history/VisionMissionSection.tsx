
import React from 'react';

const VisionMissionSection = () => {
  return (
    <section className="py-8 bg-rotaract-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-white">
          {/* Main text */}
          <div className="mb-8">
            <p className="text-lg md:text-xl leading-relaxed">
              On February 3, 2021, the National Youth Commission (NYC) of the Philippines
              approved the inclusion of the Pilipinas Rotaract MDIO in the Youth Organization
              Registration Program (YORP). As a YORP-registered organization, Pilipinas
              Rotaract MDIO and the Rotaract Clubs in the Philippines enjoys the following
              privileges
            </p>
          </div>
          
          {/* Two-column list of privileges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column privileges */}
            <div className="space-y-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-white font-bold text-xl">•</span>
                <p className="text-white">
                  Be represented in congresses and activities exclusively
                  for YORP-registered organizations
                </p>
              </div>
              
              <div className="flex items-baseline space-x-2">
                <span className="text-white font-bold text-xl">•</span>
                <p className="text-white">
                  Access for free organizational training programs offered
                  by NYC
                </p>
              </div>
              
              <div className="flex items-baseline space-x-2">
                <span className="text-white font-bold text-xl">•</span>
                <p className="text-white">
                  Request for promotion of organization-initiated
                  programs, projects and activities through the NYC's
                  media outlets
                </p>
              </div>
            </div>
            
            {/* Right column privileges */}
            <div className="space-y-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-white font-bold text-xl">•</span>
                <p className="text-white">
                  Be prioritized in the selection of representatives for
                  youth consultations, NYC-initiated activities, international
                  youth exchange programs, and other avenues which
                  may provide further exposure to the organization
                </p>
              </div>
              
              <div className="flex items-baseline space-x-2">
                <span className="text-white font-bold text-xl">•</span>
                <p className="text-white">
                  Participate and be elected in the Local Youth
                  Development Councils
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
