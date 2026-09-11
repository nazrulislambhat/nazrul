'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CursorCat() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isFacingLeft, setIsFacingLeft] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
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

      // Cat stays offset so it doesn't block clicks on links
      if (dist > 35) {
        setIsMoving(true);
        // Lerp movement
        currentRef.current.x += dx * 0.055;
        currentRef.current.y += dy * 0.055;
        setIsFacingLeft(dx < 0);
      } else {
        setIsMoving(false);
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
        transform: `translate3d(${pos.x - 20}px, ${pos.y - 20}px, 0) scaleX(${isFacingLeft ? -1 : 1})`,
      }}
      className="pointer-events-none fixed top-0 left-0 z-50 will-change-transform select-none transition-opacity duration-300"
      aria-hidden="true"
    >
      <svg
        width="42"
        height="36"
        viewBox="0 0 42 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        {/* Cat Body */}
        <ellipse
          cx="20"
          cy="24"
          rx="14"
          ry="10"
          className="fill-black dark:fill-white"
        />

        {/* Tail (swishes if moving) */}
        <path
          d="M 6 24 C 2 20, 0 14, 4 10 C 6 8, 8 12, 6 16"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          className={`text-black dark:text-white ${isMoving ? 'origin-bottom animate-bounce' : ''}`}
        />

        {/* Cat Head */}
        <circle cx="28" cy="16" r="9" className="fill-black dark:fill-white" />

        {/* Left Ear */}
        <polygon
          points="22,11 25,4 29,9"
          className="fill-black dark:fill-white"
        />

        {/* Right Ear */}
        <polygon
          points="28,9 33,5 34,12"
          className="fill-black dark:fill-white"
        />

        {/* Inner Ears */}
        <polygon points="24,10 26,6 28,9" className="fill-primary" />
        <polygon points="29,9 32,7 33,11" className="fill-primary" />

        {/* Cute Eyes (Blink or Glance) */}
        <ellipse
          cx="27"
          cy="15"
          rx="1.5"
          ry="2"
          className="fill-secondary dark:fill-black"
        />
        <ellipse
          cx="32"
          cy="15"
          rx="1.5"
          ry="2"
          className="fill-secondary dark:fill-black"
        />

        {/* Tiny Whiskers */}
        <line
          x1="33"
          y1="17"
          x2="39"
          y2="16"
          stroke="currentColor"
          strokeWidth="1"
          className="text-textMuted"
        />
        <line
          x1="33"
          y1="19"
          x2="39"
          y2="20"
          stroke="currentColor"
          strokeWidth="1"
          className="text-textMuted"
        />

        {/* Paws */}
        <ellipse
          cx="14"
          cy="32"
          rx="3.5"
          ry="2"
          className="fill-black dark:fill-white"
        />
        <ellipse
          cx="26"
          cy="32"
          rx="3.5"
          ry="2"
          className="fill-black dark:fill-white"
        />
      </svg>
    </div>
  );
}
