import React from "react";
import DoctorAppointment from "../assets/doctor.png";
import Investment from "../assets/investment.png";
import CMS from "../assets/CMS.png";
import LiveWeather from "../assets/LiveWeather.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Doctor Appointment Booking",
      technologies: "ReactJS and Tailwind CSS",
      image: DoctorAppointment,
      Link: "https://doctor-appointment-booking-pi.vercel.app/",
    },
    {
      id: 2,
      name: "Investment Calculator",
      technologies: "React JS",
      image: Investment,
      Link: "https://investment-calculator-dun-one.vercel.app/",
    },
    {
      id: 3,
      name: "CMS Backend",
      technologies: "MERN Stack",
      image: CMS,
      Link: "https://github.com/Rishav1111/CMS_Backend",
    },
    {
      id: 4,
      name: "Live Weather",
      technologies: "HTML CSS PHP",
      image: LiveWeather,
      Link: "https://github.com/Rishav1111/Live-Weather",
    },
  ];

  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-20">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div className="text-white bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                className="inline-block bg-gradient-to-r from-red-600 to-blue-700 text-white  px-4 py-2 rounded-full"
                href={project.Link}
              >
                Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
