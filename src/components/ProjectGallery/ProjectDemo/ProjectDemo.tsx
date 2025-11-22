import React from "react";
import { ProjectGalleryProps } from "../../../interface";

const ProjectDemo: React.FC<ProjectGalleryProps> = ({ index, title, category, setModal }) => {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="flex w-full justify-between items-center px-2 sm:px-4 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12 cursor-pointer transition-all duration-200 last:border-b group"
      style={{
        borderTop: "1px solid rgba(205, 133, 63, 0.3)",
        color: "#FFE4C4"
      }}
    >
      <h2 
        className="text-base sm:text-lg md:text-2xl lg:text-4xl m-0 font-normal transition-all duration-400 group-hover:-translate-x-2.5"
        style={{ color: "#FFE4C4" }}
      >
        {title}
      </h2>
      <p 
        className="text-xs sm:text-sm md:text-base lg:text-lg font-light transition-all duration-400 group-hover:translate-x-2.5 whitespace-nowrap"
        style={{ color: "#e4dcd2ff" }}
      >
        {category}
      </p>
    </div>  
  );
};

export default ProjectDemo;