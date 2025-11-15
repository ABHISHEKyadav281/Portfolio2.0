// MouseHook.ts
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

const MouseHook = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { size } = useThree();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = document
        .querySelector("canvas")
        ?.getBoundingClientRect();

      if (rect) {
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        x.set(mouseX);
        y.set(mouseY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size.width, size.height]);

  return { x, y };
};

export default MouseHook;
