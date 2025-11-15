
export const revealVariants = () => ({
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.02,
      duration: 0.4,
      ease: 'easeOut',

    },
  }),
});


export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
export const slideInVariants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// AnimatedFunction.ts
import { Variants, cubicBezier } from "framer-motion";

export const ScaleAnimation: Variants = {
  initial: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: cubicBezier(0.76, 0, 0.24, 1), // ✅ type-safe equivalent
    },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.4,
      ease: cubicBezier(0.32, 0, 0.67, 1), // ✅ type-safe equivalent
    },
  },
};
