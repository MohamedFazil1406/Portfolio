"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center px-6 py-24">
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
            Available for Full-Time Opportunities
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            <span className="text-white">Hi, I'm</span>

            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mohamed Fazil
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            Full Stack Developer • Java • Spring Boot • React • Node.js •
            TypeScript
          </p>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Passionate Full Stack Developer specializing in Java, Spring Boot,
            React, Next.js, and Node.js. I enjoy building scalable backend
            systems, AI-powered applications, and modern web experiences with a
            strong focus on performance, security, and clean architecture.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition"
            >
              View Projects
              <FaArrowRight />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="/Resume.pdf"
              download
              className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
            >
              <FaDownload />
              Resume
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/MohamedFazil1406"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-2xl text-white transition hover:border-blue-500 hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mohamedfazil1406/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-2xl text-white transition hover:border-blue-500 hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {[
              ["20+", "Projects"],
              ["12+", "Open Source PRs"],
              ["2026", "Graduate"],
              ["Full Stack", "Developer"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl"
              >
                <h3 className="text-3xl font-bold text-blue-400">
                  {value}
                </h3>

                <p className="mt-2 text-sm text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative h-[460px] w-[460px]">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30 blur-3xl" />

            {/* Ring */}
            <div className="absolute inset-0 rounded-full border border-blue-500/20" />

            {/* Image */}
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/10">
              <Image
                src="/images/profile.png"
                alt="Mohamed Fazil"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}