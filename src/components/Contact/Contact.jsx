// Contact.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 p-6">
      
      {/* Contact Card */}
      <div
        className="relative bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-10 max-w-sm w-full text-center
                   transition-all duration-500
                   hover:scale-105 hover:-translate-y-3 hover:shadow-2xl
                   animate-fadeInUp"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#465697]/30 to-purple-400/30 blur-2xl opacity-0 hover:opacity-100 transition duration-500 -z-10"></div>

        <h1 className="text-3xl font-extrabold mb-8 text-gray-800">
          Ujjwal Singh
        </h1>

        <div className="flex flex-col gap-5 mb-8 text-left">
          
          <div className="flex items-center gap-4 text-gray-700 transition duration-300 hover:text-[#465697] hover:translate-x-2">
            <FaEnvelope size={20} />
            <a
              href="mailto:singhujjwal744@gmail.com"
              className="hover:underline"
            >
              singhujjwal744@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-700 transition duration-300 hover:text-green-600 hover:translate-x-2">
            <FaPhone size={20} />
            <span>+91 81749 74807</span>
          </div>

          <div className="flex items-center gap-4 text-gray-700 transition duration-300 hover:text-blue-700 hover:translate-x-2">
            <FaLinkedin size={20} />
            <a
              href="https://www.linkedin.com/in/ujjwal-singh-077bb1196/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-700 transition duration-300 hover:text-black hover:translate-x-2">
            <FaGithub size={20} />
            <a
              href="https://github.com/singh74423"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        <p className="text-gray-600 font-medium text-sm tracking-wide">
          Feel free to connect with me
        </p>
      </div>
    </div>
  );
};

export default Contact;
