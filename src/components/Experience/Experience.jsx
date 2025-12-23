import React from "react";
import { FaJs, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="px-6 py-16 md:px-24 md:py-28"
    >
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-14">
        Experience & Skills
      </h1>

      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">

        {/* 🔥 SKILLS SECTION (ZOOMED) */}
        <div className="grid grid-cols-3 gap-10 md:w-1/2">
          
          {[
            { icon: <FaJs color="#F7DF1E" size={56} />, name: "JavaScript" },
            { icon: <FaReact color="#61DAFB" size={56} />, name: "React" },
            { icon: <SiNodedotjs color="#339933" size={56} />, name: "Node.js" },
            { icon: <SiExpress color="#ffffff" size={56} />, name: "Express.js" },
            { icon: <SiMongodb color="#47A248" size={56} />, name: "MongoDB" },
            { icon: <SiTailwindcss color="#38BDF8" size={56} />, name: "Tailwind CSS" },
            { icon: <SiBootstrap color="#7952B3" size={56} />, name: "Bootstrap" },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
            >
              <span className="p-5 bg-zinc-950 rounded-3xl shadow-lg">
                {skill.icon}
              </span>
              <p className="text-sm md:text-base text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* 🔥 EXPERIENCE CARDS (ZOOMED) */}
        <div className="flex flex-col gap-8 md:w-1/2">

          <div className="bg-slate-950/60 rounded-2xl p-8 shadow-xl">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              MERN Stack Trainee – QSpiders
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              2024 – Present
            </p>

            <ul className="text-base text-gray-300 mt-4 list-disc ml-5 space-y-2">
              <li>Learning JavaScript, React, Node.js, Express, MongoDB</li>
              <li>Building responsive frontend applications</li>
              <li>Developing RESTful APIs and backend logic</li>
              <li>Working on real-world MERN stack projects</li>
            </ul>
          </div>

          <div className="bg-slate-950/60 rounded-2xl p-8 shadow-xl">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Project-Based Experience
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Hands-on Practice
            </p>

            <ul className="text-base text-gray-300 mt-4 list-disc ml-5 space-y-2">
              <li>Developed full-stack MERN applications</li>
              <li>Implemented authentication & authorization</li>
              <li>Integrated frontend with backend APIs</li>
              <li>Used MongoDB for efficient data management</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
