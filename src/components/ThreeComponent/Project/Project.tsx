import { projects } from "../../../data";
import { ProjectProps } from "../../../interface";


const  Project:React.FC<ProjectProps>=({setActiveProject})=>{

   
return (


        <div className="relative mix-blend-difference z-10 text-white h-screen w-full">
            <ul className="border-b" onMouseLeave={() => setActiveProject(null)}>
                {
                    projects.map((project, index) => (
                        <li key={project.title} onMouseOver={() => setActiveProject(index)} className="text-[4vw] p-5 border-t">
                            <p>{project.title}</p>
                        </li>
                     )   
                )}
            </ul>
        </div>
)

}
export default Project;