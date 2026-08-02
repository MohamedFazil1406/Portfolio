"use client";

import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFire,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiFastapi,
  SiSwagger,
  SiFramer,
  SiSupabase,
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    icon: <FaJava />,
    skills: ["Java", "Python", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: <FaNodeJs />,
    skills: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Swagger",
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Supabase",
      "Firebase",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 px-6"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
            Skills
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Technologies I Work With
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-7">
            Technologies and tools I use to build scalable backend systems,
            modern web applications, and cloud-native solutions.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-2xl text-blue-400">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Icons */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-5xl text-gray-500">
          <FaJava className="transition hover:text-orange-500 hover:scale-110" />
          <FaPython className="transition hover:text-yellow-400 hover:scale-110" />
          <FaReact className="transition hover:text-cyan-400 hover:scale-110" />
          <SiSpringboot className="transition hover:text-green-500 hover:scale-110" />
          <FaNodeJs className="transition hover:text-green-400 hover:scale-110" />
          <SiNextdotjs className="transition hover:text-white hover:scale-110" />
          <SiPrisma className="transition hover:text-cyan-300 hover:scale-110" />
          <SiPostgresql className="transition hover:text-blue-500 hover:scale-110" />
          <SiMongodb className="transition hover:text-green-500 hover:scale-110" />
          <SiTailwindcss className="transition hover:text-sky-400 hover:scale-110" />
          <FaDocker className="transition hover:text-blue-400 hover:scale-110" />
          <FaGitAlt className="transition hover:text-orange-500 hover:scale-110" />
        </div>
      </div>
    </section>
  );
}