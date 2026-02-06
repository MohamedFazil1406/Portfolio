import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24"
    >
      <div className="bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-white">📬 Get In Touch</h2>

        {/* ICON LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-400">
          {/* EMAIL */}
          <a
            href="mailto:mohamedfazil01406@gmail.com"
            className="flex items-center gap-4 hover:text-blue-400 transition"
          >
            <Image
              src="/icon/gmail-logo.jpg"
              alt="Email"
              width={70}
              height={70}
            />
            <span className="font-bold">mohamedfazil01406@gmail.com</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/mohamedfazil1406/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-blue-400 transition"
          >
            <Image
              src="/icon/LinkedIn-Icon-Logo.svg"
              alt="LinkedIn"
              width={70}
              height={70}
            />
            <span className="font-bold">LinkedIn</span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/MohamedFazil1406"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-blue-400 transition"
          >
            <Image
              src="/icon/github-logo.webp"
              alt="GitHub"
              width={70}
              height={70}
            />
            <span className="font-bold">GitHub</span>
          </a>
        </div>

        {/* RESUME BUTTON */}
        <div className="mt-8 text-center">
          <a
            href="/Resume.pdf"
            className="inline-block bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition font-bold"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
