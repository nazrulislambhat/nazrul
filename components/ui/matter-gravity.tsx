'use client';

import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { RotateCcw, AlertTriangle, Hammer, Mail } from 'lucide-react';

const hireNotes = [
  '💥 Core collapsed! But frontend architecture never will.',
  '🔨 Clean strike! Senior Frontend Engineer ready to build.',
  '⚡ Destructured down to AST. Reach out to hire me!',
  '🧪 Fault injected. Error resilience: 100%.',
];

export default function MatterGravity({
  isActive,
  onDeactivate,
}: {
  isActive: boolean;
  onDeactivate: () => void;
}) {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isSwinging, setIsSwinging] = useState(false);
  const [score, setScore] = useState(0);

  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const groundRef = useRef<Matter.Body | null>(null);
  const bodiesMapRef = useRef<
    Map<HTMLElement, { clone: HTMLElement; body: Matter.Body }>
  >(new Map());

  // 1. Hammer Cursor Tracker
  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isActive]);

  // 2. Initialize Matter.js World & Physics Loop
  useEffect(() => {
    if (!isActive) return;

    const { Engine, Runner, World, Bodies } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: 1.4, scale: 0.001 },
    });
    const runner = Runner.create();
    engineRef.current = engine;
    runnerRef.current = runner;

    // Create Floor & Walls based on viewport size
    const width = window.innerWidth;
    const height = window.innerHeight;

    const ground = Bodies.rectangle(width / 2, height + 60, width * 2, 120, {
      isStatic: true,
      friction: 0.8,
      restitution: 0.25,
    });
    const leftWall = Bodies.rectangle(-60, height / 2, 120, height * 2, {
      isStatic: true,
    });
    const rightWall = Bodies.rectangle(
      width + 60,
      height / 2,
      120,
      height * 2,
      { isStatic: true },
    );

    groundRef.current = ground;
    World.add(engine.world, [ground, leftWall, rightWall]);

    Runner.run(runner, engine);

    // Sync loop: render physics positions onto cloned DOM nodes
    let animationFrameId: number;
    const syncLoop = () => {
      bodiesMapRef.current.forEach(({ clone, body }) => {
        const { x, y } = body.position;
        const angle = body.angle;
        clone.style.transform = `translate3d(${x - clone.offsetWidth / 2}px, ${
          y - clone.offsetHeight / 2
        }px, 0) rotate(${angle}rad)`;
      });
      animationFrameId = requestAnimationFrame(syncLoop);
    };
    animationFrameId = requestAnimationFrame(syncLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, [isActive]);

  // 3. Shatter & Detach Element into Matter.js Rigid Body
  const shatterElement = (el: HTMLElement, clickX: number, clickY: number) => {
    if (bodiesMapRef.current.has(el)) return;

    const rect = el.getBoundingClientRect();
    const { Bodies, World, Body } = Matter;
    if (!engineRef.current) return;

    // Create a visual clone placed in fixed coordinate space
    const clone = el.cloneNode(true) as HTMLElement;
    clone.style.position = 'fixed';
    clone.style.top = '0px';
    clone.style.left = '0px';
    clone.style.margin = '0px';
    clone.style.width = `${rect.width}px`;
    clone.style.height = `${rect.height}px`;
    clone.style.zIndex = '90';
    clone.style.pointerEvents = 'none';
    clone.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
    clone.style.willChange = 'transform';
    clone.classList.add('border-red/80');

    // Attach funny stamp on clone
    const stamp = document.createElement('div');
    stamp.className =
      'absolute inset-0 flex items-center justify-center p-3 text-center bg-black/50 backdrop-blur-xs font-mono text-xs font-bold text-white uppercase';
    stamp.innerText = hireNotes[Math.floor(Math.random() * hireNotes.length)];
    clone.appendChild(stamp);

    document.body.appendChild(clone);

    // Hide original element in layout without causing layout shift
    el.style.visibility = 'hidden';

    // Create corresponding Matter.js body
    const matterBody = Bodies.rectangle(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      rect.width,
      rect.height,
      {
        restitution: 0.35, // bounciness
        friction: 0.5,
        density: 0.002,
      },
    );

    // Give it a kick based on where the hammer struck
    const forceMagnitude = 0.08 * matterBody.mass;
    const angle = Math.atan2(
      rect.top + rect.height / 2 - clickY,
      rect.left + rect.width / 2 - clickX,
    );
    Body.applyForce(matterBody, matterBody.position, {
      x: Math.cos(angle) * forceMagnitude + (Math.random() - 0.5) * 0.05,
      y: Math.sin(angle) * forceMagnitude - 0.05,
    });
    Body.setAngularVelocity(matterBody, (Math.random() - 0.5) * 0.18);

    World.add(engineRef.current.world, matterBody);
    bodiesMapRef.current.set(el, { clone, body: matterBody });
    setScore((s) => s + 1);
  };

  // 4. Global Click Listener for Hammer Strikes
  useEffect(() => {
    if (!isActive) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('#gravity-hud') ||
        target.closest('#glass-controls-island')
      ) {
        return;
      }

      // Swing animation
      setIsSwinging(true);
      setTimeout(() => setIsSwinging(false), 150);

      // Find nearest glass card or section
      const breakable = target.closest(
        '.liquid-glass, .liquid-glass-subtle, article, .project-card',
      ) as HTMLElement;

      if (breakable) {
        shatterElement(breakable, e.clientX, e.clientY);
      }
    };

    window.addEventListener('click', handleClick, true);
    return () => window.removeEventListener('click', handleClick, true);
  }, [isActive]);

  // 5. Total Collapse (Google Gravity style: everything drops at once)
  const collapseEntirePage = () => {
    const allCards = document.querySelectorAll<HTMLElement>(
      '.liquid-glass, .liquid-glass-subtle, section',
    );
    allCards.forEach((card, idx) => {
      setTimeout(() => {
        const rect = card.getBoundingClientRect();
        shatterElement(card, rect.left + rect.width / 2, rect.top);
      }, idx * 45);
    });
  };

  // 6. Reset & Restore Everything
  const restoreAll = () => {
    bodiesMapRef.current.forEach(({ clone }, originalEl) => {
      clone.remove();
      originalEl.style.visibility = '';
    });
    bodiesMapRef.current.clear();
    setScore(0);
    onDeactivate();
  };

  if (!isActive) return null;

  return (
    <>
      {/* 1. Sledgehammer Cursor */}
      <div
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y - 32}px, 0) rotate(${
            isSwinging ? '-65deg' : '0deg'
          })`,
          transformOrigin: 'bottom left',
        }}
        className="pointer-events-none fixed top-0 left-0 z-100 transition-transform duration-75 ease-out select-none"
      >
        <svg width="52" height="52" viewBox="0 0 48 48" fill="none">
          <rect
            x="22"
            y="16"
            width="5"
            height="28"
            rx="2"
            className="fill-amber-800 stroke-black stroke-1"
          />
          <rect
            x="11"
            y="8"
            width="27"
            height="13"
            rx="2"
            className="fill-neutral-300 dark:fill-neutral-100 stroke-black stroke-2 shadow-xl"
          />
          <line x1="20" y1="8" x2="20" y2="21" stroke="#999" strokeWidth="2" />
        </svg>
      </div>

      {/* 2. Floating Demolition HUD */}
      <div
        id="gravity-hud"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-95 flex flex-wrap items-center gap-3 px-5 py-2.5 rounded-full liquid-glass border-2 border-red shadow-2xl font-mono text-xs text-textMain"
      >
        <div className="flex items-center gap-2 text-red font-bold uppercase">
          <AlertTriangle className="w-4 h-4 animate-pulse" />
          <span>Gravity Engine Active</span>
        </div>

        <span className="text-textMuted">|</span>
        <span>Tap any card to shatter ({score})</span>

        <button
          onClick={collapseEntirePage}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red text-white font-bold hover:bg-red/90 transition-colors shadow-2xs"
        >
          <Hammer className="w-3.5 h-3.5" />
          <span>Total Collapse</span>
        </button>

        <button
          onClick={restoreAll}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-80 transition-opacity"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restore Page</span>
        </button>
      </div>
    </>
  );
}
