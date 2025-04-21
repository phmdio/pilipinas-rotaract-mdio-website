import React from 'react';
import { Separator } from '@/components/ui/separator';

const SigningDRRsSection = () => {
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Updated Blue Box - Signing DRRs and DGs */}
        <div className="mt-10 mb-10 bg-rotaract-blue text-white p-8 rounded-sm">
          <h3 className="text-2xl font-bold mb-6">Signing DRRs and DGs to the formation of Pilipinas Rotaract MDIO</h3>
          <Separator className="bg-white/30 mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-white">1.</span> 
                <p><span className="font-semibold">3770</span> - PDRR Cherrie Rose Gallardo and PDG Corina Tengco Bautista (Signed 2011, RI Approved 2012)</p>
              </div>
              
              <div className="flex gap-3">
                <span className="text-white">2.</span>
                <p><span className="font-semibold">3780</span> - PDRR Devie Ontolan - Patricio and PDG Danilo Espinosa (Signed 2007, RI Approved 2008)</p>
              </div>
              
              <div className="flex gap-3">
                <span className="text-white">3.</span>
                <p><span className="font-semibold">3790</span> - PDRR Florante Espiritu and PDG Lorenzo Torres (Signed and RI Approved 2008)</p>
              </div>
              
              <div className="flex gap-3">
                <span className="text-white">4.</span>
                <p><span className="font-semibold">3800</span> - PDRR Analiza Taan and PDG Ferdinand Fuentes (Signed and RI Approved 2009)</p>
              </div>
              
              <div className="flex gap-3">
                <span className="text-white">5.</span>
                <p><span className="font-semibold">3810</span> - PDRR Rhosenie Villanueva and PDG Lynie Abarilla (Signed 2007, RI Approved 2008)</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-white">6.</span>
                <p><span className="font-semibold">3820</span> - PDRR Felimon Brazas Jr. and PDG Teotimo Reyes, Jr. (Signed 2007, RI Approved 2008)</p>
              </div>
              
              <div className="flex gap-3">
                <span className="text-white">7.</span>
                <p><span className="font-semibold">3830</span> - PDRR Joannie Sitoy and PDG Renato Magadia (Signed and RI Approved 2008)</p>
              </div>
              
              <div className="flex gap-3">
                <span className="text-white">8.</span>
                <p><span className="font-semibold">3850</span> - PDRR Joshua Amado Elroy and PDG Melvin De La Serna (Signed 2011, RI Approved 2012)</p>
              </div>
              
              <div className="flex gap-3">
                <span className="text-white">9.</span>
                <p><span className="font-semibold">3860</span> - PDRR Mark Ryan Arquiza and PDG Pablito Parilla (Signed and RI Approved 2009)</p>
              </div>
              
              <div className="flex gap-3">
                <span className="text-white">10.</span>
                <p><span className="font-semibold">3870</span> - PDRR Senlie Christine Bacsarpa and PDG Samuel Fontanilla (Signed and RI Approved 2012)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 text-gray-700">
          <p>
            The formation of the Pilipinas Rotaract Multi-District Information Organization (MDIO) represents a significant milestone in the history of Rotaract in the Philippines. This collaborative initiative began in 2007 when District Rotaract Representatives (DRRs) and District Governors (DGs) recognized the need for a united platform to enhance communication, share resources, and amplify the impact of Rotaract initiatives nationwide.
          </p>
          <p>
            The journey toward official recognition was marked by dedication and perseverance. Between 2007 and 2012, each Rotary district in the Philippines gradually joined the movement, with districts 3780, 3790, 3810, and 3820 being among the first to sign and receive Rotary International approval in 2008. Districts 3800 and 3860 followed in 2009, while districts 3770, 3850, and 3870 completed the unification by 2012.
          </p>
          <p>
            This unified approach has enabled Rotaract clubs across the Philippines to coordinate national service initiatives, organize cross-district leadership training, and facilitate knowledge exchange between clubs. The MDIO structure has significantly strengthened the voice of Filipino Rotaractors on both national and international platforms, allowing for more effective advocacy on issues important to Filipino youth and communities.
          </p>
          <p>
            Today, the Pilipinas Rotaract MDIO continues to serve as a vital link between Rotaract clubs nationwide, fostering collaboration, promoting leadership development, and amplifying service impact. The organization stands as a testament to the power of unity and shared purpose, embodying the Rotaract principles of leadership, service, and fellowship across all ten Rotary districts in the Philippines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SigningDRRsSection;
