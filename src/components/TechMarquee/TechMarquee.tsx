// TechMarquee.tsx
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaJava, FaAws,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiMysql,
  SiPostgresql, SiMui, SiFramer, SiNestjs, SiSpringboot, SiGreensock,
} from "react-icons/si";
import { IconType } from "react-icons";
import { LuMouse } from "react-icons/lu";
import { motion } from "framer-motion";

// Type
interface TechItem {
  name: string;
  icon: IconType;
}

// Split techStack into two groups of 10
const techStack1: TechItem[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "NestJS", icon: SiNestjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express", icon: SiExpress },
];

const techStack2: TechItem[] = [
  { name: "Node.js", icon: FaNodeJs },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MUI", icon: SiMui },
  { name: "GSAP", icon: SiGreensock },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Locomotive Scroll", icon: LuMouse },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Java", icon: FaJava },
  { name: "AWS", icon: FaAws },
];

const loopStack = [...techStack1, ...techStack1];
const loopStack2 = [...techStack2, ...techStack2];
const TechMarquee = () => {
  return (
    <div className="space-y-4 lg:space-y-7 md:space-y-6 sm:space-y-5 shadow-lg bg-white/7 backdrop-blur-lg py-2 lg:py-6 md:py-5 sm:py-4 overflow-hidden px-10">
      {/* First Row */}
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
    gap-2 bg-white/10 text-white 
    px-4 py-2 rounded-lg shadow-md
    min-w-[5rem] max-w-fit
    lg:min-w-[10rem] md:min-w-[8rem] sm:min-w-[6rem]
  "
          >
            <Icon className="text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-lg" />
            <span className="text-[0.7rem] sm:text-sm md:text-[0.9rem] lg:text-base">
              {name}
            </span>
          </div>

        ))}
      </motion.div>

      {/* Second Row */}
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
    gap-2 bg-white/10 text-white 
    px-4 py-2 rounded-lg shadow-md
    min-w-[5rem] max-w-fit
    lg:min-w-[10rem] md:min-w-[8rem] sm:min-w-[6rem]
  "
          >
            <Icon className="text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] lg:text-lg" />
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
