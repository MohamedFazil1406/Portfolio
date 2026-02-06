"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg text-gray-300">
          {"<"}Fazil.dev{"/>"}
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 px-6 py-4 flex flex-col gap-4 text-gray-300">
          <a onClick={() => setOpen(false)} href="#about">
            About
          </a>
          <a onClick={() => setOpen(false)} href="#skills">
            Skills
          </a>
          <a onClick={() => setOpen(false)} href="#projects">
            Projects
          </a>
          <a onClick={() => setOpen(false)} href="#contact">
            Contact
          </a>
          <a
            href="/Resume.pdf"
            className="bg-blue-600 text-center py-2 rounded"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
