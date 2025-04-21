import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { Link } from 'react-router-dom';

const RotaryFoundationGiving = () => {
  return (
    <>
      <Helmet>
        <title>The Rotary Foundation Giving | Pilipinas Rotaract MDIO</title>
        <meta 
          name="description" 
          content="Support The Rotary Foundation through giving and donations" 
        />
      </Helmet>
      
      <Header />
      
      <main>
        <PageHero 
          title="The Rotary Foundation Giving" 
          backgroundImage="/assets/trf.png"
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* First Text Block */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-rotaract-magenta mb-4">
                Supporting The Rotary Foundation's Global Impact
              </h2>
              <p className="text-gray-700 mb-6">
                The Rotary Foundation transforms your gifts into service projects that change lives both close to home and around the world. Since 1917, the Foundation has spent more than $4 billion on life-changing, sustainable projects that help people in need with access to safe water, medical care, literacy, education, and other critical needs. By giving to the Foundation, you become an essential part of these ongoing efforts to create lasting positive change in communities everywhere.
              </p>
            </div>

            {/* Single Column with Landscape Cards */}
            <div className="space-y-8 mb-16">
              {/* First Card */}
              <div className="flex flex-col md:flex-row gap-8 items-center bg-rotaract-magenta/5 rounded-lg shadow-sm p-6">
                <div className="w-full md:w-1/2">
                  <img 
                    src="/assets/trf.png"
                    alt="People celebrating"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-bold text-rotaract-magenta mb-3">Annual Fund</h3>
                  <p className="text-gray-700">
                    The Annual Fund is the primary source of funding for Foundation activities. Your contributions to the Annual Fund help Rotary clubs take action to create positive change in communities at home and around the world. Through grants and projects, Rotary members combat diseases like polio and malaria, provide clean water, improve economic opportunities, and promote peace.
                  </p>
                </div>
              </div>

              {/* Second Card */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-rotaract-magenta/5 rounded-lg shadow-sm p-6">
                <div className="w-full md:w-1/2">
                  <img 
                    src="/assets/trf.png"
                    alt="Construction site volunteer"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-bold text-rotaract-magenta mb-3">PolioPlus Fund</h3>
                  <p className="text-gray-700">
                    Rotary has been working to eradicate polio for more than 35 years. Our goal of ridding the world of this disease is closer than ever. When you contribute to the PolioPlus Fund, you're supporting Rotary's top priority - ensuring that polio is eradicated and that it never returns. Your donation helps deliver vaccinations, transportation, and educational materials.
                  </p>
                </div>
              </div>

              {/* Third Card */}
              <div className="flex flex-col md:flex-row gap-8 items-center bg-rotaract-magenta/5 rounded-lg shadow-sm p-6">
                <div className="w-full md:w-1/2">
                  <img 
                    src="/assets/trf.png"
                    alt="Community service"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-bold text-rotaract-magenta mb-3">Endowment Fund</h3>
                  <p className="text-gray-700">
                    The Endowment Fund ensures the long-term financial stability of the Foundation and provides essential support for Rotary's programs. Contributions to the Endowment Fund are invested in perpetuity, with a portion of the fund's earnings spent on Foundation programs each year. This provides a steady and reliable source of income to meet the world's greatest needs.
                  </p>
                </div>
              </div>

              {/* Fourth Card */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-rotaract-magenta/5 rounded-lg shadow-sm p-6">    
                <div className="w-full md:w-1/2">
                  <img 
                    src="/assets/trf.png"
                    alt="Foundation work"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-bold text-rotaract-magenta mb-3">Disaster Response Fund</h3>
                  <p className="text-gray-700">
                    The Rotary Disaster Response Fund provides a ready mechanism for Rotary districts to respond quickly to local disasters. Districts in affected areas may receive disaster response grants to provide basic items such as water, food, medicine, and clothing. Your support enables our communities to recover more quickly after devastating natural disasters.
                  </p>
                </div>
              </div>
            </div>

            {/* Donation Button */}
            <div className="text-center">
              <Link 
                to="https://www.rotary.org/en/get-involved/ways-to-give?utm_source=pilipinas_rotaract_mdio&utm_medium=website&utm_campaign=foundation_giving"
                className="btn-rotaract inline-block uppercase font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate to the Rotary Foundation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default RotaryFoundationGiving;
