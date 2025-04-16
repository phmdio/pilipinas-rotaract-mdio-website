
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
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[300px] bg-rotaract-blue">
          <div className="relative z-10 flex items-center h-full">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold text-white">Our History</h1>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60" 
            style={{ backgroundImage: `url("/lovable-uploads/cc6b0efa-c8ab-45cc-b769-33c0b63b4c82.png")` }}
          ></div>
        </section>
        
        {/* Content Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-rotaract-blue mb-4">Committed to Strengthen the National Rotaract Movement</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at justo vel dui commodo hendrerit. Suspendisse potenti. Maecenas id dui eget dolor lacinia efficitur. Praesent et mi vel arcu fermentum feugiat. Nulla facilisi. Duis at magna id velit finibus interdum. Praesent tempor eros nec ex convallis, in mollis nisi pharetra. Proin vel est finibus, tempus dui vitae, pharetra dui.
              </p>
              <p>
                Cras consequat metus nec eros rhoncus, at malesuada ipsum laoreet. Donec eu justo vitae nisl volutpat bibendum. Duis dictum urna sit amet diam varius, a imperdiet nibh finibus. Integer convallis euismod quam, vel ultrices mi commodo eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam eu massa at lacus posuere pulvinar. Donec feugiat, nulla vel finibus pharetra, nisl urna bibendum urna, eget tincidunt magna augue eu magna.
              </p>
              <p>
                Etiam egestas quam et tellus tristique, at bibendum arcu sodales. Vivamus non enim vel magna blandit sollicitudin. Sed sit amet metus et nisi varius bibendum. Nullam vel dolor vel sapien ultrices posuere. Mauris non urna vel purus pulvinar faucibus. Nulla facilisi. Aliquam erat volutpat. Fusce vel magna nec nisi tincidunt lobortis.
              </p>
            </div>
            
            {/* Blue Box */}
            <div className="mt-10 mb-10 bg-rotaract-blue text-white p-6 rounded-sm">
              <h3 className="text-xl font-bold mb-4">Starting 1990, led by Dr. Uy Foundation of Rotary District 3810</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Established the first coordinating body for Rotaract clubs in the Philippines</li>
                <li>Organized annual national conferences and assemblies</li>
                <li>Created platforms for inter-district collaboration and projects</li>
                <li>Developed leadership training programs for Rotaractors</li>
                <li>Facilitated communication between Rotaract districts</li>
                <li>Promoted Rotaract's role within Rotary International</li>
                <li>Provided support and resources to strengthen local clubs</li>
              </ul>
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
