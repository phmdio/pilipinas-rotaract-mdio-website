
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0F3B7F] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Logo and Description */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/6f1ba434-94b8-4f3a-8bdf-e3142edb0a71.png" 
                alt="Rotaract Logo" 
                className="w-24 h-24 object-contain" 
              />
            </div>
            <p className="text-sm text-white/80 mt-4">
              Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man bun batch hello bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun.
            </p>
          </div>
          
          {/* Middle Column: Navigation Links */}
          <div className="space-y-1">
            <a href="#" className="block py-2 border-b border-white/10 hover:text-white/80 transition-colors">Home</a>
            <a href="#" className="block py-2 border-b border-white/10 hover:text-white/80 transition-colors">Our Leadership Team</a>
            <a href="#" className="block py-2 border-b border-white/10 hover:text-white/80 transition-colors">Our Members District</a>
            <a href="#" className="block py-2 border-b border-white/10 hover:text-white/80 transition-colors">Our Program and Activities</a>
            <a href="#" className="block py-2 border-b border-white/10 hover:text-white/80 transition-colors">Rotaract Statistics</a>
          </div>
          
          {/* Right Column: Our Stories and Social Media */}
          <div>
            <div className="mb-6">
              <h3 className="text-base font-bold mb-4">Our Stories</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white/80 transition-colors">Philippine Rotaract Magazine</a></li>
                <li><a href="#" className="hover:text-white/80 transition-colors">Ang Balangay</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-bold mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Youtube size={24} />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-sm text-white/70">
          <p>Pilipinas Rotaract Multi-District Information Organization, ©{new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
