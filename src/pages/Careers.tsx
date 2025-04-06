import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { label: 'Scholarships', path: '/scholarships' },
    { label: 'Careers', path: '/careers' },
    { label: 'Success Stories', path: '/success-stories' },
    { label: 'Events', path: '/events' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-sm text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-heading font-bold">
            <span className="text-limitless-purple drop-shadow-md">Limitless</span>
            <span className="text-limitless-pink drop-shadow-md">Her</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path} 
                  className="px-3 py-2 text-gray-300 hover:text-limitless-purple transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="ml-4 bg-limitless-purple hover:bg-limitless-purple/90 text-white">
            Join Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-gray-900 pt-16 text-white transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path}
                  onClick={closeMenu}
                  className="block py-2 text-lg text-gray-200 hover:text-limitless-purple border-b border-gray-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button 
                className="w-full mt-4 bg-limitless-purple hover:bg-limitless-purple/90 text-white"
                onClick={closeMenu}
              >
                Join Us
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
