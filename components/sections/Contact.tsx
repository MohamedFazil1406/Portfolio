"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 px-6"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
            Contact
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Let's Build Something Together
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-7">
            Whether you have an internship opportunity, a freelance project,
            or just want to connect, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:mohamedfazil01406@gmail.com"
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/15 text-3xl text-blue-400">
              <FaEnvelope />
            </div>

            <h3 className="text-xl font-semibold text-white">Email</h3>

            <p className="mt-3 text-gray-400 break-all">
              mohamedfazil01406@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohamedfazil1406/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/15 text-3xl text-blue-400">
              <FaLinkedin />
            </div>

            <h3 className="text-xl font-semibold text-white">
              LinkedIn
            </h3>

            <p className="mt-3 text-gray-400">
              Connect professionally
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MohamedFazil1406"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/15 text-3xl text-blue-400">
              <FaGithub />
            </div>

            <h3 className="text-xl font-semibold text-white">
              GitHub
            </h3>

            <p className="mt-3 text-gray-400">
              Explore my open-source work
            </p>
          </a>
        </div>

        {/* Resume Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="/Resume.pdf"
            download
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]"
          >
            <FaDownload className="transition-transform group-hover:-translate-y-1" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}