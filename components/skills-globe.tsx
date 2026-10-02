'use client';

import { useEffect, useRef, useState } from 'react';
import type {
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from 'react';
import { useReducedMotion } from 'framer-motion';

/* ───────────────────────── Data ───────────────────────── */

export type Group =
  | 'Languages & Core'
  | 'Frameworks & Frontend'
  | 'Architecture & Standards'
  | 'Backend'
  | 'Tooling & Infrastructure';

export interface Skill {
  name: string;
  group: Group;
}

const HUES: Record<Group, number> = {
  'Languages & Core': 190,
  'Frameworks & Frontend': 265,
  'Architecture & Standards': 150,
  Backend: 35,
  'Tooling & Infrastructure': 330,
};

export const DEFAULT_SKILLS: Skill[] = [
  // Languages & Core
  { name: 'TypeScript', group: 'Languages & Core' },
  { name: 'JavaScript (ES6+)', group: 'Languages & Core' },
  { name: 'HTML5 / Semantic Web', group: 'Languages & Core' },
  { name: 'CSS3 / Modern Layouts', group: 'Languages & Core' },
  { name: 'Python', group: 'Languages & Core' },

  // Frameworks & Frontend
  { name: 'React.js', group: 'Frameworks & Frontend' },
  { name: 'Next.js (App Router)', group: 'Frameworks & Frontend' },
  { name: 'Framer Motion', group: 'Frameworks & Frontend' },
  { name: 'Tailwind CSS', group: 'Frameworks & Frontend' },
  { name: 'Redux Toolkit / Zustand', group: 'Frameworks & Frontend' },
  { name: 'Three.js / WebGL', group: 'Frameworks & Frontend' },
  { name: 'MUI / HeroUI', group: 'Frameworks & Frontend' },

  // Architecture & Standards
  { name: 'Design Systems', group: 'Architecture & Standards' },
  { name: 'Micro-Frontends', group: 'Architecture & Standards' },
  { name: 'Core Web Vitals', group: 'Architecture & Standards' },
  { name: 'WCAG 2.1 AA Accessibility', group: 'Architecture & Standards' },
  { name: 'Atomic Design', group: 'Architecture & Standards' },

  // Backend
  { name: 'Node.js', group: 'Backend' },
  { name: 'SQL / PostgreSQL', group: 'Backend' },
  { name: 'RESTful & GraphQL APIs', group: 'Backend' },

  // Tooling & Infrastructure
  { name: 'Webpack / Vite', group: 'Tooling & Infrastructure' },
  { name: 'Git & GitHub Actions', group: 'Tooling & Infrastructure' },
  { name: 'Cloudflare Workers / Pages', group: 'Tooling & Infrastructure' },
  { name: 'Storybook / Pattern Lab', group: 'Tooling & Infrastructure' },
  { name: 'AI-Augmented Dev Tooling', group: 'Tooling & Infrastructure' },
];

/* ───────────────────────── Types ───────────────────────── */

type Vec = [number, number, number];

interface Node {
  b: Vec; // base direction on unit sphere (world space)
  d: Vec; // displacement from home (world space, px)
  v: Vec; // velocity (world space, px/s)
  stuck: number; // seconds it stays embedded after landing
  glow: number; // highlight timer
}
interface Proj {
  x: number;
  y: number;
  z: number;
  s: number;
  a: number;
}
interface Held {
  idx: number;
  x: number;
  y: number;
  sx: number;
  sy: number;
  moved: boolean;
}
interface Drag {
  x: number;
  y: number;
  sx: number;
  sy: number;
  t: number;
  moved: boolean;
}
interface Flight {
  idx: number;
  fx: number;
  fy: number;
  tx: number;
  ty: number;
  imp: Vec;
  t: number;
  dur: number;
}
interface Ripple {
  x: number;
  y: number;
  t: number;
}

interface Sim {
  skills: Skill[];
  nodes: Node[];
  proj: Proj[];
  widths: number[];
  w: number;
  h: number;
  R: number;
  yaw: number;
  pitch: number;
  vyaw: number;
  vpitch: number; // angular velocity (rad/s) for inertia
  rest: number; // seconds since the user last touched the globe
  hover: number;
  held: Held | null; // a skill picked up for throwing
  drag: Drag | null; // globe-rotation gesture in progress
  press: number; // chip index under the pointer when a drag started (-1 = none)
  flight: Flight | null;
  ripples: Ripple[];
  reduce: boolean;
  visible: boolean;
  textColor: string;
  font: string;
  onImpact: (idx: number) => void;
}

/* ───────────────────────── Math helpers ───────────────────────── */

const TAU = Math.PI * 2;
const K = 38; // spring stiffness
const C = 5.5; // damping (under-damped = bouncy)
const FRICTION = 2.4; // rotation inertia decay (higher = stops sooner)
const MAX_SPIN = 10; // rad/s cap on fling speed

const toView = (
  x: number,
  y: number,
  z: number,
  yaw: number,
  pitch: number,
): Vec => {
  const cy = Math.cos(yaw),
    sy = Math.sin(yaw);
  const x1 = x * cy + z * sy;
  const z1 = -x * sy + z * cy;
  const cp = Math.cos(pitch),
    sp = Math.sin(pitch);
  return [x1, y * cp - z1 * sp, y * sp + z1 * cp];
};

const toWorld = (
  x: number,
  y: number,
  z: number,
  yaw: number,
  pitch: number,
): Vec => {
  const cp = Math.cos(-pitch),
    sp = Math.sin(-pitch);
  const y1 = y * cp - z * sp;
  const z1 = y * sp + z * cp;
  const cy = Math.cos(-yaw),
    sy = Math.sin(-yaw);
  return [x * cy + z1 * sy, y1, -x * sy + z1 * cy];
};

/** Screen offset (y up) -> point on the front of the sphere in view space. */
function surfacePoint(dx: number, dy: number, R: number): Vec {
  const D = 3 * R;
  const max = R * 0.97;
  let x = dx,
    y = dy;
  for (let i = 0; i < 3; i++) {
    const m = Math.hypot(x, y);
    if (m > max) {
      x *= max / m;
      y *= max / m;
    }
    const z = Math.sqrt(Math.max(R * R - x * x - y * y, 0));
    const k = D / (D - z);
    x = dx / k;
    y = dy / k;
  }
  const m = Math.hypot(x, y);
  if (m > max) {
    x *= max / m;
    y *= max / m;
  }
  return [x, y, Math.sqrt(Math.max(R * R - x * x - y * y, 0))];
}

/* Wireframe lines (unit sphere) */
const WIRE: Vec[][] = (() => {
  const lines: Vec[][] = [];
  const N = 48;
  for (const lat of [-60, -30, 0, 30, 60]) {
    const la = (lat * Math.PI) / 180;
    const pts: Vec[] = [];
    for (let i = 0; i <= N; i++) {
      const a = (i / N) * TAU;
      pts.push([
        Math.cos(la) * Math.cos(a),
        Math.sin(la),
        Math.cos(la) * Math.sin(a),
      ]);
    }
    lines.push(pts);
  }
  for (let m = 0; m < 6; m++) {
    const lon = (m * Math.PI) / 6;
    const pts: Vec[] = [];
    for (let i = 0; i <= N; i++) {
      const a = (i / N) * TAU;
      pts.push([
        Math.cos(a) * Math.cos(lon),
        Math.sin(a),
        Math.cos(a) * Math.sin(lon),
      ]);
    }
    lines.push(pts);
  }
  return lines;
})();

/* ───────────────────────── Simulation ───────────────────────── */

function makeSim(skills: Skill[]): Sim {
  const n = skills.length;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const nodes: Node[] = skills.map((_, i) => {
    const y = 1 - ((i + 0.5) * 2) / n;
    const r = Math.sqrt(1 - y * y);
    const phi = i * golden;
    return {
      b: [Math.cos(phi) * r, y, Math.sin(phi) * r],
      d: [0, 0, 0],
      v: [0, 0, 0],
      stuck: 0,
      glow: 0,
    };
  });
  return {
    skills,
    nodes,
    proj: [],
    widths: [],
    w: 0,
    h: 0,
    R: 0,
    yaw: 0.6,
    pitch: 0.35,
    vyaw: 0,
    vpitch: 0,
    rest: 2,
    hover: -1,
    held: null,
    drag: null,
    press: -1,
    flight: null,
    ripples: [],
    reduce: false,
    visible: true,
    textColor: '#fff',
    font: 'ui-sans-serif, system-ui, sans-serif',
    onImpact: () => {},
  };
}

/** The stone lands: embed the skill, then shockwave every other skill away. */
function applyImpact(s: Sim, idx: number, imp: Vec) {
  const R = s.R;
  const [wx, wy, wz] = toWorld(imp[0], imp[1], imp[2], s.yaw, s.pitch);
  const hit = s.nodes[idx];
  hit.d = [wx - hit.b[0] * R, wy - hit.b[1] * R, wz - hit.b[2] * R];
  hit.v = [0, 0, 0];
  hit.stuck = s.reduce ? 0 : 0.8;
  hit.glow = 2;

  const k = (3 * R) / (3 * R - imp[2]);
  s.ripples.push({ x: s.w / 2 + imp[0] * k, y: s.h / 2 - imp[1] * k, t: 0 });

  if (!s.reduce) {
    const sigma = R * 0.85;
    s.nodes.forEach((m, i) => {
      if (i === idx) return;
      const [qx, qy, qz] = toView(
        m.b[0] * R + m.d[0],
        m.b[1] * R + m.d[1],
        m.b[2] * R + m.d[2],
        s.yaw,
        s.pitch,
      );
      const dx = qx - imp[0],
        dy = qy - imp[1],
        dz = qz - imp[2];
      const dist = Math.hypot(dx, dy, dz) + 1e-3;
      // nearby skills get hit hardest, but everything moves
      const fall = 0.3 + 0.7 * Math.exp(-(dist * dist) / (2 * sigma * sigma));
      const mag = 4.5 * R * fall * (0.9 + Math.random() * 0.2);
      const [jx, jy, jz] = toWorld(
        (dx / dist) * mag,
        (dy / dist) * mag,
        (dz / dist + 0.25) * mag,
        s.yaw,
        s.pitch,
      );
      m.v[0] += jx;
      m.v[1] += jy;
      m.v[2] += jz;
      m.stuck = 0;
    });
  }
  s.onImpact(idx);
}

function launch(
  s: Sim,
  idx: number,
  from: { x: number; y: number } | null,
  aim: { x: number; y: number } | null,
) {
  if (s.flight || !s.w) return;
  const cx = s.w / 2,
    cy = s.h / 2,
    R = s.R;
  const jitter = () => (Math.random() - 0.5) * R * 0.6;
  const imp = surfacePoint(
    aim ? aim.x - cx : jitter(),
    aim ? -(aim.y - cy) : jitter(),
    R,
  );
  const k = (3 * R) / (3 * R - imp[2]);
  const tx = cx + imp[0] * k,
    ty = cy - imp[1] * k;

  let start = from;
  if (!start) {
    const p = s.proj[idx];
    start = p && p.z > 0 ? { x: p.x, y: p.y } : { x: cx, y: s.h + 30 };
  }
  if (s.reduce) {
    applyImpact(s, idx, imp);
    return;
  }

  const dist = Math.hypot(tx - start.x, ty - start.y);
  s.flight = {
    idx,
    fx: start.x,
    fy: start.y,
    tx,
    ty,
    imp,
    t: 0,
    dur: 0.2 + Math.min(dist / (R * 8), 0.22),
  };
}

function stepSim(s: Sim, dt: number) {
  // Rotation: a drag sets the angles directly. After release, inertia carries
  // on, then the slow idle spin eases back in.
  if (!s.drag) {
    s.yaw += s.vyaw * dt;
    s.pitch += s.vpitch * dt;
    const decay = Math.exp(-FRICTION * dt);
    s.vyaw *= decay;
    s.vpitch *= decay;
    s.rest += dt;
    const idle = !s.reduce && !s.held && !s.flight && s.hover < 0;
    if (idle && s.rest > 1.2) s.yaw += dt * 0.25 * Math.min(1, s.rest - 1.2);
  } else {
    s.rest = 0;
  }
  // keep angles bounded so floats stay precise after long sessions
  if (Math.abs(s.yaw) > TAU * 8) s.yaw %= TAU;
  if (Math.abs(s.pitch) > TAU * 8) s.pitch %= TAU;

  for (const r of s.ripples) r.t += dt;
  s.ripples = s.ripples.filter((r) => r.t < 1.2);

  for (const n of s.nodes) {
    n.glow = Math.max(0, n.glow - dt);
    if (n.stuck > 0) {
      n.stuck -= dt;
      continue;
    }
    for (let a = 0; a < 3; a++) {
      const acc = -K * n.d[a] - C * n.v[a];
      n.v[a] += acc * dt;
      n.d[a] += n.v[a] * dt;
    }
  }

  if (s.flight) {
    s.flight.t += dt;
    if (s.flight.t >= s.flight.dur) {
      const { idx, imp } = s.flight;
      s.flight = null;
      applyImpact(s, idx, imp);
    }
  }
}

function hitTest(s: Sim, px: number, py: number) {
  let best = -1,
    bestZ = -Infinity;
  s.proj.forEach((p, i) => {
    if (!p || p.z < -s.R * 0.15) return;
    if (s.held?.idx === i || s.flight?.idx === i) return;
    const hw = ((s.widths[i] + 34) * p.s) / 2;
    const hh = 13 * p.s + 4;
    if (Math.abs(px - p.x) <= hw && Math.abs(py - p.y) <= hh && p.z > bestZ) {
      best = i;
      bestZ = p.z;
    }
  });
  return best;
}

/* ───────────────────────── Rendering ───────────────────────── */

function drawChip(
  ctx: CanvasRenderingContext2D,
  s: Sim,
  i: number,
  x: number,
  y: number,
  sc: number,
  alpha: number,
  glow: number,
  accent: string,
) {
  const hue = HUES[s.skills[i].group];
  const hgt = 26 * sc;
  const wid = (s.widths[i] + 34) * sc;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.beginPath();
  ctx.roundRect(x - wid / 2, y - hgt / 2, wid, hgt, hgt / 2);
  ctx.fillStyle = `hsla(${hue},70%,55%,0.18)`;
  ctx.fill();
  if (glow > 0) {
    ctx.save();
    ctx.globalAlpha = alpha * Math.min(1, glow) * 0.35;
    ctx.fillStyle = accent;
    ctx.fill();
    ctx.restore();
  }
  ctx.lineWidth = glow > 0 ? 1.8 : 1;
  ctx.strokeStyle = glow > 0 ? accent : `hsla(${hue},70%,60%,0.55)`;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x - wid / 2 + 12 * sc, y, 3 * sc, 0, TAU);
  ctx.fillStyle = `hsl(${hue},75%,60%)`;
  ctx.fill();

  ctx.font = `600 ${13 * sc}px ${s.font}`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  ctx.fillStyle = s.textColor;
  ctx.fillText(s.skills[i].name, x - wid / 2 + 22 * sc, y + 0.5);
  ctx.restore();
}

