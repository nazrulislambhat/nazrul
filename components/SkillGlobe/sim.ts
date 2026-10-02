import {
  CHIP_PAD,
  FALLBACK_ACCENT,
  FRICTION,
  IDLE_DELAY,
  IDLE_SPIN,
  IMPULSE,
  SETTLE_EPS,
  SPRING_C,
  SPRING_K,
  STUCK_SECONDS,
} from './constants';
import type { Group, Skill } from './constants';

/* ───────────────────────── Types ───────────────────────── */

export type Vec = [number, number, number];

/** Pre-computed sin/cos of the current rotation, shared by every point in a frame. */
export interface Rot {
  cy: number;
  sy: number;
  cp: number;
  sp: number;
}

export interface GlobeNode {
  b: Vec; // base direction on unit sphere (world space)
  d: Vec; // displacement from home (world space, px)
  v: Vec; // velocity (world space, px/s)
  stuck: number; // seconds it stays embedded after landing
  glow: number; // highlight timer
}
export interface Proj {
  x: number;
  y: number;
  z: number;
  s: number;
  a: number;
}
export interface Held {
  idx: number;
  x: number;
  y: number;
  sx: number;
  sy: number;
  moved: boolean;
}
export interface Drag {
  x: number;
  y: number;
  sx: number;
  sy: number;
  t: number;
  moved: boolean;
}
export interface Flight {
  idx: number;
  fx: number;
  fy: number;
  tx: number;
  ty: number;
  imp: Vec;
  t: number;
  dur: number;
}
export interface Ripple {
  x: number;
  y: number;
  t: number;
}

export interface Sim {
  skills: Skill[];
  labels: string[]; // what is drawn on each chip (full or short name)
  nodes: GlobeNode[];
  proj: Proj[];
  widths: number[]; // measured label widths at BASE_FONT
  w: number;
  h: number;
  R: number;
  chip: number; // chip scale, shrinks on small screens
  compact: boolean;
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
  group: Group | null; // active legend filter
  reduce: boolean;
  autoSpin: boolean; // idle rotation on/off (user-controlled)
  visible: boolean;
  dirty: boolean; // something changed outside the sim; redraw once
  textColor: string;
  accent: string;
  font: string;
  onImpact: (idx: number) => void;
}

/* ───────────────────────── Math helpers ───────────────────────── */

export const TAU = Math.PI * 2;

export const rotOf = (yaw: number, pitch: number): Rot => ({
  cy: Math.cos(yaw),
  sy: Math.sin(yaw),
  cp: Math.cos(pitch),
  sp: Math.sin(pitch),
});

export const toView = (x: number, y: number, z: number, r: Rot): Vec => {
  const x1 = x * r.cy + z * r.sy;
  const z1 = -x * r.sy + z * r.cy;
  return [x1, y * r.cp - z1 * r.sp, y * r.sp + z1 * r.cp];
};

export const toWorld = (x: number, y: number, z: number, r: Rot): Vec => {
  const y1 = y * r.cp + z * r.sp;
  const z1 = -y * r.sp + z * r.cp;
  return [x * r.cy - z1 * r.sy, y1, x * r.sy + z1 * r.cy];
};

/** Screen offset (y up) -> point on the front of the sphere in view space. */
export function surfacePoint(dx: number, dy: number, R: number): Vec {
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

/* ───────────────────────── Simulation ───────────────────────── */

export function makeSim(skills: Skill[]): Sim {
  const n = skills.length;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const nodes: GlobeNode[] = skills.map((_, i) => {
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
    labels: skills.map((k) => k.name),
    nodes,
    proj: [],
    widths: [],
    w: 0,
    h: 0,
    R: 0,
    chip: 1,
    compact: false,
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
    group: null,
    reduce: false,
    autoSpin: true,
    visible: true,
    dirty: true,
    textColor: '#fff',
    accent: FALLBACK_ACCENT,
    font: 'ui-sans-serif, system-ui, sans-serif',
    onImpact: () => {},
  };
}

/** The stone lands: embed the skill, then shockwave every other skill away. */
export function applyImpact(s: Sim, idx: number, imp: Vec) {
  const R = s.R;
  const rot = rotOf(s.yaw, s.pitch);
  const [wx, wy, wz] = toWorld(imp[0], imp[1], imp[2], rot);
  const hit = s.nodes[idx];
  hit.d = [wx - hit.b[0] * R, wy - hit.b[1] * R, wz - hit.b[2] * R];
  hit.v = [0, 0, 0];
  hit.stuck = s.reduce ? 0 : STUCK_SECONDS;
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
        rot,
      );
      const dx = qx - imp[0],
        dy = qy - imp[1],
        dz = qz - imp[2];
      const dist = Math.hypot(dx, dy, dz) + 1e-3;
      // nearby skills get hit hardest, but everything moves
      const fall = 0.3 + 0.7 * Math.exp(-(dist * dist) / (2 * sigma * sigma));
      const mag = IMPULSE * R * fall * (0.9 + Math.random() * 0.2);
      const [jx, jy, jz] = toWorld(
        (dx / dist) * mag,
        (dy / dist) * mag,
        (dz / dist + 0.25) * mag,
        rot,
      );
      m.v[0] += jx;
      m.v[1] += jy;
      m.v[2] += jz;
      m.stuck = 0;
    });
  }
  s.onImpact(idx);
}

