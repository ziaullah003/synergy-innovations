import React from "react";
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/software-synergy-club/", icon: <Linkedin size={18} /> },
  { name: "Instagram", href: "https://www.instagram.com/software_synergy_solutions", icon: <Instagram size={18} /> },
  { name: "Facebook", href: "https://www.facebook.com/share/1AbJ1ZBzFa/", icon: <Facebook size={18} /> },
  { name: "Tiktok", href: "https://www.tiktok.com/@synergyclub_?_r=1&_t=ZS-92DGSLmWlzc", icon: <FaTiktok size={18} /> },

];

const Footer = () => {
  return (
    <footer className="relative z-10 bg-primary text-white dark:bg-dark pt-8 pb-12 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-wrap justify-between gap-y-10">
        
        {/* Logo + About */}
        <div className="w-full md:w-5/12 lg:w-4/12">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <a
                href="/#"
                className="inline-block bg-white rounded-full max-w-[50px] p-1"
              >
                <img
                  src="/logo.png"
                  alt="logo"
                  className="w-16 h-13 p-1 rounded-full dark:hidden"
                />
              </a>
              <h1 className="ml-4 text-xl font-bold text-dark dark:text-white">
                Synergy Innovations
              </h1>
            </div>
            <p className="text-body-color dark:text-dark-6 mb-4 text-sm md:text-base">
              Empowering businesses with smart digital solutions and creative technology. 
              We strive to build tools that inspire growth, efficiency, and lasting impact.
            </p>
            <div className="flex items-start gap-3 text-sm font-medium text-dark dark:text-white">
              <span className="text-primary">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                </svg>
              </span>
              <div>
                <span>+92 (325) 170 50 43</span>
                <br />
                <span>+92 (327) 593 99 38</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Links */}
        <LinkGroup header="Our Products">
          <NavLink link="/synergy-solutions" label="Software Synergy Solutions" />
          <NavLink link="/synergy-club" label="Software Synergy Club" />
          <NavLink link="https://synergymall.io" label="Synergy Mall" />
        </LinkGroup>

        {/* Quick Links */}
        <LinkGroup header="Quick Links">
          <NavLink link="/" label="Home" />
          <NavLink link="/synergy-innovations/about" label="About Us" />
          <NavLink link="/synergy-innovations/contact" label="Contact Us" />
        </LinkGroup>

        {/* Social Links */}
        <div className="w-full md:w-5/12 lg:w-3/12">
          <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
            Follow Us On
          </h4>
          <div className="flex gap-3 mb-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white  hover:text-primary transition-colors dark:border-dark-3"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-body-color dark:text-dark-6">
            &copy; 2025 Synergy Innovations | Developed by Synergy Solutions
          </p>
        </div>
      </div>

      {/* Background SVGs */}
      <BackgroundSVGs />
    </footer>
  );
};

export default Footer;

// --- LinkGroup and NavLink ---
const LinkGroup = ({ children, header }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12 mb-6 md:mb-0">
    <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">{header}</h4>
    <ul className="space-y-2">{children}</ul>
  </div>
);

const NavLink = ({ link, label }) => (
  <li>
    <a
      href={link}
      className="text-sm md:text-base text-body-color hover:text-primary dark:text-dark-6"
    >
      {label}
    </a>
  </li>
);

// --- Background SVGs as separate component ---
const BackgroundSVGs = () => (
  <>
    <span className="absolute bottom-0 left-0 -z-10">
      <svg
        width={217}
        height={229}
        viewBox="0 0 217 229"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-64 140.5C-64 62.904 -1.096 0 76.5 0C154.096 0 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="76.5"
            y1={281}
            x2="76.5"
            y2={0}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3056D3" stopOpacity="0.08" />
            <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span className="absolute right-10 top-10 -z-10">
      <svg
        width={75}
        height={75}
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="37.5"
          cy="37.5"
          r="37.5"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint1_linear"
            x1="0"
            y1="37.5"
            x2={75}
            y2="37.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#13C296" stopOpacity="0.31" />
            <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </>
);
