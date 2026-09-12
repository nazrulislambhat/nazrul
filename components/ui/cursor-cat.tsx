'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CursorCat() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isFacingLeft, setIsFacingLeft] = useState(false);
  const [legAngle, setLegAngle] = useState(0);

  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const distanceTraveled = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateLoop = () => {
      const dx = targetRef.current.x - currentRef.current.x;
      const dy = targetRef.current.y - currentRef.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 25) {
        // Smooth lerp chasing movement
        currentRef.current.x += dx * 0.06;
        currentRef.current.y += dy * 0.06;
        setIsFacingLeft(dx < 0);

        // Drive the leg trot cycle proportionally to distance
        distanceTraveled.current += dist * 0.15;
        setLegAngle(Math.sin(distanceTraveled.current) * 26);
      } else {
        // Return to neutral stand when resting
        setLegAngle(0);
      }

      setPos({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(updateLoop);
    };

    rafRef.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (pos.x < 0) return null;

  return (
    <div
      style={{
        transform: `translate3d(${pos.x - 24}px, ${pos.y - 24}px, 0) scaleX(${isFacingLeft ? -1 : 1})`,
      }}
      className="pointer-events-none fixed top-0 left-0 z-50 will-change-transform select-none transition-opacity duration-300"
      aria-hidden="true"
    >
      <svg
        width="54"
        height="40"
        viewBox="0 0 54 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        {/* Tail */}
        <path
          d="M 10 20 C 4 16, 2 10, 6 6 C 8 4, 10 8, 8 12"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="text-black dark:text-white"
        />

        {/* Back Leg Pair (Walk Phase 1) */}
        <g
          style={{
            transformOrigin: '16px 22px',
            transform: `rotate(${-legAngle}deg)`,
          }}
        >
          <rect
            x="14"
            y="22"
            width="4"
            height="12"
            rx="2"
            className="fill-neutral-700 dark:fill-neutral-300"
          />
        </g>
        <g
          style={{
            transformOrigin: '19px 22px',
            transform: `rotate(${legAngle}deg)`,
          }}
        >
          <rect
            x="17"
            y="22"
            width="4"
            height="12"
            rx="2"
            className="fill-black dark:fill-white"
          />
        </g>

        {/* Body */}
        <ellipse
          cx="26"
          cy="20"
          rx="15"
          ry="9"
          className="fill-black dark:fill-white"
        />

        {/* Front Leg Pair (Walk Phase 2) */}
        <g
          style={{
            transformOrigin: '32px 22px',
            transform: `rotate(${legAngle}deg)`,
          }}
        >
          <rect
            x="30"
            y="22"
            width="4"
            height="12"
            rx="2"
            className="fill-neutral-700 dark:fill-neutral-300"
          />
        </g>
        <g
          style={{
            transformOrigin: '36px 22px',
            transform: `rotate(${-legAngle}deg)`,
          }}
        >
          <rect
            x="34"
            y="22"
            width="4"
            height="12"
            rx="2"
            className="fill-black dark:fill-white"
          />
        </g>

        {/* Head */}
        <circle cx="38" cy="14" r="8" className="fill-black dark:fill-white" />

        {/* Ears */}
        <polygon
          points="32,9 35,2 38,7"
          className="fill-black dark:fill-white"
        />
        <polygon
          points="37,7 41,3 43,9"
          className="fill-black dark:fill-white"
        />
        <polygon points="34,8 35,4 37,7" className="fill-primary" />
        <polygon points="38,7 40,5 41,8" className="fill-primary" />

        {/* Eyes */}
        <ellipse
          cx="37"
          cy="13"
          rx="1.5"
          ry="2"
          className="fill-secondary dark:fill-black"
        />
        <ellipse
          cx="42"
          cy="13"
          rx="1.5"
          ry="2"
          className="fill-secondary dark:fill-black"
        />
      </svg>
    </div>
  );
}
