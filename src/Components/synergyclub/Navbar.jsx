import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const SynergyClubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '/synergy-club' },
    { name: 'Branches', href: '/synergy-club/branches' },
    { name: 'Activities', href: '/synergy-club/activities' },
    { name: 'Events', href: '/synergy-club/events' },
    { name: 'Gallery', href: '/synergy-club/gallery' },
    { name: 'Senior Alumni', href: '/synergy-club/senior-alumni' },
    { name: 'Current Members', href: '/synergy-club/current-members' },
    { name: 'About', href: '/synergy-club/about' }
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu on link click
  };

  const handleNavClick = (href) => {
    // In a real application, this would handle navigation
    console.log(`Navigating to: ${href}`);
    handleScrollTop();
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            
              <img src="/logo.png" alt="Logo" className="h-8 w-7" />
           
            <span className="ml-3 text-2xl font-bold text-gray-800">
              Synergy <span className="text-blue-950">Club</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={() => handleNavClick('/')}
              className="bg-blue-900 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:cursor-pointer"
            >
              Back to Home
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}

          {/* Mobile CTA Button */}
          <div className="px-3 py-2">
            <button 
              onClick={() => handleNavClick('/')}
              className="w-full bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SynergyClubNavbar;