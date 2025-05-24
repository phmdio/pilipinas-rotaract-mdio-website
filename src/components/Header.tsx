import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import useAnalytics from '@/hooks/useAnalytics';
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

const Header = ({ isTransparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { events } = useAnalytics();

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

  const handleMobileMenuToggle = () => {
    events.buttonClick(isMenuOpen ? 'mobile-menu-close' : 'mobile-menu-open');
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (linkId: string, linkText: string, url: string) => {
    events.linkClick(url, linkText, { menu_section: 'header', link_id: linkId });
  };

  const handleMobileSubmenuToggle = (menuId: string) => {
    events.buttonClick(`mobile-submenu-toggle-${menuId}`, { menu_id: menuId });
    const submenu = document.getElementById(`mobile-${menuId}-submenu`);
    if (submenu) {
      submenu.classList.toggle('hidden');
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled
        ? "bg-rotaract-magenta text-white shadow-md"
        : isTransparent
          ? "bg-transparent text-white shadow-md"
          : "bg-white text-black shadow-sm"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center"
              onClick={() => handleNavLinkClick('logo', 'Home Logo', '/')}
            >
              <img
                src={`${isScrolled ? "/assets/logo.png" : isTransparent ? "/assets/logo.png" : "/assets/logo_pink.png"}`}
                alt="Rotaract MDIO Logo"
                className="h-14 w-auto"
              />
            </Link>
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={cn(
                    "bg-transparent",
                    isScrolled || isTransparent
                      ? "text-white hover:bg-white/10 focus:bg-white/10"
                      : "text-black hover:bg-black/10 focus:bg-black/10"
                  )}
                  onClick={() => events.buttonClick('about-us-menu-toggle')}
                >
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent className={cn(
                  "bg-[#1a237e] text-white",
                  isScrolled ? "" : "shadow-lg"
                )}>
                  <ul className="w-[240px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/our-history" 
                          className="block p-4 hover:bg-white/10 rounded-none"
                          onClick={() => handleNavLinkClick('our-history', 'Our History', '/our-history')}
                        >
                          Our History
                        </Link>
                      </NavigationMenuLink>
                      <Separator className="bg-white/20" />
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/our-leadership-team" 
                          className="block p-4 hover:bg-white/10 rounded-none"
                          onClick={() => handleNavLinkClick('our-leadership-team', 'Our Leadership Team', '/our-leadership-team')}
                        >
                          Our Leadership Team
                        </Link>
                      </NavigationMenuLink>
                      <Separator className="bg-white/20" />
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/philippine-rotaract-magazine" 
                          className="block p-4 hover:bg-white/10 rounded-none"
                          onClick={() => handleNavLinkClick('philippine-rotaract-magazine', 'Philippine Rotaract Magazine', '/philippine-rotaract-magazine')}
                        >
                          Philippine Rotaract Magazine
                        </Link>
                      </NavigationMenuLink>
                      <Separator className="bg-white/20" />
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/under-construction"
                          className="block p-4 hover:bg-white/10 rounded-none"
                          onClick={() => handleNavLinkClick('ang-balangay', 'Ang Balangay', '/ang-balangay')}
                        >
                          Ang Balangay
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent",
                  isScrolled || isTransparent
                    ? "text-white hover:bg-white/10 focus:bg-white/10"
                    : "text-black hover:bg-black/10 focus:bg-black/10"
                )}>
                  Information Center
                </NavigationMenuTrigger>
                <NavigationMenuContent className={cn(
                  "bg-[#1a237e] text-white",
                  isScrolled || isTransparent ? "" : "shadow-lg"
                )}>
                  <ul className="w-[240px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/information-center" className="block p-4 hover:bg-white/10 rounded-none">
                          Member Philippine Districts
                        </Link>
                      </NavigationMenuLink>
                      <Separator className="bg-white/20" />
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/rotaract-statistics" className="block p-4 hover:bg-white/10 rounded-none">
                          Rotaract Statistics
                        </Link>
                      </NavigationMenuLink>
                      <Separator className="bg-white/20" />
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/the-rotary-foundation-giving" className="block p-4 hover:bg-white/10 rounded-none">
                          The Rotary Foundation Giving
                        </Link>
                      </NavigationMenuLink>
                      <Separator className="bg-white/20" />
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/procon" className="block p-4 hover:bg-white/10 rounded-none">
                          PROCON Events
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className={cn(
                "bg-transparent",
                isScrolled || isTransparent
                  ? "text-white hover:bg-white/10 focus:bg-white/10"
                  : "text-black hover:bg-black/10 focus:bg-black/10"
              )}>
                <Button asChild variant="ghost">
                  <Link to="/our-programs-and-activities">Our Programs and Activities</Link>
                </Button>
              </NavigationMenuItem>

              <NavigationMenuItem className={cn(
                "bg-transparent",
                isScrolled || isTransparent
                  ? "text-white hover:bg-white/10 focus:bg-white/10"
                  : "text-black hover:bg-black/10 focus:bg-black/10"
              )}>
                <Button asChild variant="ghost">
                  <Link to="https://www.rotary.org/en/get-involved/ways-to-give?utm_source=pilipinas_rotaract_mdio&utm_medium=website&utm_campaign=foundation_giving" target="_blank" rel="noopener noreferrer">Donate</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className={cn(
                "inline-flex items-center justify-center p-2 rounded-md",
                isScrolled
                  ? "text-white hover:text-gray-200"
                  : "text-black hover:text-gray-700"
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
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
                  handleMobileSubmenuToggle('about');
                }}
                className="flex justify-between items-center w-full"
              >
                <span>About Us</span>
                <ChevronDown size={16} />
              </button>
              <div id="mobile-about-submenu" className="hidden pl-4 mt-2 space-y-2 bg-[#1a237e] rounded text-white">
                <Link 
                  to="/our-history" 
                  className="block py-3 px-4 hover:bg-white/10" 
                  onClick={() => {
                    handleNavLinkClick('mobile-our-history', 'Our History', '/our-history');
                    setIsMenuOpen(false);
                  }}
                >
                  Our History
                </Link>
                <Separator className="bg-white/20" />
                <Link to="/our-leadership-team" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Our Leadership Team</Link>
                <Separator className="bg-white/20" />
                <Link to="/philippine-rotaract-magazine" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Philippine Rotaract Magazine</Link>
                <Separator className="bg-white/20" />
                <Link to="/under-construction" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Ang Balangay</Link>
              </div>
            </div>

            <div className="py-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileSubmenuToggle('info');
                }}
                className="flex justify-between items-center w-full"
              >
                <span>Information Center</span>
                <ChevronDown size={16} />
              </button>
              <div id="mobile-info-submenu" className="hidden pl-4 mt-2 space-y-2 bg-[#1a237e] rounded text-white">
                <Link to="/information-center" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Member Philippine Districts</Link>
                <Separator className="bg-white/20" />
                <Link to="/rotaract-statistics" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>Rotaract Statistics</Link>
                <Separator className="bg-white/20" />
                <Link to="/the-rotary-foundation-giving" className="block py-3 px-4 hover:bg-white/10" onClick={() => setIsMenuOpen(false)}>The Rotary Foundation Giving</Link>
              </div>
            </div>

            <div className="py-2">
              <Link to="/our-programs-and-activities" className="block py-2" onClick={() => setIsMenuOpen(false)}>Our Programs and Activities</Link>
            </div>

            <Link to="https://www.rotary.org/en/get-involved/ways-to-give?utm_source=pilipinas_rotaract_mdio&utm_medium=website&utm_campaign=foundation_giving" target="_blank" rel="noopener noreferrer" className="block py-2" onClick={() => setIsMenuOpen(false)}>Donate</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
