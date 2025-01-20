import React, { useState } from "react";
import { EXPERIENCES } from "../constants/experience";
import { FaBriefcase, FaArrowDown, FaArrowUp } from "react-icons/fa";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="min-h-screen pb-20 flex items-center justify-center bg-black text-white"
    >
      <div className="w-full max-w-4xl px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="relative border-l-4 border-cyan-400 pl-8">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 relative transition-all duration-300 ${
                expandedIndex === index ? "bg-neutral-800 rounded-lg p-6" : ""
              }`}
            >
              {/* Icon and Connector */}
              <div className="absolute -left-7 top-2 flex items-center justify-center w-12 h-12 bg-cyan-400 text-neutral-950 rounded-full shadow-md">
                <FaBriefcase size={24} />
              </div>

              {/* Experience Content */}
              <div className="pl-8">
                <h3 className="text-2xl font-semibold text-cyan-200">
                  {exp.role}{" "}
                  <span className="text-neutral-400">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-neutral-400 mt-1 italic">
                  {exp.year}
                </p>
                <p className="mt-6 text-neutral-300 leading-relaxed">
                  {expandedIndex === index
                    ? exp.description
                    : `${exp.description.slice(0, 100)}...`}
                </p>
                <button
                  onClick={() => toggleDescription(index)}
                  className="mt-4 inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 focus:outline-none"
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                  {expandedIndex === index ? (
                    <FaArrowUp className="ml-2" />
                  ) : (
                    <FaArrowDown className="ml-2" />
                  )}
                </button>
                <div className="mt-6">
                  <h4 className="text-sm text-neutral-400 mb-2 uppercase tracking-wider">
                    Technologies Used:
                  </h4>
                  <ul className="flex flex-wrap gap-3 justify-start">
                    {exp.technologies.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="px-4 py-2 bg-cyan-900 rounded-full text-cyan-200 text-xs font-medium shadow-sm hover:bg-cyan-700 transition-colors"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
