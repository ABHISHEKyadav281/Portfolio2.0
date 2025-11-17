import HRFormPage from "../../components/HRFormPage/HRFormPage";
import LogoImage from "../../assets/image/LOGO.jpg"

const LetsConnect = () => {
    return (
        <>
            <div className="flex flex-col w-full px-2 lg:px-10 md:px-8 sm:px-6 relative">
                <div 
                    className="flex flex-col lg:flex-row md:flex-row sm:flex-col items-start justify-between w-full py-10 pb-10"
                    style={{ 
                        borderBottom: "1px solid rgba(205, 133, 63, 0.3)"
                    }}
                >
                    <div className="w-full lg:w-1/2 md:w-1/2 sm:full px-4 lg:px-5 md:px-0 sm:px-4">
                        <div className="mt-2 lg:mt-10 md:mt-8 sm:mt-6">
                            <h1 
                                className="text-3xl lg:text-8xl md:text-7xl sm:text-6xl"
                                style={{ color: "#FFE4C4" }}
                            >
                                Get in Touch
                            </h1>
                        </div>
                        <div className="mt-4 lg:mt-10 md:mt-8 sm:mt-6">
                            <h1 
                                className="text-[0.7rem] lg:text-xl md:text-lg sm:text-base font-light"
                                style={{ color: "#F5DEB3" }}
                            >
                                If you're seeking a reliable engineer for full-stack development, system design discussions, or technical collaboration, I'd be glad to connect. Send a message, and let's explore how we can create value together.
                            </h1>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full mt-4 lg:mt-0 md:mt-0 sm:mt-4">
                        <HRFormPage />
                    </div>
                </div>

                <div className="py-10 flex flex-col lg:flex-row md:flex-col sm:flex-row gap-2 lg:gap-0 px-2">
                    <div className="w-full lg:w-4/10">
                        <div className="w-full lg:w-2/3 flex flex-col gap-1">
                            <div className="flex items-center gap-1 ">
                                <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full overflow-hidden flex items-center justify-center"
                                     style={{ 
                                         border: "2px solid #F4A460",
                                         background: "rgba(244, 164, 96, 0.1)"
                                     }}>
                                    <img 
                                        src={LogoImage} 
                                        alt="Logo" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h1 
                                    className="text-xl lg:text-3xl"
                                    style={{ color: "#FFE4C4" }}
                                >
                                    Abhishek
                                </h1>
                            </div>
                            
                        </div>
                    </div>
                    <div className="pt-1 flex w-full lg:w-6/10">
                        <div className="w-3/6 lg:w-3/9">
                            <div className="flex flex-col gap-2">
                                <h1 
                                    className="text-[0.7rem] lg:text-lg"
                                    style={{ color: "#FFE4C4" }}
                                >
                                    Address
                                </h1>
                                <h1 
                                    className="text-[0.6rem] lg:text-[0.7rem]"
                                    style={{ color: "#DEB887" }}
                                >
                                    Hyderabad&nbsp; | &nbsp; INDIA
                                </h1>
                            </div>
                        </div>
                        <div className="w-3/6 lg:w-3/9">
                            <div className="flex flex-col gap-2">
                                <h1 
                                    className="text-[0.7rem] lg:text-lg"
                                    style={{ color: "#FFE4C4" }}
                                >
                                    Email
                                </h1>
                                <h1 
                                    className="text-[0.6rem] lg:text-[0.7rem]"
                                    style={{ color: "#DEB887" }}
                                >
                                    yyadavabhishek09@gmail.com
                                </h1>
                                
                            </div>
                        </div>
                        <div className="w-3/9">
                            <div className="flex flex-col gap-2">
                                <h1 
                                    className="text-[0.7rem] lg:text-lg"
                                    style={{ color: "#FFE4C4" }}
                                >
                                    Phone
                                </h1>
                                <h1 
                                    className="text-[0.6rem] lg:text-[0.7rem]"
                                    style={{ color: "#DEB887" }}
                                >
                                    +91 9407285334
                                </h1>
                               
                            </div>
                        </div>
                    </div>
                </div>
                
                <div 
                    className="p-4 text-[0.6rem] lg:text-[1rem] lg:p-10 text-center"
                    style={{ 
                        borderTop: "1px solid rgba(205, 133, 63, 0.3)",
                        color: "#FFE4C4"
                    }}
                >
                    @Abhi_281
                </div>
            </div>
        </>
    )
}

export default LetsConnect;