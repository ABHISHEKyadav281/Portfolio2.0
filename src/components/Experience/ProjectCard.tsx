import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, TrendingUp, CheckCircle2 } from "lucide-react";
import TechBadge from "./TechBadge";

// -----------------------------
// INTERFACES
// -----------------------------
interface Achievement {
  text: string;
  metric?: string;
  context?: string;
}

interface Project {
  name: string;
  tech: string[];
  achievements: Achievement[];
}

interface IProjectCard {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<IProjectCard> = ({ project, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="border-l-4 border-blue-500 pl-4 "
    >
      {/* Project Header */}
      <div className="mb-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full group"
        >
          <h5 className="text-lg font-semibold text-zinc-300 group-hover:text-blue-600 transition-colors">
            {project.name}
          </h5>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
          </motion.div>
        </button>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech
            .slice(0, isExpanded ? project.tech.length : 4)
            .map((tech, index) => (
              <TechBadge key={index} tech={tech} delay={delay + index * 0.05} />
            ))}

          {!isExpanded && project.tech.length > 4 && (
            <span className="text-xs text-zinc-500 self-center">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Achievements */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3 mt-4 overflow-hidden"
          >
            {project.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-3 group"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {achievement.text}
                  {achievement.metric && (
                    <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                      <TrendingUp className="w-3 h-3 text-blue-600" />
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        {achievement.metric}
                      </span>
                    </span>
                  )}
                  {achievement.context}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
