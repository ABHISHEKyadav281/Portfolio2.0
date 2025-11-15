import { IoReturnUpForward } from "react-icons/io5";
import ExperiencePage from "./ExperiencePage";

const Experience = () => {
    return (
        <>
            <div className="min-h-screen  relative p-20">
                <div className="text-start w-full text-zinc-200 text-6xl mb-8 flex items-start justify-start gap-2">
                    <h1 className="font-semibold">Experience</h1>
                    <div className="flex items-center justify-center mt-8 text-zinc-400 font-semibold"><IoReturnUpForward className=" text-6xl rotate-90" /></div>
                </div>
                <div className="min-h-[40vh] w-full">
                    {/* <ProfessionalSlider /> */}
                    <ExperiencePage/>
                </div>
            </div>
        </>
    )
}
export default Experience;