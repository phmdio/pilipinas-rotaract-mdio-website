
import React from 'react';

const VisionMissionSection = () => {
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        {/* Dark Blue Box */}
        <div className="mt-10 bg-rotaract-darkblue text-white p-6 rounded-sm">
          <p className="font-bold mb-4">
            Establishment of Pilipinas Rotaract Multi-District Information Organization (Pilipinas Rotaract MDIO) by the RI Board of Directors with Rotary International approval in 2019
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Vision</h4>
              <p>To be the premier organization of young leaders dedicated to community service, professional development, and international understanding in the Philippines.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Mission</h4>
              <p>To provide a platform for Rotaract clubs across the Philippines to collaborate, share resources, and amplify their impact through coordinated service projects and leadership development initiatives.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
