import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <nav className="bg-black text-white px-4 md:px-16 lg:px-24 sticky top-0 z-50">
      <div className="container py-3 flex justify-between items-center">
        {/* Logo - visible on all screens */}
        <div className="text-2xl font-bold">Rishav</div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#home" onClick={handleHomeClick} className="hover:text-gray-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 transition-colors">
            About Me
          </a>
          <a href="#technologies" className="hover:text-gray-400 transition-colors">
            Technologies
          </a>
          <a href="#experience" className="hover:text-gray-400 transition-colors">
            Experiences
          </a>
          <a href="#projects" className="hover:text-gray-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button - visible only on mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - slides down when open */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-4 bg-black border-t border-gray-800">
          <a
            href="#home"
            onClick={handleHomeClick}
            className="block hover:text-gray-400 transition-colors py-2"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="block hover:text-gray-400 transition-colors py-2"
          >
            About Me
          </a>
          <a
            href="#technologies"
            onClick={closeMenu}
            className="block hover:text-gray-400 transition-colors py-2"
          >
            Technologies
          </a>
          <a
            href="#experience"
            onClick={closeMenu}
            className="block hover:text-gray-400 transition-colors py-2"
          >
            Experiences
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="block hover:text-gray-400 transition-colors py-2"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="block hover:text-gray-400 transition-colors py-2"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
