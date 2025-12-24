import React from "react";
import HeroImage from "../assets/hero.jpg";
const Hero = () => {
  return (
    <div id="home" className="bg-black bg-[radial-gradient(circle_300px_at_50%_250px,#fbfbfb36,#000)] text-white text-center py-20">
      <img
        src={HeroImage}
        alt="Rishav Shrestha"
        loading="eager"
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
        <a href="https://www.linkedin.com/in/rishav-shrestha-25582a1b1/">
        <button className="bg-gradient-to-r from-red-600 to-blue-700 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact With Me
        </button>
        </a>

        <a href="https://drive.google.com/file/d/1zRG86Of0cFNNH1o1hZf9h1dO43nVBA9e/view?usp=sharing">

        <button  className="bg-gradient-to-r from-green-500 to-blue-600 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Resume
        </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
