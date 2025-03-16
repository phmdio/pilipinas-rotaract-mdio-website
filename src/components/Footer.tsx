
import { Facebook, Instagram, Youtube, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold mb-4">Follow us:</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="text-lg font-bold">Rotaract</span>
              <span className="ml-1 text-sm">Pilipinas</span>
            </div>
            <p className="text-sm text-white/70 text-center md:text-left">
              Rotaract clubs bring together people ages 18+ to exchange ideas with leaders in the community.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 text-center md:text-left">About</h3>
            <ul className="space-y-2 text-sm text-white/70 text-center md:text-left">
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our History</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Structure</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 text-center md:text-left">Get Involved</h3>
            <ul className="space-y-2 text-sm text-white/70 text-center md:text-left">
              <li><a href="#" className="hover:text-white transition-colors">Join a Club</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Start a Club</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 text-center md:text-left">Resources</h3>
            <ul className="space-y-2 text-sm text-white/70 text-center md:text-left">
              <li><a href="#" className="hover:text-white transition-colors">Brand Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Learning Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">District Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} Pilipinas Rotaract. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {' · '}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            {' · '}
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
