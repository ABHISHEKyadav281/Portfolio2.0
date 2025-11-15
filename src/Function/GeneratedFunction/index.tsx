import { motion, Variants, animationControls } from 'framer-motion';
import type { CSSProperties } from 'react';

type AnimationControlsType = ReturnType<typeof animationControls>;

interface RenderTextProps {
  text: string;
  controls: AnimationControlsType; // <- derived type
  variants: Variants;
  style?: CSSProperties;
}

export const renderText = ({ text, controls, variants, style }: RenderTextProps) =>
  [...text].map((char, index) => (
    <motion.span
      key={index}
      custom={index}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ display: 'inline-block', ...style }}
    >
      {char}
    </motion.span>
  ));
