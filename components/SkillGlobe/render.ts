import { BASE_FONT, CHIP_PAD, HUES } from './constants';
import { rotOf, surfacePoint, TAU, toView } from './sim';
import type { Rot, Sim, Vec } from './sim';

/* Wireframe lines (unit sphere). 32 segments per ring is indistinguishable
   from 48 at this size and costs a third less per frame. */
const WIRE: Vec[][] = (() => {
  const lines: Vec[][] = [];
  const N = 32;
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

function drawChip(
  ctx: CanvasRenderingContext2D,
  s: Sim,
  i: number,
  x: number,
  y: number,
  sc: number,
  alpha: number,
  glow: number,
) {
  const hue = HUES[s.skills[i].group];
  const dim = s.group && s.skills[i].group !== s.group ? 0.2 : 1;
  const k = sc * s.chip;
  const hgt = 26 * k;
  const wid = (s.widths[i] + CHIP_PAD) * k;
  ctx.save();
  ctx.globalAlpha = alpha * dim;
  ctx.beginPath();
  ctx.roundRect(x - wid / 2, y - hgt / 2, wid, hgt, hgt / 2);
  ctx.fillStyle = `hsla(${hue},70%,55%,0.18)`;
  ctx.fill();
  if (glow > 0) {
    ctx.save();
    ctx.globalAlpha = alpha * dim * Math.min(1, glow) * 0.35;
    ctx.fillStyle = s.accent;
    ctx.fill();
    ctx.restore();
  }
  ctx.lineWidth = glow > 0 ? 1.8 : 1;
  ctx.strokeStyle = glow > 0 ? s.accent : `hsla(${hue},70%,60%,0.55)`;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x - wid / 2 + 12 * k, y, 3 * k, 0, TAU);
  ctx.fillStyle = `hsl(${hue},75%,60%)`;
  ctx.fill();

  ctx.font = `600 ${BASE_FONT * k}px ${s.font}`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  ctx.fillStyle = s.textColor;
  ctx.fillText(s.labels[i], x - wid / 2 + 22 * k, y + 0.5);
  ctx.restore();
}

function drawWireframe(
  ctx: CanvasRenderingContext2D,
  s: Sim,
  rot: Rot,
  cx: number,
  cy: number,
) {
  const { R } = s;
  const D = 3 * R;
  const front = new Path2D(),
    back = new Path2D();
  for (const line of WIRE) {
    let px = 0,
      py = 0,
      pz = 0,
      has = false;
    for (const pt of line) {
      const [x, y, z] = toView(pt[0] * R, pt[1] * R, pt[2] * R, rot);
      const k = D / (D - z);
      const sx = cx + x * k,
        sy = cy - y * k;
      if (has) {
        const path = (z + pz) / 2 >= 0 ? front : back;
        path.moveTo(px, py);
        path.lineTo(sx, sy);
      }
      px = sx;
      py = sy;
      pz = z;
      has = true;
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
}

export function drawScene(ctx: CanvasRenderingContext2D, s: Sim) {
  const { w, h, R, accent } = s;
  const cx = w / 2,
    cy = h / 2,
    D = 3 * R;
  const rot = rotOf(s.yaw, s.pitch); // computed once per frame
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

  drawWireframe(ctx, s, rot, cx, cy);

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
      rot,
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
      );
    }
  }

  // Held skill
  if (s.held) {
    ctx.save();
    ctx.shadowColor = accent;
    ctx.shadowBlur = 18;
    drawChip(ctx, s, s.held.idx, s.held.x, s.held.y, 1.35, 1, 1);
    ctx.restore();
  }
}
