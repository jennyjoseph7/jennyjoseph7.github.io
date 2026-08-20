---
name: ui-ux-max
description: Maximum UI/UX engineering excellence with ponytail minimalism — clean semantic markup, rich visual aesthetics, micro-interactions, responsive typography, and zero dependency bloat.
---

# UI/UX Max Skill (Ponytail-Powered)

This skill enforces elite, production-grade UI/UX design standards while maintaining strict ponytail minimalism (YAGNI, lean dependencies, standard CSS/Tailwind, high performance).

## Core Principles

### 1. Visual Hierarchy & Typography
- **Font Stack**: Modern geometric sans-serif (Inter, Outfit, System Sans) with crisp antialiasing (`antialiased`).
- **Heading Scale**: Strong contrast between `h1` (3.5rem+), `h2` (2.25rem), `h3` (1.25rem), and body text (0.875rem–1.125rem).
- **Tracking & Leading**: Negative tracking on large display headings (`tracking-tight`), comfortable line height on body copy (`leading-relaxed`).

### 2. Color System & Surfaces
- **Dark Mode First-Class**: Deep, neutral zinc/slate backgrounds (`bg-gray-950` / `bg-gray-900`), avoiding harsh pure blacks on large cards.
- **Translucent Glassmorphism**: `backdrop-blur-md bg-white/80 dark:bg-gray-900/80` with fine borders (`border-gray-200/60 dark:border-gray-800/60`).
- **Accent Palettes**: Curated accent tokens (Blue, Emerald, Purple, Amber) mapped to specific system domains.

### 3. Micro-Interactions & Motion
- **Hover Transitions**: Restrained hover translation (`hover:-translate-y-1`), smooth border highlights, and shadow elevations (`hover:shadow-xl`).
- **Interactive Feedback**: Active press states (`active:scale-[0.98]`), focus rings for accessibility (`focus-visible:ring-2`).
- **Smooth Animations**: Hardware-accelerated CSS keyframes (`fadeInUp`, subtle pulse badges).

### 4. Ponytail Discipline
- Build maximum visual fidelity using Tailwind CSS and native CSS variables.
- Zero unneeded npm packages or heavy animation runtimes when native CSS achieves the same effect.
- Clean semantic HTML structure with accessible ARIA landmarks.
