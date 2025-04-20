import { FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0F3B7F] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Logo and Description */}
          <div>
            <div className="mb-4">
              <img 
                src="/assets/logo.png" 
                alt="Rotaract MDIO Logo" 
                className="w-full object-cover" 
              />
            </div>
            <p className="text-sm text-white/80 mt-4">
              Hipster ipsum tattooed brunch I'm baby. Mumblecore pug man bun batch hello bitters batch offal pitchfork. Crucifix fanny dsa scenester mug skateboard brooklyn art. Williamsburg hoodie church-key letterpress tbh 3-moon whatever. Viral bun bruh bulb truffaut bun.
            </p>
          </div>
          
          {/* Middle Column: Navigation Links */}
          <div className="space-y-1">
            <Link to="/" className="block py-2 border-b border-white/10 hover:text-white/80 transition-colors">Home</Link>
            <Link to="/under-construction" className="block py-2 border-b border-white/10 hover:text-white/80 transition-colors">Our Leadership Team</Link>
            <Link to="/information-center" className="block py-2 border-b border-white/10 hover:text-white/80 transition-colors">Our Members District</Link>
            <Link to="/under-construction" className="block py-2 border-b border-white/10 hover:text-white/80 transition-colors">Our Program and Activities</Link>
            <Link to="/#statistics" className="block py-2 border-b border-white/10 hover:text-white/80 transition-colors">Rotaract Statistics</Link>
          </div>
          
          {/* Right Column: Our Stories and Social Media */}
          <div>
            <div className="mb-6">
              <h3 className="text-base font-bold mb-4">Our Stories</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/under-construction" className="hover:text-white/80 transition-colors">Philippine Rotaract Magazine</Link></li>
                <li><Link to="/under-construction" className="hover:text-white/80 transition-colors">Ang Balangay</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-bold mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/PilipinasRotaractMDIO" target="_blank" className="hover:text-white/80 transition-colors">
                  <FacebookIcon size={24} />
                </a>
                <a href="https://www.instagram.com/phrotaractmdio" target="_blank" className="hover:text-white/80 transition-colors">
                  <InstagramIcon size={24} />
                </a>
                <a href="https://www.youtube.com/@PilipinasRotaractMDIO" target="_blank" className="hover:text-white/80 transition-colors">
                  <YoutubeIcon size={24} />
                </a>
                <a href="https://www.tiktok.com/@phrotaractmdio" target="_blank" className="hover:text-white/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                  </svg>
                </a>
                <a href="https://x.com/PHRotaractMDIO" target="_blank" className="hover:text-white/80 transition-colors">
                  <TwitterIcon size={24} />
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
