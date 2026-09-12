'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  speedX: number;
  speedY: number;
  speedZ: number;
  color: string;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking for parallax depth effect
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initialize Particles (Increased density: divider set to 6000 for a rich particle field)
    const particleCount = Math.floor((width * height) / 16000);
    const particles: Particle[] = [];
    const colors = ['#05DF72', '#CCF380', '#10B981'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1000,
        size: Math.random() * 2.2 + 0.6,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2 - 0.1,
        speedZ: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const mouseFactorX = (mouseX - centerX) * 0.0003;
      const mouseFactorY = (mouseY - centerY) * 0.0003;

      particles.forEach((p) => {
        // Move particle along 3D Z axis (toward camera)
        p.z -= p.speedZ;
        p.x += p.speedX + mouseFactorX * p.z;
        p.y += p.speedY + mouseFactorY * p.z;

        // Reset if it passes the camera or goes out of bounds
        if (p.z <= 0) p.z = 1000;
        if (p.x < -centerX * 1.5) p.x = centerX * 1.5;
        if (p.x > centerX * 1.5) p.x = -centerX * 1.5;
        if (p.y < -centerY * 1.5) p.y = centerY * 1.5;
        if (p.y > centerY * 1.5) p.y = -centerY * 1.5;

        // 3D Perspective Projection Math
        const fov = 400; // Focal length
        const scale = fov / (fov + p.z);
        const projectedX = centerX + p.x * scale;
        const projectedY = centerY + p.y * scale;
        const projectedSize = p.size * scale;

        // Opacity fades out as particles move further away in Z space
        const opacity = Math.min(1, Math.max(0, (1 - p.z / 1000) * 0.85));

        if (
          projectedX >= 0 &&
          projectedX <= width &&
          projectedY >= 0 &&
          projectedY <= height
        ) {
          ctx.beginPath();
          ctx.arc(
            projectedX,
            projectedY,
            Math.max(0.1, projectedSize),
            0,
            Math.PI * 2,
          );
          ctx.fillStyle = p.color;
          ctx.globalAlpha = opacity;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.globalAlpha = 1.0;
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
