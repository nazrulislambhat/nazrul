'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function EyeTrackerLogo({ size = 44 }: { size?: number }) {
  const leftEyeRef = useRef<SVGCircleElement>(null);
  const rightEyeRef = useRef<SVGCircleElement>(null);
  const [coords, setCoords] = useState({
    leftX: 0,
    leftY: 0,
    rightX: 0,
    rightY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const calculatePupilOffset = (eyeEl: SVGCircleElement | null) => {
        if (!eyeEl) return { x: 0, y: 0 };
        const rect = eyeEl.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        const angle = Math.atan2(dy, dx);

        // Maximum distance (in SVG units) the pupil can travel inside the eye socket
        const maxRadius = 3.5;
        const distance = Math.min(Math.hypot(dx, dy) / 25, maxRadius);

        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        };
      };

      const leftOffset = calculatePupilOffset(leftEyeRef.current);
      const rightOffset = calculatePupilOffset(rightEyeRef.current);

      setCoords({
        leftX: leftOffset.x,
        leftY: leftOffset.y,
        rightX: rightOffset.x,
        rightY: rightOffset.y,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center rounded-full border-2 border-borderGlass bg-surface shadow-2xs transition-transform duration-200 hover:scale-105"
    >
      <svg
        viewBox="0 0 48 48"
        className="w-full h-full p-1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circular Tech Ring */}
        <circle
          cx="24"
          cy="24"
          r="21"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-textMuted/40"
          strokeDasharray="2 2"
        />

        {/* Left Eye Socket */}
        <circle
          ref={leftEyeRef}
          cx="17"
          cy="24"
          r="7"
          className="fill-white dark:fill-neutral-900 stroke-textMain"
          strokeWidth="1.75"
        />
        {/* Left Pupil */}
        <circle
          cx={17 + coords.leftX}
          cy={24 + coords.leftY}
          r="3"
          className="fill-primary"
        />
        {/* Left Pupil Glint */}
        <circle
          cx={16 + coords.leftX}
          cy={23 + coords.leftY}
          r="1"
          className="fill-white"
        />

        {/* Right Eye Socket */}
        <circle
          ref={rightEyeRef}
          cx="31"
          cy="24"
          r="7"
          className="fill-white dark:fill-neutral-900 stroke-textMain"
          strokeWidth="1.75"
        />
        {/* Right Pupil */}
        <circle
          cx={31 + coords.rightX}
          cy={24 + coords.rightY}
          r="3"
          className="fill-primary"
        />
        {/* Right Pupil Glint */}
        <circle
          cx={30 + coords.rightX}
          cy={23 + coords.rightY}
          r="1"
          className="fill-white"
        />
      </svg>
    </div>
  );
}
