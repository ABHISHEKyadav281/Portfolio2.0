import HRFormPage from "../../components/HRFormPage/HRFormPage";
import LogoImage from "../../assets/image/LOGO.jpg"

const LetsConnect = () => {
    return (
        <>
            <div className="flex flex-col w-full px-4 sm:px-6 md:px-8 lg:px-10 relative pt-20 sm:pt-24 md:pt-4 lg:pt-0">
                <div 
                    className="flex flex-col lg:flex-row md:flex-row sm:flex-col items-start justify-between w-full py-8 sm:py-10 pb-8 sm:pb-10"
                    style={{ 
                        borderBottom: "1px solid rgba(205, 133, 63, 0.3)"
                    }}
                >
                    {/* Left Section - Text */}
                    <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full px-2 sm:px-4 lg:px-5 md:px-4">
                        <div className="mt-2 sm:mt-4 md:mt-6 lg:mt-10">
                            <h1 
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold"
                                style={{ color: "#FFE4C4" }}
                            >
                                Get in Touch
                            </h1>
                        </div>
                        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                            <h1 
                                className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed"
                                style={{ color: "#F5DEB3" }}
                            >
                                If you're seeking a reliable engineer for full-stack development, system design discussions, or technical collaboration, I'd be glad to connect. Send a message, and let's explore how we can create value together.
                            </h1>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full mt-6 sm:mt-8 lg:mt-0 md:mt-0">
                        <HRFormPage />
                    </div>
                </div>

                {/* Footer Section */}
                <div className="py-8 sm:py-10 flex flex-col lg:flex-row md:flex-col sm:flex-col gap-6 lg:gap-0 px-2 sm:px-4">
                    
                    {/* Logo Section */}
                    <div className="w-full lg:w-4/10">
                        <div className="w-full lg:w-2/3 flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden flex items-center justify-center"
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
                                    className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold"
                                    style={{ color: "#FFE4C4" }}
                                >
                                    Abhishek
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="flex w-full lg:w-6/10 flex-col sm:flex-row gap-6 sm:gap-4">
                        
                        {/* Address */}
                        <div className="w-full sm:w-1/3">
                            <div className="flex flex-col gap-2">
                                <h1 
                                    className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold"
                                    style={{ color: "#FFE4C4" }}
                                >
                                    Address
                                </h1>
                                <h1 
                                    className="text-xs sm:text-sm md:text-base lg:text-base"
                                    style={{ color: "#DEB887" }}
                                >
                                    Hyderabad | INDIA
                                </h1>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="w-full sm:w-1/3">
                            <div className="flex flex-col gap-2">
                                <h1 
                                    className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold"
                                    style={{ color: "#FFE4C4" }}
                                >
                                    Email
                                </h1>
                                <h1 
                                    className="text-xs sm:text-sm md:text-base lg:text-base break-all"
                                    style={{ color: "#DEB887" }}
                                >
                                    yyadavabhishek09@gmail.com
                                </h1>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="w-full sm:w-1/3">
                            <div className="flex flex-col gap-2">
                                <h1 
                                    className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold"
                                    style={{ color: "#FFE4C4" }}
                                >
                                    Phone
                                </h1>
                                <h1 
                                    className="text-xs sm:text-sm md:text-base lg:text-base"
                                    style={{ color: "#DEB887" }}
                                >
                                    +91 9407285334
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Copyright */}
                <div 
                    className="p-4 sm:p-6 md:p-8 lg:p-10 text-sm sm:text-base md:text-lg lg:text-xl text-center"
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