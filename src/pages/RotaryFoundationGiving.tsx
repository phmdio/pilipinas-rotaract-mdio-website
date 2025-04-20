
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

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
          backgroundImage="/lovable-uploads/14a90517-39de-4beb-9ce2-687dec8f136a.png"
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* First Text Block */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-rotaract-magenta mb-4">
                Hipster ipsum tattooed brunch I'm baby.
              </h2>
              <p className="text-gray-700 mb-6">
                Hipster ipsum pinterest kinfolk PBR&B. Single-origin kombucha mixtape kickstarter. Glossier gluten-free brioche, portland. Microdosing vegan waistcoat cold-press. Affogato art party edison blue four loko high life locavore beard gluten-free gluten-free. Authentic pour-over vaporware wayfarers keytar cardigan. Pork art quinoa gluten-free literally jean shorts cliche selvage. Style twee occupy raw denim cold cranberries your over glue mulciture.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Left Column */}
              <div>
                <img 
                  src="/lovable-uploads/14a90517-39de-4beb-9ce2-687dec8f136a.png"
                  alt="People celebrating"
                  className="rounded-lg w-full h-64 object-cover mb-6"
                />
                <h3 className="text-xl font-bold text-rotaract-magenta mb-3">Lorem Ipsum</h3>
                <p className="text-gray-700">
                  Hipster ipsum pinterest tattooed I'm baby. Single pabst kinfolk mixtape kickstarter hashtagccino vegan waistcoat cold-press. Affogato art party edison blue four loko high life locavore beard cliche selvage authentic pour-over keytar cardigan. Actually locavore next level.
                </p>
              </div>

              {/* Right Column */}
              <div>
                <img 
                  src="/lovable-uploads/14a90517-39de-4beb-9ce2-687dec8f136a.png"
                  alt="Construction site volunteer"
                  className="rounded-lg w-full h-64 object-cover mb-6"
                />
                <h3 className="text-xl font-bold text-rotaract-magenta mb-3">Lorem Ipsum</h3>
                <p className="text-gray-700">
                  Hipster ipsum pinterest tattooed I'm baby. Single pabst kinfolk mixtape kickstarter hashtagccino vegan waistcoat cold-press. Affogato art party edison blue four loko high life locavore beard cliche selvage authentic pour-over keytar cardigan.
                </p>
              </div>

              {/* Additional Content */}
              <div>
                <img 
                  src="/lovable-uploads/14a90517-39de-4beb-9ce2-687dec8f136a.png"
                  alt="Community service"
                  className="rounded-lg w-full h-64 object-cover mb-6"
                />
                <h3 className="text-xl font-bold text-rotaract-magenta mb-3">Lorem Ipsum</h3>
                <p className="text-gray-700">
                  Hipster ipsum pinterest tattooed I'm baby. Single pabst kinfolk mixtape kickstarter hashtagccino vegan waistcoat cold-press. Affogato art party edison blue four loko high life locavore beard cliche selvage authentic pour-over keytar cardigan.
                </p>
              </div>

              {/* Last Content Block */}
              <div>
                <img 
                  src="/lovable-uploads/14a90517-39de-4beb-9ce2-687dec8f136a.png"
                  alt="Foundation work"
                  className="rounded-lg w-full h-64 object-cover mb-6"
                />
                <h3 className="text-xl font-bold text-rotaract-magenta mb-3">Lorem Ipsum</h3>
                <p className="text-gray-700">
                  Hipster ipsum pinterest tattooed I'm baby. Single pabst kinfolk mixtape kickstarter hashtagccino vegan waistcoat cold-press. Affogato art party edison blue four loko high life locavore beard cliche selvage authentic pour-over keytar cardigan.
                </p>
              </div>
            </div>

            {/* Donation Button */}
            <div className="text-center">
              <a 
                href="/under-construction"
                className="btn-rotaract inline-block uppercase font-bold"
              >
                Donate to the Rotary Foundation
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default RotaryFoundationGiving;
