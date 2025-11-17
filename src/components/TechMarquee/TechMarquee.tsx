import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaJava, FaAws,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiMysql,
  SiPostgresql, SiMui, SiFramer, SiNestjs, SiSpringboot, SiGreensock,
  SiJsonwebtokens,
  SiRedux,
  SiApachekafka,
} from "react-icons/si";
import { IconType } from "react-icons";
import { LuMouse } from "react-icons/lu";
import { motion } from "framer-motion";
import { FaDocker, FaGitAlt } from "react-icons/fa6";

interface TechItem {
  name: string;
  icon: IconType;
}

const techStack1: TechItem[] = [
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Redux", icon: SiRedux },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "Kafka", icon: SiApachekafka },
  { name: "PostgreSQL", icon: SiPostgresql },
];

const techStack2: TechItem[] = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "My Sql", icon: SiMysql },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: FaDocker },
  { name: "MUI", icon: SiMui },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Git", icon: FaGitAlt },
  { name: "SQL", icon: SiMysql }, 
  { name: "JWT", icon: SiJsonwebtokens },
];
const loopStack = [...techStack1, ...techStack1];
const loopStack2 = [...techStack2, ...techStack2];

const TechMarquee = () => {
  return (
    <div 
      className="space-y-4 lg:space-y-7 md:space-y-6 sm:space-y-5 shadow-lg py-2 lg:py-6 md:py-5 sm:py-4 overflow-hidden px-10"
      style={{
        background: "rgba(139, 69, 19, 0.15)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(222, 184, 135, 0.2)",
        borderBottom: "1px solid rgba(222, 184, 135, 0.2)"
      }}
    >
      <motion.div
        className="flex gap-4 lg:gap-7 md:gap-6 sm:gap-5 whitespace-nowrap"
        animate={{ x: ['0%', '-135.2%'] }}
        transition={{
          ease: 'linear',
          duration: 25,
          repeat: Infinity,
        }}
      >
        {loopStack.map(({ name, icon: Icon }, index) => (
          <div
            key={`${name}-${index}`}
            className="
              inline-flex items-center justify-center
              gap-2 px-4 py-2 rounded-lg shadow-md
              min-w-[5rem] max-w-fit
              lg:min-w-[10rem] md:min-w-[8rem] sm:min-w-[6rem]
            "
            style={{
              background: "rgba(205, 133, 63, 0.2)",
              border: "1px solid rgba(244, 164, 96, 0.3)",
              color: "#FFE4C4" 
            }}
          >
            <Icon className="text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-lg" style={{ color: "#F4A460" }} />
            <span className="text-[0.7rem] sm:text-sm md:text-[0.9rem] lg:text-base">
              {name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="flex gap-4 lg:gap-7 md:gap-6 sm:gap-5 whitespace-nowrap"
        animate={{ x: ['-135.2%', '0%'] }}
        transition={{
          ease: 'linear',
          duration: 25,
          repeat: Infinity,
        }}
      >
        {loopStack2.map(({ name, icon: Icon }, index) => (
          <div
            key={`${name}-${index}`}
            className="
              inline-flex items-center justify-center
              gap-2 px-4 py-2 rounded-lg shadow-md
              min-w-[5rem] max-w-fit
              lg:min-w-[10rem] md:min-w-[8rem] sm:min-w-[6rem]
            "
            style={{
              background: "rgba(205, 133, 63, 0.2)", 
              border: "1px solid rgba(244, 164, 96, 0.3)",
              color: "#FFE4C4" 
            }}
          >
            <Icon className="text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-lg" style={{ color: "#F4A460" }} />
            <span className="text-[0.7rem] sm:text-sm md:text-[0.9rem] lg:text-base">
              {name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;