"use client";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "OpenRouter",
    stack: "Turborepo / Elysia.js / TypeScript / Neon DB / Prisma",
    desc: "A multi-provider AI gateway platform integrating OpenRouter APIs with secure request handling, rate limiting, and a developer dashboard.",
    github: "https://github.com/MohamedFazil1406/OpenRouter",
    liveDemo: "https://open-router-frontend-dashboard.vercel.app/",
  },
  {
    title: "Chatbot Pro",
    stack: "Next.js / TypeScript / Firebase",
    desc: "A multi-tenant SaaS chatbot platform with real-time messaging, secure authentication, and analytics.",
    github: "https://github.com/MohamedFazil1406/Chat-Bot-Pro",
    liveDemo: "https://chat-bot-pro-rho.vercel.app/",
  },
  {
    title: "ChatStream",
    stack: "React / Node.js / Express / MongoDB / Socket.IO",
    desc: "A real-time chat application featuring authentication, one-to-one messaging, typing indicators, online presence, and Socket.IO-powered communication.",
    github: "https://github.com/MohamedFazil1406/Real-Time-Chat",
    liveDemo: "https://real-time-chat-ashy-two.vercel.app/",
  },
  {
    title: "MAZI",
    stack: "Next.js / React / TypeScript / Prisma / PostgreSQL / Supabase",
    desc: "A collaborative scheduling platform where users create shared calendars, join with a Calendar ID and PIN, and discover overlapping availability in real time.",
    github: "https://github.com/MohamedFazil1406/MAZI",
    liveDemo: "https://mazi-dun.vercel.app/",
  },
  {
    title: "RealTimeAlertSystem",
    stack: "Go / Gin / React / PostgreSQL / PostGIS / Leaflet / WebSocket",
    desc: "A real-time vehicle tracking and geofencing platform with live GPS tracking, violation detection, and instant WebSocket alerts.",
    github: "https://github.com/MohamedFazil1406/RealTimeAlertSystem",
  },
  {
    title: "Task Wave",
    stack: "Next.js / Firebase",
    desc: "A task management platform with Google OAuth, secure authentication, and real-time productivity tools.",
    github: "https://github.com/MohamedFazil1406/task-wave",
    liveDemo: "https://task-wave-pi.vercel.app/",
  },
  {
    title: "Medium Clone",
    stack: "React / TypeScript / Hono / PostgreSQL / JWT",
    desc: "A full-stack blogging platform with authentication, article publishing, and responsive UI.",
    github: "https://github.com/MohamedFazil1406/Medium",
    liveDemo: "https://medium-gamma-six.vercel.app/signup",
  },
  {
    title: "Perplexity AI",
    stack: "React / Bun / TypeScript / Supabase / Prisma / OpenRouter / Tavily",
    desc: "An AI-powered search engine combining real-time web search with streaming LLM responses and persistent conversations.",
    github: "https://github.com/MohamedFazil1406/perplexity",
  },
  {
    title: "FinTrack",
    stack: "React / Spring Boot / Java / MySQL / Spring Security / JWT",
    desc: "A finance management application with analytics dashboard, JWT authentication, and expense visualization.",
    github: "https://github.com/MohamedFazil1406/Fintrack",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 px-6">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
            Portfolio
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-7">
            A collection of AI applications, full-stack platforms, collaborative
            systems, and backend services built using modern technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.split("/").map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <p className="mt-5 flex-1 text-sm leading-7 text-gray-400">
                {project.desc}
              </p>

              <div className="mt-8 flex gap-3">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03]"
                  >
                  <FiExternalLink className="h-5 w-5" />
<span>Live Demo</span>
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-[1.03]"
                >
                  <FaGithub className="h-5 w-5" />
<span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
