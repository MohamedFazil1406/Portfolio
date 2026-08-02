"use client";

import FadeIn from "@/components/ui/FadeIn";
import { FaCode, FaServer, FaDatabase, FaRocket } from "react-icons/fa";

const highlights = [
  {
    icon: <FaCode />,
    title: "Frontend",
    desc: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: <FaServer />,
    title: "Backend",
    desc: "Java, Spring Boot, Node.js, Express, FastAPI",
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    desc: "PostgreSQL, MongoDB, Prisma, Supabase",
  },
  {
    icon: <FaRocket />,
    title: "Focus",
    desc: "Scalable APIs, AI Apps, Real-Time Systems",
  },
];

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="relative overflow-hidden py-24 px-6"
      >
        {/* Background Glow */}
        <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
              About Me
            </span>

            <h2 className="mt-5 text-5xl font-bold text-white">
              Building Software That Solves Real Problems
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
              I'm a Full Stack Developer passionate about building scalable,
              secure, and high-performance applications. I specialize in
              Java, Spring Boot, React, Next.js, Node.js, and modern cloud
              technologies. My focus is creating production-ready software,
              contributing to open source, and continuously learning new
              technologies.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/15 text-3xl text-blue-400">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["20+", "Projects"],
              ["12+", "Open Source PRs"],
              ["2026", "Graduate"],
              ["Full Stack", "Developer"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 py-8 text-center backdrop-blur-xl"
              >
                <h3 className="text-3xl font-bold text-blue-400">
                  {value}
                </h3>

                <p className="mt-2 text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}