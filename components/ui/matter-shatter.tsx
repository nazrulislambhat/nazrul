'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Matter from 'matter-js';
import { RotateCcw, Hammer, Sparkles } from 'lucide-react';

const hireNotes = [
  '💥 Component shredded to pieces! Ready to architect your next system.',
  '🔨 Clean strike! Let’s talk senior frontend roles.',
  '⚡ Destructured down to raw AST. Reach out to hire me!',
  '🧪 Fault injected. Zero regressions in production.',
];

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
  const shardNodesRef = useRef<Map<Matter.Body, HTMLElement>>(new Map());
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // 1. Hammer Cursor Position
  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isActive]);

  // 2. Matter.js Physics World
  useEffect(() => {
    if (!isActive) return;

    const { Engine, Runner, World, Bodies } = Matter;
    const engine = Engine.create({
      gravity: { x: 0, y: 1.6, scale: 0.001 },
    });
    const runner = Runner.create();
    engineRef.current = engine;
    runnerRef.current = runner;

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

    let animId: number;
    const updatePhysics = () => {
      shardNodesRef.current.forEach((domNode, body) => {
        const { x, y } = body.position;
        const angle = body.angle;
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

  // 3. Shred an element
  const shredElement = useCallback(
    (el: HTMLElement, strikeX: number, strikeY: number) => {
      if (el.getAttribute('data-shredded') === 'true') return;
      if (!engineRef.current) return;

      const rect = el.getBoundingClientRect();
      const { Bodies, World, Body } = Matter;

      // Mark element as shredded and visually hide its contents safely
      el.setAttribute('data-shredded', 'true');
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';

      // Create replacement badge as a fixed sibling positioned directly over the card
      // (Avoids mutating inside the React tree!)
      const badge = document.createElement('div');
      badge.className = 'matter-shatter-badge';
      badge.style.position = 'fixed';
      badge.style.top = `${rect.top}px`;
      badge.style.left = `${rect.left}px`;
      badge.style.width = `${rect.width}px`;
      badge.style.height = `${rect.height}px`;
      badge.style.zIndex = '90';
      badge.style.pointerEvents = 'auto';

      badge.innerHTML = `
        <div class="w-full h-full p-6 flex flex-col items-center justify-center text-center rounded-2xl border border-signal-dim/40 bg-black/90 text-white shadow-2xl backdrop-blur-md">
          <span class="font-mono text-xs text-signal font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-volt animate-ping"></span>
            [ COMPONENT SHREDDED ]
          </span>
          <p class="font-bold text-sm mb-4 max-w-xs text-coolWhite leading-relaxed">
            ${hireNotes[Math.floor(Math.random() * hireNotes.length)]}
          </p>
          <a 
            href="mailto:nazrulislambhat@gmail.com" 
            class="px-4 py-2 rounded-xl bg-volt text-black hover:bg-white font-mono text-xs font-bold transition-all shadow-[0_0_15px_-3px_rgba(204,243,128,0.4)]"
          >
            Hire This Engineer
          </a>
        </div>
      `;

      document.body.appendChild(badge);

      const cardTitle = el.querySelector('h1, h2, h3')?.textContent || 'CRACK';

      // Generate Delaunay Shards
      shardDefinitions.forEach((poly, index) => {
        const centroidX =
          ((poly[0].x + poly[1].x + poly[2].x) / 3) * rect.width;
        const centroidY =
          ((poly[0].y + poly[1].y + poly[2].y) / 3) * rect.height;

        const spawnX = rect.left + centroidX;
        const spawnY = rect.top + centroidY;

        const shard = document.createElement('div');
        shard.className = 'matter-shatter-shard';
        shard.style.position = 'fixed';
        shard.style.top = '0px';
        shard.style.left = '0px';
        shard.style.width = `${rect.width}px`;
        shard.style.height = `${rect.height}px`;
        shard.style.zIndex = '100';
        shard.style.pointerEvents = 'none';
        shard.style.willChange = 'transform';

        const isDark = document.documentElement.classList.contains('dark');
        shard.style.backgroundColor = isDark
          ? 'rgba(255, 255, 255, 0.14)'
          : 'rgba(255, 255, 255, 0.75)';
        shard.style.border = '1px solid rgba(255, 255, 255, 0.8)';

        shard.style.clipPath = `polygon(${poly[0].x * 100}% ${poly[0].y * 100}%, ${
          poly[1].x * 100
        }% ${poly[1].y * 100}%, ${poly[2].x * 100}% ${poly[2].y * 100}%)`;

        if (index === 3 || index === 7) {
          const textLabel = document.createElement('span');
          textLabel.className =
            'font-mono text-[11px] font-bold text-signal opacity-80 absolute';
          textLabel.style.left = `${centroidX - 20}px`;
          textLabel.style.top = `${centroidY - 10}px`;
          textLabel.textContent = cardTitle.slice(0, 14);
          shard.appendChild(textLabel);
        }

        document.body.appendChild(shard);

        const approxRadius = Math.max(rect.width, rect.height) * 0.1;
        const matterShard = Bodies.circle(spawnX, spawnY, approxRadius, {
          restitution: 0.35,
          friction: 0.4,
          density: 0.002,
        });

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
    },
    [],
  );

  // 4. Click and Touch Handler
  useEffect(() => {
    if (!isActive) return;

    const handlePointerAction = (
      clientX: number,
      clientY: number,
      target: HTMLElement,
    ) => {
      if (
        target.closest('#shatter-hud') ||
        target.closest('#glass-controls-island')
      ) {
        return;
      }

      setIsSwinging(true);
      setTimeout(() => setIsSwinging(false), 120);

      // Find the card to shatter: choose the innermost card if available, otherwise the outer card
      const candidateCards = Array.from(
        document.querySelectorAll<HTMLElement>(
          '.liquid-glass-subtle, .liquid-glass',
        ),
      ).filter(
        (card) =>
          card.id !== 'shatter-hud' &&
          !card.closest('#shatter-hud') &&
          card.id !== 'glass-controls-island' &&
          !card.closest('#glass-controls-island'),
      );

      // Target the closest clicked card
      const targetCard = candidateCards.find((card) => card.contains(target));

      if (targetCard && targetCard.getAttribute('data-shredded') !== 'true') {
        shredElement(targetCard, clientX, clientY);
      }
    };

    const handleClick = (e: MouseEvent) => {
      handlePointerAction(e.clientX, e.clientY, e.target as HTMLElement);
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.changedTouches.length > 0) {
        const touch = e.changedTouches[0];
        const target = document.elementFromPoint(
          touch.clientX,
          touch.clientY,
        ) as HTMLElement;
        if (target) {
          handlePointerAction(touch.clientX, touch.clientY, target);
        }
      }
    };

    window.addEventListener('click', handleClick, true);
    window.addEventListener('touchend', handleTouch, true);

    return () => {
      window.removeEventListener('click', handleClick, true);
      window.removeEventListener('touchend', handleTouch, true);
    };
  }, [isActive, shredElement]);

  // 6. Complete Unconditional Restore (Zero artifacts)
  const restoreAll = () => {
    // 1. Cancel any pending shred operations
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    // 2. Remove all physics shards from Matter.js world & DOM
    shardNodesRef.current.forEach((shardElement, body) => {
      if (engineRef.current) Matter.World.remove(engineRef.current.world, body);
      shardElement.remove();
    });
    shardNodesRef.current.clear();

    // 3. Remove all badges and loose shards from body
    document
      .querySelectorAll('.matter-shatter-badge, .matter-shatter-shard')
      .forEach((el) => el.remove());

    // 4. Restore EVERY element with data-shredded
    document
      .querySelectorAll<HTMLElement>('[data-shredded="true"]')
      .forEach((el) => {
        el.removeAttribute('data-shredded');
        el.style.opacity = '';
        el.style.pointerEvents = '';
        el.style.visibility = '';
      });

    // 5. Reset states
    setShreddedCount(0);
    onDeactivate();
  };

  if (!isActive) return null;

  return (
    <>
      {/* 1. Sledgehammer Cursor (Desktop only; touch devices use direct tap) */}
      <div
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y - 32}px, 0) rotate(${
            isSwinging ? '-70deg' : '0deg'
          })`,
          transformOrigin: 'bottom left',
        }}
        className="hidden md:block pointer-events-none fixed top-0 left-0 z-[110] transition-transform duration-75 ease-out select-none"
      >
        <svg width="52" height="52" viewBox="0 0 48 48" fill="none">
          <rect
            x="22"
            y="16"
            width="5"
            height="28"
            rx="2"
            className="fill-amber-900 stroke-black stroke-1"
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

      {/* 2. Demolition HUD */}
      <aside
        id="shatter-hud"
        aria-label="Interactive Physics Demolition HUD"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[105] flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full liquid-glass border border-signal-dim/40 shadow-2xl font-mono text-xs text-textMain selection:bg-volt selection:text-black pointer-events-auto"
      >
        <div className="flex items-center gap-2 text-signal font-bold uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-volt opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-signal shadow-[0_0_8px_#CCF380]" />
          </span>
          <Sparkles className="w-3.5 h-3.5 text-volt" />
          <span className="hidden sm:inline">Demolition Sandbox</span>
        </div>

        <span className="text-textMuted/60">•</span>
        <span>Shattered: {shreddedCount}</span>

        <button
          onClick={restoreAll}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold hover:bg-volt hover:text-black dark:hover:bg-volt dark:hover:text-black transition-all shadow-xs cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restore Page</span>
        </button>
      </aside>
    </>
  );
}
