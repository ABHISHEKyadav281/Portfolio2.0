import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const LocomotiveWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        smoothMobile: true,
        getDirection: true,
        tablet: { smooth: true },
        lerp: 5,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <main data-scroll-container ref={containerRef}>
      {children}
    </main>
  );
};

export default LocomotiveWrapper;
