import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, TrendingUp, CheckCircle2 } from "lucide-react";
import TechBadge from "./TechBadge";

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
      className="pl-4"
      style={{
        borderLeft: "4px solid #D2691E"
      }}
    >
      {/* Project Header */}
      <div className="mb-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full group text-left"
        >
          <h5 
            className="text-base lg:text-lg md:text-lg sm:text-base font-semibold transition-colors text-left"
            style={{ color: "#FFE4C4" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#F4A460"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#FFE4C4"}
          >
            {project.name}
          </h5>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 ml-2"
          >
            <ChevronDown 
              className="w-5 h-5 transition-colors" 
              style={{ color: "#DEB887" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#F4A460"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#DEB887"}
            />
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
            <span className="text-xs self-center" style={{ color: "#A0522D" }}>
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
                <CheckCircle2 
                  className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" 
                  style={{ color: "#90EE90" }}
                />
                <p className="text-sm leading-relaxed" style={{ color: "#F5DEB3" }}>
                  {achievement.text}
                  {achievement.metric && (
                    <span 
                      className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(210, 105, 30, 0.2)",
                        border: "1px solid rgba(244, 164, 96, 0.3)"
                      }}
                    >
                      <TrendingUp className="w-3 h-3" style={{ color: "#F4A460" }} />
                      <span 
                        className="font-bold text-transparent bg-clip-text"
                        style={{
                          backgroundImage: "linear-gradient(135deg, #D2691E 0%, #F4A460 100%)"
                        }}
                      >
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