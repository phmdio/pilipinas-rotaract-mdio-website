
import { useInView } from 'react-intersection-observer';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const FoundationSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="foundation" className="relative">
      {/* Magenta wave divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-10">
        <svg
          className="relative block w-full h-[70px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.44,118.92,130.61,111.31,191.85,100.88,259.92,89.23,290.81,67.68,321.39,56.44Z"
            fill="#E30B5C"
          ></path>
        </svg>
      </div>
      
      <div 
        className="bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8 relative" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/d6ddc3b8-b794-40b9-9468-d72a8a044f32.png')",
          paddingTop: "5rem",
          paddingBottom: "5rem"
        }}
        ref={ref}
      >
        <div className="max-w-7xl mx-auto">
          <div className={cn(
            "max-w-3xl transition-all duration-500 opacity-0 translate-y-4",
            inView && "opacity-100 translate-y-0"
          )}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">The Rotary Foundation Giving</h2>
            <div className="w-full max-w-xl h-0.5 bg-white mb-6"></div>
            <p className="text-white/90 mb-8">
              Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man batch hella bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun.
            </p>
            <a href="#" className="inline-block bg-[#FF9500] text-white font-medium uppercase tracking-wider px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
              Donate to the Rotary Foundation
            </a>
            
            <div className="mt-16">
              <h3 className="text-xl font-medium text-white mb-4">Follow us:</h3>
              <div className="flex space-x-6">
                <a href="#" className="bg-white rounded-full p-3 inline-flex items-center justify-center hover:opacity-90 transition-all">
                  <Facebook size={24} className="text-[#1877F2]" />
                </a>
                <a href="#" className="bg-white rounded-full p-3 inline-flex items-center justify-center hover:opacity-90 transition-all">
                  <Instagram size={24} className="text-[#E4405F]" />
                </a>
                <a href="#" className="bg-white rounded-full p-3 inline-flex items-center justify-center hover:opacity-90 transition-all">
                  <Youtube size={24} className="text-[#FF0000]" />
                </a>
                <a href="#" className="bg-white rounded-full p-3 inline-flex items-center justify-center hover:opacity-90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000" stroke="none">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="#" className="bg-white rounded-full p-3 inline-flex items-center justify-center hover:opacity-90 transition-all">
                  <Twitter size={24} className="text-[#1DA1F2]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
