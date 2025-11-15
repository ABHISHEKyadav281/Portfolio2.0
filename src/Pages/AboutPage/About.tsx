import PushpakPhoto from "../../assets/image/PushpakPhoto.jpeg";
import { IoReturnUpForward } from "react-icons/io5";
import { WiStars } from "react-icons/wi";
import "./AboutGlobal.css";
import { MdMilitaryTech } from "react-icons/md";
import { GiBeveledStar } from "react-icons/gi";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

// tech icons
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaJava, FaAws,
} from "react-icons/fa";
import {
    SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiMysql,
    SiPostgresql, SiMui, SiFramer, SiNestjs, SiSpringboot, SiGreensock,
} from "react-icons/si";
import { LuMouse } from "react-icons/lu";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import ShinyText from "../../components/ShinyText/ShinyText";
import { Counter } from "../../Function/AnimatedFunction/CountAnimation";

const About = () => {
    const statsData = [
        {
            id: 1,
            number: 7,
            hasPlus: true,
            label: "Company Projects",
            isShiny: false,
        },
        {
            id: 2,
            number: 50,
            prefix: "$",
            suffix: "M",
            hasPlus: true,
            label: "USD Facilitated",
            isShiny: false,
        },

        {
            id: 3,
            number: 2,
            hasPlus: true,
            label: "Years Of Experience",
            isShiny: false,
        },
        {
            id: 4,
            number: 10,
            hasPlus: true,
            label: "Project Builds",
            isShiny: false,
        },

    ];
    const techStack: { name: string; icon: IconType }[] = [
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

    const pattern = [2, 3, 4, 5, 4, 3, 2];
    let index = 0;

    return (
        <div className="flex items-center justify-center w-full relative flex-col py-10 lg:py-10 md:py-8 sm:py-6 px-4 lg:px-20 md:px-16 sm:px-12">
            <div className="text-start w-full border-b-1 border-zinc-800  text-zinc-200 text-3xl lg:text-6xl md:text-5xl sm:text-3xl mb-4 lg:mb-8 md:mb-8 sm:mb-8 flex items-start justify-start gap-2 ">
                <h1 className="font-semibold mb-2">About Me</h1>
                <div className="flex items-center justify-center  mt-4 lg:mt-8 md:mt-6 sm:mt-4 text-zinc-400 font-semibold mb-3 lg:mb-10 md:mb-8 sm:mb-6">
                    <IoReturnUpForward className=" text-3xl lg:text-6xl md:text-5xl sm:text-3xl rotate-90" />
                </div>
            </div>

            <div className="px-0 lg:py-10 md:py-8 sm:py-6 gap-5 lg:gap-15 md:gap-12 sm:gap-10 flex flex-col lg:flex-row md:flex-row sm:flex-col  items-start justify-between">
                <div className="w-full lg:w-4/10 md:w-4/10 sm:w-full pt-10 flex flex-col items-center justify-center gap-5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative w-35 h-35 flex items-center justify-center">
                        <div className="absolute inset-[-2] rounded-full border-[0px] w-38 h-38 border-transparent blob-outline" />
                        <img
                            src={PushpakPhoto}
                            alt="Profile"
                            className="relative z-10 w-full h-full rounded-full object-cover"
                        />
                    </motion.div>

                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-3xl font-bold bg-clip-text text-transparent flex items-center justify-center gap-1"
                            style={{
                                fontWeight: 550,
                                fontFamily: "cursive",
                                backgroundImage:
                                    "radial-gradient(circle,rgba(255,255,255,1) 40%, rgb(131,131,131) 100%)",
                                lineHeight: 1.7,
                            }}
                        >
                            <WiStars className="w-7 h-7 text-zinc-400" />
                            Pushpak Jangela
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}>

                            <h2 className="text-md mt-3 text-zinc-300 px-10">
                                Senior Software Engineer at KFIN Technologies with
                                <span className="inline-flex items-center gap-1 mx-2">
                                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                        1.5+
                                    </span>
                                </span>

                                years of experience building scalable frontend and backend solutions. Skilled in React, TypeScript, Tailwind CSS, Spring Boot, and AWS, contributing to
                                <span className="inline-flex items-center gap-1 mx-2">
                                    <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                        $50M+
                                    </span>
                                </span>

                                annual revenue through modular micro frontends and API integrations.
                            </h2>
                        </motion.div>

                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-10 text-center mb-0 lg:mb-15 md:mb-12 sm:mb-10 flex flex-row items-center justify-center gap-4"
                    >
                        <div className="flex flex-wrap gap-2 lg:gap-4 md:gap-3 sm:gap-2">
                            {statsData.map((stat) => (
                                <div
                                    key={stat.id}
                                    className="w-fit rounded-2xl backdrop-blur-lg bg-white/7 shadow-2xl bg-background/100 flex items-center justify-center p-3 lg:p-4 md:p-3 sm:p-2 px-4 lg:px-4 md:px-3 sm:px-2"
                                >
                                    <div className="text-white">
                                        <div className="w-full flex justify-start items-end leading-none">
                                            {stat.isShiny ? (

                                                <ShinyText className="text-2xl"><Counter from={0} to={stat.number} animationOptions={{ duration: 2 }} /></ShinyText>
                                            ) : (
                                                <h1
                                                    className="text-lg lg:text-3xl md:text-2xl sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"

                                                >
                                                    <Counter from={0} to={stat.number} animationOptions={{ duration: 2 }} />
                                                </h1>
                                            )}

                                            {stat.hasPlus && (
                                                <span className="text-[0.7rem] sm:text-lg md:text-xl lg:text-lg text-white translate-y-[-15px] sm:translate-y-[-10px] md:translate-y-[-10px] lg:translate-y-[-15px] ml-1">
                                                    +
                                                </span>
                                            )}

                                        </div>

                                        <h3 className="text-white  text-[0.5rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.7rem] w-20 flex items-start justify-start text-start text-zinc-400 pt-1">
                                            {stat.label}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="w-full lg:w-6/10 md:w-6/10 sm:full pt-0 lg:pt-10 md:pt-8 sm:pt-6 text-zinc-300 border-l border-zinc-600 h-fit pb-10">
                    <div className="w-full flex flex-col items-center justify-end">
                        <div className="mb-10">
                            <span
                                className="text-3xl font-bold bg-clip-text text-transparent flex items-center justify-center gap-1 border-b border-zinc-600"
                                style={{
                                    fontWeight: 550,
                                    backgroundImage:
                                        "radial-gradient(circle,rgba(255,255,255,1) 40%, rgb(131,131,131) 100%)",
                                    lineHeight: 1.5,
                                }}
                            >
                                <MdMilitaryTech className="w-7 h-7 text-zinc-300" />
                                Tech Stack
                            </span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col items-center justify-center gap-4">
                            {pattern.map((count, rowIdx) => {
                                const rowItems = techStack.slice(index, index + count);
                                index += count;
                                return (
                                    <div
                                        key={rowIdx}
                                        className="flex flex-row flex-wrap items-center justify-center gap-2 lg:gap-3 md:gap-2 sm:gap-1"
                                    >
                                        {rowItems.map(({ name, icon: Icon }, i) => (
                                            <div
                                                key={i}
                                                className="inline-flex items-center gap-2 bg-white/10 text-white px-2 lg:px-4 md:px-3 sm:px-2 py-2 rounded-full shadow-md hover:bg-white/20 transition"
                                            >
                                                <Icon className="text-[0.6rem] lg:text-lg md:text-base sm:text-sm text-zinc-400" />
                                                <span className="text-[0.6rem] lg:text-xs md:text-[0.7rem] sm:text-[0.6rem]">{name}</span>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Social Links */}
                        <div className="w-full flex flex-col items-center justify-center mt-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }} className="mb-5">
                                <span
                                    className="text-3xl font-bold bg-clip-text text-transparent flex items-center justify-center gap-1 border-b border-zinc-600"
                                    style={{
                                        fontWeight: 550,
                                        backgroundImage:
                                            "radial-gradient(circle,rgba(255,255,255,1) 40%, rgb(131,131,131) 100%)",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    <GiBeveledStar className="w-6 h-6 text-zinc-300" />
                                    Social Links
                                </span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }} className="w-full flex items-center justify-center gap-5 flex-wrap">
                                {[
                                    { name: "LinkedIn", icon: FaLinkedin },
                                    { name: "GitHub", icon: VscGithubInverted },
                                    { name: "LeetCode", icon: SiLeetcode },
                                    { name: "Instagram", icon: FaInstagram },
                                ].map(({ name, icon: Icon }) => (
                                    <div
                                        key={name}
                                        className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-1 rounded-full shadow-md hover:bg-white/20 transition"
                                    >
                                        <Icon className="text-lg text-zinc-400 " />
                                        <span className="text-md text-transparent bg-clip-text bg-gradient-to-r from-[#FFCAC9] to-[#737DFE]">{name}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
