"use client";

import { title } from "process";

const projects = [
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
    // ❌ no live demo
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
