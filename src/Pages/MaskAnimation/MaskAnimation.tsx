import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import img from "../../assets/image/model.jpg"

export default function MotionAnimation() {
  const sectionRef = useRef(null);

  // Scroll animation tied to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // start when section enters viewport
  });

  // Zoom out and fade the text
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative h-[200vh] bg-black">
      {/* Sticky section with image in background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden" ref={sectionRef}>
        {/* Background Image */}
        <img
          src={img}
          alt="background"
          className="absolute inset-0 h-full w-full object-cover z-0"
        />

        {/* Text Mask */}
        <div className="flex h-full w-full items-center justify-center z-10 relative">
          <motion.h1
            style={{ scale, opacity }}
            className="text-white text-[8vw] font-extrabold text-center mix-blend-difference"
          >
            SCROLL REVEAL
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
