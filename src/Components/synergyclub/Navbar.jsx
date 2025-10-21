import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const SynergyClubNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/synergy-club' },
    { name: 'Activities', href: '/synergy-club/activities' },
    { name: 'Events', href: '/synergy-club/events' },
    { name: 'Gallery', href: '/synergy-club/gallery' },
    { name: 'Team', href: '/synergy-club/team' },
    { name: 'About', href: '/synergy-club/about' }
  ];

  const handleNavClick = (href) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className="bg-white shadow-lg sticky top-0 z-50"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div
            onClick={() => handleNavClick('/')}
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <img src="/logo.png" alt="Synergy Club Logo" className="h-8 w-7" />
            <span className="ml-3 text-2xl font-bold text-gray-800">
              Synergy <span className="text-blue-950">Club</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('/')}
              className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              Back to Home
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                location.pathname === item.href
                  ? 'text-blue-600 bg-blue-100'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* Mobile CTA */}
          <div className="px-3 py-2">
            <button
              onClick={() => handleNavClick('/')}
              className="w-full bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
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
