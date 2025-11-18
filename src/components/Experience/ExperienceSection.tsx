// import { motion } from "framer-motion";
// import { MapPin } from "lucide-react";
// import ProjectCard from "./ProjectCard";
// import { IoReturnUpForward } from "react-icons/io5";

// const experiences = [
//   {
//     title: "Software Engineer",
//     date: "June 2024 – Present",
//     company: "KFIN Technologies",
//     location: "Hyderabad-TS",
//     projects: [
//       {
//         name: "Centralized Access Management System",
//         tech: [
//           "Spring Boot",
//           "AWS Lambda",
//           "S3",
//           "YugabyteDB",
//           "MongoDB",
//           "React",
//           "TypeScript",
//           "MUI",
//         ],
//         achievements: [
//           {
//             text: "Engineered a centralized authentication and authorization platform powering 10+ microservices, enabling seamless cross-service access for",
//             metric: "50K+ users",
//           },
//           {
//             text: "Implemented JWT-based SSO with refresh tokens, delivering",
//             metric: "99.9% uptime",
//             context: "for mission-critical systems",
//           },
//           {
//             text: "Delivered role-based and Maker-Checker workflows, automating access approvals",
//           },
//           {
//             text: "Built self-service dashboards for access requests and role visibility",
//           },
//         ],
//       },
//       {
//         name: "Finbank Platform",
//         tech: ["Java", "Spring Boot", "AWS", "PostgreSQL"],
//         achievements: [
//           {
//             text: "Developed high-throughput verification microservices processing",
//             metric: "40K+ records",
//             context: "with multi-threaded execution",
//           },
//           {
//             text: "Integrated third-party APIs using standardized wrappers for improved reliability",
//           },
//           {
//             text: "Optimized data pipelines and Athena logs, reducing latency by",
//             metric: "60%",
//             context: "and cutting debugging time by 50%",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "Software Engineer Intern",
//     date: "Feb 2024 – June 2023",
//     company: "KFIN Technologies",
//     location: "Hyderabad-TS",
//     projects: [
//       {
//         name: "MFCentral",
//         tech: [
//           "Node.js",
//           "Express.js",
//           "TypeScript",
//           "SQL Server",
//           "React.js",
//           "AWS S3",
//         ],
//         achievements: [
//           {
//             text: "Optimized backend APIs, reducing response time from",
//             metric: "15s to 1s",
//             context: "by refactoring logic and improving database interactions",
//           },
//           {
//             text: "Migrated",
//             metric: "8+ stored procedures",
//             context:
//               "into optimized Node.js functions, improving maintainability and scalability",
//           },
//           {
//             text: "Implemented AES + RSA hybrid cryptography for secure request-response payloads, strengthening data protection",
//           },
//           {
//             text: "Enhanced analytics data pipeline by optimizing SQL queries for Grafana dashboards and applying S3 data partitioning for faster retrieval",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const ExperienceSection = () => {
//   return (
//     <section className="py-6 lg:py-20 md:py-16 sm:py-12 px-4 lg:px-20 md:px-16 sm:px-12 relative overflow-x-hidden overflow-y-visible max-w-[100vw]">
//       <div
//         className="text-start w-full text-3xl lg:text-6xl md:text-5xl sm:text-3xl mb-0 lg:mb-8 md:mb-6 sm:mb-4 flex items-start justify-start gap-2"
//         style={{
//           borderBottom: "1px solid rgba(205, 133, 63, 0.3)",
//           paddingBottom: "1rem",
//         }}
//       >
//         <h1 className="font-semibold" style={{ color: "#FFE4C4" }}>
//           Experience
//         </h1>
//         <div
//           className="flex items-center justify-center mt-4 lg:mt-8 md:mt-6 sm:mt-4 font-semibold mb-3 lg:mb-10 md:mb-8 sm:mb-6"
//           style={{ color: "#DEB887" }}
//         >
//           <IoReturnUpForward className="text-3xl lg:text-6xl md:text-5xl sm:text-3xl rotate-90" />
//         </div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         className="mt-4 lg:mt-10 md:mt-8 sm:mt-6 text-center mb-15 flex flex-row items-center justify-center gap-0"
//       >
//         <div
//           className="inline-flex items-center gap-3 lg:gap-4 md:gap-3 sm:gap-2 lg:gap-8 md:gap-6 sm:gap-4 px-4 lg:px-8 md:px-6 sm:px-4 py-2 lg:py-6 md:py-5 sm:py-4 rounded-2xl"
//           style={{
//             background: "rgba(139, 69, 19, 0.15)",
//             backdropFilter: "blur(10px)",
//             boxShadow: "0 8px 32px 0 rgba(205, 133, 63, 0.2)",
//             border: "1px solid rgba(244, 164, 96, 0.2)",
//           }}
//         >
//           <div className="text-center">
//             <div
//               className="text-[0.75rem] lg:text-3xl md:text-2xl sm:text-xl font-bold text-transparent bg-clip-text"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(135deg, #D2691E 0%, #F4A460 100%)",
//               }}
//             >
//               2+ Years
//             </div>
//             <div
//               className="text-[0.5rem] lg:text-sm mt:0 lg:mt-1 md:mt-1 sm:mt-0"
//               style={{ color: "#F5DEB3" }}
//             >
//               Experience
//             </div>
//           </div>
//           <div
//             className="w-px h-8 lg:h-12 md:h-10 sm:h-9"
//             style={{ background: "rgba(222, 184, 135, 0.4)" }}
//           />
//           <div className="text-center">
//             <div
//               className="text-[0.75rem] lg:text-3xl md:text-2xl sm:text-xl font-bold text-transparent bg-clip-text"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(135deg, #D2691E 0%, #F4A460 100%)",
//               }}
//             >
//               5+
//             </div>
//             <div
//               className="text-[0.5rem] lg:text-sm mt:0 lg:mt-1 md:mt-1 sm:mt-0"
//               style={{ color: "#F5DEB3" }}
//             >
//               Services
//             </div>
//           </div>
//           <div
//             className="w-px h-8 lg:h-12 md:h-10 sm:h-9"
//             style={{ background: "rgba(222, 184, 135, 0.4)" }}
//           />
//           <div className="text-center">
//             <div
//               className="text-[0.75rem] lg:text-3xl md:text-2xl sm:text-xl font-bold text-transparent bg-clip-text"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(135deg, #D2691E 0%, #F4A460 100%)",
//               }}
//             >
//               99.9%
//             </div>
//             <div
//               className="text-[0.5rem] lg:text-sm mt:0 lg:mt-1 md:mt-1 sm:mt-0"
//               style={{ color: "#F5DEB3" }}
//             >
//               Uptime
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[150px]"
//           style={{ background: "rgba(210, 105, 30, 0.1)" }}
//         />
//         <div
//           className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[150px]"
//           style={{ background: "rgba(205, 133, 63, 0.1)" }}
//         />
//       </div>
//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="relative">
//           <div
//             className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full"
//             style={{
//               background:
//                 "linear-gradient(to bottom, rgba(244, 164, 96, 0.5), rgba(222, 184, 135, 0.5), transparent)",
//             }}
//           />

