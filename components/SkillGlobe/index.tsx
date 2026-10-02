'use client';

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import type {
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from 'react';
import { useReducedMotion } from 'framer-motion';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Globe,
  Pause,
  Play,
} from 'lucide-react';
import {
  BASE_FONT,
  FALLBACK_ACCENT,
  FLING_PAUSE_MS,
  GROUPS,
  HOLD_MS_MOUSE,
  HOLD_MS_TOUCH,
  HUES,
  KEY_KICK,
  MAX_SPIN,
  TAP_SLOP,
} from './constants';
import type { Group, Skill } from './constants';
import { DEFAULT_SKILLS } from './skills';
import { drawScene } from './render';
import { hitTest, launch, makeSim, stepSim } from './sim';
import type { Sim } from './sim';

// Keep the old import path working: `import SkillGlobe, { DEFAULT_SKILLS, type Skill }`
export { DEFAULT_SKILLS };
export type { Group, Skill };

/** Accent from the prop, else --globe-accent / --primary, else a fallback. */
function resolveAccent(cs: CSSStyleDeclaration): string {
  for (const name of ['--globe-accent', '--primary']) {
    const v = cs.getPropertyValue(name).trim();
    if (!v) continue;
    if (/^[\d.]+(\s+[\d.]+){2}$/.test(v)) return `rgb(${v})`; // "244 60 0"
    if (/^[\d.]+\s+[\d.]+%\s+[\d.]+%$/.test(v)) return `hsl(${v})`; // "12 100% 48%"
    return v;
  }
  return FALLBACK_ACCENT;
}

interface SkillGlobeProps {
  skills?: Skill[];
  /** Overrides the theme. Default: --globe-accent, then --primary, then orange. */
  accent?: string;
  /** Small label above the heading. Pass an empty string to hide it. */
  eyebrow?: string;
  /** Section heading. Pass an empty string to hide it. */
  title?: string;
  id?: string;
  className?: string;
  /**
   * true  → a finger on the globe always rotates it (the page can't scroll from there).
   * false → only horizontal drags rotate; vertical drags scroll the page.
   */
  lockTouchScroll?: boolean;
}

const iconBtn =
  'inline-flex h-8 w-8 items-center justify-center rounded-full border border-borderGlass text-textMuted hover:text-textMain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer';

