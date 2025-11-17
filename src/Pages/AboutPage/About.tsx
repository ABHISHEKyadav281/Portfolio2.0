import AbhiPhoto from "../../assets/image/AbhiPhoto.jpg";
import { IoReturnUpForward } from "react-icons/io5";
import { WiStars } from "react-icons/wi";
import "./AboutGlobal.css";
import { MdMilitaryTech } from "react-icons/md";
import { GiBeveledStar } from "react-icons/gi";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import { SiJunit5, SiLeetcode, SiSwagger } from "react-icons/si";

import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaAws, FaDocker, FaGitAlt,
} from "react-icons/fa";
import {
    SiTypescript, SiMongodb, SiExpress, SiMysql,
    SiPostgresql, SiMui, SiSpringboot, SiRedux, SiApachekafka, SiJsonwebtokens, SiPostman,
} from "react-icons/si";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import ShinyText from "../../components/ShinyText/ShinyText";
import { Counter } from "../../Function/AnimatedFunction/CountAnimation";

const About = () => {
    const statsData = [
        {
            id: 1,
            number: 2,
            hasPlus: true,
            label: "Years Experience",
            isShiny: false,
        },
        {
            id: 2,
            number: 6,
            hasPlus: false,
            label: "Company Projects",
            isShiny: false,
        },
        {
            id: 3,
            number: 15,
            hasPlus: true,
            label: "Total Projects",
            isShiny: false,
        },
        {
            id: 4,
            number: 1000,
            hasPlus: true,
            label: "Problems Solved",
            isShiny: false,
        },
    ];

    const techStack: { name: string; icon: IconType }[] = [
        { name: "Java", icon: FaJava },
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: FaJs },
        { name: "React", icon: FaReact },
        { name: "Redux", icon: SiRedux },
        { name: "AWS", icon: FaAws },
        { name: "Docker", icon: FaDocker },
        { name: "Kafka", icon: SiApachekafka },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "SQL", icon: SiMysql },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "MUI", icon: SiMui },
        { name: "JWT", icon: SiJsonwebtokens },
        { name: "GitHub", icon: FaGithub },
        { name: "JUnit", icon: SiJunit5 },
        { name: "Swagger", icon: SiSwagger },
    ];

    const socialLinks = [
        { 
            name: "LinkedIn", 
            icon: FaLinkedin, 
            url: "https://www.linkedin.com/in/abhishekyadav281/" 
        },
        { 
            name: "GitHub", 
            icon: VscGithubInverted, 
            url: "https://github.com/ABHISHEKyadav281" 
        },
        { 
            name: "LeetCode", 
            icon: SiLeetcode, 
            url: "https://leetcode.com/u/ABHISHEKyadav281/" 
        },
        // { 
        //     name: "Instagram", 
        //     icon: FaInstagram, 
        //     url: "https://www.instagram.com/_abhi__281/" 
        // },
    ];

    const pattern = [2, 3, 4, 5, 4, 3];
    let index = 0;

    return (
        <div className="flex items-center justify-center w-full relative flex-col py-10 lg:py-10 md:py-8 sm:py-6 px-4 lg:px-20 md:px-16 sm:px-12">
            <div 
                className="text-start w-full text-3xl lg:text-6xl md:text-5xl sm:text-3xl mb-4 lg:mb-8 md:mb-8 sm:mb-8 flex items-start justify-start gap-2"
                style={{ 
                    borderBottom: "1px solid rgba(205, 133, 63, 0.3)",
                    paddingBottom: "1rem"
                }}
            >
                <h1 className="font-semibold mb-2" style={{ color: "#FFE4C4" }}>About Me</h1>
                <div 
                    className="flex items-center justify-center mt-4 lg:mt-8 md:mt-6 sm:mt-4 font-semibold mb-3 lg:mb-10 md:mb-8 sm:mb-6"
                    style={{ color: "#DEB887" }}
                >
                    <IoReturnUpForward className="text-3xl lg:text-6xl md:text-5xl sm:text-3xl rotate-90" />
                </div>
            </div>

            <div className="px-0 lg:py-10 md:py-8 sm:py-6 gap-5 lg:gap-15 md:gap-12 sm:gap-10 flex flex-col lg:flex-row md:flex-row sm:flex-col items-start justify-between">
                <div className="w-full lg:w-4/10 md:w-4/10 sm:w-full pt-10 flex flex-col items-center justify-center gap-5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative w-35 h-35 flex items-center justify-center">
                        <div className="absolute inset-[-2] rounded-full border-[0px] w-38 h-38 border-transparent blob-outline" />
                        <img
                            src={AbhiPhoto}
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
                                backgroundImage: "linear-gradient(135deg, #FFE4B5 0%, #F4A460 50%, #DEB887 100%)",
                                lineHeight: 1.7,
                            }}
                        >
                            <WiStars className="w-7 h-7" style={{ color: "#DEB887" }} />
                            Abhishek Yadav
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}>

                            <h2 className="text-md mt-3 px-10" style={{ color: "#F5DEB3" }}>
                                Software Engineer with
                                <span className="inline-flex items-center gap-1 mx-2">
                                    <span 
                                        className="font-bold text-transparent bg-clip-text"
                                        style={{ backgroundImage: "linear-gradient(135deg, #D2691E 0%, #F4A460 100%)" }}
                                    >
                                        2+
                                    </span>
                                </span>
                                years specializing in full-stack development and distributed systems. Expert in Java, Spring Boot, React, and AWS, with strong focus on microservices, event-driven architecture, database optimization, and building reliable enterprise-grade platforms.
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
                                    className="w-fit rounded-2xl flex items-center justify-center p-3 lg:p-4 md:p-3 sm:p-2 px-4 lg:px-4 md:px-3 sm:px-2"
                                    style={{
                                        background: "rgba(139, 69, 19, 0.15)",
                                        backdropFilter: "blur(10px)",
                                        boxShadow: "0 8px 32px 0 rgba(205, 133, 63, 0.2)",
                                        border: "1px solid rgba(244, 164, 96, 0.2)"
                                    }}
                                >
                                    <div>
                                        <div className="w-full flex justify-start items-end leading-none">
                                            {stat.isShiny ? (
                                                <ShinyText className="text-2xl"><Counter from={0} to={stat.number} animationOptions={{ duration: 2 }} /></ShinyText>
                                            ) : (
                                                <h1
                                                    className="text-lg lg:text-3xl md:text-2xl sm:text-xl font-bold text-transparent bg-clip-text"
                                                    style={{ backgroundImage: "linear-gradient(135deg, #D2691E 0%, #F4A460 100%)" }}
                                                >
                                                    <Counter from={0} to={stat.number} animationOptions={{ duration: 2 }} />
                                                </h1>
                                            )}

                                            {stat.hasPlus && (
                                                <span 
                                                    className="text-[0.7rem] sm:text-lg md:text-xl lg:text-lg translate-y-[-15px] sm:translate-y-[-10px] md:translate-y-[-10px] lg:translate-y-[-15px] ml-1"
                                                    style={{ color: "#FFE4C4" }}
                                                >
                                                    +
                                                </span>
                                            )}

                                        </div>

                                        <h3 
                                            className="text-[0.5rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.7rem] w-20 flex items-start justify-start text-start pt-1"
                                            style={{ color: "#DEB887" }}
                                        >
                                            {stat.label}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div 
                    className="w-full lg:w-6/10 md:w-6/10 sm:full pt-0 lg:pt-10 md:pt-8 sm:pt-6 border-l h-fit pb-10"
                    style={{ 
                        color: "#F5DEB3",
                        borderColor: "rgba(205, 133, 63, 0.3)"
                    }}
                >
                    <div className="w-full flex flex-col items-center justify-end">
                        <div className="mb-10">
                            <span
                                className="text-3xl font-bold bg-clip-text text-transparent flex items-center justify-center gap-1"
                                style={{
                                    fontWeight: 550,
                                    backgroundImage: "linear-gradient(135deg, #FFE4B5 0%, #F4A460 50%, #DEB887 100%)",
                                    lineHeight: 1.5,
                                    borderBottom: "1px solid rgba(205, 133, 63, 0.3)",
                                    paddingBottom: "0.5rem"
                                }}
                            >
                                <MdMilitaryTech className="w-7 h-7" style={{ color: "#F5DEB3" }} />
                                Tech Stack
                            </span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }} 
                            className="flex flex-col items-center justify-center gap-4"
                        >
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
                                                className="inline-flex items-center gap-2 px-2 lg:px-4 md:px-3 sm:px-2 py-2 rounded-full shadow-md transition"
                                                style={{
                                                    background: "rgba(205, 133, 63, 0.2)",
                                                    border: "1px solid rgba(244, 164, 96, 0.3)",
                                                    color: "#FFE4C4"
                                                }}
                                            >
                                                <Icon className="text-[0.6rem] lg:text-lg md:text-base sm:text-sm" style={{ color: "#F4A460" }} />
                                                <span className="text-[0.6rem] lg:text-xs md:text-[0.7rem] sm:text-[0.6rem]">{name}</span>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </motion.div>

                        <div className="w-full flex flex-col items-center justify-center mt-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }} 
                                className="mb-5"
                            >
                                <span
                                    className="text-3xl font-bold bg-clip-text text-transparent flex items-center justify-center gap-1"
                                    style={{
                                        fontWeight: 550,
                                        backgroundImage: "linear-gradient(135deg, #FFE4B5 0%, #F4A460 50%, #DEB887 100%)",
                                        lineHeight: 1.5,
                                        borderBottom: "1px solid rgba(205, 133, 63, 0.3)",
                                        paddingBottom: "0.5rem"
                                    }}
                                >
                                    <GiBeveledStar className="w-6 h-6" style={{ color: "#F5DEB3" }} />
                                    Social Links
                                </span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }} 
                                className="w-full flex items-center justify-center gap-5 flex-wrap"
                            >
                                {socialLinks.map(({ name, icon: Icon, url }) => (
                                    <a
                                        key={name}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-1 rounded-full shadow-md transition hover:scale-105 cursor-pointer"
                                        style={{
                                            background: "rgba(205, 133, 63, 0.2)",
                                            border: "1px solid rgba(244, 164, 96, 0.3)"
                                        }}
                                    >
                                        <Icon className="text-lg" style={{ color: "#F4A460" }} />
                                        <span 
                                            className="text-md text-transparent bg-clip-text"
                                            style={{ backgroundImage: "linear-gradient(135deg, #D2691E 0%, #F4A460 100%)" }}
                                        >
                                            {name}
                                        </span>
                                    </a>
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