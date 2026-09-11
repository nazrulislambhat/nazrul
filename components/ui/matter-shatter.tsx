'use client';

import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { RotateCcw, AlertTriangle, Hammer, Mail } from 'lucide-react';

const hireNotes = [
  '💥 Component shredded to pieces! Ready to architect your next system.',
  '🔨 Clean strike! Let’s talk senior frontend roles.',
  '⚡ Destructured down to raw AST. Reach out to hire me!',
  '🧪 Fault injected. Zero regressions in production.',
];

// Pre-calculated geometric triangular Delaunay shards (percentages: 0.0 - 1.0)
const shardDefinitions = [
  // Top row shards
  [
    { x: 0, y: 0 },
    { x: 0.35, y: 0 },
    { x: 0.25, y: 0.35 },
  ],
  [
    { x: 0.35, y: 0 },
    { x: 0.7, y: 0 },
    { x: 0.55, y: 0.3 },
  ],
  [
    { x: 0.7, y: 0 },
    { x: 1, y: 0 },
    { x: 0.8, y: 0.35 },
  ],
  [
    { x: 0.35, y: 0 },
    { x: 0.55, y: 0.3 },
    { x: 0.25, y: 0.35 },
  ],
  [
    { x: 0.7, y: 0 },
    { x: 0.8, y: 0.35 },
    { x: 0.55, y: 0.3 },
  ],

  // Mid section shards
  [
    { x: 0, y: 0 },
    { x: 0.25, y: 0.35 },
    { x: 0, y: 0.55 },
  ],
  [
    { x: 0.25, y: 0.35 },
    { x: 0.55, y: 0.3 },
    { x: 0.5, y: 0.65 },
  ],
  [
    { x: 0.55, y: 0.3 },
    { x: 0.8, y: 0.35 },
    { x: 1, y: 0.5 },
  ],
  [
    { x: 0.8, y: 0.35 },
    { x: 1, y: 0 },
    { x: 1, y: 0.5 },
  ],
  [
    { x: 0, y: 0.55 },
    { x: 0.25, y: 0.35 },
    { x: 0.3, y: 0.7 },
  ],
  [
    { x: 0.55, y: 0.3 },
    { x: 1, y: 0.5 },
    { x: 0.75, y: 0.7 },
  ],

  // Bottom row shards
  [
    { x: 0, y: 0.55 },
    { x: 0.3, y: 0.7 },
    { x: 0, y: 1 },
  ],
  [
    { x: 0, y: 1 },
    { x: 0.3, y: 0.7 },
    { x: 0.45, y: 1 },
  ],
  [
    { x: 0.3, y: 0.7 },
    { x: 0.5, y: 0.65 },
    { x: 0.45, y: 1 },
  ],
  [
    { x: 0.5, y: 0.65 },
    { x: 0.75, y: 0.7 },
    { x: 0.8, y: 1 },
  ],
  [
    { x: 0.45, y: 1 },
    { x: 0.5, y: 0.65 },
    { x: 0.8, y: 1 },
  ],
  [
    { x: 0.75, y: 0.7 },
    { x: 1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  [
    { x: 0.75, y: 0.7 },
    { x: 1, y: 1 },
    { x: 0.8, y: 1 },
  ],
];

export default function MatterShatter({
  isActive,
  onDeactivate,
}: {
  isActive: boolean;
  onDeactivate: () => void;
}) {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isSwinging, setIsSwinging] = useState(false);
  const [shreddedCount, setShreddedCount] = useState(0);

  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  // Track hidden original elements to restore later
  const hiddenElementsRef = useRef<Set<HTMLElement>>(new Set());
  // Map physics bodies to their corresponding DOM shard nodes
  const shardNodesRef = useRef<Map<Matter.Body, HTMLElement>>(new Map());

  // 1. Track Hammer Cursor
  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isActive]);

  // 2. Initialize Physics Simulation World
  useEffect(() => {
    if (!isActive) return;

    const { Engine, Runner, World, Bodies } = Matter;
    const engine = Engine.create({
      gravity: { x: 0, y: 1.6, scale: 0.001 },
    });
    const runner = Runner.create();
    engineRef.current = engine;
    runnerRef.current = runner;

    // Viewport bounds: floor and side boundaries
    const width = window.innerWidth;
    const height = window.innerHeight;

    const floor = Bodies.rectangle(width / 2, height + 80, width * 3, 160, {
      isStatic: true,
      friction: 0.8,
      restitution: 0.3,
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

    World.add(engine.world, [floor, leftWall, rightWall]);
    Runner.run(runner, engine);

    // Sync loop: move DOM shards to Matter.js coordinates
    let animId: number;
    const updatePhysics = () => {
      shardNodesRef.current.forEach((domNode, body) => {
        const { x, y } = body.position;
        const angle = body.angle;
        // The DOM shard center is shifted by half its width/height
        domNode.style.transform = `translate3d(${x - domNode.offsetWidth / 2}px, ${
          y - domNode.offsetHeight / 2
        }px, 0) rotate(${angle}rad)`;
      });
      animId = requestAnimationFrame(updatePhysics);
    };
    animId = requestAnimationFrame(updatePhysics);

    return () => {
      cancelAnimationFrame(animId);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, [isActive]);

  // 3. Shred an element into physical polygonal pieces
  // 3. Optimized 60 FPS Shard Generator
  const shredElement = (el: HTMLElement, strikeX: number, strikeY: number) => {
    if (hiddenElementsRef.current.has(el)) return;
    if (!engineRef.current) return;

    const rect = el.getBoundingClientRect();
    const { Bodies, World, Body } = Matter;

    // 1. Hide original DOM node
    el.style.visibility = 'hidden';
    hiddenElementsRef.current.add(el);

    // 2. Spawn Hire Me replacement badge in place
    const placeholder = document.createElement('div');
    placeholder.className =
      'absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center rounded-2xl border-2 border-red bg-black/80 text-white shadow-xl pointer-events-auto';
    placeholder.innerHTML = `
    <span class="font-mono text-xs text-red font-bold uppercase tracking-wider mb-1">[ COMPONENT SHREDDED ]</span>
    <p class="font-bold text-sm mb-3 max-w-xs text-white">${
      hireNotes[Math.floor(Math.random() * hireNotes.length)]
    }</p>
    <a href="mailto:nazrulislambhat@gmail.com" class="px-4 py-1.5 rounded-lg bg-primary hover:bg-primaryLight text-white font-mono text-xs font-bold transition-all shadow-sm">
      Hire This Engineer
    </a>
  `;
    if (window.getComputedStyle(el).position === 'static') {
      el.style.position = 'relative';
    }
    el.appendChild(placeholder);
    placeholder.style.visibility = 'visible';

    // 3. Extract card title text to display on a couple of shards
    const cardTitle = el.querySelector('h1, h2, h3')?.textContent || 'CRACK';

    // 4. Generate lightweight glass shards (NO deep clone, NO backdrop-blur)
    shardDefinitions.forEach((poly, index) => {
      const centroidX = ((poly[0].x + poly[1].x + poly[2].x) / 3) * rect.width;
      const centroidY = ((poly[0].y + poly[1].y + poly[2].y) / 3) * rect.height;

      const spawnX = rect.left + centroidX;
      const spawnY = rect.top + centroidY;

      // Create a lean div
      const shard = document.createElement('div');
      shard.style.visibility = 'visible';
      shard.style.position = 'fixed';
      shard.style.top = '0px';
      shard.style.left = '0px';
      shard.style.width = `${rect.width}px`;
      shard.style.height = `${rect.height}px`;
      shard.style.zIndex = '100';
      shard.style.pointerEvents = 'none';
      shard.style.willChange = 'transform';

      // Frosted glass styling without expensive backdrop-filter
      const isDark = document.documentElement.classList.contains('dark');
      shard.style.backgroundColor = isDark
        ? 'rgba(255, 255, 255, 0.12)'
        : 'rgba(255, 255, 255, 0.75)';
      shard.style.border = '1.5px solid rgba(255, 255, 255, 0.85)';

      const clipPathValue = `polygon(${poly[0].x * 100}% ${poly[0].y * 100}%, ${
        poly[1].x * 100
      }% ${poly[1].y * 100}%, ${poly[2].x * 100}% ${poly[2].y * 100}%)`;
      shard.style.clipPath = clipPathValue;

      // Stamp text on just 1 or 2 shards for realism
      if (index === 3 || index === 7) {
        const textLabel = document.createElement('span');
        textLabel.className =
          'font-mono text-[11px] font-bold text-black dark:text-white opacity-60 absolute';
        textLabel.style.left = `${centroidX - 20}px`;
        textLabel.style.top = `${centroidY - 10}px`;
        textLabel.textContent = cardTitle.slice(0, 12);
        shard.appendChild(textLabel);
      }

      document.body.appendChild(shard);

      // Physics body
      const approxRadius = Math.max(rect.width, rect.height) * 0.1;
      const matterShard = Bodies.circle(spawnX, spawnY, approxRadius, {
        restitution: 0.35,
        friction: 0.4,
        density: 0.002,
      });

      // Vector impulse away from hammer strike
      const angle = Math.atan2(spawnY - strikeY, spawnX - strikeX);
      const force = (0.035 + Math.random() * 0.03) * matterShard.mass;

      Body.applyForce(matterShard, matterShard.position, {
        x: Math.cos(angle) * force + (Math.random() - 0.5) * 0.015,
        y: Math.sin(angle) * force - 0.025,
      });

      Body.setAngularVelocity(matterShard, (Math.random() - 0.5) * 0.25);

      World.add(engineRef.current!.world, matterShard);
      shardNodesRef.current.set(matterShard, shard);
    });

    setShreddedCount((c) => c + 1);
  };

  // 4. Hammer Click Handler
  useEffect(() => {
    if (!isActive) return;

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('#shatter-hud') ||
        target.closest('#glass-controls-island')
      ) {
        return;
      }

      // Play hammer swing
      setIsSwinging(true);
      setTimeout(() => setIsSwinging(false), 120);

      // Identify closest breakable card
      const targetCard = target.closest(
        '.liquid-glass, .liquid-glass-subtle, article, .project-card, section > div > div',
      ) as HTMLElement;

      if (targetCard && !hiddenElementsRef.current.has(targetCard)) {
        shredElement(targetCard, e.clientX, e.clientY);
      }
    };

    window.addEventListener('click', handleGlobalClick, true);
    return () => window.removeEventListener('click', handleGlobalClick, true);
  }, [isActive]);

  // 5. Total Shred (Break every card simultaneously)
  const shredEverything = () => {
    const allCards = document.querySelectorAll<HTMLElement>(
      '.liquid-glass, .liquid-glass-subtle',
    );
    allCards.forEach((card, idx) => {
      setTimeout(() => {
        const r = card.getBoundingClientRect();
        shredElement(card, r.left + r.width / 2, r.top + r.height / 2);
      }, idx * 60);
    });
  };

  // 6. Restore page
  const restoreAll = () => {
    // Remove all physics shard clones
    shardNodesRef.current.forEach((clone) => clone.remove());
    shardNodesRef.current.clear();

    // Unhide original components & remove hire me badges
    hiddenElementsRef.current.forEach((el) => {
      el.style.visibility = '';
      const badge = el.querySelector('.border-red');
      if (badge) badge.remove();
    });
    hiddenElementsRef.current.clear();

    setShreddedCount(0);
    onDeactivate();
  };

  if (!isActive) return null;

  return (
    <>
      {/* 1. Sledgehammer Cursor */}
      <div
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y - 32}px, 0) rotate(${
            isSwinging ? '-70deg' : '0deg'
          })`,
          transformOrigin: 'bottom left',
        }}
        className="pointer-events-none fixed top-0 left-0 z-[110] transition-transform duration-75 ease-out select-none"
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
            className="fill-neutral-300 dark:fill-neutral-100 stroke-black stroke-2 shadow-2xl"
          />
          <line x1="20" y1="8" x2="20" y2="21" stroke="#888" strokeWidth="2" />
        </svg>
      </div>

      {/* 2. Top Floating Demolition HUD */}
      <div
        id="shatter-hud"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[105] flex flex-wrap items-center gap-3 px-5 py-2.5 rounded-full liquid-glass border-2 border-red shadow-2xl font-mono text-xs text-textMain"
      >
        <div className="flex items-center gap-2 text-red font-bold uppercase">
          <AlertTriangle className="w-4 h-4 animate-pulse" />
          <span>Shredder Mode</span>
        </div>

        <span className="text-textMuted">|</span>
        <span>Tap any card to shred into pieces ({shreddedCount})</span>

        <button
          onClick={shredEverything}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red text-white font-bold hover:bg-red/90 transition-colors shadow-xs"
        >
          <Hammer className="w-3.5 h-3.5" />
          <span>Shred All</span>
        </button>

        <button
          onClick={restoreAll}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-85 transition-opacity"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restore Page</span>
        </button>
      </div>
    </>
  );
}
