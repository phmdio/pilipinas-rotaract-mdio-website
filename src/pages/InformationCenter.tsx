
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Re-use the district data from InfoCenter component
const districtData = [
  { 
    id: '3770', 
    color: '#F6A81C',
    image: '/assets/district/3770.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3780', 
    color: '#16478E',
    image: '/assets/district/3780.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3790', 
    color: '#00A2E1',
    image: '/assets/district/3790.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3800', 
    color: '#003366',
    image: '/assets/district/3800.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3810', 
    color: '#F47621',
    image: '/assets/district/3810.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3820', 
    color: '#8E288F',
    image: '/assets/district/3820.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3830', 
    color: '#0D9648',
    image: '/assets/district/3830.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3850', 
    color: '#E22626',
    image: '/assets/district/3850.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3860', 
    color: '#66819A',
    image: '/assets/district/3860.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
  { 
    id: '3870', 
    color: '#00ACBB',
    image: '/assets/district/3870.jpeg',
    description: 'Rotaract Clubs of Rotary International District #'
  },
];

const InformationCenter = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <>
      <Helmet>
        <title>Information Center | Pilipinas Rotaract MDIO</title>
        <meta name="description" content="Information Center for Pilipinas Rotaract Multi-District Information Organization" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero section with background image */}
        <section className="relative h-96 flex items-end bg-cover bg-center" style={{ backgroundImage: 'url("/public/lovable-uploads/06821cba-1146-4d2a-bc05-1f319455c273.png")' }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-white">
            <h1 className="text-4xl sm:text-5xl font-bold">Our Members District</h1>
          </div>
        </section>
        
        {/* Description section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold text-rotaract-magenta mb-3">Hipster ipsum tattooed brunch I'm baby.</h2>
              <p className="text-gray-700">
                Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man bun batch hella bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>
        
        {/* Districts grid section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {districtData.map((district) => (
                <div 
                  key={district.id}
                  className="overflow-hidden rounded-lg shadow-md"
                  onMouseEnter={() => setHoveredCard(district.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-56 bg-cover bg-center" style={{ backgroundImage: `url(${district.image})` }}>
                    <div className="absolute top-0 left-0 bg-black/40 text-white p-2 rounded-br-lg">
                      <span className="text-xs">Rotary District • District #{district.id}</span>
                    </div>
                  </div>
                  <div style={{ backgroundColor: district.color }} className="p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{district.id}</h3>
                    <p className="mb-4 opacity-90">
                      {district.description}{district.id}
                    </p>
                    <p className="mb-4 text-sm opacity-80">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <Button 
                      variant="outline" 
                      className={`text-white border-white hover:bg-white/20 transition-colors`}
                    >
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default InformationCenter;
