import { SiDatadotai } from "react-icons/si";
const ExperiencePage = () => {
    const experiences = [
        {
            title: "Senior Software Engineer",
            date: "Jan 2024 – Present",
            comapny: "KFin Technologies",
            description: [
                "Built and maintained frontend components and features using ReactJS, TypeScript, and Redux Toolkit, improving page responsiveness by 45%.",
                "Translated product designs into high-quality, accessible user interfaces aligned with WCAG standards.",
                "Collaborated with backend engineers to integrate RESTful APIs, reducing API latency by 30%.",
                "Improved frontend architecture and introduced Vite build tooling, reducing bundle size by 25%.",
                "Implemented role-based authentication and optimized session handling for better user experience."
            ]
        },
        {
            title: "Software Engineer",
            date: "Jan 2023 – Dec 2023",
            comapny: "KFin Technologies",
            description: [
                "Developed and deployed a Loan Against Mutual Funds platform processing 500+ applications worth $50M+, automating KYC and verification flows.",
                "Built 40+ reusable UI components using ReactJS, MUI, and Tailwind CSS, cutting new feature delivery time by 30%.",
                "Enhanced debugging and testing processes using Jest and Chrome DevTools.",
                "Strengthened application scalability and performance through Redux Toolkit and optimized state management patterns."
            ]
        },

    ];
    return (
        <>
            <div className=" min-h-[40vh]">
                {experiences.map((experience, index) => (

                    <div key={index} className="border-b border-t border-zinc-600">
                        <div className="px-10 py-10 flex items-start justify-between gap-3">
                            <div className="w-200">
                                <h5 className=" text-zinc-200 text-4xl tracking-wider font-semibold">{experience.comapny}</h5>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-3">
                                <div className="flex items-start justify-between gap-3 w-full">

                                    <h5 className=" text-zinc-200 text-2xl tracking-wider">{experience.title}</h5>
                                    <p className="text-zinc-400 text-md">{experience.date}</p>
                                </div>
                                <div className="w-full flex flex-col items-center justify-center gap-2">
                                    {experience.description.map((description, index) => (
                                        <div key={index} className="flex items-center justify-start gap-3 w-full" >
                                            <SiDatadotai strokeWidth={1.5} className="text-zinc-400 min-w-10 h-4 flex items-start justify-start  " />
                                            <p className="text-zinc-300 text-md mt-2 text-start">{description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                ))
                }

            </div>
        </>
    )
}
export default ExperiencePage;