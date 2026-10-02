import { describe, expect, it, vi } from 'vitest';
import { applyImpact, hitTest, makeSim, stepSim, surfacePoint } from './sim';
import { DEFAULT_SKILLS } from './skills';

const R = 150;

function setup() {
  const s = makeSim(DEFAULT_SKILLS);
  s.w = 500;
  s.h = 450;
  s.R = R;
  s.autoSpin = false; // no idle rotation, so "settled" really means settled
  return s;
}

const front = (x: number, y: number): [number, number, number] => [
  x,
  y,
  Math.sqrt(R * R - x * x - y * y),
];

describe('surfacePoint', () => {
  it('always lands on the front of the sphere', () => {
    for (const [dx, dy] of [
      [0, 0],
      [50, -40],
      [140, 20],
      [400, 400],
      [-300, 10],
    ]) {
      const [x, y, z] = surfacePoint(dx, dy, R);
      expect(Math.hypot(x, y, z)).toBeCloseTo(R, 5);
      expect(z).toBeGreaterThanOrEqual(0);
    }
  });
});

describe('applyImpact', () => {
  it('embeds the hit skill and shoves every other skill', () => {
    const s = setup();
    const onImpact = vi.fn();
    s.onImpact = onImpact;
    applyImpact(s, 3, front(20, 10));

    expect(onImpact).toHaveBeenCalledWith(3);
    expect(s.nodes[3].stuck).toBeGreaterThan(0);
    expect(s.ripples).toHaveLength(1);
    s.nodes.forEach((n, i) => {
      if (i !== 3) expect(Math.hypot(...n.v)).toBeGreaterThan(0);
    });
  });

  it('skips the shockwave and the embed delay with reduced motion', () => {
    const s = setup();
    s.reduce = true;
    applyImpact(s, 3, front(20, 10));

    expect(s.nodes[3].stuck).toBe(0);
    s.nodes.forEach((n, i) => {
      if (i !== 3) expect(n.v).toEqual([0, 0, 0]);
    });
  });
});

describe('stepSim', () => {
  it('settles after an impact and then reports nothing moving', () => {
    const s = setup();
    applyImpact(s, 3, front(20, 10));

    let moving = true;
    for (let i = 0; i < 900 && moving; i++) moving = stepSim(s, 1 / 60);

    expect(moving).toBe(false);
    for (const n of s.nodes) {
      expect(n.d).toEqual([0, 0, 0]);
      expect(n.v).toEqual([0, 0, 0]);
    }
  });

  it('is idle when nothing is happening and auto-spin is off', () => {
    const s = setup();
    expect(stepSim(s, 1 / 60)).toBe(false);
  });

  it('keeps reporting motion while auto-spin is running', () => {
    const s = setup();
    s.autoSpin = true;
    s.rest = 5;
    expect(stepSim(s, 1 / 60)).toBe(true);
  });
});

describe('hitTest', () => {
  it('finds a chip under the pointer and ignores chips dimmed by the filter', () => {
    const s = setup();
    s.proj = [{ x: 250, y: 225, z: 100, s: 1, a: 1 }];
    s.widths = [80];

    expect(hitTest(s, 250, 225)).toBe(0);
    expect(hitTest(s, 10, 10)).toBe(-1);

    s.group = 'Backend'; // DEFAULT_SKILLS[0] is in 'Languages & Core'
    expect(hitTest(s, 250, 225)).toBe(-1);
  });
});