//           <div className="space-y-12">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="relative"
//               >
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
//                   className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-2"
//                 >
//                   <div
//                     className="w-4 h-4 rounded-full shadow-lg ring-4 ring-[rgba(46, 27, 18, 0.8)]"
//                     style={{
//                       background: "linear-gradient(135deg, #D2691E, #CD853F)",
//                     }}
//                   />
//                 </motion.div>

//                 <div
//                   className={`md:flex md:items-start ${
//                     index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                   }`}
//                 >
//                   <div
//                     className={`md:w-1/2 ${
//                       index % 2 === 0 ? "md:pr-12" : "md:pl-12"
//                     }`}
//                   >
//                     <motion.div
//                       whileHover={{ scale: 1.02 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                       className="rounded-2xl hover:shadow-2xl transition-all duration-300 p-8"
//                       style={{
//                         background: "rgba(139, 69, 19, 0.15)",
//                         backdropFilter: "blur(10px)",
//                         boxShadow: "0 8px 32px 0 rgba(205, 133, 63, 0.2)",
//                         border: "1px solid rgba(244, 164, 96, 0.2)",
//                       }}
//                     >
//                       <div className="mb-6">
//                         <div className="flex items-start justify-between mb-3">
//                           <h3
//                             className="text-xl lg:text-2xl md:text-xl sm:text-lg font-bold leading-tight"
//                             style={{ color: "#FFE4C4" }}
//                           >
//                             {exp.title}
//                           </h3>
//                           <span
//                             className={`px-2 whitespace-nowrap lg:px-4 md:px-3 sm:px-2 py-1.5 rounded-full text-[0.5rem] lg:text-xs md:text-xs sm:text-xs font-semibold`}
//                             style={{
//                               background: exp.date.includes("Present")
//                                 ? "rgba(34, 197, 94, 0.2)"
//                                 : "rgba(210, 105, 30, 0.2)",
//                               color: exp.date.includes("Present")
//                                 ? "#86efac"
//                                 : "#F4A460",
//                               border: exp.date.includes("Present")
//                                 ? "1px solid rgba(34, 197, 94, 0.3)"
//                                 : "1px solid rgba(244, 164, 96, 0.3)",
//                             }}
//                           >
//                             {exp.date.includes("Present")
//                               ? "Current"
//                               : exp.date.split("–")[0].trim()}
//                           </span>
//                         </div>

