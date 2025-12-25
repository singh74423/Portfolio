import React from "react";
import AboutImg from "../../assets/about-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="
        relative mx-4 md:mx-auto max-w-[1200px]
        px-6 md:px-14 py-20
        text-white
        bg-gradient-to-br from-[#0b1020] via-[#020617] to-[#020617]
        rounded-3xl shadow-2xl
      "
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          About Me
        </h2>
        <p className="text-gray-400 mt-2">
         
        </p>
        <div className="w-24 h-1 bg-[#465697] mx-auto mt-4 rounded-full" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#465697]/20 blur-3xl rounded-full" />
            <img
              src={AboutImg}
              alt="About"
              className="
                relative w-48 md:w-[260px]
                opacity-90 drop-shadow-2xl
                animate-float
              "
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">

          {/* Card 1 */}
          <div
            className="
              group
              bg-white/5 border border-white/10
              rounded-xl p-6
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:shadow-2xl
              hover:border-[#465697]
            "
          >
            <div className="flex items-center gap-3 mb-2">
              <IoArrowForward
                size={20}
                className="
                  text-[#465697]
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
              <h3 className="text-xl font-semibold">
                Frontend Development
              </h3>
            </div>
            <ul className="text-gray-300 text-sm md:text-base space-y-1">
              <li>• React & JavaScript</li>
              <li>• HTML, CSS & Tailwind CSS</li>
              <li>• Clean UI & smooth UX</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div
            className="
              group
              bg-white/5 border border-white/10
              rounded-xl p-6
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:shadow-2xl
              hover:border-[#465697]
            "
          >
            <div className="flex items-center gap-3 mb-2">
              <IoArrowForward
                size={20}
                className="
                  text-[#465697]
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
              <h3 className="text-xl font-semibold">
                Database Management
              </h3>
            </div>
            <ul className="text-gray-300 text-sm md:text-base space-y-1">
              <li>• MongoDB & schema design</li>
              <li>• CRUD operations</li>
              <li>• Efficient data handling</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div
            className="
              group
              bg-white/5 border border-white/10
              rounded-xl p-6
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:shadow-2xl
              hover:border-[#465697]
            "
          >
            <div className="flex items-center gap-3 mb-2">
              <IoArrowForward
                size={20}
                className="
                  text-[#465697]
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
              <h3 className="text-xl font-semibold">
                Backend Development
              </h3>
            </div>
            <ul className="text-gray-300 text-sm md:text-base space-y-1">
              <li>• Node.js & Express</li>
              <li>• REST APIs</li>
              <li>• Authentication & server logic</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
