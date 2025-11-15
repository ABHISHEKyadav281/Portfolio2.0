'use client';
import { useEffect, useState } from 'react';
import { opacity, slideUp } from './anim';
import { motion, Variants, cubicBezier } from "framer-motion";


const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

export default function PreLoader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);

    return () => clearTimeout(timer);
  }, [index]);

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
      className="fixed inset-0 z-[99] flex h-screen w-screen items-center justify-center bg-[#141516]"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="absolute z-10 flex items-center text-[42px] text-white"
          >
            <span className="mr-2 block h-[10px] w-[10px] rounded-full bg-white"></span>
            {words[index]}
          </motion.p>

          <svg className="absolute top-0 h-[calc(100%+300px)] w-full">
            <motion.path variants={curve} initial="initial" exit="exit" className="fill-[#141516]" />
          </svg>
        </>
      )}
    </motion.div>
  );
}
