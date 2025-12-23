import React, { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 80) {
        setShowNavbar(false);
        setMenuOpen(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      backdrop-blur-md bg-black/40 border-b border-white/10`}
    >
      <div className="flex justify-between items-center px-8 md:px-20 py-3 text-white">
        
        {/* LOGO → GO HOME */}
        <h1
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl md:text-2xl font-bold tracking-wide cursor-pointer"
        >
          Portfolio<span className="text-[#465697]">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-[#465697] transition">
            <a href="#About">About</a>
          </li>
          <li className="hover:text-[#465697] transition">
            <a href="#Experience">Experience</a>
          </li>
          <li className="hover:text-[#465697] transition">
            <a href="#Projects">Projects</a>
          </li>
          <li className="hover:text-[#465697] transition">
            <a href="#Footer">Contact</a>
          </li>
        </ul>

        {/* MOBILE ICON */}
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <RiCloseLine size={28} /> : <RiMenu2Line size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white text-center py-6 space-y-4">
          <a href="#About" onClick={() => setMenuOpen(false)} className="block">
            About
          </a>
          <a href="#Experience" onClick={() => setMenuOpen(false)} className="block">
            Experience
          </a>
          <a href="#Projects" onClick={() => setMenuOpen(false)} className="block">
            Projects
          </a>
          <a href="#Footer" onClick={() => setMenuOpen(false)} className="block">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
