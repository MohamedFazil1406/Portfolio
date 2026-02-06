"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400/40 ">
            Hi, I’m <span className="text-white">Mohd Fazil</span>
          </h1>

          <div className="inline-flex flex-wrap justify-center md:justify-start gap-2 bg-black/40 border border-white/10 px-4 py-2 rounded-full text-sm">
            <span className="text-yellow-400">Backend Developer</span>
            <span className="text-white/50">
              | Java | Spring Boot | Node.js
            </span>
          </div>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
            I build scalable and efficient backend systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-blue-600 px-6 py-3 rounded-lg text-center text-white"
            >
              View My Work
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-white/10 px-6 py-3 rounded-lg text-center text-white"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <div className="w-90 h-90 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10">
            <div className="relative w-90 h-90 rounded-2xl overflow-hidden border border-white/10 bg-linear-to-br from-blue-500/20 to-purple-500/20">
              <Image
                src="/images/profile.png"
                alt="Profile image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
