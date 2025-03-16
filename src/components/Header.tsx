
import { useState } from 'react';
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-rotaract-magenta fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/6d8d0de1-a332-4cb7-a5ba-0f50b8abbc30.png" 
                alt="Rotaract Logo" 
                className="h-8 w-auto mr-3"
              />
              <div className="flex flex-col text-white">
                <span className="font-display font-bold text-xl leading-tight">Pilipinas Rotaract</span>
                <span className="text-xs leading-tight">Multi-District Information Organization</span>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 focus:bg-white/10">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#about" className="block p-2 hover:bg-gray-100 rounded-md">
                          Our History
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#leadership" className="block p-2 hover:bg-gray-100 rounded-md">
                          Leadership Team
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
                <NavigationMenuContent className="bg-white">
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#info-center" className="block p-2 hover:bg-gray-100 rounded-md">
                          Districts
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#resources" className="block p-2 hover:bg-gray-100 rounded-md">
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
                <NavigationMenuContent className="bg-white">
                  <ul className="grid gap-3 p-4 w-[250px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#programs" className="block p-2 hover:bg-gray-100 rounded-md">
                          Key Projects
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#events" className="block p-2 hover:bg-gray-100 rounded-md">
                          Upcoming Events
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button asChild variant="ghost" className="text-white hover:bg-white/10 focus:bg-white/10">
                  <a href="#donate">Donate</a>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Mobile menu button */}
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
      
      {/* Mobile menu */}
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
              <div id="mobile-about-submenu" className="hidden pl-4 mt-2 space-y-2">
                <a href="#about" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Our History</a>
                <a href="#leadership" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Leadership Team</a>
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
              <div id="mobile-info-submenu" className="hidden pl-4 mt-2 space-y-2">
                <a href="#info-center" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Districts</a>
                <a href="#resources" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Resources</a>
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
              <div id="mobile-programs-submenu" className="hidden pl-4 mt-2 space-y-2">
                <a href="#programs" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Key Projects</a>
                <a href="#events" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Upcoming Events</a>
              </div>
            </div>
            
            <a href="#donate" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Donate</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
