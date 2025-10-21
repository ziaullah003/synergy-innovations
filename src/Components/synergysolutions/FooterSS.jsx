import React from 'react';
import { Phone, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const FooterSS = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
     { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const products = [
    'Software Synergy Solutions',
    'Software Synergy Club', 
    'Synergy Mall'
  ];

  return (
    <footer className="bg-primary shadow-blue-950 relative z-10 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between -mx-4">
          
          {/* Company Info Section */}
          <div className="w-full px-4 sm:w-full lg:w-4/12 mb-10">
            <div className="mb-8">
              {/* Logo matching navbar */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 relative">
                 <img src="/logo.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
                </div>
                <h1 className="text-2xl ml-4 font-bold text-white">
                  Synergy <span className="text-ehite">Solutions</span>
                </h1>
              </div>

              <p className="mb-6 text-base text-white leading-relaxed">
                Empowering businesses with smart digital solutions and creative technology. We strive to build tools that inspire growth, efficiency, and lasting impact.
              </p>

              {/* Phone Numbers */}
              <div className="flex items-start text-sm font-medium text-white">
                <div className="mr-3 text-white mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="mb-1">+92 (325) 170 50 43</div>
                  <div>+92 (327) 593 99 38</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12 mb-10">
            <div className="w-full">
              <h4 className="mb-8 text-lg font-semibold text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="inline-block text-base text-white hover:text-cyan-600 transition-colors duration-200 relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Products */}
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12 mb-10">
            <div className="w-full">
              <h4 className="mb-8 text-lg font-semibold text-white">
                Our Products
              </h4>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product}>
                    <a
                      href="#"
                      className="inline-block text-base text-white hover:text-cyan-600 transition-colors duration-200 relative group"
                    >
                      {product}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="w-full px-4 sm:w-full lg:w-3/12">
            <div>
              <h4 className="mb-8 text-lg font-semibold text-white">
                Follow Us On
              </h4>
              
              {/* Social Icons */}
              <div className="mb-8 flex items-center space-x-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white hover:border-white hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-110"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white hover:border-white hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-110"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white hover:border-white hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-110"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white hover:border-white hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-110"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              {/* Copyright */}
              <p className="text-base text-white leading-relaxed">
                &copy; 2025 Synergy Innovations | Developed By Synergy Solutions
              </p>
            </div>
          </div>
        </div>


      </div>

    </footer>
  );
};

export default FooterSS;