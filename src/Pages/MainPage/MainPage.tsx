import ExperienceSection from "../../components/Experience/ExperienceSection";
import Peach3DBackground from "../../components/Peach3DBackground/Peach3DBackground";
import ProjectGalMain from "../../components/ProjectGallery/ProjectGalMain/ProjectGalMain";
import TechMarquee from "../../components/TechMarquee/TechMarquee";
import { useTheme } from "../../Wrappers/ThemeProvider/ThemeProviderWrapper";
import About from "../AboutPage/About";
import Home from "../HomePage/Home";
import LetsConnect from "../LetsConnect/LetsConnect";

const MainPage = () => {
  const theme = useTheme();
  return (
    <>
      <div
        className="min-h-screen w-screen relative"
        style={{ backgroundColor: theme.background.default }}
      >
        {/* SINGLE background component - covers entire page */}
        <div className="fixed w-full h-full top-0 left-0 z-0">
          <Peach3DBackground />
        </div>

        {/* All sections with relative positioning so they appear above the background */}
        <div className="relative z-10">
          <section id="home">
            <Home />
            <div>
              <TechMarquee />
            </div>
          </section>
          <section id="experience">
            <ExperienceSection />
          </section>
          <section id="projects">
            <ProjectGalMain />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="contact">
            <LetsConnect />
          </section>
        </div>
      </div>
    </>
  );
};
export default MainPage;