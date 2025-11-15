// import { useEffect, useRef } from "react";
// import { useFrame, useThree } from "@react-three/fiber";
// import { animate, useMotionValue, useTransform } from "framer-motion";
// import { motion } from "framer-motion-3d";
// import * as THREE from "three";
// import { useAspect, useTexture } from "@react-three/drei";

// import MouseHook from "../../../customHooks/MouseHook/MouseHook";
// import DimensionHook from "../../../customHooks/DimensionHook/DimensionHook";
// import { fragmentShader, vertexShader } from "../../../Shader";
// import { ProjectProps } from "../../../interface";
// import { projects } from "../../../data";

// const Model: React.FC<ProjectProps> = ({ activeProject }) => {
//     const mesh = useRef<THREE.Mesh>(null);

//     const textures = projects.map((project) => useTexture(project.src));
// console.log(first)

//     const scale = useAspect(
//         textures[0].image.width,
//         textures[0].image.height,
//         0.2
//     )
//     const dimension = DimensionHook();
//     const mouse = MouseHook();
//     const { viewport } = useThree();


//     const uniforms = useRef({
//         uTexture: { value: textures[0] },
//         uDelta: { value: { x: 0, y: 0 } },
//         uOpacity: { value: 0.5 },
//     });

//     const opacity = useMotionValue(0);

//     const smoothMouse = {
//         x: useMotionValue(0),
//         y: useMotionValue(0),
//     };

//     const lerp = (start: number, end: number, alpha: number) => {
//         return start * (1 - alpha) + end * alpha;
//     };
//     useEffect(() => {
//     const material = mesh.current?.material;

//     if (material && !Array.isArray(material) && material instanceof THREE.ShaderMaterial) {

//         animate(opacity, 1, {
//             duration: 0.2,
//             onUpdate: progress =>
//                 material.uniforms.uOpacity.value = progress
            
//         });
//         material.uniforms.uTexture.value = textures[activeProject];
//     } else if (material && !Array.isArray(material)) {
//         if ("opacity" in material) {
//             animate(opacity, 0, {
//                 duration: 0.2,
//                 onUpdate: () => {
//                     (material as any).opacity = opacity.get();
//                 },
//             })
//         }
//     }
// }, [activeProject, textures]);



//     useFrame(() => {
//         const { x, y } = mouse;
//         const prevX = smoothMouse.x.get();
//         const prevY = smoothMouse.y.get();


//         smoothMouse.x.set(lerp(prevX, x.get(), 0.1));
//         smoothMouse.y.set(lerp(prevY, y.get(), 0.1));

//         const deltaX = smoothMouse.x.get() - prevX;
//         const deltaY = -1 * (smoothMouse.y.get() - prevY);

//         const material = mesh.current?.material as THREE.ShaderMaterial;

//         if (material?.uniforms) {
//             material.uniforms.uDelta.value = { x: deltaX, y: deltaY };
//         }
//     });
    

//     const x = useTransform(
//         smoothMouse.x,
//         [0, dimension.width],
//         [-viewport.width / 2, viewport.width / 2]
//     );

//     const y = useTransform(
//         smoothMouse.y,
//         [0, dimension.height],
//         [viewport.height / 2, -viewport.height / 2]
//     );

//     return (
//             <motion.mesh scale={scale} ref={mesh as any} position-x={x} position-y={y} position-z={0.1}>

//             <planeGeometry args={[1, 1, 15, 15]} />
//             <shaderMaterial
//                 fragmentShader={fragmentShader}
//                 vertexShader={vertexShader}
//                 uniforms={uniforms.current}
//                 transparent={true}

//             // wireframe={true} // Uncomment to debug
//             />
//         </motion.mesh>
//     );
// };

// export default Model;
