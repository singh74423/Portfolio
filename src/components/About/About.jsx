import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex items-center justify-center bg-black/30 shadow-xl mx-0 md:mx-20 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
          About Me
        </h2>

        <div className="md:flex flex-col md:flex-row items-center mt-8 gap-10">
          
          {/* Image */}
          <img
            className="md:h-80 mb-6 md:mb-0"
            src={AboutImg}
            alt="About"
          />

          {/* Content */}
          <ul>
            {/* Frontend */}
            <li className="flex gap-3 py-4">
              <IoArrowForward size={28} className="mt-1 text-[#465697]" />
              <div className="max-w-md">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Frontend Development
                </h3>
                <p className="text-sm md:text-md text-gray-300 leading-relaxed mt-1">
                  I build responsive and user-friendly interfaces using
                  <strong> React, JavaScript, HTML, CSS, and Tailwind CSS</strong>,
                  focusing on clean UI and smooth user experience.
                </p>
              </div>
            </li>

            {/* Database */}
            <li className="flex gap-3 py-4">
              <IoArrowForward size={28} className="mt-1 text-[#465697]" />
              <div className="max-w-md">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Database Management
                </h3>
                <p className="text-sm md:text-md text-gray-300 leading-relaxed mt-1">
                  I have hands-on experience with <strong>MongoDB</strong>,
                  including database design, CRUD operations, and efficient
                  data handling for web applications.
                </p>
              </div>
            </li>

            {/* Backend */}
            <li className="flex gap-3 py-4">
              <IoArrowForward size={28} className="mt-1 text-[#465697]" />
              <div className="max-w-md">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Backend Development
                </h3>
                <p className="text-sm md:text-md text-gray-300 leading-relaxed mt-1">
                  I develop backend services using <strong>Node.js and Express</strong>,
                  creating REST APIs, handling authentication, and managing
                  server-side logic.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
