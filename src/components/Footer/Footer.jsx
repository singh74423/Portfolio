import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-[#465697] text-white px-10 md:px-24 py-14"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
          <p className="text-sm md:text-xl mt-2 opacity-90">
            Feel free to reach out for opportunities or collaboration.
          </p>

          {/* Resume Button */}
      <a
  href="https://drive.google.com/uc?export=download&id=16chdwz5W5Fy_RN2u2IYFrMDZfnGIz4SE"
  target="_blank"
  rel="noreferrer"
  className="inline-block mt-6 bg-black/30 px-6 py-2 rounded-3xl text-sm md:text-lg hover:bg-black/50 transition"
>
  Download Resume
</a>
        </div>

        {/* Contact Links */}
        <ul className="space-y-4 text-sm md:text-lg">
          <li className="flex items-center gap-3 hover:opacity-80 transition">
            <MdOutlineEmail size={22} />
            <a
              href="mailto:singhujjwal744@gmail.com"
              className="hover:underline"
            >
              singhujjwal744@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-3 hover:opacity-80 transition">
            <CiLinkedin size={22} />
            <a
              href="https://www.linkedin.com/in/ujjwal-singh-077bb1196/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </li>

          <li className="flex items-center gap-3 hover:opacity-80 transition">
            <FaGithub size={22} />
            <a
              href="https://github.com/singh74423"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub Profile
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs md:text-sm opacity-80 mt-10">
        © {new Date().getFullYear()} Ujjwal Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
