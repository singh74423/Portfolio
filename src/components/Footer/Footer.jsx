import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="
        bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]
        text-white
        px-6 md:px-24 py-24
      "
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s{" "}
            <span className="text-[#7c83ff]">
              Connect
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-md text-base md:text-lg leading-relaxed">
            Open to job opportunities, collaborations, and meaningful
            conversations. Let’s build something great together.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=16chdwz5W5Fy_RN2u2IYFrMDZfnGIz4SE"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block mt-8
              px-8 py-3
              rounded-full
              bg-[#7c83ff]
              text-[#020617]
              font-semibold
              hover:bg-[#9aa0ff]
              transition-all duration-300
              shadow-lg
            "
          >
            Download Resume
          </a>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">

          <a
            href="mailto:singhujjwal744@gmail.com"
            className="
              flex items-center gap-4
              bg-white/5
              border border-white/10
              px-6 py-4
              rounded-xl
              text-gray-300
              hover:text-white
              hover:border-[#7c83ff]
              transition
            "
          >
            <MdOutlineEmail size={22} />
            <span className="text-base md:text-lg">
              singhujjwal744@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/ujjwal-singh-077bb1196/"
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-4
              bg-white/5
              border border-white/10
              px-6 py-4
              rounded-xl
              text-gray-300
              hover:text-white
              hover:border-[#7c83ff]
              transition
            "
          >
            <CiLinkedin size={22} />
            <span className="text-base md:text-lg">
              LinkedIn Profile
            </span>
          </a>

          <a
            href="https://github.com/singh74423"
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-4
              bg-white/5
              border border-white/10
              px-6 py-4
              rounded-xl
              text-gray-300
              hover:text-white
              hover:border-[#7c83ff]
              transition
            "
          >
            <FaGithub size={22} />
            <span className="text-base md:text-lg">
              GitHub Profile
            </span>
          </a>

        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto my-14 h-px bg-white/10" />

      {/* Bottom */}
      <div className="text-center text-xs md:text-sm text-gray-400">
        © {new Date().getFullYear()} Ujjwal Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
