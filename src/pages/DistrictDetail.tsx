import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon, MapPinIcon, UserIcon, CalendarIcon, PhoneIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { useDistrictByIdQuery } from '@/hooks/useDistrictsQuery';
import { useDistrictDetailQuery } from '@/hooks/useDistrictDetailQuery';

const DistrictDetail = () => {
  const { districtId } = useParams<{ districtId: string }>();
  
  // Use React Query hooks to fetch data
  const { 
    data: district, 
    isLoading: isDistrictLoading, 
    error: districtError 
  } = useDistrictByIdQuery(districtId);
  
  const { 
    data: districtDetail, 
    isLoading: isDetailLoading, 
    error: detailError 
  } = useDistrictDetailQuery(districtId);
  
  // Derive current DRR from district detail data
  const currentDRR = districtDetail?.representatives?.[0]?.name || "";
  
  // Combine loading states
  const isLoading = isDistrictLoading || isDetailLoading;
  
  // Check for errors
  const hasError = districtError || detailError;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-blue-600 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (hasError || !district || !districtDetail) {
    return <div className="flex items-center justify-center h-screen">District not found</div>;
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
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] max-w-[40%] bg-[#F6A81C] p-6 text-white">
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
        
        {/* Explore District Gallery - Updated to match new design */}
        <section className="w-full bg-rotaract-blue py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Explore {district.id}</h2>
            
            <Carousel className="w-full">
              <CarouselContent>
                {districtDetail.gallery.map((image: string, index: number) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                    <div className="h-[200px] overflow-hidden rounded-md border-2 border-white">
                      <img 
                        src={image} 
                        alt={`District ${district.id} gallery image ${index + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end mt-4">
                <CarouselPrevious className="relative static mr-2 bg-white" />
                <CarouselNext className="relative static bg-white" />
              </div>
            </Carousel>
          </div>
        </section>
        
        {/* District Representatives - Updated to match new design */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-[#D41A69] text-4xl font-bold mb-2">
            Below is the roster of District Rotaract Representatives of Rotary International District {district.id}:
          </h2>
          <Separator className="mb-6 border-gray-300" />
          
          <div className="space-y-0">
            <Table>
              <TableBody>
                {districtDetail.representatives.map((rep: any, index: number) => (
                  <TableRow key={index} className="border-0">
                    <TableCell className="py-1 pl-0 text-lg w-6">{index + 1}.</TableCell>
                    <TableCell className="py-1 font-medium text-lg">{rep.name}</TableCell>
                    <TableCell className="py-1 text-lg">{rep.club || `Rotaract Club of ${rep.clubName || 'Majayjay'}`}</TableCell>
                    <TableCell className="py-1 text-lg">{rep.year || rep.rotaryYear.replace('Rotary Year ', '').split(' | ')[0]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              className="bg-[#16478E] hover:bg-[#0E3068] text-white rounded-full px-8"
              onClick={() => window.open(`https://www.facebook.com/district${district.id}rotaract`, '_blank')}
            >
              VISIT DISTRICT {district.id} FACEBOOK PAGE
            </Button>
            <Link to="/information-center">
              <Button className="bg-[#F6A81C] hover:bg-[#E59A0C] text-white rounded-full px-8">
                VIEW ALL DISTRICTS
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default DistrictDetail;
