import naverland from "../../assets/image/naverland.png";
import traders from "../../assets/image/naverland.png";
import learnTube from "../../assets/image/learnTube.png"
import tasteSwing from "../../assets/image/tasteSwing.png"
import soloblogger from "../../assets/image/Eagle.jpg"

export interface Project {
  title: string;
  src: string;
}
export interface ProjectGallery {
  title: string;
  src: string;
  color: string;
  url: string;
  category: string;
}

export const ProjectGallery: ProjectGallery[] = [
  {
    title: "Solo Blogger",
    src: soloblogger,
    color: "#EFE8D3",
    url: "http://soloblogger-deployment.s3-website.ap-south-1.amazonaws.com/",
    category: "End-to-End Development",
  },
  {
    title: "Traders",
    src: traders,
    color: "#fff3d1ff",
    url: "https://traders-phi.vercel.app/",
    category: "Interactive Design",
  },
  {
    title: "LearnTube",
    src: learnTube,
    color: "#000000",
    url: "https://github.com/ABHISHEKyadav281/LearnTube",
    category: "End-to-End Development",
  },
  {
    title: "NeverLand",
    src: naverland,
    color: "#8c8c8c",
    url: "https://neverland-eta.vercel.app/",
    category: "Interactive Design",
  },
  {
    title: "Taste Swings",
    src: tasteSwing,
    color: "#daf8bcff",
    url: "https://tasteswings.onrender.com/",
    category: "End-to-End Development",
  },
];
