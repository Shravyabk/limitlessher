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
    { label: 'Scholarships', href: '/scholarships' },
    { label: 'Careers', href: '/careers' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'Events', href: '/events' },
    { label: 'AI Assistant', href: '/ai-assistant' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-heading font-bold">
            <span className="text-limitless-purple">Limitless</span>
            <span className="text-limitless-pink">Her</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.href} 
                  className="px-3 py-2 text-gray-700 hover:text-limitless-purple transition-colors"
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
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white pt-16 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.href} 
                  className="block py-2 text-lg text-gray-700 hover:text-limitless-purple border-b border-gray-100"
                  onClick={closeMenu}
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
