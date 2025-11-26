import React from "react";
import {
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

const FooterSS = () => {
  const navItems = [
    { name: "Home", href: "/synergy-solutions" },
    { name: "Services", href: "/synergy-solutions/services" },
    { name: "Projects", href: "/synergy-solutions/projects" },
    { name: "Team", href: "/synergy-solutions/team" },
    { name: "About", href: "/synergy-solutions/about" },
    { name: "Contact", href: "/synergy-solutions/contact" },
  ];

  const products = [
    "Software Synergy Solutions",
    "Software Synergy Club",
    "Synergy Mall",
  ];

  const socialLinks = [
    { icon: Facebook, href: "" },
    { icon: Twitter, href: "" },
    { icon: Youtube, href: "" },
    { icon: Linkedin, href: "" },
  ];

  return (
    <footer className="bg-primary pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

          {/* COMPANY */}
          <div>
            <a href="/#" className="mb-4 inline-block bg-white rounded-full mx-auto sm:mx-0 max-w-[50px]">
              <img
                src="/logo.png"
                alt="logo"
                className="max-w-full px-2 py-1 rounded-full"
              />
            </a>

            <p className="text-sm sm:text-base text-white leading-relaxed mb-5">
              Empowering businesses with smart digital solutions and creative
              technology. We build tools that inspire growth, efficiency, and
              lasting impact.
            </p>

            <div className="flex justify-center sm:justify-start items-start text-sm text-white">
              <Phone className="w-5 h-5 mr-3 mt-1" />
              <div>
                <p>+92 (325) 170 50 43</p>
                <p>+92 (327) 593 99 38</p>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="inline-block text-sm sm:text-base text-white hover:text-cyan-300 transition-colors duration-200 group"
                  >
                    {item.name}
                    <span className="block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Products
            </h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    to={
                      product === "Software Synergy Solutions"
                        ? "/synergy-solutions"
                        : product === "Software Synergy Club"
                        ? "/synergy-club "
                        : "/synergy-mall"
                    }
                    className="inline-block text-sm sm:text-base text-white hover:text-cyan-300 transition-colors duration-200 group"
                  >
                    {product}
                    <span className="block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Follow Us On
            </h4>

            <div className="flex justify-center sm:justify-start items-center space-x-3 mb-6">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white text-white hover:cl-primary transition-all transform hover:scale-105"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-white">
              &copy; 2025 Synergy Innovations
              <br />
              Developed By Synergy Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSS;
