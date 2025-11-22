import { useEffect, useState } from 'react';
import { motion, Variants, cubicBezier } from "framer-motion";

const slideUp: Variants = {
  initial: { top: 0 },
  exit: { 
    top: "-100vh", 
    transition: { duration: 0.8, ease: cubicBezier(0.76, 0, 0.24, 1), delay: 0.2 } 
  }
};

export default function PreLoader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const defaultEase = cubicBezier(0.76, 0, 0.24, 1);

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: defaultEase },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: defaultEase, delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[99] flex h-screen w-screen items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0806 0%, #1a1410 50%, #0a0806 100%)"
      }}
    >
      {dimension.width > 0 && (
        <>
          {/* Subtle Background Glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #F4A460 0%, transparent 70%)" }}
          />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center gap-12">
            
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                style={{
                  fontFamily: "cursive",
                  backgroundImage: "linear-gradient(135deg, #FFE4B5 0%, #F4A460 50%, #DEB887 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Abhishek Yadav
              </h1>
            </motion.div>

            {/* Simple Spinner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-16 h-16 md:w-20 md:h-20"
            >
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: "3px solid transparent",
                  borderTopColor: "#F4A460",
                  borderRightColor: "#DEB887",
                }}
              />
              
              {/* Inner Dot */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 m-auto w-3 h-3 rounded-full"
                style={{ 
                  background: "#F4A460",
                  boxShadow: "0 0 15px rgba(244, 164, 96, 0.6)"
                }}
              />
            </motion.div>

            {/* Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <motion.p 
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: "#F4A460" }}
                key={progress}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {progress}%
              </motion.p>
              <p 
                className="text-sm md:text-base"
                style={{ color: "#DEB887", opacity: 0.7 }}
              >
                Loading your experience...
              </p>
            </motion.div>
          </div>

          {/* SVG Curve */}
          <svg className="absolute top-0 h-full w-full pointer-events-none">
            <motion.path 
              variants={curve} 
              initial="initial" 
              exit="exit" 
              style={{ fill: "#0a0806" }}
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}