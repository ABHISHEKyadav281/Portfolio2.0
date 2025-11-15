import React from "react";
import { motion } from "framer-motion";

// -----------------------------
// TYPES
// -----------------------------
type TechName =
  | "React.js"
  | "TypeScript"
  | "Redux Toolkit"
  | "MUI"
  | "Tailwind CSS"
  | "Zod"
  | "Formik"
  | "Context API"
  | "React Router v6"
  | "React Router v7"
  | "Chart.js";

interface ITechBadge {
  tech: string;
  delay: number;
}

const techColors: Record<TechName, string> = {
  "React.js": "from-blue-400 to-cyan-400",
  "TypeScript": "from-blue-600 to-blue-400",
  "Redux Toolkit": "from-purple-500 to-purple-700",
  "MUI": "from-blue-500 to-indigo-600",
  "Tailwind CSS": "from-cyan-400 to-teal-500",
  "Zod": "from-indigo-500 to-blue-600",
  "Formik": "from-orange-400 to-pink-500",
  "Context API": "from-green-500 to-emerald-600",
  "React Router v6": "from-red-500 to-pink-500",
  "React Router v7": "from-red-500 to-pink-600",
  "Chart.js": "from-yellow-400 to-orange-500",
};

// -----------------------------
// COMPONENT
// -----------------------------
const TechBadge: React.FC<ITechBadge> = ({ tech, delay }) => {
  // Use default gradient if tech not in map
  const gradient = techColors[tech as TechName] || "from-gray-400 to-gray-600";

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-lg bg-white/7 shadow-2xl bg-background/100  rounded-lg shadow-sm  hover:shadow-md transition-all duration-200"
    >
      {/* Colored Dot */}
      <div
        className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} group-hover:animate-pulse`}
      />
      <span className="text-xs font-medium text-zinc-300">{tech}</span>

      {/* Tooltip */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-red-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {tech}
      </div>
    </motion.span>
  );
};

export default TechBadge;
