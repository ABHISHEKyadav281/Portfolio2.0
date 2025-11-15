import { useEffect, useRef, useState } from "react";

const DimensionHook = () => {
    const resizeCount = useRef(0); // keeps track of how many times resize is called

        console.log("Calling resize - count:", resizeCount.current);

    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const resize = () => {
        resizeCount.current += 1;
        
        const { innerWidth, innerHeight } = window;
        setDimension({ width: innerWidth, height: innerHeight });
    };

    useEffect(() => {


        resize(); // initial call
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return dimension;
};

export default DimensionHook;
