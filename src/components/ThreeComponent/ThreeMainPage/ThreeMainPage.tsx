// import { useEffect, useState } from "react";
// import Project from "../Project/Project";
// import Scene from "../Scene/Scene";
// import Lenis from "lenis";

// const ThreeMainPage = () => {

//     useEffect(()=>{
//         const lenis = new Lenis();
//         function raf(time:any) {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         }
//         requestAnimationFrame(raf);
//     })
//     const [activeProject, setActiveProject] = useState(null);
//     return (
//         <main className="relative h-screen overflow-hidden ">
//             <Scene activeProject={activeProject}/>
//             <div className="h-[20vh]"></div>
//             <Project setActiveProject={setActiveProject}/>
//         </main>
//     )
// }

// export default ThreeMainPage;