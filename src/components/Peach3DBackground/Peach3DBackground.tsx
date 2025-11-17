import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TechStackBackground = () => {
  const containerRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    if (!containerRef.current) return;

    let scene, camera, renderer, frameId;
    const objects = [];
    let dataFlow, particlesGeo, ambientDots, ambientDotsGeo;

    const init = () => {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1a0f0a); 
      scene.fog = new THREE.FogExp2(0x1a0f0a, 0.012);

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera = new THREE.PerspectiveCamera(
        75,
        width / height,
        0.1,
        1000
      );
      camera.position.z = 25;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      if (containerRef.current && containerRef.current.children.length === 0) {
        containerRef.current.appendChild(renderer.domElement);
      }

      const colors = {
        frontend: 0xFFB347,
        backend: 0xC68E6E,
        cloud: 0xD4AF37,
        data: 0xFFDAB9,
        accent: 0xDEB887
      };

      ambientDotsGeo = new THREE.BufferGeometry();
      const dotCount = 310;
      const dotPositions = new Float32Array(dotCount * 3);
      const dotVelocities = [];

      for (let i = 0; i < dotCount; i++) {
        dotPositions[i * 3] = (Math.random() - 0.5) * 80;
        dotPositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
        dotPositions[i * 3 + 2] = -30 + Math.random() * 20;
        
        dotVelocities.push({
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.01
        });
      }

      ambientDotsGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));

      const dotMat = new THREE.PointsMaterial({
        color: 0xFFD700,
        size: 0.15, 
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true 
      });

      ambientDots = new THREE.Points(ambientDotsGeo, dotMat);
      ambientDots.userData.velocities = dotVelocities;
      scene.add(ambientDots);

      const frontendTorus = new THREE.TorusGeometry(4, 1.5, 16, 32);
      const frontendMat = new THREE.MeshStandardMaterial({
        color: colors.backend,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
        emissive: colors.backend,
        emissiveIntensity: 0.5
      });
      const frontend = new THREE.Mesh(frontendTorus, frontendMat);
      frontend.position.set(-27, 0, -12);
      scene.add(frontend);
      objects.push({ mesh: frontend, rotX: 0.001, rotY: 0.001, rotZ: 0, type: 'frontend' });

      for (let i = 0; i < 8; i++) {
        const smallCube = new THREE.BoxGeometry(1, 1, 1);
        const cubeMat = new THREE.MeshStandardMaterial({
          color: colors.cloud,
          transparent: true,
          opacity: 0.5,
          emissive: colors.cloud,
          emissiveIntensity: 0.35
        });
        const cube = new THREE.Mesh(smallCube, cubeMat);
        const angle = (i / 8) * Math.PI * 2;
        cube.position.set(
          -27 + Math.cos(angle) * 9,
          0 + Math.sin(angle) * 7,
          -12
        );
        scene.add(cube);
        objects.push({ mesh: cube, rotX: 0.002, rotY: 0.002, rotZ: 0.001, orbit: angle, type: 'ui' });
      }

      const backendTorusKnot = new THREE.TorusKnotGeometry(3, 1, 100, 16);
      const backendMat = new THREE.MeshStandardMaterial({
        color: colors.backend,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
        emissive: colors.backend,
        emissiveIntensity: 0.5
      });
      const backend = new THREE.Mesh(backendTorusKnot, backendMat);
      backend.position.set(27, -4.5, -15);
      scene.add(backend);
      objects.push({ mesh: backend, rotX: 0.001, rotY: 0.002, rotZ: 0.001, type: 'backend' });

      for (let i = 0; i < 8; i++) {
        const dbCylinder = new THREE.CylinderGeometry(0.6, 0.6, 0.4, 16);
        const dbMat = new THREE.MeshStandardMaterial({
          color: colors.cloud,
          transparent: true,
          opacity: 0.5,
          emissive: colors.cloud,
          emissiveIntensity: 0.4
        });
        const db = new THREE.Mesh(dbCylinder, dbMat);
        const angle = (i / 8) * Math.PI * 2;
        db.position.set(
          27 + Math.cos(angle) * 7,
          -4.5 + Math.sin(angle) * 6,
          -15
        );
        scene.add(db);
        objects.push({ mesh: db, rotX: 0, rotY: 0.003, rotZ: 0, orbit: angle, type: 'database' });
      }

      const cloudSphere = new THREE.SphereGeometry(5, 32, 32);
      const cloudMat = new THREE.MeshStandardMaterial({
        color: colors.backend,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
        emissive: colors.backend,
        emissiveIntensity: 0.5
      });
      const cloud = new THREE.Mesh(cloudSphere, cloudMat);
      cloud.position.set(0, 18.5, -20);
      scene.add(cloud);
      objects.push({ mesh: cloud, rotX: 0.0005, rotY: 0.001, rotZ: 0.0005, type: 'cloud' });

      for (let i = 0; i < 6; i++) {
        const nodeGeo = new THREE.SphereGeometry(1.2, 16, 16);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: colors.cloud,
          transparent: true,
          opacity: 0.5,
          emissive: colors.cloud,
          emissiveIntensity: 0.45
        });
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        const angle = (i / 6) * Math.PI * 2;
        node.position.set(
          Math.cos(angle) * 9,
          18.5 + Math.sin(angle) * 4,
          -20
        );
        scene.add(node);
        objects.push({ mesh: node, rotX: 0.001, rotY: 0.001, rotZ: 0.001, orbit: angle, type: 'node' });
      }

      particlesGeo = new THREE.BufferGeometry();
      const particleCount = 300;
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const t = i / particleCount;
        if (i < 100) {
          positions[i * 3] = -27 + t * 54;
          positions[i * 3 + 1] = 0 - t * 4.5;
          positions[i * 3 + 2] = -12 - t * 3;
        } else if (i < 200) {
          const t2 = (i - 100) / 100;
          positions[i * 3] = 27 - t2 * 27;
          positions[i * 3 + 1] = -4.5 + t2 * 27;
          positions[i * 3 + 2] = -15 - t2 * 5;
        } else {
          const t3 = (i - 200) / 100;
          positions[i * 3] = 0 - t3 * 27;
          positions[i * 3 + 1] = 18.5 - t3 * 18.5;
          positions[i * 3 + 2] = -20 + t3 * 8;
        }
      }

      particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const particleMat = new THREE.PointsMaterial({
        color: colors.data,
        size: 0.15,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });

      dataFlow = new THREE.Points(particlesGeo, particleMat);
      scene.add(dataFlow);

      const gridHelper = new THREE.GridHelper(60, 30, colors.accent, colors.accent);
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.05;
      gridHelper.position.y = -10;
      scene.add(gridHelper);

      const ambientLight = new THREE.AmbientLight(0xFFE4C4, 0.4);
      scene.add(ambientLight);

      const frontLight = new THREE.PointLight(colors.frontend, 2, 60);
      frontLight.position.set(-27, 0, -8);
      scene.add(frontLight);

      const backLight = new THREE.PointLight(colors.backend, 2, 60);
      backLight.position.set(27, -4.5, -10);
      scene.add(backLight);

      const cloudLight = new THREE.PointLight(colors.cloud, 2.5, 70);
      cloudLight.position.set(0, 18.5, -15);
      scene.add(cloudLight);

      console.log('✅ Three.js scene initialized');
    };

    let time = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.008;

      objects.forEach((obj) => {
        obj.mesh.rotation.x += obj.rotX;
        obj.mesh.rotation.y += obj.rotY;
        obj.mesh.rotation.z += obj.rotZ;

                  if (obj.orbit !== undefined) {
          const newAngle = obj.orbit + time * 0.3;
          if (obj.type === 'ui') {
            obj.mesh.position.x = -27 + Math.cos(newAngle) * 9;
            obj.mesh.position.y = 0 + Math.sin(newAngle) * 7;
          } else if (obj.type === 'node') {
            obj.mesh.position.x = Math.cos(newAngle) * 9;
            obj.mesh.position.y = 18.5 + Math.sin(newAngle) * 4;
          } else if (obj.type === 'database') {
            obj.mesh.position.x = 27 + Math.cos(newAngle) * 7;
            obj.mesh.position.y = -4.5 + Math.sin(newAngle) * 6;
          }
        }

        if (obj.type === 'frontend' || obj.type === 'backend' || obj.type === 'cloud') {
          const scale = 1 + Math.sin(time + objects.indexOf(obj)) * 0.05;
          obj.mesh.scale.set(scale, scale, scale);
        }
      });

      if (ambientDots && ambientDotsGeo) {
        const pos = ambientDotsGeo.attributes.position.array;
        const velocities = ambientDots.userData.velocities;
        
        for (let i = 0; i < 150; i++) {
          pos[i * 3] += velocities[i].x;
          pos[i * 3 + 1] += velocities[i].y;
          pos[i * 3 + 2] += velocities[i].z;
          
          if (pos[i * 3] > 40) pos[i * 3] = -40;
          if (pos[i * 3] < -40) pos[i * 3] = 40;
          if (pos[i * 3 + 1] > 30) pos[i * 3 + 1] = -30;
          if (pos[i * 3 + 1] < -30) pos[i * 3 + 1] = 30;
        }
        ambientDotsGeo.attributes.position.needsUpdate = true;
      }

      if (dataFlow && particlesGeo) {
        const pos = particlesGeo.attributes.position.array;
        for (let i = 0; i < 300; i++) {
          pos[i * 3] += (Math.random() - 0.5) * 0.04;
          pos[i * 3 + 1] += (Math.random() - 0.5) * 0.04;
          
          if (Math.abs(pos[i * 3]) > 35 || Math.abs(pos[i * 3 + 1]) > 25) {
            if (i < 100) {
              pos[i * 3] = -27;
              pos[i * 3 + 1] = 0;
              pos[i * 3 + 2] = -12;
            } else if (i < 200) {
              pos[i * 3] = 27;
              pos[i * 3 + 1] = -4.5;
              pos[i * 3 + 2] = -15;
            } else {
              pos[i * 3] = 0;
              pos[i * 3 + 1] = 18.5;
              pos[i * 3 + 2] = -20;
            }
          }
        }
        particlesGeo.attributes.position.needsUpdate = true;
      }

      camera.position.x = Math.sin(time * 0.08) * 4;
      camera.position.y = Math.cos(time * 0.06) * 3;
      camera.lookAt(0, 2, -15);

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!camera || !renderer || !containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    init();
    animate();
    window.addEventListener('resize', handleResize);

    console.log('🚀 Animation started');

    return () => {
      console.log('🧹 Cleaning up Three.js');
      mountedRef.current = false;
      window.removeEventListener('resize', handleResize);
      
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      
      if (renderer && containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      objects.forEach(obj => {
        if (obj.mesh.geometry) obj.mesh.geometry.dispose();
        if (obj.mesh.material) obj.mesh.material.dispose();
      });
      
      if (particlesGeo) particlesGeo.dispose();
      if (dataFlow && dataFlow.material) dataFlow.material.dispose();
      
      if (ambientDotsGeo) ambientDotsGeo.dispose();
      if (ambientDots && ambientDots.material) ambientDots.material.dispose();
      
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default TechStackBackground;