"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";

const NavLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
                              const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-black bg-opacity-95 backdrop-blur-lg shadow-xl'
        : 'bg-transparent'
    }`}>
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 md:px-8 py-4">
        {/* Logo with hover effect */}
        <Link href={"/"} className="group relative flex-shrink-0">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-yellow-400 transition-all duration-300 group-hover:border-yellow-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-400/50">
            <Image src="/images/profil.png" alt="Viky Arthya" width={100} height={100} className="object-cover w-full h-full" />
          </div>
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 scale-150"></div>
        </Link>

        {/* Center Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex items-center space-x-12">
            {NavLinks.map((link, index) => (
              <div key={index} className="relative group">
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="relative px-6 py-3 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-yellow-400"
                />
                {/* Underline effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty space for balance on desktop */}
        <div className="hidden md:block flex-shrink-0 w-14 h-14"></div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-lg border border-gray-600 bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:text-white hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300"
          >
            <div className="w-5 h-5 relative flex flex-col justify-center">
              <span className={`block h-0.5 w-5 bg-current transform transition-all duration-300 ${navbarOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'}`}></span>
              <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${navbarOpen ? 'opacity-0' : 'opacity-100'} mt-1`}></span>
              <span className={`block h-0.5 w-5 bg-current transform transition-all duration-300 ${navbarOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'} mt-1`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <div className="px-4 py-6 space-y-2">
            {NavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={() => setNavbarOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-orange-500/10 rounded-lg transition-all duration-300 text-sm font-medium border border-transparent hover:border-yellow-400/30"
              >
                {link.title}
              </Link>
            ))}

            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
