[![Netlify Status](https://api.netlify.com/api/v1/badges/127f3d08-2480-4cf9-82cf-ea6dc2057bc7/deploy-status)](https://app.netlify.com/sites/nazrulislambhat/deploys)

![5113755](https://github.com/nazrulislambhat/nazrul/assets/24292032/dfe226d4-dd13-4871-b655-39de74ccd992)

# Portfolio Website

Welcome to my portfolio website, showcasing my skills and talents as a Full Stack Engineer.

## Table of Contents

- [Portfolio Website](#portfolio-website)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Deployments & Branches](#deployments--branches)
  - [Branching Strategy](#branching-strategy)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Overview

This project is a personal portfolio website built using Next.js and React. It highlights my expertise, projects, and achievements as a Full Stack Engineer. The website is designed with a clean and modern UI using Tailwind CSS for styling, TypeScript for type safety, email integration for contact, and Framer Motion for smooth animations.

## Deployments & Branches

| Branch    | Description           | Deployment URL                                                              |
|-----------|-----------------------|------------------------------------------------------------------------------|
| `main`    | Production (stable)   | [nazrulislam.in](https://nazrulislam.in/), [nazrulislam.dev](https://nazrulislam.dev/) |
| `release` | Pre-release/Staging   | [nazrulislam.vercel.app](https://nazrulislam.vercel.app/)                                   |
| `develop` | Active development    | N/A – used for testing before production      |

## Branching Strategy

We follow a structured Git branching model for clean, predictable releases and smooth feature development.

main → Production (live on nazrulislam.in and nazrulislam.dev)
└── release → Staging/Pre-release testing
└── develop → Active development

### PR Flow

1. All new features and bugfixes are created from and merged into `develop`.
2. Once `develop` is stable and ready for release, a PR is made into `release`.
   - The `release` branch is deployed to the **develop domain** for pre-release testing.
3. If everything works as expected on `release`, a final PR is created from `release` into `main` to go live.

### Summary

- ✅ **`main`**: Stable production-ready code.
- 🧪 **`release`**: Tested staging builds, awaiting promotion to production.
- 🧪 **`develop`**: Active development branch.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [HeroIcons](https://heroicons.com/)
- [Lucide React](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Resend](https://resend.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Features

- Responsive design for a seamless experience on various devices.
- Interactive animations and transitions with Framer Motion.
- Contact form for easy communication.
- Clearly organized sections for showcasing skills, projects, and achievements.
- Easy-to-update content through React components.

## Getting Started

To run this project locally, follow these steps:

```bash
git clone https://github.com/nazrulislambhat/nazrul.git
cd nazrul
npm install
npm run dev