function drawScene(ctx: CanvasRenderingContext2D, s: Sim, accent: string) {
  const { w, h, R } = s;
  const cx = w / 2,
    cy = h / 2,
    D = 3 * R;
  ctx.clearRect(0, 0, w, h);

  // Globe body
  ctx.save();
  ctx.globalAlpha = 0.16;
  const g = ctx.createRadialGradient(
    cx - R * 0.35,
    cy - R * 0.4,
    R * 0.1,
    cx,
    cy,
    R,
  );
  g.addColorStop(0, accent);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, TAU);
  ctx.fill();
  ctx.globalAlpha = 0.3;
  ctx.strokeStyle = accent;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();

  // Wireframe (front/back batches)
  const front = new Path2D(),
    back = new Path2D();
  for (const line of WIRE) {
    let prev: { sx: number; sy: number; z: number } | null = null;
    for (const pt of line) {
      const [x, y, z] = toView(pt[0] * R, pt[1] * R, pt[2] * R, s.yaw, s.pitch);
      const k = D / (D - z);
      const cur = { sx: cx + x * k, sy: cy - y * k, z };
      if (prev) {
        const path = (cur.z + prev.z) / 2 >= 0 ? front : back;
        path.moveTo(prev.sx, prev.sy);
        path.lineTo(cur.sx, cur.sy);
      }
      prev = cur;
    }
  }
  ctx.save();
  ctx.strokeStyle = s.textColor;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.05;
  ctx.stroke(back);
  ctx.globalAlpha = 0.16;
  ctx.stroke(front);
  ctx.restore();

  // Impact ripples (clipped to the globe)
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, TAU);
  ctx.clip();
  for (const r of s.ripples) {
    for (let j = 0; j < 2; j++) {
      const p = (r.t - j * 0.12) / 0.9;
      if (p <= 0 || p >= 1) continue;
      ctx.globalAlpha = (1 - p) * 0.8;
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2.2 * (1 - p) + 0.6;
      ctx.beginPath();
      ctx.arc(r.x, r.y, p * R * 1.4, 0, TAU);
      ctx.stroke();
    }
  }
  ctx.restore();

  // Project skills, depth-sort, draw
  const order: number[] = [];
  s.nodes.forEach((n, i) => {
    const [vx, vy, vz] = toView(
      n.b[0] * R + n.d[0],
      n.b[1] * R + n.d[1],
      n.b[2] * R + n.d[2],
      s.yaw,
      s.pitch,
    );
    const k = D / (D - Math.min(vz, D * 0.8));
    const t = Math.min(Math.max((vz + R) / (2 * R), 0), 1);
    s.proj[i] = {
      x: cx + vx * k,
      y: cy - vy * k,
      z: vz,
      s: 0.62 + 0.42 * t,
      a: 0.28 + 0.72 * t,
    };
    if (s.held?.idx !== i && s.flight?.idx !== i) order.push(i);
  });
  order.sort((a, b) => s.proj[a].z - s.proj[b].z);
  for (const i of order) {
    const p = s.proj[i];
    drawChip(
      ctx,
      s,
      i,
      p.x,
      p.y,
      p.s * (i === s.hover ? 1.1 : 1),
      p.a,
      s.nodes[i].glow,
      accent,
    );
  }

  // Landing reticle while dragging a skill
  if (s.held?.moved) {
    const imp = surfacePoint(s.held.x - cx, -(s.held.y - cy), R);
    const k = D / (D - imp[2]);
    ctx.save();
    ctx.strokeStyle = accent;
    ctx.globalAlpha = 0.85;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(cx + imp[0] * k, cy - imp[1] * k, 12, 0, TAU);
    ctx.stroke();
    ctx.restore();
  }

  // Thrown skill with motion trail
  const f = s.flight;
  if (f) {
    const t = Math.min(f.t / f.dur, 1);
    for (let j = 3; j >= 0; j--) {
      const e = Math.max(0, Math.pow(t, 2.2) - j * 0.07);
      drawChip(
        ctx,
        s,
        f.idx,
        f.fx + (f.tx - f.fx) * e,
        f.fy + (f.ty - f.fy) * e,
        1.4 - 0.55 * e,
        j === 0 ? 1 : 0.22 / j,
        1,
        accent,
      );
    }
  }

  // Held skill
  if (s.held) {
    ctx.save();
    ctx.shadowColor = accent;
    ctx.shadowBlur = 18;
    drawChip(ctx, s, s.held.idx, s.held.x, s.held.y, 1.35, 1, 1, accent);
    ctx.restore();
  }
}

