
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-rotaract-magenta font-display font-bold text-xl">Pilipinas Rotaract</span>
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-gray-800 hover:text-rotaract-magenta transition-colors">About</a></li>
              <li><a href="#info-center" className="text-gray-800 hover:text-rotaract-magenta transition-colors">Districts</a></li>
              <li><a href="#programs" className="text-gray-800 hover:text-rotaract-magenta transition-colors">Programs</a></li>
              <li><a href="#statistics" className="text-gray-800 hover:text-rotaract-magenta transition-colors">Statistics</a></li>
              <li><a href="#contact" className="text-gray-800 hover:text-rotaract-magenta transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-rotaract-magenta focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
            <a href="#about" className="block py-2 text-gray-800 hover:text-rotaract-magenta" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#info-center" className="block py-2 text-gray-800 hover:text-rotaract-magenta" onClick={() => setIsMenuOpen(false)}>Districts</a>
            <a href="#programs" className="block py-2 text-gray-800 hover:text-rotaract-magenta" onClick={() => setIsMenuOpen(false)}>Programs</a>
            <a href="#statistics" className="block py-2 text-gray-800 hover:text-rotaract-magenta" onClick={() => setIsMenuOpen(false)}>Statistics</a>
            <a href="#contact" className="block py-2 text-gray-800 hover:text-rotaract-magenta" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
