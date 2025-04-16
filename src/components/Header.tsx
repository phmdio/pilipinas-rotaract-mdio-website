
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-rotaract-magenta shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/assets/logo.png" 
                alt="Rotaract MDIO Logo" 
                className="h-10 w-auto"
              />
            </a>
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 focus:bg-white/10">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#1a237e] text-white">
                  <ul className="w-[240px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/under-construction" className="block p-4 hover:bg-white/10 rounded-none">
                          Our History
                        </a>
                      </NavigationMenuLink>
                      <Separator className="bg-white/20" />
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/under-construction" className="block p-4 hover:bg-white/10 rounded-none">
                          Our Leadership Team
                        </a>
                      </NavigationMenuLink>
                      <Separator className="bg-white/20" />
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/under-construction" className="block p-4 hover:bg-white/10 rounded-none">
                          Philippine Rotaract Magazine
                        </a>
                      </NavigationMenuLink>
                      <Separator className="bg-white/20" />
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/under-construction" className="block p-4 hover:bg-white/10 rounded-none">
                          Ang Balangay
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 focus:bg-white/10">
                  Information Center
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#1a237e] text-white">
                  <ul className="w-[240px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/information-center" className="block p-4 hover:bg-white/10 rounded-none">
                          Districts
                        </a>
                      </NavigationMenuLink>
                      <Separator className="bg-white/20" />
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/under-construction" className="block p-4 hover:bg-white/10 rounded-none">
                          Resources
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 focus:bg-white/10">
                  Our Programs and Activities
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#1a237e] text-white">
                  <ul className="w-[250px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/under-construction" className="block p-4 hover:bg-white/10 rounded-none">
                          Key Projects
                        </a>
                      </NavigationMenuLink>
                      <Separator className="bg-white/20" />
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="/under-construction" className="block p-4 hover:bg-white/10 rounded-none">
                          Upcoming Events
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button asChild variant="ghost" className="text-white hover:bg-white/10 focus:bg-white/10">
                  <a href="/under-construction">Donate</a>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-rotaract-magenta shadow-lg absolute w-full">
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
                className="flex justify-between items-center w-full text-white"
              >
                <span>About Us</span>
                <ChevronDown size={16} />
              </button>
              <div id="mobile-about-submenu" className="hidden pl-4 mt-2 space-y-2 bg-[#1a237e] rounded">
                <a href="/under-construction" className="block py-3 px-4 text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Our History</a>
                <Separator className="bg-white/20" />
                <a href="/under-construction" className="block py-3 px-4 text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Our Leadership Team</a>
                <Separator className="bg-white/20" />
                <a href="/under-construction" className="block py-3 px-4 text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Philippine Rotaract Magazine</a>
                <Separator className="bg-white/20" />
                <a href="/under-construction" className="block py-3 px-4 text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Ang Balangay</a>
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
                className="flex justify-between items-center w-full text-white"
              >
                <span>Information Center</span>
                <ChevronDown size={16} />
              </button>
              <div id="mobile-info-submenu" className="hidden pl-4 mt-2 space-y-2 bg-[#1a237e] rounded">
                <a href="/under-construction" className="block py-3 px-4 text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Districts</a>
                <Separator className="bg-white/20" />
                <a href="/under-construction" className="block py-3 px-4 text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Resources</a>
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
                className="flex justify-between items-center w-full text-white"
              >
                <span>Our Programs and Activities</span>
                <ChevronDown size={16} />
              </button>
              <div id="mobile-programs-submenu" className="hidden pl-4 mt-2 space-y-2 bg-[#1a237e] rounded">
                <a href="/under-construction" className="block py-3 px-4 text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Key Projects</a>
                <Separator className="bg-white/20" />
                <a href="/under-construction" className="block py-3 px-4 text-white hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Upcoming Events</a>
              </div>
            </div>
            
            <a href="/under-construction" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Donate</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