/* ───────────────────────── Component ───────────────────────── */

interface SkillGlobeProps {
  skills?: Skill[];
  /** Hex colour of your `primary` token (canvas can't read Tailwind classes). */
  accent?: string;
  /** Section heading. Pass an empty string to hide it. */
  title?: string;
  /** Anchor id for in-page navigation. */
  id?: string;
  className?: string;
  /**
   * true  → a finger on the globe always rotates it (the page can't scroll from there).
   * false → only horizontal drags rotate; vertical drags scroll the page.
   */
  lockTouchScroll?: boolean;
}

export default function SkillGlobe({
  skills = DEFAULT_SKILLS,
  accent = '#f43c00',
  title = 'Skills, thrown into orbit.',
  id = 'skills',
  className = '',
  lockTouchScroll = false,
}: SkillGlobeProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sim = useRef<Sim | null>(null);
  const pressTimer = useRef<number | null>(null);
  const reduce = useReducedMotion();
  const reduceRef = useRef(false);
  reduceRef.current = !!reduce;

  const [selected, setSelected] = useState<number | null>(null);
  const [throws, setThrows] = useState(0);

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
    const s = makeSim(skills);
    sim.current = s;
    s.onImpact = (i) => {
      setSelected(i);
      setThrows((n) => n + 1);
    };

    const readStyle = () => {
      const cs = getComputedStyle(canvas);
      s.textColor = cs.color;
      s.font = cs.fontFamily || s.font;
    };
    const measure = () => {
      ctx.font = `600 13px ${s.font}`;
      s.widths = skills.map((k) => ctx.measureText(k.name).width);
    };
    readStyle();

    const resize = () => {
      const w = Math.min(wrap.clientWidth, 560);
      if (!w) return;
      const h = Math.round(w * 0.9);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      s.w = w;
      s.h = h;
      s.R = Math.min(w * 0.3, h * 0.36);
      measure();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();
    document.fonts?.ready.then(() => {
      readStyle();
      measure();
    });

    const io = new IntersectionObserver(([e]) => {
      s.visible = e.isIntersecting;
    });
    io.observe(canvas);

    let raf = 0,
      last = 0,
      frame = 0;
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
      if (frame++ % 90 === 0) readStyle();
      stepSim(s, dt);
      drawScene(ctx, s, accent);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [skills, accent]);

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

    // Mouse: grabbing a chip picks it up immediately
    if (idx >= 0 && e.pointerType === 'mouse') {
      s.held = { idx, x: p.x, y: p.y, sx: p.x, sy: p.y, moved: false };
      return;
    }

    // Everything else starts a rotation drag
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

    // Touch/pen: holding still on a chip picks it up instead
    clearPress();
    if (idx >= 0) {
      pressTimer.current = window.setTimeout(() => {
        pressTimer.current = null;
        const d = s.drag;
        if (!d || d.moved || s.press !== idx) return;
        s.drag = null;
        s.held = { idx, x: d.x, y: d.y, sx: d.sx, sy: d.sy, moved: false };
        navigator.vibrate?.(12);
      }, 260);
    }
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    const s = sim.current;
    if (!s) return;
    const p = local(e);

    if (s.held) {
      s.held.x = p.x;
      s.held.y = p.y;
      if (Math.hypot(p.x - s.held.sx, p.y - s.held.sy) > 6) s.held.moved = true;
      return;
    }

    if (s.drag) {
      const d = s.drag;
      if (!d.moved) {
        if (Math.hypot(p.x - d.sx, p.y - d.sy) < 6) return; // tap slop
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

    s.hover = s.flight ? -1 : hitTest(s, p.x, p.y);
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    const s = sim.current;
    if (!s) return;
    e.currentTarget.style.cursor = '';
    clearPress();

    if (s.held) {
      const h = s.held;
      s.held = null;
      // Dragged: aim where released. Plain click: toss it near the centre.
      launch(s, h.idx, { x: h.x, y: h.y }, h.moved ? local(e) : null);
      return;
    }

    const d = s.drag;
    if (d) {
      s.drag = null;
      if (!d.moved) {
        if (s.press >= 0) launch(s, s.press, null, null); // quick tap on a skill
      } else if (s.reduce || performance.now() - d.t > 90) {
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
    }
  };

  const onPointerLeave = () => {
    if (sim.current) sim.current.hover = -1;
  };

  /* ── Keyboard: arrow keys spin the globe ── */
  const onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    const s = sim.current;
    if (!s) return;
    const k = 2.2;
    const dir = Math.cos(s.pitch) >= 0 ? 1 : -1;
    const moves: Record<string, [number, number]> = {
      ArrowLeft: [-dir * k, 0],
      ArrowRight: [dir * k, 0],
      ArrowUp: [0, -k],
      ArrowDown: [0, k],
    };
    const m = moves[e.key];
    if (!m) return;
    e.preventDefault();
    s.rest = 0;
    if (s.reduce) {
      s.yaw += m[0] * 0.15; // step, no glide
      s.pitch += m[1] * 0.15;
    } else {
      s.vyaw += m[0];
      s.vpitch += m[1];
    }
  };

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden bg-background text-textMain pt-8 md:pt-12 pb-16 md:pb-24 selection:bg-primary selection:text-secondary ${className}`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="p-8 md:p-12 xl:p-14 rounded-3xl liquid-glass border border-borderGlass">
          {title && (
            <h2 className="text-3xl uppercase sm:text-4xl md:text-5xl font-extrabold tracking-tight text-textMain mb-8 leading-tight">
              {title}
            </h2>
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
              aria-label="Interactive globe of my skills. Drag to rotate it, or drag a skill and release it over the globe to throw it. Keyboard and tap alternatives are provided."
              className="mx-auto block cursor-grab select-none text-textMain"
              style={{ touchAction: lockTouchScroll ? 'none' : 'pan-y' }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerCancel}
              onPointerLeave={onPointerLeave}
            />
          </div>

          {/* Legend */}
          <ul className="mx-auto mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-textMuted">
            {(Object.keys(HUES) as Group[]).map((g) => (
              <li key={g} className="inline-flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full"
                  style={{ background: `hsl(${HUES[g]},75%,60%)` }}
                />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
