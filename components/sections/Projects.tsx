"use client";

import { title } from "process";

const projects = [
  {
    title: "OpenRouter",
    stack: "Turborepo / Elysia.js / TypeScript / Neon DB / Prisma",
    desc: "A multi-provider AI gateway platform that integrates OpenRouter APIs, featuring secure request handling, rate limiting, and a developer dashboard for monitoring usage and model performance.",
    github: "https://github.com/MohamedFazil1406/OpenRouter",
    liveDemo: "https://open-router-frontend-dashboard.vercel.app/",
  },
  {
    title: "Chatbot Pro",
    stack: "Next.js / TypeScript / Firebase",
    desc: "A multi-tenant SaaS chatbot platform with real-time chat, secure authentication, and analytics dashboard.",
    github: "https://github.com/MohamedFazil1406/Chat-Bot-Pro",
    liveDemo: "https://chat-bot-pro-rho.vercel.app/",
  },
  {
    title: "Task Wave",
    stack: "Next.js / Firebase",
    desc: "A secure full-stack task management app with Google OAuth.",
    github: "https://github.com/MohamedFazil1406/task-wave",
    liveDemo: "https://task-wave-pi.vercel.app/", // has live demo
  },
  {
    title: "Medium Clone",
    stack: "React / TypeScript / Hono / PostgreSQL / JWT.",
    desc: "A full-stack blogging platform with secure authentication and user-generated content.",
    github: "https://github.com/MohamedFazil1406/Medium",
    liveDemo: "https://medium-gamma-six.vercel.app/signup", // has live demo
  },
  {
    title: "Perplexity AI",
    stack: "React / Bun / TypeScript / Supabase / Prisma / OpenRouter / Tavily",
    desc: "A Perplexity-inspired AI search platform that combines real-time web search with LLM-powered responses, featuring streaming AI conversations, persistent chat history, Supabase OAuth authentication, and contextual follow-up interactions.",
    github: "https://github.com/MohamedFazil1406/perplexity",
  },
  {
    title: "E-Commerce Management System",
    stack: "Java / Spring Boot / Spring MVC / JSP / Hibernate / MySQL / Maven",
    desc: "A full-stack e-commerce management system built using Spring Boot and JSP following MVC architecture. Features include user registration and login, role-based access control (Admin/User), product management, order management, session-based authentication, and complete CRUD operations with MySQL database integration.",
    github: "YOUR_GITHUB_REPOSITORY_LINK",
  },
  {
    title: "FinTrack",
    stack:
      "React / Spring Boot / Java / MySQL / Spring Security / JWT / Recharts",
    desc: "A full-stack personal finance management platform that enables users to track income, expenses, and transactions through an interactive analytics dashboard, featuring JWT authentication, secure REST APIs, expense visualization charts, and user-specific financial insights.",
    github: "https://github.com/MohamedFazil1406/Fintrack",
  },
  {
    title: "Personal-Notes-Bookmark-Manager",
    stack:
      "React (Vite) | Tailwind CSS | Axios |Firebase Authentication | Node.js | Express.js | MongoDB | Firebase Admin SDK (for token verification)",
    desc: "A secure RESTful API for managing personal notes and bookmarks.",
    github:
      "https://github.com/MohamedFazil1406/Personal-Notes-Bookmark-Manager/tree/main",
  },
  {
    title: "Banking System",
    stack: "Java / Spring Boot ",
    desc: "A secure full-stack banking system and transaction management.",
    github: "https://github.com/MohamedFazil1406/Banking-System-spring-boot",
  },
  {
    title: "Library Management System",
    stack: "Java / Spring Boot",
    desc: "A secure RESTful API for a library management system with JWT authentication.",
    github: "https://github.com/MohamedFazil1406/library-management-system",
  },
  {
    title: "Student Management System",
    stack: "Core Java / OOP / ArrayList / CRUD",
    desc: "A secure RESTful API for a student management system with JWT authentication.",
    github: "https://github.com/MohamedFazil1406/Student-management-system",
  },
  {
    title: "Stock Market Data Backend",
    stack: "Python / FastAPI / Pandas / NumPy / yfinance / Matplotlib",
    desc: "A backend platform built using Python and FastAPI to fetch, clean, and analyze real-time and historical stock market data, exposing REST APIs with Swagger documentation.",
    github: "https://github.com/MohamedFazil1406/stock-market",
  },
  {
    title: "User Authentication System",
    stack: "MERN Stack",
    desc: "Secure user authentication system with JWT, bcrypt, and protected routes.",
    github: "https://github.com/MohamedFazil1406/User-Auth-System",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24"
    >
      <h2 className="text-2xl font-bold mb-8 text-white">📁 My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-3"
          >
            <h3 className="font-semibold text-lg text-white">{p.title}</h3>
            <p className="text-sm text-blue-400">{p.stack}</p>
            <p className="text-gray-400 text-sm">{p.desc}</p>

            <div className="flex gap-3 pt-4">
              {/* Live Demo → only if exists */}
              {p.liveDemo && (
                <a
                  href={p.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-white bg-blue-600 text-center py-2 rounded text-sm"
                >
                  Live Demo
                </a>
              )}

              {/* GitHub → always */}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-white bg-white/10 text-center py-2 rounded text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
