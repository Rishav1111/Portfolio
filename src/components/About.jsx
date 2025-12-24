import React from "react";
import AboutImg from "../assets/about.png";
const About = () => {
  return (
    <div className="bg-black text-white py-28" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImg}
            alt="About Rishav Shrestha"
            loading="lazy"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate Software Engineer Trainee with a strong interest
              in building efficient and user-friendly applications. I enjoy
              solving problems, learning new technologies, and turning ideas
              into reality. Currently, I'm sharpening my skills in full-stack
              development, working with tools like JavaScript, React, Node.js,
              and databases. I'm excited to grow, contribute to meaningful
              projects, and make an impact in the tech world!
            </p>

            <div className="mt-12 flex justify-evenly text-center space-x-10">
              <div>
                <h3>1+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3>4</h3>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
