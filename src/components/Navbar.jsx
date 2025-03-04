import React from "react";

const Navbar = () => {
  return (
    <nav className=" hidden bg-black text-white px-8 md:px-16 lg:px-24 lg:block">
      <div className="container py-2  flex justify-center md:justify-between items-center ">
        <div className="text-2xl font-bold hidden md:inline">Rishav</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#technologies" className="hover:text-gray-400">
            Technologies
          </a>
          <a href="#experience" className="hover:text-gray-400">
            Experiences
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <button className="bg-gradient-to-r from-red-600 to-blue-700 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
