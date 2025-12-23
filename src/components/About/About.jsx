import React from "react";
import AboutImg from "../../assets/about-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="bg-black/30 shadow-xl mx-4 md:mx-20 rounded-xl px-6 md:px-12 py-14 text-white"
    >
      {/* CENTER HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        About Me
      </h2>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT : Image */}
        <div className="flex justify-center">
          <img
            src={AboutImg}
            alt="About"
            className="w-64 md:w-[340px]"
          />
        </div>

        {/* RIGHT : Text */}
        <div className="space-y-10">

          <div className="flex gap-4">
            <IoArrowForward size={26} className="text-[#465697] mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Frontend Development
              </h3>
              <p className="text-gray-300 mt-2 leading-relaxed">
                I build responsive and user-friendly interfaces using
                <strong> React, JavaScript, HTML, CSS, and Tailwind CSS</strong>,
                focusing on clean UI and smooth user experience.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <IoArrowForward size={26} className="text-[#465697] mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Database Management
              </h3>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Hands-on experience with <strong>MongoDB</strong>,
                including database design, CRUD operations, and efficient
                data handling.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <IoArrowForward size={26} className="text-[#465697] mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Backend Development
              </h3>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Backend services using <strong>Node.js & Express</strong>,
                REST APIs, authentication, and server-side logic.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
