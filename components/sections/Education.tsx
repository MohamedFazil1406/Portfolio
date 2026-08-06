"use client";

import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSchool,
} from "react-icons/fa";

const education = [
  {
    title: "Bachelor of Engineering",
    subtitle: "Computer Engineering",
    institute: "Anjuman-I-Islam's Kalsekar Technical Campus",
    location: "New Panvel, Navi Mumbai",
    duration: "2022 – 2026",
    score: "CGPA: 8.18 / 10",
    icon: <FaGraduationCap />,
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "Science",
    institute: "Rizvi College of Arts, Science & Commerce",
    location: "Bandra, Mumbai",
    duration: "2020 – 2022",
    score: "Percentage: 59%",
    icon: <FaSchool />,
  },
  {
    title: "Secondary School Certificate (SSC)",
    subtitle: "Maharashtra State Board",
    institute: "Fr. Agnel Technical High School",
    location: "Bandra,Mumbai",
    duration: "2019 – 2020",
    score: "Percentage: 75.20%",
    icon: <FaSchool />,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24 px-6">
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
            Education
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Academic Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            My educational background and academic achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/15 text-4xl text-blue-400">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-blue-400 font-medium">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-lg text-white">{item.institute}</p>

                  <div className="mt-5 flex flex-wrap gap-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      {item.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      {item.duration}
                    </div>
                  </div>

                  <div className="mt-6 inline-flex rounded-xl bg-blue-500/10 px-5 py-2 text-blue-300 font-semibold">
                    {item.score}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
