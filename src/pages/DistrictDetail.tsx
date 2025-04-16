
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
  
  useEffect(() => {
    if (districtId) {
      const foundDistrict = districtData.find(d => d.id === districtId);
      const foundDistrictDetail = getDistrictDetail(districtId);
      setDistrict(foundDistrict);
      setDistrictDetail(foundDistrictDetail);
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
        {/* Hero Image with Overlay */}
        <section className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${districtDetail.headerImage})` }}>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-0 left-0 bg-[#F6A81C] p-6 text-white">
            <h1 className="text-6xl font-bold">{district.id}</h1>
          </div>
        </section>
        
        {/* District Description */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-[#D41A69] text-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">{districtDetail.title}</h2>
            <p className="mb-6">{districtDetail.description}</p>
            
            <h3 className="text-xl font-bold mb-3">Our district composition includes the following:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              {districtDetail.composition.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
            <h3 className="text-xl font-bold mb-3">District {district.id} highlights:</h3>
            <p className="mb-4">{districtDetail.highlights}</p>
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
