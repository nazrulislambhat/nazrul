# ⚡ Nazrul Islam — Architecture & Systems Portfolio

A high-performance personal platform and architectural showcase built with Next.js App Router, TypeScript, and a custom **Liquid-Glass** design system. Focused on strict Core Web Vitals (CWV) discipline, WCAG 2.1 AA accessibility, and zero-compromise UX.

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Architecture & Design System](#-architecture--design-system)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Deployments & Environments](#-deployments--environments)
- [Branching & Promotion Strategy](#-branching--promotion-strategy)
- [Local Development](#-local-development)
- [License](#-license)

---

## 🌟 Overview

This portfolio serves as both an interactive resume and an engineering testbed. It demonstrates scalable UI patterns, predictable component lifecycles, and sub-second delivery.

* **Design Ethos:** Cyber-industrial liquid glass featuring high-contrast specular borders, deep obsidian backdrop blurs, and electric telemetry tokens (`#00F58C` signal, `#D9FF54` volt).
* **Performance Budget:** Sub-second LCP, zero runtime layout shift (`CLS < 0.01`), and automatic degradation for constrained network environments.

---

## 🎨 Architecture & Design System

The layout is built around a unified vertical rhythm and strict container boundary standards:

* **Vertical Spacing:** Cohesive section offsets (`py-8 md:py-12`) with calibrated container gutters (`px-4 sm:px-8 md:px-12 xl:px-16`).
* **Shell Layering:** Clean separation between server-side metadata/font bootstrapping (`layout.tsx`) and client-side providers (`AppClientShell`).
* **Tokens & Surfaces:**
  * `liquid-glass`: 20px blur saturation with multi-layer obsidian shadows and interior highlights.
  * `liquid-glass-subtle`: Lightweight glass substrate for nested cards and itemized specifications.

---

## ✨ Key Features

* **Dual-City Telemetry Capsule:** Zero-runtime client hook computing Indian Standard Time (`Asia/Kolkata`) with live office-hours status indicators and an interactive toggle between engineering bases (**Bengaluru [BLR]** & **Srinagar [SXR]**).
* **Real-time Core Web Vitals Observer:** In-viewport HUD tracking active **FCP**, **LCP**, and session-windowed **CLS** accumulation via the browser `PerformanceObserver` API.
* **Network-Adaptive Throttling:** Detects `saveData: true` or 2G/3G connections using the `NetworkInformation` API, automatically disabling heavy backdrop filters and physics shaders to sustain 60 FPS.
* **Print-Optimized Resume:** Dedicated `/resume` route with dual-target CSS: interactive liquid-glass UI on screen and clean 1-page monochrome output for print/PDF export.
* **Accessible Component Architecture:** Keyboard-navigable components, WCAG 2.1 AA contrast ratios, and semantic HTML throughout.

---

## 🛠️ Tech Stack

* **Core:** [Next.js (App Router)](https://nextjs.org/) + [React 19](https://react.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) + CSS Custom Variable Glass System
* **Motion:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Typography:** `Nunito`, `Pathway Extreme`, `Comfortaa`, `Inter Tight`, `Archivo` via `next/font`
* **Telemetry & Insights:** `@vercel/speed-insights` + Custom `PerformanceObserver` HUD

---

## 🚦 Deployments & Environments

| Branch    | Stage                  | Domain(s)                                                                    |
|-----------|------------------------|------------------------------------------------------------------------------|
| `main`    | 🚀 Production          | [nazrulislam.dev](https://nazrulislam.dev/), [nazrulislam.in](https://nazrulislam.in/) |
| `release` | 🧪 Pre-release/Staging | [nazrulislam.vercel.app](https://nazrulislam.vercel.app/)                    |
| `develop` | 🛠️ Active Dev          | Feature sandboxing & experimental branches                                   |

---

## 🌳 Branching & Promotion Strategy

1. **Feature/Fix:** Branch off `develop`, complete changes, and open a PR into `develop`.
2. **Staging:** Merge `develop` into `release` for smoke testing and CWV audits.
3. **Production Deployment:** Fast-forward or PR `release` into `main`.

---

## 🚀 Local Development

### Prerequisites

* Node.js `18.18+` or `20+`
* npm / pnpm / yarn

### Getting Started

```bash
# Clone the repository
git clone [https://github.com/nazrulislambhat/nazrul.git](https://github.com/nazrulislambhat/nazrul.git)
cd nazrul

# Install dependencies
npm install

# Start the local development server
npm run dev

📄 License
MIT © Nazrul Islam