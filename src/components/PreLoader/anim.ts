export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.2}
    },
}

// export const slideUp = {
//     initial: {
//         top: 0
//     },
//     exit: {
//         top: "-100vh",
//         transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
//     }
// }

// anim.ts

import { Variants, cubicBezier } from "framer-motion";

const defaultEase = cubicBezier(0.76, 0, 0.24, 1);

export const slideUp: Variants = {
  initial: { top: 0 },
  exit: {
    top: "-100vh",
    transition: {
      duration: 0.8,
      ease: defaultEase,        // <- typed easing function (same curve)
      delay: 0.2,
    },
  },
};
