import React from "react";
import HeroImage from "../assets/hero.JPG";
const Hero = () => {
  return (
    <div className="bg-black bg-[radial-gradient(circle_300px_at_50%_250px,#fbfbfb36,#000)] text-white text-center py-20">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-700">
          Rishav Shrestha
        </span>
        , Software Engineer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive Web Apps.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-red-600 to-blue-700 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact With Me
        </button>

        <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
