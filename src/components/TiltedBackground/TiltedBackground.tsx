import React from "react";
import { motion } from "framer-motion";

interface TiltedBackgroundProps {
  children: React.ReactNode;
}

const cards = [
  { title: "Frontend", color: "from-blue-500 to-cyan-500" },
  { title: "ReactJS", color: "from-indigo-500 to-purple-500" },
  { title: "Tailwind", color: "from-sky-400 to-teal-400" },
  { title: "TypeScript", color: "from-blue-600 to-sky-500" },
  { title: "Framer Motion", color: "from-pink-500 to-rose-400" },
  { title: "UI Design", color: "from-amber-400 to-orange-500" },
];

const TiltedBackground: React.FC<TiltedBackgroundProps> = ({ children }) => {
  return (
    <div className="relative bg-red-400 w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      {/* Background cards */}
      <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-8 opacity-60 pointer-events-none">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotate: -5 + i * 2 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`w-48 h-64 bg-gradient-to-br ${card.color} rounded-2xl shadow-xl`}
            style={{
              transform: `rotate(${i % 2 === 0 ? -8 : 8}deg) scale(0.9)`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default TiltedBackground;
