import React from "react";
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/software-synergy-club/", icon: <Linkedin size={18} /> },
  { name: "Instagram", href: "https://www.instagram.com/software_synergy_solutions", icon: <Instagram size={18} /> },
  { name: "Facebook", href: "https://www.facebook.com/share/1AbJ1ZBzFa/", icon: <Facebook size={18} /> },
  { name: "Tiktok", href: "https://www.tiktok.com/@synergyclub_?_r=1&_t=ZS-92DGSLmWlzc", icon: <FaTiktok size={18} /> },

];
const SynergyClubFooter = () => {
  return (
    <footer className="footer z-10 bg-primary text-white pl-8 pt-8">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap justify-between">
          
          {/* Logo + About */}
          <div className="px-4 w-full md:w-4/12 lg:w-4/12 mb-10">
            <div>
              <div className="flex items-center mb-4">
                <a href="/synergy-club" className="inline-block bg-white rounded-full max-w-[50px]">
                  <img src="/logo.png" alt="logo" className="max-w-full px-2 py-1 rounded-full" />
                </a>
                <h1 className="text-xl ml-5 font-bold">Synergy Club</h1>
              </div>
              <p className="mb-4 text-base text-white/80">
                Building connections, fostering innovation, and creating opportunities 
                for growth through collaborative learning and community engagement.
              </p>
              <p className="flex items-center text-sm font-medium">
                <span className="mr-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                    <path d="M15.1875 19.4688C14.3438..."></path>
                  </svg>
                </span>
                <span>
                  +92 (325) 170 50 43 <br />
                  +92 (327) 593 99 38
                </span>
              </p>
            </div>
          </div>

          {/* Club Sections */}
          <LinkGroup header="Club Sections">
            <NavLink link="/synergy-club/branches" label="Branches" />
            <NavLink link="/synergy-club/activities" label="Activities" />
            <NavLink link="/synergy-club/events" label="Events" />
            <NavLink link="/synergy-club/gallery" label="Gallery" />
          </LinkGroup>

          {/* Quick Links */}
          <LinkGroup header="Quick Links">
            <NavLink link="/synergy-club" label="Home" />
            <NavLink link="/synergy-club/team" label="Team" />
            <NavLink link="/synergy-club/about" label="About Us" />
            <NavLink link="/" label="Back to Main Site" />
          </LinkGroup>

          {/* Social Links */}
          <div className="w-full px-4 md:w-6/12 lg:w-3/12 mb-10">
            <h4 className="mb-4 text-lg font-semibold">Follow Us On</h4>
            <div className="flex items-center flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white  hover:cl-primary transition"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-base mt-4 text-white/70">
              © 2025 Synergy Club | Part of Synergy Innovations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SynergyClubFooter;

const LinkGroup = ({ children, header }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-2/12 mb-10">
      <h4 className="mb-4 text-lg font-semibold">{header}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-white/80 hover:text-white"
      >
        {label}
      </a>
    </li>
  );
};
