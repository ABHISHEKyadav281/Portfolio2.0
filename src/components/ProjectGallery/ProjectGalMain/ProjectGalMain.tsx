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
      className="flex items-center justify-center w-full relative flex-col py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-20 pt-20 sm:pt-24 md:pt-10 lg:pt-12"
    >
      {/* Header Section */}
      <div 
        className="text-start w-full mb-8 sm:mb-10 md:mb-12 lg:mb-14 flex items-start justify-start gap-2 sm:gap-3"
        style={{ 
          borderBottom: "1px solid rgba(205, 133, 63, 0.3)",
          paddingBottom: "0.75rem"
        }}
      >
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold" 
          style={{ color: "#FFE4C4" }}
        >
          Projects
        </h1>
        <div 
          className="flex items-center justify-center mt-2 sm:mt-3 md:mt-4 lg:mt-6 font-semibold mb-2 sm:mb-4 md:mb-6 lg:mb-8"
          style={{ color: "#DEB887" }}
        >
          <IoReturnUpForward className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl rotate-90"/>
        </div>
      </div>

      {/* Projects List */}
      <div className="w-full h-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-12">
        {ProjectGallery.map((project, index) => (
          <ProjectDemo
            key={index}
            index={index}
            title={project.title}
            category={project.category}
            setModal={setModal}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        modal={modal}
        projectGallery={ProjectGallery}
        parentRef={containerRef}
      />
    </main>
  );
};

export default ProjectGalMain;