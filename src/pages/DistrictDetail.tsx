
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon, MapPinIcon, UserIcon, CalendarIcon, PhoneIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { districtData } from '@/data/districtData';
import { getDistrictDetail } from '@/data/districtDetailData';

const DistrictDetail = () => {
  const { districtId } = useParams<{ districtId: string }>();
  const [district, setDistrict] = useState<any>(null);
  const [districtDetail, setDistrictDetail] = useState<any>(null);
  const [currentDRR, setCurrentDRR] = useState<string>("");
  
  useEffect(() => {
    if (districtId) {
      const foundDistrict = districtData.find(d => d.id === districtId);
      const foundDistrictDetail = getDistrictDetail(districtId);
      setDistrict(foundDistrict);
      setDistrictDetail(foundDistrictDetail);
      
      // Get current DRR (first one in the list)
      if (foundDistrictDetail && foundDistrictDetail.representatives && foundDistrictDetail.representatives.length > 0) {
        setCurrentDRR(foundDistrictDetail.representatives[0].name);
      }
    }
  }, [districtId]);

  if (!district || !districtDetail) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>District {district.id} | Pilipinas Rotaract MDIO</title>
        <meta name="description" content={`Learn about Rotaract Clubs in District ${district.id}`} />
      </Helmet>
      
      <Header />
      
      <main className="pb-16">
        {/* Hero Image with Orange Overlay - Updated to match design */}
        <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${districtDetail.headerImage || "/public/lovable-uploads/8dde7e86-fd9e-4713-9917-b37609e31f4b.png"})` }}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute left-0 bottom-0 w-[500px] max-w-[40%] bg-[#F6A81C] p-6 text-white">
            <p className="text-xl font-medium mb-2">Rotaract Clubs of Rotary International District #</p>
            <h1 className="text-8xl font-bold mb-4">{district.id}</h1>
            <p className="text-lg">DRR {currentDRR || "John Doe"}, Rotaract Club of {districtDetail.mainClub || "Biringan City"}</p>
          </div>
        </section>
        
        {/* District Description - Updated to match new design */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-[#D41A69] text-3xl font-bold mb-6">{districtDetail.title}</h2>
          
          <div className="border-t border-gray-300 my-6"></div>
          
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed">{districtDetail.description}</p>
            
            {districtDetail.activities && (
              <div>
                <h3 className="text-gray-800 font-bold mb-2">Usual District Rotaract activities include the following:</h3>
                <ul className="list-disc pl-8 space-y-1">
                  {districtDetail.activities.map((activity: string, index: number) => (
                    <li key={index} className="text-gray-800">{activity}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {districtDetail.mission && (
              <p className="text-gray-800 leading-relaxed">{districtDetail.mission}</p>
            )}
            
            {districtDetail.vision && (
              <p className="text-gray-800 leading-relaxed">{districtDetail.vision}</p>
            )}
          </div>
        </section>
        
        {/* Explore District Gallery */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-[#D41A69] mb-6">Explore {district.id}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {districtDetail.gallery.map((image: string, index: number) => (
              <div key={index} className="aspect-video bg-cover bg-center rounded-md overflow-hidden" style={{ backgroundImage: `url(${image})` }}></div>
            ))}
          </div>
        </section>
        
        {/* District Representatives */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#16478E] text-white">
          <h2 className="text-2xl font-bold mb-6">Below is the roster of District Rotaract Representative of Rotary International District {district.id}</h2>
          <div className="space-y-2">
            {districtDetail.representatives.map((rep: any, index: number) => (
              <div key={index} className="flex items-center py-2 border-b border-white/20">
                <div className="w-8/12 flex">
                  <span className="text-white/70">{rep.rotaryYear}:</span>
                  <span className="ml-2 font-medium">{rep.name}</span>
                </div>
                <div className="w-4/12 text-right text-white/70">
                  {rep.dates}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
          <Link to="mailto:district3770@rotaract.org.ph" className="text-[#16478E] underline">
            district{district.id}@rotaract.org.ph
          </Link>
          <Button className="bg-[#F6A81C] hover:bg-[#E59A0C] text-white rounded-full px-8">
            CONTACT US NOW
          </Button>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default DistrictDetail;
