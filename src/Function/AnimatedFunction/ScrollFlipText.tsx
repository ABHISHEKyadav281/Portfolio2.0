import React from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  flipDegree?: number;      
  flipDuration?: number;     
};

const ScrollFlipText: React.FC<Props> = ({
  children,
  className = "",
  flipDegree = 90,
  flipDuration = 0.8,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50% 0px -50% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ rotateX: flipDegree, opacity: 0 }}
      animate={inView ? { rotateX: 0, opacity: 1 } : {}}
      transition={{ duration: flipDuration, ease: "easeOut" }}
      className={`transform-origin-top ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFlipText;
