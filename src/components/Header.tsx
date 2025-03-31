
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/8124ea27-b99c-4f37-8cdf-559344457e8f.png"
              alt="Pilipinas Rotaract Logo"
              className="h-12 w-auto"
            />
            <span
              className={`font-bold text-xl ${
                isScrolled ? 'text-rotaract-blue' : 'text-white'
              }`}
            >
              Pilipinas Rotaract
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#about"
                    className={`text-sm font-medium hover:text-rotaract-magenta transition ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    About
                  </a>
                </li>
                <li className="relative group">
                  <button
                    className={`flex items-center text-sm font-medium group-hover:text-rotaract-magenta transition ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    Programs <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      <a
                        href="#programs"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Service Projects
                      </a>
                      <a
                        href="#programs"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Leadership Development
                      </a>
                      <a
                        href="#programs"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        International Service
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#info-center"
                    className={`text-sm font-medium hover:text-rotaract-magenta transition ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#foundation"
                    className={`text-sm font-medium hover:text-rotaract-magenta transition ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    Foundation
                  </a>
                </li>
                <li>
                  <Link
                    to="/coming-soon"
                    className={`text-sm font-medium hover:text-rotaract-magenta transition ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    Coming Soon
                  </Link>
                </li>
              </ul>
            </nav>
            <Button className="bg-rotaract-magenta hover:bg-rotaract-magenta/90">
              Join Us
            </Button>
          </div>

          <button
            className="lg:hidden text-rotaract-blue"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-gray-700 block"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-700 block"
                  onClick={closeMenu}
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#info-center"
                  className="text-gray-700 block"
                  onClick={closeMenu}
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#foundation"
                  className="text-gray-700 block"
                  onClick={closeMenu}
                >
                  Foundation
                </a>
              </li>
              <li>
                <Link
                  to="/coming-soon"
                  className="text-gray-700 block"
                  onClick={closeMenu}
                >
                  Coming Soon
                </Link>
              </li>
              <li>
                <Button
                  className="bg-rotaract-magenta hover:bg-rotaract-magenta/90 w-full"
                  onClick={closeMenu}
                >
                  Join Us
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
