
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
              <span className="text-white font-display font-bold text-xl">Pilipinas Rotaract</span>
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-white hover:text-gray-200 transition-colors">About</a></li>
              <li><a href="#info-center" className="text-white hover:text-gray-200 transition-colors">Districts</a></li>
              <li><a href="#programs" className="text-white hover:text-gray-200 transition-colors">Programs</a></li>
              <li><a href="#statistics" className="text-white hover:text-gray-200 transition-colors">Statistics</a></li>
              <li><a href="#contact" className="text-white hover:text-gray-200 transition-colors">Contact</a></li>
            </ul>
          </nav>
          
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
            <a href="#about" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#info-center" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Districts</a>
            <a href="#programs" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Programs</a>
            <a href="#statistics" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Statistics</a>
            <a href="#contact" className="block py-2 text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
