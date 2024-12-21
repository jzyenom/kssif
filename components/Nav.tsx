import React, { useState, useEffect } from "react";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = ["Home", "About Us", "Services", "Contact Us", "Donate"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow-md transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-md text-black"
          : "bg-black text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <img src="/kssif_Logo.png" alt="Logo" className="h-10" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="hover:text-white md:text-sm"
            >
              {link}
            </a>
          ))}
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-3 py-1 rounded"
          />
          <img
            src="/avatar.svg"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-xl">☰</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/75 space-y-2 py-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="block text-center text-white hover:bg-gray-700 py-2"
            >
              {link}
            </a>
          ))}
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-3 py-1 rounded block mx-auto"
          />
          <img
            src="/avatar.svg"
            alt="Profile"
            className="h-10 w-10 rounded-full block mx-auto my-2"
          />
        </div>
      )}
    </nav>
  );
};

export default Nav;
