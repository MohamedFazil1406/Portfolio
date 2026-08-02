"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-6">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-xl shadow-lg">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-wide text-white">
            <span className="text-blue-400">&lt;</span>
            Fazil
            <span className="text-cyan-400">.dev</span>
            <span className="text-blue-400">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 transition hover:text-white group"
              >
                {item.name}

                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/Resume.pdf"
              download
              className="rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-5 py-2.5 font-medium text-white transition hover:scale-105"
            >
              Resume
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-3xl text-white transition hover:bg-white/10 md:hidden"
          >
            {open ? <HiXMark /> : <HiBars3 />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="mt-3 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-6 md:hidden"
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}

                <a
                  href="/Resume.pdf"
                  download
                  className="mt-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 py-3 text-center font-semibold text-white transition hover:scale-[1.02]"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
