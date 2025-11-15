import React from "react";

const StickyScrollSection: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Engineer (ReactJS) — KFin Technologies",
      date: "Jan 2024 – Present",
      description: [
        "Built and maintained frontend components and features using ReactJS, TypeScript, and Redux Toolkit, improving page responsiveness by 45%.",
        "Translated product designs into high-quality, accessible user interfaces aligned with WCAG standards.",
        "Collaborated with backend engineers to integrate RESTful APIs, reducing API latency by 30%.",
        "Improved frontend architecture and introduced Vite build tooling, reducing bundle size by 25%.",
        "Implemented role-based authentication and optimized session handling for better user experience."
      ]
    },
    {
      title: "Software Engineer — KFin Technologies",
      date: "Jan 2023 – Dec 2023",
      description: [
        "Developed and deployed a Loan Against Mutual Funds platform processing 500+ applications worth $50M+, automating KYC and verification flows.",
        "Built 40+ reusable UI components using ReactJS, MUI, and Tailwind CSS, cutting new feature delivery time by 30%.",
        "Enhanced debugging and testing processes using Jest and Chrome DevTools.",
        "Strengthened application scalability and performance through Redux Toolkit and optimized state management patterns."
      ]
    },
    
  ];

  return (
    <section className="relative flex flex-col md:flex-row w-full text-zinc-200 py-10">
      {/* LEFT — Sticky Section */}
      <div className="md:w-1/2 w-full md:sticky md:top-20 h-[50vh] flex items-center justify-center p-10 bg-zinc-900 rounded-xl shadow-lg">
        <div className="max-w-sm">
          <h2 className="text-3xl font-bold mb-3 text-white">
            My Professional Journey
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            I’m a Senior Frontend Engineer with 2+ years of experience crafting
            responsive, accessible, and high-performance web applications using
            ReactJS, TypeScript, and modern frameworks. My focus lies in
            building scalable UIs, optimizing architecture, and collaborating
            across teams to deliver seamless digital experiences.
          </p>
        </div>
      </div>

      {/* RIGHT — Timeline */}
      <div className="md:w-1/2 w-full p-10 space-y-20">
        {experiences.map((exp, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-2xl font-semibold text-orange-400">
              {exp.title}
            </h3>
            <ul className="list-disc list-inside text-zinc-400 text-sm leading-relaxed max-w-lg space-y-1">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="text-zinc-500 text-xs">{exp.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickyScrollSection;
