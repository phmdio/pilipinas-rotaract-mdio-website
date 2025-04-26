import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { cn } from '@/lib/utils';

interface MobileMenuItemsProps {
  isScrolled: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileMenuItems: React.FC<MobileMenuItemsProps> = ({ isScrolled, setIsMenuOpen }) => {
  return (
    <div className={cn(
      "md:hidden absolute w-full",
      isScrolled
        ? "bg-rotaract-magenta shadow-lg text-white"
        : "bg-white shadow-md text-black"
    )}>
      <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
        <div className="py-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              const aboutSubmenu = document.getElementById('mobile-about-submenu');
              if (aboutSubmenu) {
                aboutSubmenu.classList.toggle('hidden');
              }
            }}
            className="flex justify-between items-center w-full"
          >
            <span>About Us</span>
            <ChevronDown size={16} />
          </button>
          <div id="mobile-about-submenu" className="hidden pl-4 mt-2 space-y-2 bg-[#1a237e] rounded">
            <Link to="/our-history" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Our History</Link>
            <Separator className="bg-white/20" />
            <Link to="/under-construction" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Our Leadership Team</Link>
            <Separator className="bg-white/20" />
            <Link to="/under-construction" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Philippine Rotaract Magazine</Link>
            <Separator className="bg-white/20" />
            <Link to="/under-construction" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Ang Balangay</Link>
          </div>
        </div>

        <div className="py-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              const infoSubmenu = document.getElementById('mobile-info-submenu');
              if (infoSubmenu) {
                infoSubmenu.classList.toggle('hidden');
              }
            }}
            className="flex justify-between items-center w-full"
          >
            <span>Information Center</span>
            <ChevronDown size={16} />
          </button>
          <div id="mobile-info-submenu" className="hidden pl-4 mt-2 space-y-2 bg-[#1a237e] rounded">
            <Link to="/information-center" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Districts</Link>
            <Separator className="bg-white/20" />
            <Link to="/rotaract-statistics" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Rotaract Statistics</Link>
            <Separator className="bg-white/20" />
            <Link to="/the-rotary-foundation-giving" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>The Rotary Foundation Giving</Link>
            <Separator className="bg-white/20" />
            <Link to="/procon" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>PROCON Events</Link>
          </div>
        </div>

        <div className="py-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              const programsSubmenu = document.getElementById('mobile-programs-submenu');
              if (programsSubmenu) {
                programsSubmenu.classList.toggle('hidden');
              }
            }}
            className="flex justify-between items-center w-full"
          >
            <span>Our Programs and Activities</span>
            <ChevronDown size={16} />
          </button>
        </div>

        <Link to="/under-construction" className="block py-2" onClick={() => setIsMenuOpen(false)}>Donate</Link>
      </div>
    </div>
  );
};

export default MobileMenuItems;
