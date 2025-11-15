import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ModalProps } from "../../../interface";
import { ScaleAnimation } from "../../../Function/AnimatedFunction/AnimatedFunction";

const Modal: React.FC<ModalProps> = ({ modal, projectGallery, parentRef }) => {
  const { active, index } = modal;

  const container = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parentRef.current) return;

    const mouseContainerX = gsap.quickTo(container.current, "left", { duration: 0.8, ease: "power3" });
    const mouseContainerY = gsap.quickTo(container.current, "top", { duration: 0.8, ease: "power3" });

    const mouseCursorX = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    const mouseCursorY = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });

    const mouseCursorLabelX = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    const mouseCursorLabelY = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!parentRef.current) return;
      const bounds = parentRef.current.getBoundingClientRect();
      const relativeX = e.clientX - bounds.left;
      const relativeY = e.clientY - bounds.top;

      mouseContainerX(relativeX);
      mouseContainerY(relativeY);
      mouseCursorX(relativeX);
      mouseCursorY(relativeY);
      mouseCursorLabelX(relativeX);
      mouseCursorLabelY(relativeY);
    };

    const parentElement = parentRef.current;
    parentElement.addEventListener("mousemove", handleMouseMove);
    return () => parentElement.removeEventListener("mousemove", handleMouseMove);
  }, [parentRef]);

  const handleViewClick = () => {
    const currentProject = projectGallery[index];
    if (currentProject?.url) {
      window.open(currentProject.url, "_blank");
    }
  };

  return (
    <>
      <motion.div
        ref={container}
        initial="initial"
        animate={active ? "open" : "closed"}
        variants={ScaleAnimation}
        className="h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center"
      >
        <div
          className="h-full w-full absolute transition-[top] duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ top: index * -100 + "%" }}
        >
          {projectGallery.map((project, i) => (
            <div
              key={`modal_${i}`}
              className="h-full w-full flex items-center justify-center p-2"
              style={{ backgroundColor: project.color }}
            >
              <img src={project.src} alt={project.title} style={{ width: 350, height: 200 }} />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={ScaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        ref={cursor}
        className="w-20 h-20 rounded-full bg-[#455CE9] text-white absolute z-20 flex items-center justify-center text-sm font-light pointer-events-none"
      />

      <motion.div
        variants={ScaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        ref={cursorLabel}
        onClick={handleViewClick}
        className="w-20 h-20 rounded-full absolute z-30 flex items-center justify-center text-sm font-light cursor-pointer"
      >
        View
      </motion.div>
      
    </>
  );
};

export default Modal;
