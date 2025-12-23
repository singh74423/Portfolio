import React from "react";
import avatarImg from "../../assets/3d-cartoon-portrait-person-practicing-law-related-profession-removebg-preview.png";
import TextChange from "../TextChange";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center pt-24 p-10 md:p-20 gap-10">
      
      {/* Left Content */}
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>

        <p className="text-sm md:text-2xl tracking-tight mt-4">
          Aspiring MERN Developer | Passionate about creating dynamic and
          responsive web applications.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 md:mt-10 flex gap-4 justify-center md:justify-start">
          <button
            onClick={handleContactClick}
            className="text-white py-2 px-5 text-sm md:text-lg
                       hover:opacity-85 hover:scale-105 duration-300
                       font-semibold rounded-3xl bg-[#465697]"
          >
            Contact Me
          </button>

          <a
            href="#Projects"
            className="border border-[#465697] text-white
                       py-2 px-5 text-sm md:text-lg rounded-3xl
                       hover:bg-[#465697] hover:scale-105 duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Right Image (👋 Hand-Wave + Move) */}
      <div className="md:w-2/5 flex justify-center">
        <img
          src={avatarImg}
          alt="avatar"
          className="w-64 md:w-96 object-contain drop-shadow-2xl animate-wave-float"
        />
      </div>
    </div>
  );
};

export default Home;
