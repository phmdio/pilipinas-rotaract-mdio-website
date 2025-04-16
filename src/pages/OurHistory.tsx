
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const OurHistory = () => {
  return (
    <>
      <Helmet>
        <title>Our History | Pilipinas Rotaract MDIO</title>
        <meta name="description" content="The history of Pilipinas Rotaract Multi-District Information Organization" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-end">
          {/* Carousel container */}
          <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url("/assets/our-history.png")` }}
          ></div>
          </div>
          
          {/* Content overlaid on carousel */}
          <div className="relative w-full mx-auto px-auto sm:px-6 lg:px-8 py-8 text-white">
            <h1 className="text-6xl sm:text-5xl font-bold text-start text-white">Our History</h1>
            {/* Dark overlay */}
            <div className="absolute w-full inset-0 bg-black/20"></div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-4">Committed to Strengthen the National Rotaract Movement</h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-justify whitespace-pre-wrap">
              It has always been a dream for the Philippine District Rotaract Representatives (DRRs) to establish a Multi-District Information Organization ever since. There were numerous generations of DRRs who tried to create such an organization. But that dream had just begun to realize when the Philippine Rotaract was given a chance to host the 3rd Asia Pacific Regional Rotaract Conference (APRRC) in 2006. During that time, the DRRs worked as one as they met various challenges while planning and preparing for the important event. The successful hosting of APRRC Pilipinas became the strongest force that made the Philippine MDIO into a reality.

              On February 4, 2007, the first meeting for the formation was held in Rotary Club of Cubao Resource and Learning Center in Araneta Center, Cubao, Quezon City. It was then that the Memorandum of Understanding, By-laws and Constitution were deliberated by then DRRs Devie Ontolan (D3780), Rhosenie Villanueva (D3810), Felimon Brazas Jr. (D3820) and Maria Beth Salvador (D3790). All ten Philippine Rotaract districts contributed and were involved in different ways. Even the farthest DRRs Karlene Lariosa (D3860) and Arnold Gapusan (D3870) were actively involved with online revisions of By-Laws and Constitution. The logo was made by DRR Ardel Buenconsejo (D3850) who is an architect by profession. Truly, the 10 Philippine Rotaract districts joined hands for Pilipinas MDIO application.

              The original set of officers was as follows: Chairman DRR Devie Ontolan (D3780), Secretary DRR Filemon Brazas Jr. (D3820), Asst. Secretary DRR Joanie Sitoy (D3830), Treasurer DRR Maria Elizabeth Salvador (D3790), Public Relations Committee Chair DRR Dimple De Silva (D3770) and its Vice Chair DRR Catherine Deang (D3800). Assigned for the Training and Professional Development Committee were DRR Rhosenie Villanueva (D3810) as Chair and DRR Joanie Sitoy (D3830) as its Vice Chair.

              There were five districts that tried to submit the MDIO requirements on June 24, 2007 to Rotary International (RI) for inclusion and recognition. However, only three districts complied with all the requirements. It was on November 26, 2007 when RI responded that the General Secretary, on behalf of the RI Board, has approved the request from Districts 3780, 3810 and 3820 to form MDIO.

              However, to keep within current RI naming guidelines, the approval is contingent upon MDIO’s acceptance of the revised name “Pilipinas Rotaract MDIO representing Districts 3780, 3810 and 3820” and providing guidelines and bylaws to RI which reflect the changed name. Past RI Committee Director Tom Panis and PDG Sonny Coloma (Zone Coordinator for Youth Resources Group of RI) were the two Filipino RI officers who eagerly helped follow-up the MDIO application status.

              On Rotary Year 2008-09, Districts 3790 and 3830 were able to complete the requirements and were included as members. Then, Districts 3800 and 3860 pursue their membership applications in Rotary Year 2009-10 and were immediately recognized by RI. Only in Rotary Year 2012-13 when the remaining three districts (Districts 3770, 3850 and 3870) were approved and recognized by RI to join the MDIO. Thus, the time to use the name “Pilipinas Rotaract MDIO”.
              </p>
            </div>
            
            {/* Blue Box */}
            <div className="mt-10 mb-10 bg-rotaract-blue text-white p-6 rounded-sm">
              <h3 className="text-xl font-bold mb-4">Signing DRRs and DGs to the formation of Pilipinas Rotaract MDIO</h3>
              <ol className="pl-6 space-y-2">
                <li>Established the first coordinating body for Rotaract clubs in the Philippines</li>
                <li>Organized annual national conferences and assemblies</li>
                <li>Created platforms for inter-district collaboration and projects</li>
                <li>Developed leadership training programs for Rotaractors</li>
                <li>Facilitated communication between Rotaract districts</li>
                <li>Promoted Rotaract's role within Rotary International</li>
                <li>Provided support and resources to strengthen local clubs</li>
              </ol>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Duis dapibus, magna eget cursus vestibulum, turpis quam eleifend sem, nec faucibus enim tortor vel ex. Mauris a augue efficitur, condimentum nibh vel, facilisis nisi. Suspendisse potenti. Ut ultrices malesuada nibh, vel efficitur orci vehicula non. Donec vel vehicula nisi. Etiam sed ultricies lacus. Nulla facilisi. Cras tincidunt, arcu a tempor porta, nunc leo elementum enim, vel vehicula neque neque nec quam. Duis sed erat neque. Cras vel felis sit amet nisl aliquet feugiat.
              </p>
              <p>
                Praesent sed dictum dolor. Sed tincidunt nunc vitae dapibus cursus. Donec volutpat lectus vel felis ultrices tempus. Nullam porttitor sit amet dolor eu vehicula. Praesent et iaculis mi. Cras efficitur justo vel felis aliquam, vel rhoncus risus aliquet. Vestibulum rhoncus, turpis ut facilisis venenatis, dolor justo blandit nisi, ac interdum libero ligula eget arcu. Etiam et sapien et risus fringilla varius eu vel dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
              </p>
              <p>
                Nullam varius vel metus sit amet pulvinar. Sed facilisis est in vehicula dapibus. Maecenas id faucibus nibh. Donec vel ultricies purus. Cras accumsan nisi non odio vestibulum, sit amet euismod odio vehicula. Quisque laoreet molestie nulla, id interdum felis vehicula sit amet. Nulla mattis malesuada nulla eget pellentesque. Aliquam erat volutpat. Aenean semper aliquet efficitur. Cras commodo at ipsum eget fringilla. Integer facilisis euismod nisi, et commodo arcu condimentum sed. Nullam blandit, nisl ut sagittis dictum, elit urna vulputate ex, id volutpat nisl metus a orci.
              </p>
              <p>
                Sed tincidunt vestibulum ex sed sodales. Vivamus at neque mollis, vestibulum urna at, facilisis mauris. Sed quis dui et magna lobortis pulvinar id sed metus. Proin porta, orci quis posuere feugiat, purus erat dictum dui, id vehicula nisi nisl sit amet nisl. Sed dapibus lacus eu fermentum auctor. Pellentesque et magna purus. Vivamus quis consequat enim, at faucibus sem. Vestibulum finibus lectus nec eros mattis, non pulvinar lectus volutpat. Donec ut ornare nulla, quis aliquam augue. Nulla consequat scelerisque augue, vitae tristique sapien finibus lacinia. Vivamus aliquam sagittis tortor, ac eleifend ipsum consequat vitae. Fusce tincidunt justo vel aliquam rutrum.
              </p>
            </div>
            
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
        
        {/* MDIO Chairs Section */}
        <section className="py-12 bg-rotaract-magenta text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">MDIO Chairs Through the Years</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Row 1 */}
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 1" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">John Doe</h3>
                <p className="text-sm">2020-2021</p>
                <p className="text-sm">District 3810</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 2" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Jane Smith</h3>
                <p className="text-sm">2019-2020</p>
                <p className="text-sm">District 3800</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 3" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Robert Johnson</h3>
                <p className="text-sm">2018-2019</p>
                <p className="text-sm">District 3780</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 4" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Maria Garcia</h3>
                <p className="text-sm">2017-2018</p>
                <p className="text-sm">District 3820</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 5" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Michael Brown</h3>
                <p className="text-sm">2016-2017</p>
                <p className="text-sm">District 3830</p>
              </div>
              
              {/* Row 2 */}
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 6" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Sarah Wilson</h3>
                <p className="text-sm">2015-2016</p>
                <p className="text-sm">District 3850</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 7" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">David Taylor</h3>
                <p className="text-sm">2014-2015</p>
                <p className="text-sm">District 3860</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 8" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Lisa Martinez</h3>
                <p className="text-sm">2013-2014</p>
                <p className="text-sm">District 3870</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 9" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">James Anderson</h3>
                <p className="text-sm">2012-2013</p>
                <p className="text-sm">District 3790</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 10" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Emily White</h3>
                <p className="text-sm">2011-2012</p>
                <p className="text-sm">District 3770</p>
              </div>
              
              {/* Row 3 */}
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 11" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Thomas Clark</h3>
                <p className="text-sm">2010-2011</p>
                <p className="text-sm">District 3800</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 12" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Sophia Lee</h3>
                <p className="text-sm">2009-2010</p>
                <p className="text-sm">District 3810</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 13" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">William Turner</h3>
                <p className="text-sm">2008-2009</p>
                <p className="text-sm">District 3820</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 14" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Olivia Martin</h3>
                <p className="text-sm">2007-2008</p>
                <p className="text-sm">District 3830</p>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png" alt="Chair 15" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="font-bold">Daniel Hall</h3>
                <p className="text-sm">2006-2007</p>
                <p className="text-sm">District 3850</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default OurHistory;
