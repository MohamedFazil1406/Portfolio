"use client";

const skills = [
  "Java",
  "Python",
  "Spring Boot",
  "Node.js",
  "Express.js",
  "React",
  "Typescript",
  "Prisma",
  "Next.js",
  "Firebase",
  "Tailwind CSS",
  "Swagger",
  "Framer Motion",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24"
    >
      <h2 className="text-2xl font-bold mb-8 text-white">🧠 My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-black/40 border border-white/10 rounded-xl p-4 text-center text-sm sm:text-base text-white"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
