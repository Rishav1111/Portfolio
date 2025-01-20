import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-8 flex text-white">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Rishav</h3>
            <p className="text-gray-400">Software Engineer Trainee</p>
          </div>

          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()}</p>

          <div className="flex spce-x-4">
            <a href="#" className="text-gray-400 hiver:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hiver:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
