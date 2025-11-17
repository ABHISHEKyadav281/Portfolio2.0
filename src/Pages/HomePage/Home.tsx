import { FiDownload } from "react-icons/fi";
import Eagle from "../../assets/image/Eagle.jpg"
import High from "../../assets/image/highThroughput.jpg"
import center from "../../assets/image/center.jpg"
import frontend from "../../assets/image/frontend.jpg"
import backend from "../../assets/image/backend.jpg"

const Home = () => {
  return (
    <>
      <div className="w-full relative overflow-hidden mb-10 lg:mb-18 md:mb-14 sm:mb-12">
        <div className="pt-10 lg:pt-25 md:pt-22 sm:20 w-full p-4 flex align-center justify-center">
          <div className=" flex items-center justify-center">
            <div className="text-3xl text-center font-Poppins tracking-wider" style={{ fontFamily: "Poppins", lineHeight: 1.2 }}>

              <h1 className="flex items-center justify-center text-3xl mb-6">
                <span className="text-[1rem] lg:text-4xl font-bold bg-clip-text text-transparent" style={{
                  fontWeight: 550,
                  fontFamily: "cursive", 
                  backgroundImage: "linear-gradient(135deg, #FFE4B5 0%, #F4A460 50%, #DEB887 100%)", 
                  lineHeight: 1.7
                }}>Abhishek Yadav</span>
              </h1>

              <h1
                className="flex items-center justify-center text-[0.8rem] sm:text-sm md:text-xl lg:text-3xl"
                style={{ 
                  lineHeight: 1.6,
                  color: "#FFE4C4"
                }}
              >
                Full-Stack Engineer
              </h1>

              <h1 
                className="flex items-center justify-center text-[0.75rem] sm:text-sm md:text-xl lg:text-3xl"  
                style={{ 
                  lineHeight: 1.6,
                  color: "#FAEBD7"
                }}
              >
                focused
                <span
                  className="overflow-hidden rounded-full w-8 h-4 sm:w-10 sm:h-5 md:w-12 md:h-6 lg:w-16 lg:h-8 ml-2 mr-2 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${Eagle})`,
                    backgroundPosition: 'center 28%',
                    border: "2px solid #F4A460"
                  }}
                ></span>
                on crafting refined
              </h1>

              <h1 
                style={{ 
                  lineHeight: 1.6,
                  color: "#FFE4C4"
                }} 
                className="text-[0.75rem] sm:text-sm md:text-xl lg:text-3xl flex items-center justify-center gap-2"
              >
                frontend interfaces and engineering
                <span
                  className="overflow-hidden rounded-full w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-cover bg-no-repeat ml-2"
                  style={{
                    backgroundImage: `url(${frontend})`,
                    border: "2px solid #DEB887"
                  }}
                ></span>

                <span
                  className="overflow-hidden rounded-full w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-cover bg-no-repeat ml-[-15px] lg:ml-[-20px]"
                  style={{
                    backgroundImage: `url(${center})`,
                    border: "2px solid #F4A460"
                  }}
                ></span>

                <span
                  className="overflow-hidden rounded-full w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-cover bg-no-repeat ml-[-15px] lg:ml-[-20px] mr-2"
                  style={{
                    backgroundImage: `url(${backend})`,
                    border: "2px solid #CD853F"
                  }}
                ></span>
                secure
              </h1>

              <h1 
                style={{ 
                  lineHeight: 1.6,
                  color: "#FAEBD7"
                }} 
                className="text-[0.75rem] sm:text-sm md:text-xl lg:text-3xl flex items-center align-center justify-center gap-2"
              >
                high-throughput
                <span
                  className="overflow-hidden rounded-full w-8 h-4 lg:w-22 lg:h-9 md:w-14 md:h-8 ml-2 mr-2 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${High})`,
                    backgroundPosition: 'center 28%',
                    border: "2px solid #DEB887"
                  }}
                ></span>
                backend solutions
              </h1>

            </div>
          </div>

        </div>
        <div className="px-4">
          <h1 
            className="text-[0.5rem] sm:text-sm md:text-lg lg:text-xl tracking-normal text-center pt-0 lg:pt-4 md:pt-3 sm:pt-2 max-w-4xl mx-auto"
            style={{ 
              color: "#F5DEB3",
              opacity: 0.9 
            }}
          >
            From responsive frontends to microservices backends, database optimization to cloud <br /> deployment, and real-time data pipelines — I deliver scalable solutions that drive results.
          </h1>
        </div>
        <div className="w-full flex items-center justify-center mt-4 lg:mt-10 md:mt-8 sm:mt-6">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-1 px-2 lg:px-3 md:px-2 sm:px-2 rounded-full w-fit hover:scale-105 transition-all duration-300 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #D2691E 0%, #CD853F 50%, #F4A460 100%)",
            }}
          >
            <div className="flex items-center justify-center">
              <FiDownload className="text-[0.9rem] lg:text-xl md:text-lg sm:text-sm font-semibold" style={{ color: "#FFF5EE" }} />
            </div>
            <div>
              <h1 className="text-[0.65rem] lg:text-lg md:text-md sm:text-sm flex items-center justify-center font-semibold tracking-wider" style={{ color: "#FFF5EE" }}>
                Download Resume
              </h1>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;