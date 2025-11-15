import { useRef, useState } from "react";
import { ProjectGallery } from "../../../interface/Data/Data";
import ProjectDemo from "../ProjectDemo/ProjectDemo";
import Modal from "../Modal/Modal";
import { IoReturnUpForward } from "react-icons/io5";

const ProjectGalMain = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className="flex items-center justify-center w-full relative flex-col py-0 lg:py-10 md:py-8 sm:py-6 px-4 lg:px-20 md:px-16 sm:px-12"
    >
        <div className="text-start w-full border-b-1 border-zinc-800  text-zinc-200 text-3xl lg:text-6xl md:text-5xl sm:text-3xl mb-8 lg:mb-8 md:mb-8 sm:mb-8 flex items-start justify-start gap-2 ">
            <h1 className="font-semibold">Projects</h1>
            <div className="flex items-center justify-center  mt-4 lg:mt-8 md:mt-6 sm:mt-4 text-zinc-400 font-semibold mb-3 lg:mb-10 md:mb-8 sm:mb-6"><IoReturnUpForward className=" text-3xl lg:text-6xl md:text-5xl sm:text-3xl rotate-90"/></div>

        </div>
      <div className="w-full h-full flex flex-col items-center justify-center px-10 lg:px-20 md:px-16 sm:px-12">
        {ProjectGallery.map((project, index) => (
          <ProjectDemo
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal
        modal={modal}
        projectGallery={ProjectGallery}
        parentRef={containerRef}
      />
    </main>
  );
};

export default ProjectGalMain;
