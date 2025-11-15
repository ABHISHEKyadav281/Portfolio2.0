import Amazon from "../../assets/image/Amazon.png"
import blog from "../../assets/image/blog.png"
import ochiMid from "../../assets/image/ochiMid.png"
import OY from "../../assets/image/OY.png"
import rejouise from "../../assets/image/rejouise.png"
import tooGoodCo from "../../assets/image/tooGoodCo.png"

export interface Project {
  title: string;
  src: string;
}
export interface ProjectGallery {
  title: string;
  src: string;
  color: string;
  url:string;
}


export const ProjectGallery:ProjectGallery[] = [
  {
    title: "Amazon Clone",
    src: Amazon,
    color: "#EFE8D3",
    url: "https://idyllic-genie-d7d07f.netlify.app/",

  },
  {
    title: "Blog Website",
    src: blog,
    color: "#000000",
    url:"https://blog-pushpak.onrender.com/",
  },
  {
    title: "Ochi Website",
    src: ochiMid,
    color: "#daf8bcff",
    url:"https://cheery-bubblegum-71ebc6.netlify.app/"
  },
  {
    title: "Rejouise",
    src: rejouise,
    color: "#fff3d1ff",
    url:"https://grand-griffin-96b389.netlify.app/"
  },
   {
    title: "Two Good Co",
    src: tooGoodCo,
    color: "#8c8c8c",
    url:"https://silly-croquembouche-729154.netlify.app/"

  },
   {
    title: "OY Movies",
    src: OY,
    color: "#000000ff",
    url:"https://grand-tartufo-6dd899.netlify.app/",

  },
  
  
]