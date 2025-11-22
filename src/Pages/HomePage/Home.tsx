import { FiDownload } from "react-icons/fi";
import Eagle from "../../assets/image/Eagle.jpg"
import High from "../../assets/image/highThroughput.jpg"
import center from "../../assets/image/center.jpg"
import frontend from "../../assets/image/frontend.jpg"
import backend from "../../assets/image/backend.jpg"

const Home = () => {
  return (
    <>
      <div className="w-full relative mb-10 lg:mb-18 md:mb-14 sm:mb-12 pt-20 sm:pt-24 md:pt-4 lg:pt-0">
        <div className="pt-10 lg:pt-25 md:pt-22 sm:pt-20 w-full px-4 sm:px-6 flex items-center justify-center">
          <div className="flex items-center justify-center max-w-5xl w-full">
            <div className="text-center font-Poppins tracking-wider w-full" style={{ fontFamily: "Poppins", lineHeight: 1.2 }}>

              {/* Name */}
              <h1 className="flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold bg-clip-text text-transparent" style={{
                  fontWeight: 550,
                  fontFamily: "cursive", 
                  backgroundImage: "linear-gradient(135deg, #FFE4B5 0%, #F4A460 50%, #DEB887 100%)", 
                  lineHeight: 1.7
                }}>Abhishek Yadav</span>
              </h1>

              {/* Title */}
              <h1
                className="text-base sm:text-lg md:text-xl lg:text-3xl mb-2 sm:mb-3"
                style={{ 
                  lineHeight: 1.5,
                  color: "#FFE4C4"
                }}
              >
                Full-Stack Engineer
              </h1>

              {/* Mobile View - Stacked Layout (only on small screens) */}
              <div className="block sm:hidden space-y-1">
                {/* Line 1 */}
                <div className="text-sm flex items-center justify-center gap-2" style={{ color: "#FAEBD7", lineHeight: 1.6 }}>
                  <span>focused</span>
                  <span
                    className="overflow-hidden rounded-full w-7 h-3.5 bg-cover bg-no-repeat flex-shrink-0"
                    style={{
                      backgroundImage: `url(${Eagle})`,
                      backgroundPosition: 'center 28%',
                      border: "2px solid #F4A460"
                    }}
                  ></span>
                  <span>on crafting</span>
                </div>

                {/* Line 2 */}
                <div className="text-sm" style={{ color: "#FAEBD7", lineHeight: 1.6 }}>
                  refined frontend interfaces
                </div>

                {/* Line 3 */}
                <div className="text-sm flex items-center justify-center gap-2" style={{ color: "#FFE4C4", lineHeight: 1.6 }}>
                  <span>and engineering</span>
                  <div className="flex items-center -space-x-2">
                    <span
                      className="overflow-hidden rounded-full w-5 h-5 bg-cover bg-no-repeat flex-shrink-0"
                      style={{
                        backgroundImage: `url(${frontend})`,
                        border: "2px solid #DEB887"
                      }}
                    ></span>
                    <span
                      className="overflow-hidden rounded-full w-5 h-5 bg-cover bg-no-repeat flex-shrink-0"
                      style={{
                        backgroundImage: `url(${center})`,
                        border: "2px solid #F4A460"
                      }}
                    ></span>
                    <span
                      className="overflow-hidden rounded-full w-5 h-5 bg-cover bg-no-repeat flex-shrink-0"
                      style={{
                        backgroundImage: `url(${backend})`,
                        border: "2px solid #CD853F"
                      }}
                    ></span>
                  </div>
                </div>

                {/* Line 4 */}
                <div className="text-sm" style={{ color: "#FFE4C4", lineHeight: 1.6 }}>
                  secure high-throughput
                </div>

                {/* Line 5 */}
                <div className="text-sm flex items-center justify-center gap-2" style={{ color: "#FAEBD7", lineHeight: 1.6 }}>
                  <span
                    className="overflow-hidden rounded-full w-9 h-4 bg-cover bg-no-repeat flex-shrink-0"
                    style={{
                      backgroundImage: `url(${High})`,
                      backgroundPosition: 'center 28%',
                      border: "2px solid #DEB887"
                    }}
                  ></span>
                  <span>backend solutions</span>
                </div>
              </div>

              {/* Tablet/Desktop View - Original Layout (from sm and above) */}
              <div className="hidden sm:block">
                {/* Line 1: focused [eagle] on crafting refined */}
                <div 
                  className="sm:text-base md:text-xl lg:text-3xl flex flex-wrap items-center justify-center gap-2 mb-2"  
                  style={{ 
                    lineHeight: 1.6,
                    color: "#FAEBD7"
                  }}
                >
                  <span>focused</span>
                  <span
                    className="overflow-hidden rounded-full sm:w-10 sm:h-5 md:w-12 md:h-6 lg:w-16 lg:h-8 bg-cover bg-no-repeat flex-shrink-0"
                    style={{
                      backgroundImage: `url(${Eagle})`,
                      backgroundPosition: 'center 28%',
                      border: "2px solid #F4A460"
                    }}
                  ></span>
                  <span>on crafting refined</span>
                </div>

                {/* Line 2: frontend interfaces and engineering [3 circles] secure */}
                <div 
                  style={{ 
                    lineHeight: 1.6,
                    color: "#FFE4C4"
                  }} 
                  className="sm:text-base md:text-xl lg:text-3xl flex flex-wrap items-center justify-center gap-2 mb-2"
                >
                  <span>frontend interfaces and engineering</span>
                  <div className="flex items-center -space-x-2 sm:-space-x-3 mx-1">
                    <span
                      className="overflow-hidden rounded-full sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-cover bg-no-repeat flex-shrink-0"
                      style={{
                        backgroundImage: `url(${frontend})`,
                        border: "2px solid #DEB887"
                      }}
                    ></span>
                    <span
                      className="overflow-hidden rounded-full sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-cover bg-no-repeat flex-shrink-0"
                      style={{
                        backgroundImage: `url(${center})`,
                        border: "2px solid #F4A460"
                      }}
                    ></span>
                    <span
                      className="overflow-hidden rounded-full sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-cover bg-no-repeat flex-shrink-0"
                      style={{
                        backgroundImage: `url(${backend})`,
                        border: "2px solid #CD853F"
                      }}
                    ></span>
                  </div>
                  <span>secure</span>
                </div>

                {/* Line 3: high-throughput [image] backend solutions */}
                <div 
                  style={{ 
                    lineHeight: 1.6,
                    color: "#FAEBD7"
                  }} 
                  className="sm:text-base md:text-xl lg:text-3xl flex flex-wrap items-center justify-center gap-2"
                >
                  <span>high-throughput</span>
                  <span
                    className="overflow-hidden rounded-full sm:w-12 sm:h-6 md:w-14 md:h-7 lg:w-22 lg:h-9 bg-cover bg-no-repeat flex-shrink-0"
                    style={{
                      backgroundImage: `url(${High})`,
                      backgroundPosition: 'center 28%',
                      border: "2px solid #DEB887"
                    }}
                  ></span>
                  <span>backend solutions</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="px-6 sm:px-8 md:px-12 lg:px-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <p 
            className="text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-center max-w-4xl mx-auto"
            style={{ 
              color: "#F5DEB3",
              opacity: 0.95,
              lineHeight: 1.6
            }}
          >
            From responsive frontends to microservices backends, database optimization to cloud deployment, and real-time data pipelines — I deliver scalable solutions that drive results.
          </p>
        </div>

        <div className="w-full flex items-center justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <a
            href="https://drive.google.com/file/d/1XPouJdRLWViXqu_sJoMm9tEAbQP4iIjF/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 px-4 sm:py-2 sm:px-5 md:py-2.5 md:px-6 lg:py-3 lg:px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #D2691E 0%, #CD853F 50%, #F4A460 100%)",
            }}
          >
            <FiDownload className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold" style={{ color: "#FFF5EE" }} />
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wider" style={{ color: "#FFF5EE" }}>
              Download Resume
            </h1>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;