export default function SkillGlobe({
  skills = DEFAULT_SKILLS,
  accent,
  eyebrow = 'Tech Stack',
  title = 'Skills, thrown into orbit.',
  id = 'skills',
  className = '',
  lockTouchScroll = false,
}: SkillGlobeProps) {
  const uid = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sim = useRef<Sim | null>(null);
  const pressTimer = useRef<number | null>(null);
  const reduce = useReducedMotion();
  const reduceRef = useRef(false);
  reduceRef.current = !!reduce;

  // Rebuild the simulation only when the skills' contents change, not when a
  // parent passes a fresh array with the same data on every render.
  const skillsKey = skills
    .map((k) => `${k.name}|${k.group}|${k.short ?? ''}|${k.blurb ?? ''}`)
    .join('\n');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const list = useMemo(() => skills, [skillsKey]);

  const [selected, setSelected] = useState<number | null>(null);
  const [spinning, setSpinning] = useState(true);
  const [activeGroup, setActiveGroup] = useState<Group | null>(null);
  const spinRef = useRef(true);
  spinRef.current = spinning;
  const groupRef = useRef<Group | null>(null);
  groupRef.current = activeGroup;

  const sel = selected !== null ? list[selected] : undefined;

  const clearPress = () => {
    if (pressTimer.current !== null) {
      window.clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  useEffect(
    () => () => {
      if (pressTimer.current !== null) window.clearTimeout(pressTimer.current);
    },
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current!;
    const wrap = wrapRef.current!;
    const ctx = canvas.getContext('2d')!;
    const s = makeSim(list);
    sim.current = s;
    setSelected(null);
    s.onImpact = (i) => setSelected(i);
    let cancelled = false;

    const readStyle = () => {
      const cs = getComputedStyle(canvas);
      s.textColor = cs.color;
      s.font = cs.fontFamily || s.font;
      s.accent = accent ?? resolveAccent(cs);
      s.dirty = true;
    };
    const measure = () => {
      s.labels = list.map((k) => (s.compact && k.short ? k.short : k.name));
      ctx.font = `600 ${BASE_FONT}px ${s.font}`;
      s.widths = s.labels.map((l) => ctx.measureText(l).width);
      s.dirty = true;
    };
    readStyle();

    const resize = () => {
      const w = Math.min(wrap.clientWidth, 560);
      if (!w) return;
      const compact = w < 420;
      const h = Math.round(w * (compact ? 1.05 : 0.9));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      s.w = w;
      s.h = h;
      s.compact = compact;
      s.R = Math.min(w * (compact ? 0.31 : 0.3), h * 0.36);
      s.chip = Math.min(1, Math.max(0.75, s.R / 170)); // smaller chips on phones
      measure();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();
    document.fonts?.ready.then(() => {
      if (cancelled) return;
      readStyle();
      measure();
    });

    // Re-read colours when the theme flips, instead of polling every N frames.
    const mo = new MutationObserver(readStyle);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme', 'style'],
    });
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', readStyle);

    const io = new IntersectionObserver(([e]) => {
      s.visible = e.isIntersecting;
    });
    io.observe(canvas);

    let raf = 0,
      last = 0;
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (!s.visible || !s.w) {
        last = t;
        return;
      }
      const dt = Math.min((t - last) / 1000, 1 / 30);
      last = t;
      if (dt <= 0) return;
      s.reduce = reduceRef.current;
      s.autoSpin = spinRef.current;
      if (s.group !== groupRef.current) {
        s.group = groupRef.current;
        s.dirty = true;
      }
      const moving = stepSim(s, dt);
      // A settled globe costs nothing: only redraw when something changed.
      if (moving || s.dirty) {
        drawScene(ctx, s);
        s.dirty = false;
      }
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      mq.removeEventListener('change', readStyle);
    };
  }, [list, accent]);

  /* ── Pointer interaction ── */
  const local = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    const s = sim.current;
    if (!s || s.flight) return;
    const el = e.currentTarget;
    const p = local(e);
    const idx = hitTest(s, p.x, p.y);
    el.setPointerCapture(e.pointerId);
    el.style.cursor = 'grabbing';

    // Every press starts as a rotation drag, mouse included. Holding still on
    // a skill picks it up instead, so rotating never grabs a skill by accident.
    s.drag = {
      x: p.x,
      y: p.y,
      sx: p.x,
      sy: p.y,
      t: performance.now(),
      moved: false,
    };
    s.vyaw = 0;
    s.vpitch = 0;
    s.press = idx;

    clearPress();
    if (idx >= 0) {
      const isMouse = e.pointerType === 'mouse';
      pressTimer.current = window.setTimeout(
        () => {
          pressTimer.current = null;
          const d = s.drag;
          if (!d || d.moved || s.press !== idx) return;
          s.drag = null;
          s.held = { idx, x: d.x, y: d.y, sx: d.sx, sy: d.sy, moved: false };
          if (!isMouse) navigator.vibrate?.(12);
        },
        isMouse ? HOLD_MS_MOUSE : HOLD_MS_TOUCH,
      );
    }
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    const s = sim.current;
    if (!s) return;
    const p = local(e);

    if (s.held) {
      s.held.x = p.x;
      s.held.y = p.y;
      if (Math.hypot(p.x - s.held.sx, p.y - s.held.sy) > TAP_SLOP) {
        s.held.moved = true;
      }
      return;
    }

    if (s.drag) {
      const d = s.drag;
      if (!d.moved) {
        if (Math.hypot(p.x - d.sx, p.y - d.sy) < TAP_SLOP) return; // tap slop
        d.moved = true;
        clearPress();
        d.x = p.x;
        d.y = p.y;
        d.t = performance.now();
        return;
      }
      const now = performance.now();
      const dt = Math.max((now - d.t) / 1000, 0.001);
      // Flip horizontal direction when the globe is upside down so the
      // surface always follows the pointer.
      const dir = Math.cos(s.pitch) >= 0 ? 1 : -1;
      const dyaw = (dir * (p.x - d.x)) / s.R;
      const dpitch = (p.y - d.y) / s.R;
      s.yaw += dyaw;
      s.pitch += dpitch;
      const clamp = (v: number) => Math.max(-MAX_SPIN, Math.min(MAX_SPIN, v));
      s.vyaw = clamp(s.vyaw * 0.5 + (dyaw / dt) * 0.5);
      s.vpitch = clamp(s.vpitch * 0.5 + (dpitch / dt) * 0.5);
      d.x = p.x;
      d.y = p.y;
      d.t = now;
      return;
    }

    const h = s.flight ? -1 : hitTest(s, p.x, p.y);
    if (h !== s.hover) {
      s.hover = h;
      s.dirty = true;
      e.currentTarget.style.cursor = h >= 0 ? 'pointer' : '';
    }
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    const s = sim.current;
    if (!s) return;
    e.currentTarget.style.cursor = '';
    clearPress();

    if (s.held) {
      const h = s.held;
      s.held = null;
      s.dirty = true;
      // Dragged: aim where released. Plain click: toss it near the centre.
      launch(s, h.idx, { x: h.x, y: h.y }, h.moved ? local(e) : null);
      return;
    }

    const d = s.drag;
    if (d) {
      s.drag = null;
      s.dirty = true;
      if (!d.moved) {
        if (s.press >= 0) launch(s, s.press, null, null); // quick tap on a skill
      } else if (s.reduce || performance.now() - d.t > FLING_PAUSE_MS) {
        s.vyaw = 0; // pointer paused before release: no fling
        s.vpitch = 0;
      }
      s.press = -1;
    }
  };

  const onPointerCancel = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    clearPress();
    e.currentTarget.style.cursor = '';
    const s = sim.current;
    if (s) {
      s.held = null;
      s.drag = null;
      s.press = -1;
      s.dirty = true;
    }
  };

  const onPointerLeave = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    const s = sim.current;
    if (!s) return;
    s.hover = -1;
    s.dirty = true;
    if (!s.drag && !s.held) e.currentTarget.style.cursor = '';
  };

  /* ── Keyboard and button alternatives to dragging (WCAG 2.1.1, 2.5.7) ── */
  const nudge = useCallback((dx: number, dy: number) => {
    const s = sim.current;
    if (!s) return;
    const dir = Math.cos(s.pitch) >= 0 ? 1 : -1;
    s.rest = 0;
    if (s.reduce) {
      s.yaw += dir * dx * 0.15; // step, no glide
      s.pitch += dy * 0.15;
      s.dirty = true;
    } else {
      s.vyaw += dir * dx;
      s.vpitch += dy;
    }
  }, []);

  const onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, [number, number]> = {
      ArrowLeft: [-KEY_KICK, 0],
      ArrowRight: [KEY_KICK, 0],
      ArrowUp: [0, -KEY_KICK],
      ArrowDown: [0, KEY_KICK],
    };
    const m = moves[e.key];
    if (!m) return;
    e.preventDefault();
    nudge(m[0], m[1]);
  };

  const throwSkill = (i: number) => {
    const s = sim.current;
    if (s) launch(s, i, null, null);
  };

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden bg-background text-textMain pt-8 md:pt-12 pb-8 md:pb-12 selection:bg-primary selection:text-secondary ${className}`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="p-8 md:p-12 xl:p-14 rounded-3xl liquid-glass border border-borderGlass">
          {(eyebrow || title) && (
            <div className="mb-8">
              {eyebrow && (
                <div className="flex items-center gap-2 font-mono text-xs text-textMuted uppercase tracking-widest mb-2">
                  <Globe className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>{eyebrow}</span>
                </div>
              )}
              {title && (
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-textMain">
                  {title}
                </h2>
              )}
            </div>
          )}

          <div
            ref={wrapRef}
            tabIndex={0}
            role="group"
            aria-label="Skill globe. Use the arrow keys to rotate."
            onKeyDown={onKeyDown}
            className="relative rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <canvas
              ref={canvasRef}
              role="img"
              aria-label="Interactive globe of my skills. Drag to rotate it, or hold a skill and drag it onto the globe to throw it. Every skill is also listed below the globe, with a button to throw each one."
              className="mx-auto block cursor-grab select-none text-textMain"
              style={{ touchAction: lockTouchScroll ? 'none' : 'pan-y' }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
              onPointerLeave={onPointerLeave}
            />
          </div>

          {/* Readout: live region + text alternative to the colour-coded dots */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <div className="flex shrink-0 items-center gap-2">
              {/* Drag alternative for pointer users (WCAG 2.5.7) */}
              <div
                role="group"
                aria-label="Rotate globe"
                className="inline-flex gap-1"
              >
                <button
                  type="button"
                  aria-label="Rotate left"
                  onClick={() => nudge(-KEY_KICK, 0)}
                  className={iconBtn}
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Rotate up"
                  onClick={() => nudge(0, -KEY_KICK)}
                  className={iconBtn}
                >
                  <ChevronUp className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Rotate down"
                  onClick={() => nudge(0, KEY_KICK)}
                  className={iconBtn}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Rotate right"
                  onClick={() => nudge(KEY_KICK, 0)}
                  className={iconBtn}
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* WCAG 2.2.2: let users stop the automatic rotation */}
              {!reduce && (
                <button
                  type="button"
                  onClick={() => setSpinning((v) => !v)}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-borderGlass px-3 py-1.5 text-xs text-textMuted hover:text-textMain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
                >
                  {spinning ? (
                    <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  {spinning ? 'Pause' : 'Play'}
                </button>
              )}
            </div>
          </div>

          {/* Legend doubles as a category filter */}
          <ul
            aria-label="Filter by category"
            className="mx-auto mt-3 flex flex-wrap justify-center gap-x-2 gap-y-1 text-xs"
          >
            {GROUPS.map((g) => {
              const on = activeGroup === g;
              return (
                <li key={g}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActiveGroup(on ? null : g)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      on
                        ? 'border-primary text-textMain'
                        : 'border-transparent text-textMuted hover:text-textMain'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full"
                      style={{ background: `hsl(${HUES[g]},75%,60%)` }}
                    />
                    {g}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Real list: screen readers, keyboard users, and crawlers get every skill */}
          <details className="mt-5 text-sm">
            <summary className="cursor-pointer select-none text-center text-textMuted hover:text-textMain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              All skills as a list
            </summary>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {GROUPS.map((g) => (
                <section key={g} aria-labelledby={`${uid}-${HUES[g]}`}>
                  <h3
                    id={`${uid}-${HUES[g]}`}
                    className="mb-2 text-xs font-semibold text-textMuted"
                  >
                    {g}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {list.map(
                      (k, i) =>
                        k.group === g && (
                          <li key={k.name}>
                            <button
                              type="button"
                              aria-label={`Throw ${k.name} onto the globe`}
                              onClick={() => throwSkill(i)}
                              className="rounded-full border border-borderGlass px-3 py-1.5 text-textMain hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                              {k.name}
                            </button>
                          </li>
                        ),
                    )}
                  </ul>
                </section>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
