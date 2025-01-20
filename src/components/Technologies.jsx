import React from "react";
import { DiMysql, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="bg-black text-white pb-24" id="technologies">
      <h2 className="text-4xl font-bold text-center py-10 my-20">
        Technologies
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="relative group cursor-pointer">
          <RiReactjsLine className="text-7xl text-cyan-400 transform transition-transform duration-300 hover:scale-110" />
          <span className="absolute left-1/2 bottom-full mb-4 -translate-x-1/2 scale-100 bg-zinc-500 text-white font-bold text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-opacity duration-200">
            ReactJS
          </span>
        </div>

        <div className="relative group p-4 cursor-pointer">
          <SiExpress className="text-7xl text-white transform transition-transform duration-300 hover:scale-110" />
          <span className="absolute left-1/2 bottom-full mb-1 -translate-x-1/2 scale-100 bg-zinc-500 text-white font-bold text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-opacity duration-200">
            ExpressJS
          </span>
        </div>
        <div className=" relative group p-4 cursor-pointer">
          <SiMongodb className="text-7xl text-green-400 transform transition-transform duration-300 hover:scale-110" />
          <span className="absolute left-1/2 bottom-full mb-1 -translate-x-1/2 scale-100 bg-zinc-500 text-white font-bold text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-opacity duration-200">
            MongoDB
          </span>
        </div>
        <div className="relative group p-4 cursor-pointer">
          <DiRedis className="text-7xl text-red-700 transform transition-transform duration-300 hover:scale-110" />
          <span className="absolute left-1/2 bottom-full mb-1 -translate-x-1/2 scale-100 bg-zinc-500 text-white font-bold text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-opacity duration-200">
            Redis
          </span>
        </div>
        <div className="relative group p-4 cursor-pointer">
          <FaNodeJs className="text-7xl text-green-600 transform transition-transform duration-300 hover:scale-110" />
          <span className="absolute left-1/2 bottom-full mb-1 -translate-x-1/2 scale-100 bg-zinc-500 text-white font-bold text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-opacity duration-200">
            NodeJS
          </span>
        </div>
        <div className="relative group p-4 cursor-pointer">
          <DiMysql className="text-7xl text-sky-700 transform transition-transform duration-300 hover:scale-110" />
          <span className="absolute left-1/2 bottom-full mb-1 -translate-x-1/2 scale-100 bg-zinc-500 text-white font-bold text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-opacity duration-200">
            MySql
          </span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
