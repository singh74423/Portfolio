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
    <section
      id="Experience"
      className="px-6 py-16 md:px-24 md:py-28 text-white"
    >
      {/* HEADING */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold">
          Experience & Technical Skills
        </h1>
        <p className="text-gray-400 mt-2">
          Hands-on MERN development & real-world project experience
        </p>
        <div className="w-24 h-1 bg-[#465697] mx-auto mt-4 rounded-full" />
      </div>

      <div className="flex flex-col lg:flex-row gap-20 items-start justify-between">

        {/* SKILLS */}
        <div className="grid grid-cols-3 gap-10 md:w-1/2">
          {[
            { icon: <FaJs color="#F7DF1E" size={48} />, name: "JavaScript" },
            { icon: <FaReact color="#61DAFB" size={48} />, name: "React" },
            { icon: <SiTailwindcss color="#38BDF8" size={48} />, name: "Tailwind CSS" },
            { icon: <SiNodedotjs color="#339933" size={48} />, name: "Node.js" },
            { icon: <SiExpress color="#ffffff" size={48} />, name: "Express.js" },
            { icon: <SiMongodb color="#47A248" size={48} />, name: "MongoDB" },
            { icon: <SiBootstrap color="#7952B3" size={48} />, name: "Bootstrap" },
          ].map((skill, index) => (
            <div
              key={index}
              className="
                group flex flex-col items-center gap-3
                transition-transform duration-300
                hover:-translate-y-2
              "
            >
              <span
                className="
                  p-5 bg-zinc-950 rounded-3xl shadow-lg
                  transition-all duration-300
                  group-hover:shadow-2xl
                  group-hover:ring-2 group-hover:ring-[#465697]/40
                "
              >
                {skill.icon}
              </span>
              <p className="text-sm md:text-base text-gray-300 group-hover:text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* EXPERIENCE */}
        <div className="flex flex-col gap-8 md:w-1/2">

          {/* PROJECT BASED EXPERIENCE */}
          <div
            className="
              bg-slate-950/60 rounded-2xl p-8 shadow-xl
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
            "
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              Project-Based Experience
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Hands-on MERN Development
            </p>

            <ul className="text-base text-gray-300 mt-4 list-disc ml-5 space-y-2">
              <li>Built full-stack MERN applications from scratch</li>
              <li>Implemented secure authentication & role-based authorization</li>
              <li>Connected React frontend with RESTful backend APIs</li>
              <li>Designed and managed MongoDB databases for performance & scalability</li>
            </ul>
          </div>

          {/* TRAINING */}
          <div
            className="
              bg-slate-950/60 rounded-2xl p-8 shadow-xl
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
            "
          >
            <h2 className="text-xl md:text-2xl font-semibold">
              MERN Stack Trainee – QSpiders
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              2024 – Present
            </p>

            <ul className="text-base text-gray-300 mt-4 list-disc ml-5 space-y-2">
              <li>Hands-on development using JavaScript, React, Node.js, Express & MongoDB</li>
              <li>Created responsive and reusable UI components with React & Tailwind CSS</li>
              <li>Developed RESTful APIs and backend business logic</li>
              <li>Collaborated on real-world MERN stack projects and workflows</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
