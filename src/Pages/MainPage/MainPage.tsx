import ExperienceSection from "../../components/Experience/ExperienceSection";
import ProjectGalMain from "../../components/ProjectGallery/ProjectGalMain/ProjectGalMain";
import TechMarquee from "../../components/TechMarquee/TechMarquee";
// import ThreeMainPage from "../../components/ThreeComponent/ThreeMainPage/ThreeMainPage";
import { useTheme } from "../../Wrappers/ThemeProvider/ThemeProviderWrapper";
import About from "../AboutPage/About";
import Home from "../HomePage/Home";
import LetsConnect from "../LetsConnect/LetsConnect";
// import MaskAnimation from "../MaskAnimation/MaskAnimation";

const MainPage = () => {
    const theme = useTheme();
    return (
        <>
        
        <div className="min-h-screen w-screen relative " style={{ backgroundColor: theme.background.default }}>
            <div className="fixed w-full h-[137vh] lg:h-full md:h-full sm:h-full">
                <iframe src='https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV/' frameBorder='0' width='100%' height='100%'></iframe>
            </div>
            <section id="home">
                <Home />
            <div><TechMarquee /></div>
            </section>
            <section id="experience"><ExperienceSection/></section>
            <section id="projects" ><ProjectGalMain /></section>
            <section id="about">

                <About />
            </section>
            <section id="contact" >
                <LetsConnect />
            </section>

        </div>
        </>

    );
}
export default MainPage;