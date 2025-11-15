import { IoLogoPinterest } from "react-icons/io";
import HRFormPage from "../../components/HRFormPage/HRFormPage";
const LetsConnect = () => {
    return (
        <>
            <div className="flex flex-col w-full px-2 lg:px-10 md:px-8 sm:px-6 relative">
                <div className=" flex flex-col lg:flex-row md:flex-row sm:flex-col items-start justify-between w-full py-10 pb-10 border-b-1 border-zinc-600">

                    <div className="w-full lg:w-1/2 md:w-1/2 sm:full px-4 lg:px-0 md:px-0 sm:px-4">

                        <div className="mt-2 lg:mt-10 md:mt-8 sm:mt-6">
                            <h1 className="text-3xl lg:text-8xl md:text-7xl sm:text-6xl text-white ">
                                Let's Connect
                            </h1>
                            <h1 className="text-3xl lg:text-8xl md:text-7xl sm:text-6xl text-white "> There</h1>
                        </div>
                        <div className="mt-4 lg:mt-10 md:mt-8 sm:mt-6">
                            <h1 className="text-[0.7rem] lg:text-xl md:text-lg sm:text-base text-zinc-300 font-light">Looking to collaborate, discuss a new opportunity, or bring innovative ideas to life?
I’m always open to meaningful conversations with forward-thinking teams and organizations.
Fill out the form below, and let’s start building something exceptional together.</h1>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full mt-4 lg:mt-0 md:mt-0 sm:mt-4">
                        <HRFormPage />
                    </div>
                    {/* <div >
                        <div className="flex items-center bg-white/30 gap-4 p-2 pr-10 rounded-full">
                            <div className="bg-black text-white rounded-full p-2">
                                <MdKeyboardDoubleArrowRight className="text-5xl text-thin " />
                            </div>
                            <div>
                                <h1 className="text-lg text-white font-light">Hire Me Now !</h1>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className=" py-10 flex flex-col lg:flex-row md:flex-col sm:flex-row gap-2 lg:gap-0">
                    <div className="w-full lg:w-4/10" >
                        <div className="w-full lg:w-2/3 flex flex-col gap-1">

                            <div className="flex items-center gap-1">
                                <div>
                                    <IoLogoPinterest className="text-xl lg:text-4xl text-zinc-100" />
                                </div>
                                <h1 className="text-xl lg:text-3xl text-zinc-100">Pushpak</h1>
                            </div>
                            <div>
                                <h1 className="text-[0.6rem] lg:text-sm text-zinc-400">Frontend Engineer with 2+ years of experience in ReactJS and TypeScript, building responsive, high-performance web apps and seamless user interfaces.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="pt-1 flex w-full lg:w-6/10">

                        <div className="w-3/6 lg:w-3/9">
                            <div className="flex flex-col gap-2 text-zinc-400">
                                <h1 className="text-zinc-100 text-[0.7rem] lg:text-lg">Address</h1>
                                <h1 className=" text-[0.6rem] lg:text-[0.7rem]">H.NO 629 GadiyaPura 462022</h1>
                                <h1 className="text-[0.7rem]">Anand Nagar Bhopal Madhya Pradessh</h1>
                            </div>
                        </div>
                        <div className="w-3/6 lg:w-3/9 ">
                            <div className="flex flex-col gap-2 text-zinc-400">
                                <h1 className="text-zinc-100 text-[0.7rem] lg:text-lg">Email</h1>
                                <h1 className="text-[0.6rem] lg:text-[0.7rem]">rv9109559291@gmail.com</h1>
                                <h1 className="text-[0.6rem] lg:text-[0.7rem]">jangelapushpak2020@gmail.com</h1>
                            </div>
                        </div>
                        <div className="w-3/9 text-zinc-400">
                            <div className="flex flex-col gap-2 text-zinc-400">
                                <h1 className="text-zinc-100 text-[0.7rem] lg:text-lg">Phone</h1>
                                <h1 className="text-[0.6rem] lg:text-[0.7rem]">+91 8085390816</h1>
                                <h1 className="text-[0.6rem]">+91 9907433621</h1>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="border-t-1 border-zinc-600 p-4 text-[0.6rem] lg:text-[1rem] lg:p-10 text-zinc-100 text-center">
                    @ Pushpak Jangela


                </div>

            </div>
        </>
    )
}
export default LetsConnect;