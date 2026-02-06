"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-black/40 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">⚡ About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I am a passionate backend developer with strong expertise in Java,
            Spring Boot, and Node.js. I enjoy building secure, scalable, and
            efficient backend systems. I have hands-on experience designing REST
            APIs, authentication, and database-driven applications. I am
            continuously learning and improving to build real-world,
            production-ready software.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
