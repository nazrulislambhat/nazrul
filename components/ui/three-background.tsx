'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 40;
    camera.position.y = 10;
    camera.lookAt(0, 0, 0);

    // 2. Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Particle Grid Geometry
    const countX = 45;
    const countY = 45;
    const numParticles = countX * countY;
    const positions = new Float32Array(numParticles * 3);

    let i = 0;
    for (let ix = 0; ix < countX; ix++) {
      for (let iy = 0; iy < countY; iy++) {
        positions[i] = ix * 2.2 - (countX * 2.2) / 2; // x
        positions[i + 1] = 0; // y (animated in loop)
        positions[i + 2] = iy * 2.2 - (countY * 2.2) / 2; // z
        i += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // 4. Shader/Points Material
    const material = new THREE.PointsMaterial({
      color: 0xf5f8fd, // Indigo / primary accent
      size: 0.5,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 5. Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / container.clientWidth - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / container.clientHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 6. Animation Loop
    let animationFrameId: number;
    let step = 0;

    const animate = () => {
      step += 0.02;
      const pos = geometry.attributes.position.array as Float32Array;

      let idx = 0;
      for (let ix = 0; ix < countX; ix++) {
        for (let iy = 0; iy < countY; iy++) {
          // Dynamic dual sine-wave height calculation
          pos[idx + 1] =
            Math.sin(ix * 0.3 + step) * 2.5 +
            Math.sin(iy * 0.5 + step * 0.8) * 2.5;
          idx += 3;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // Subtle camera tilt toward cursor
      camera.position.x += (mouseX * 8 - camera.position.x) * 0.05;
      camera.position.y += (10 + mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
}