//                         <h4
//                           className="text-lg lg:text-xl md:text-lg sm:text-md font-semibold text-transparent bg-clip-text mb-2"
//                           style={{
//                             backgroundImage:
//                               "linear-gradient(135deg, #D2691E 0%, #F4A460 100%)",
//                           }}
//                         >
//                           {exp.company}
//                         </h4>

//                         <div
//                           className="flex items-center gap-2"
//                           style={{ color: "#DEB887" }}
//                         >
//                           <MapPin className="w-4 h-4" />
//                           <span className="text-sm">{exp.location}</span>
//                           <span
//                             className="text-sm"
//                             style={{ color: "#A0522D" }}
//                           >
//                             •
//                           </span>
//                           <span className="text-sm">{exp.date}</span>
//                         </div>
//                       </div>

//                       <div className="space-y-6">
//                         {exp.projects.map((project, pIndex) => (
//                           <ProjectCard
//                             key={pIndex}
//                             project={project}
//                             delay={index * 0.2 + pIndex * 0.1}
//                           />
//                         ))}
//                       </div>
//                     </motion.div>
//                   </div>
//                   <div className="hidden md:block md:w-1/2" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ExperienceSection;
















































import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { IoReturnUpForward } from "react-icons/io5";

const experiences = [
  {
    title: "Software Engineer",
    date: "June 2024 – Present",
    company: "KFIN Technologies",
    location: "Hyderabad-TS",
    projects: [
      {
        name: "Centralized Access Management System",
        tech: [
          "Spring Boot",
          "AWS Lambda",
          "S3",
          "YugabyteDB",
          "MongoDB",
          "React",
          "TypeScript",
          "MUI",
        ],
        achievements: [
          {
            text: "Engineered a centralized authentication and authorization platform powering 10+ microservices, enabling seamless cross-service access for",
            metric: "50K+ users",
          },
          {
            text: "Implemented JWT-based SSO with refresh tokens, delivering",
            metric: "99.9% uptime",
            context: "for mission-critical systems",
          },
          {
            text: "Delivered role-based and Maker-Checker workflows, automating access approvals",
          },
          {
            text: "Built self-service dashboards for access requests and role visibility",
          },
        ],
      },
      {
        name: "Finbank Platform",
        tech: ["Java", "Spring Boot", "AWS", "PostgreSQL"],
        achievements: [
          {
            text: "Developed high-throughput verification microservices processing",
            metric: "40K+ records",
            context: "with multi-threaded execution",
          },
          {
            text: "Integrated third-party APIs using standardized wrappers for improved reliability",
          },
          {
            text: "Optimized data pipelines and Athena logs, reducing latency by",
            metric: "60%",
            context: "and cutting debugging time by 50%",
          },
        ],
      },
    ],
  },
  {
    title: "Software Engineer Intern",
    date: "Feb 2024 – June 2023",
    company: "KFIN Technologies",
    location: "Hyderabad-TS",
    projects: [
      {
        name: "MFCentral",
        tech: [
          "Node.js",
          "Express.js",
          "TypeScript",
          "SQL Server",
          "React.js",
          "AWS S3",
        ],
        achievements: [
          {
            text: "Optimized backend APIs, reducing response time from",
            metric: "15s to 1s",
            context: "by refactoring logic and improving database interactions",
          },
          {
            text: "Migrated",
            metric: "8+ stored procedures",
            context:
              "into optimized Node.js functions, improving maintainability and scalability",
          },
          {
            text: "Implemented AES + RSA hybrid cryptography for secure request-response payloads, strengthening data protection",
          },
          {
            text: "Enhanced analytics data pipeline by optimizing SQL queries for Grafana dashboards and applying S3 data partitioning for faster retrieval",
          },
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-6 lg:py-20 md:py-16 sm:py-12 px-4 lg:px-20 md:px-16 sm:px-12 relative w-full">
      <div
        className="text-start w-full text-3xl lg:text-6xl md:text-5xl sm:text-3xl mb-0 lg:mb-8 md:mb-6 sm:mb-4 flex items-start justify-start gap-2"
        style={{
          borderBottom: "1px solid rgba(205, 133, 63, 0.3)",
          paddingBottom: "1rem",
        }}
      >
        <h1 className="font-semibold" style={{ color: "#FFE4C4" }}>
          Experience
        </h1>
        <div
          className="flex items-center justify-center mt-4 lg:mt-8 md:mt-6 sm:mt-4 font-semibold mb-3 lg:mb-10 md:mb-8 sm:mb-6"
          style={{ color: "#DEB887" }}
        >
          <IoReturnUpForward className="text-3xl lg:text-6xl md:text-5xl sm:text-3xl rotate-90" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-4 lg:mt-10 md:mt-8 sm:mt-6 text-center mb-15 flex flex-row items-center justify-center gap-0 w-full"
      >
        <div
          className="inline-flex items-center gap-2 lg:gap-8 md:gap-6 sm:gap-4 px-3 lg:px-8 md:px-6 sm:px-4 py-2 lg:py-6 md:py-5 sm:py-4 rounded-2xl max-w-full"
          style={{
            background: "rgba(139, 69, 19, 0.15)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px 0 rgba(205, 133, 63, 0.2)",
            border: "1px solid rgba(244, 164, 96, 0.2)",
          }}
        >
          <div className="text-center">
            <div
              className="text-[0.75rem] lg:text-3xl md:text-2xl sm:text-xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #D2691E 0%, #F4A460 100%)",
              }}
            >
              2+ Years
            </div>
            <div
              className="text-[0.5rem] lg:text-sm mt:0 lg:mt-1 md:mt-1 sm:mt-0"
              style={{ color: "#F5DEB3" }}
            >
              Experience
            </div>
          </div>
          <div
            className="w-px h-8 lg:h-12 md:h-10 sm:h-9"
            style={{ background: "rgba(222, 184, 135, 0.4)" }}
          />
          <div className="text-center">
            <div
              className="text-[0.75rem] lg:text-3xl md:text-2xl sm:text-xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #D2691E 0%, #F4A460 100%)",
              }}
            >
              5+
            </div>
            <div
              className="text-[0.5rem] lg:text-sm mt:0 lg:mt-1 md:mt-1 sm:mt-0"
              style={{ color: "#F5DEB3" }}
            >
              Services
            </div>
          </div>
          <div
            className="w-px h-8 lg:h-12 md:h-10 sm:h-9"
            style={{ background: "rgba(222, 184, 135, 0.4)" }}
          />
          <div className="text-center">
            <div
              className="text-[0.75rem] lg:text-3xl md:text-2xl sm:text-xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #D2691E 0%, #F4A460 100%)",
              }}
            >
              99.9%
            </div>
            <div
              className="text-[0.5rem] lg:text-sm mt:0 lg:mt-1 md:mt-1 sm:mt-0"
              style={{ color: "#F5DEB3" }}
            >
              Uptime
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 overflow-visible pointer-events-none -z-10">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[150px]"
          style={{ background: "rgba(210, 105, 30, 0.1)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[150px]"
          style={{ background: "rgba(205, 133, 63, 0.1)" }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(244, 164, 96, 0.5), rgba(222, 184, 135, 0.5), transparent)",
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-2"
                >
                  <div
                    className="w-4 h-4 rounded-full shadow-lg ring-4 ring-[rgba(46, 27, 18, 0.8)]"
                    style={{
                      background: "linear-gradient(135deg, #D2691E, #CD853F)",
                    }}
                  />
                </motion.div>

                <div
                  className={`md:flex md:items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="rounded-2xl hover:shadow-2xl transition-all duration-300 p-8"
                      style={{
                        background: "rgba(139, 69, 19, 0.15)",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 8px 32px 0 rgba(205, 133, 63, 0.2)",
                        border: "1px solid rgba(244, 164, 96, 0.2)",
                      }}
                    >
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3
                            className="text-xl lg:text-2xl md:text-xl sm:text-lg font-bold leading-tight"
                            style={{ color: "#FFE4C4" }}
                          >
                            {exp.title}
                          </h3>
                          <span
                            className={`px-2 whitespace-nowrap lg:px-4 md:px-3 sm:px-2 py-1.5 rounded-full text-[0.5rem] lg:text-xs md:text-xs sm:text-xs font-semibold`}
                            style={{
                              background: exp.date.includes("Present")
                                ? "rgba(34, 197, 94, 0.2)"
                                : "rgba(210, 105, 30, 0.2)",
                              color: exp.date.includes("Present")
                                ? "#86efac"
                                : "#F4A460",
                              border: exp.date.includes("Present")
                                ? "1px solid rgba(34, 197, 94, 0.3)"
                                : "1px solid rgba(244, 164, 96, 0.3)",
                            }}
                          >
                            {exp.date.includes("Present")
                              ? "Current"
                              : exp.date.split("–")[0].trim()}
                          </span>
                        </div>

                        <h4
                          className="text-lg lg:text-xl md:text-lg sm:text-md font-semibold text-transparent bg-clip-text mb-2"
                          style={{
                            backgroundImage:
                              "linear-gradient(135deg, #D2691E 0%, #F4A460 100%)",
                          }}
                        >
                          {exp.company}
                        </h4>

                        <div
                          className="flex items-center gap-2"
                          style={{ color: "#DEB887" }}
                        >
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                          <span
                            className="text-sm"
                            style={{ color: "#A0522D" }}
                          >
                            •
                          </span>
                          <span className="text-sm">{exp.date}</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {exp.projects.map((project, pIndex) => (
                          <ProjectCard
                            key={pIndex}
                            project={project}
                            delay={index * 0.2 + pIndex * 0.1}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;