import React from "react";
import { ProjectGalleryProps } from "../../../interface";

const ProjectDemo: React.FC<ProjectGalleryProps> = ({ index, title, setModal }) => {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="flex w-full text-white justify-between items-center px-4 lg:px-20 md:px-16 sm:px-12 py-8 lg:py-12 md:py-10 sm:py-8 border-t border-gray-700 cursor-pointer transition-all duration-200 last:border-b hover:opacity-50 group"
    >
      <h2 className="text-[1rem] lg:text-4xl md:text-3xl sm:text-2xl m-0 font-normal transition-all duration-400 group-hover:-translate-x-2.5">
        {title}
      </h2>
      <p className="text-[0.5rem] lg:text-sm md:text-sm sm:text-[0.7rem] font-light transition-all duration-400 group-hover:translate-x-2.5">
        Design & Development
      </p>
    </div>
  );
};

export default ProjectDemo;