export function launch(
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

/**
 * Advance the simulation. Returns true while anything is still moving, so the
 * caller can skip redrawing a settled globe.
 */
export function stepSim(s: Sim, dt: number): boolean {
  let moving = false;

  // Rotation: a drag sets the angles directly. After release, inertia carries
  // on, then the slow idle spin eases back in.
  if (!s.drag) {
    s.yaw += s.vyaw * dt;
    s.pitch += s.vpitch * dt;
    const decay = Math.exp(-FRICTION * dt);
    s.vyaw *= decay;
    s.vpitch *= decay;
    if (Math.abs(s.vyaw) < 0.002) s.vyaw = 0;
    if (Math.abs(s.vpitch) < 0.002) s.vpitch = 0;
    if (s.vyaw !== 0 || s.vpitch !== 0) moving = true;

    s.rest += dt;
    const idle = s.autoSpin && !s.reduce && !s.held && !s.flight && s.hover < 0;
    if (idle && s.rest > IDLE_DELAY) {
      s.yaw += dt * IDLE_SPIN * Math.min(1, s.rest - IDLE_DELAY);
      moving = true;
    }
  } else {
    s.rest = 0;
    moving = true;
  }
  if (s.held) moving = true;

  // keep angles bounded so floats stay precise after long sessions
  if (Math.abs(s.yaw) > TAU * 8) s.yaw %= TAU;
  if (Math.abs(s.pitch) > TAU * 8) s.pitch %= TAU;

  for (const r of s.ripples) r.t += dt;
  s.ripples = s.ripples.filter((r) => r.t < 1.2);
  if (s.ripples.length) moving = true;

  for (const n of s.nodes) {
    if (n.glow > 0) {
      n.glow = Math.max(0, n.glow - dt);
      moving = true;
    }
    if (n.stuck > 0) {
      n.stuck -= dt;
      moving = true;
      continue;
    }
    let energy = 0;
    for (let a = 0; a < 3; a++) {
      const acc = -SPRING_K * n.d[a] - SPRING_C * n.v[a];
      n.v[a] += acc * dt;
      n.d[a] += n.v[a] * dt;
      energy += Math.abs(n.d[a]) + Math.abs(n.v[a]);
    }
    if (energy === 0) continue;
    moving = true;
    if (energy < SETTLE_EPS) {
      n.d = [0, 0, 0]; // snap home so the globe can go fully idle
      n.v = [0, 0, 0];
    }
  }

  if (s.flight) {
    moving = true;
    s.flight.t += dt;
    if (s.flight.t >= s.flight.dur) {
      const { idx, imp } = s.flight;
      s.flight = null;
      applyImpact(s, idx, imp);
    }
  }

  return moving;
}

export function hitTest(s: Sim, px: number, py: number) {
  let best = -1,
    bestZ = -Infinity;
  s.proj.forEach((p, i) => {
    if (!p || p.z < -s.R * 0.15) return;
    if (s.held?.idx === i || s.flight?.idx === i) return;
    if (s.group && s.skills[i].group !== s.group) return; // dimmed by the filter
    const hw = ((s.widths[i] + CHIP_PAD) * p.s * s.chip) / 2;
    const hh = 13 * p.s * s.chip + 4;
    if (Math.abs(px - p.x) <= hw && Math.abs(py - p.y) <= hh && p.z > bestZ) {
      best = i;
      bestZ = p.z;
    }
  });
  return best;
}
