/* Category colours. Group is derived from this so the two can't drift apart. */
export const HUES = {
  'Languages & Core': 190,
  'Frameworks & Frontend': 265,
  'Architecture & Standards': 150,
  Backend: 35,
  'Tooling & Infrastructure': 330,
} as const;

export type Group = keyof typeof HUES;
export const GROUPS = Object.keys(HUES) as Group[];

export interface Skill {
  name: string;
  group: Group;
  /** Shorter label used on narrow screens, where long names overlap. */
  short?: string;
  /** One line shown under the skill name when it is selected. */
  blurb?: string;
}

/* ── Physics ── */
export const SPRING_K = 38; // spring stiffness
export const SPRING_C = 5.5; // damping (under-damped = bouncy)
export const FRICTION = 2.4; // rotation inertia decay (higher = stops sooner)
export const MAX_SPIN = 10; // rad/s cap on fling speed
export const IMPULSE = 4.5; // shockwave strength, in globe radii per second
export const STUCK_SECONDS = 0.8; // how long a thrown skill stays embedded
export const SETTLE_EPS = 0.05; // below this a skill snaps home and stops animating

/* ── Idle rotation ── */
export const IDLE_SPIN = 0.25; // rad/s
export const IDLE_DELAY = 1.2; // seconds after the last touch before it resumes

/* ── Input ── */
export const TAP_SLOP = 6; // px of movement that turns a tap into a drag
export const HOLD_MS_TOUCH = 260; // hold on a skill to pick it up (touch/pen)
export const HOLD_MS_MOUSE = 180; // same, for a mouse
export const FLING_PAUSE_MS = 90; // pausing this long before release cancels the fling
export const KEY_KICK = 2.2; // rad/s added per arrow key / rotate button press

/* ── Chips ── */
export const BASE_FONT = 13;
export const CHIP_PAD = 34;
export const FALLBACK_ACCENT = '#f43c00';
