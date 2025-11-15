import { FiDownload } from "react-icons/fi";
import Amazon from "../../assets/image/Amazon.png"
import ochiDash from "../../assets/image/ochiDash.png"
import ochiEnd from "../../assets/image/ochiEnd.png"
import OY from "../../assets/image/OY.png"
import rejouise from "../../assets/image/rejouise.png"
import tooGoodCo from "../../assets/image/tooGoodCo.png"
import blog from "../../assets/image/blog.png"

const Home = () => {
  return (
    <>
      <div className="w-full relative overflow-hidden mb-10 lg:mb-18 md:mb-14 sm:mb-12">
        <div className="pt-10 lg:pt-25 md:pt-22 sm:20 w-full p-4 flex align-center justify-center">
          <div className=" flex items-center justify-center">
            <div className="text-3xl text-center font-Poppins tracking-wider" style={{ fontFamily: "Poppins", lineHeight: 1.2 }}>

              <h1 className="flex items-center justify-center text-3xl">
                <span className="text-[1rem] lg:text-4xl font-bold bg-clip-text text-transparent ml-2" style={{
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
                  color: "#FFE4C4" // Bisque - warm cream
                }}
              >
                Software
                <span
                  className="overflow-hidden rounded-full ml-2 bg-cover bg-no-repeat w-8 h-4 sm:w-12 sm:h-3 md:w-14 md:h-10 lg:w-22 lg:h-9"
                  style={{
                    backgroundImage: `url(${Amazon})`,
                    backgroundPosition: "center 28%",
                    border: "2px solid #F4A460" // Sandy brown border
                  }}
                ></span>
                <span className="ml-2"> Engineer</span>
              </h1>

              <h1 
                className="flex items-center justify-center text-[0.75rem] sm:text-sm md:text-xl lg:text-3xl"  
                style={{ 
                  lineHeight: 1.6,
                  color: "#FAEBD7" // Antique white
                }}
              >
                passionate
                <span
                  className="overflow-hidden rounded-full w-11 h-5 lg:w-22 lg:h-9 ml-2 mr-2 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${ochiDash})`,
                    backgroundPosition: 'center 28%',
                    border: "2px solid #DEB887" // Burlywood border
                  }}
                ></span>
                about crafting
                <span
                  className="overflow-hidden rounded-full w-8 h-4 lg:w-22 lg:h-9 md:w-14 md:h-8 ml-2 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${ochiEnd})`,
                    backgroundPosition: 'center 28%',
                    border: "2px solid #F4A460" // Sandy brown border
                  }}
                ></span>
                seamless
              </h1>

              <h1 
                style={{ 
                  lineHeight: 1.6,
                  color: "#FFE4C4" // Bisque
                }} 
                className="text-[0.75rem] sm:text-sm md:text-xl lg:text-3xl flex items-center justify-center gap-2"
              >
                frontend experiences

                <span
                  className="overflow-hidden rounded-full w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${rejouise})`,
                    border: "2px solid #DEB887"
                  }}
                ></span>

                <span
                  className="overflow-hidden rounded-full w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-cover bg-no-repeat ml-[-15px] lg:ml-[-27px]"
                  style={{
                    backgroundImage: `url(${OY})`,
                    border: "2px solid #F4A460"
                  }}
                ></span>

                <span
                  className="overflow-hidden rounded-full w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-cover bg-no-repeat ml-[-15px] lg:ml-[-27px]"
                  style={{
                    backgroundImage: `url(${blog})`,
                    border: "2px solid #CD853F"
                  }}
                ></span>

                <span
                  className="overflow-hidden rounded-full w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-cover bg-no-repeat ml-[-15px] lg:ml-[-27px]"
                  style={{
                    backgroundImage: `url(${tooGoodCo})`,
                    border: "2px solid #FFDAB9"
                  }}
                ></span>
                and delivering
              </h1>

              <h1 
                style={{ 
                  lineHeight: 1.6,
                  color: "#FAEBD7" // Antique white
                }} 
                className="text-[0.75rem] sm:text-sm md:text-xl lg:text-3xl flex items-center align-center justify-center"
              >
                robust backend solutions
              </h1>

            </div>
          </div>

        </div>
        <div>
          <h1 
            className="text-[0.5rem] sm:text-sm md:text-lg lg:text-xl tracking-normal text-center pt-0 lg:pt-4 md:pt-3 sm:pt-2"
            style={{ 
              color: "#F5DEB3", // Wheat - light warm tone
              opacity: 0.9 
            }}
          >
            I bring ideas to life on the web — crafting intuitive frontend designs and efficient backend <br /> logic that together make high-performing, responsive websites.
          </h1>
        </div>
        <div className="w-full flex items-center justify-center mt-4 lg:mt-10 md:mt-8 sm:mt-6">
          <a
            href="https://drive.google.com/file/d/1mAWw3h95uPuUNat56TKj2Lvz14O2-VLh/view?usp=sharing"
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