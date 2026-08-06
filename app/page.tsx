import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import GitHubActivity from "@/components/github/GitHubActivity";
import OpenSource from "@/components/OpenSource/OpenSource";

export default function Home() {
  return (
    <main className="space-y-0">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <section className="mx-auto max-w-7xl px-6 py-24 space-y-10">
        <GitHubActivity />

        <OpenSource />
      </section>

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}
