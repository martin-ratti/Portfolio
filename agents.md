# AGENTS.md

## Project Overview
This is the personal portfolio website of Martín Ratti, a Full Stack Developer and Systems Engineering student. The project is built with Astro 5, TypeScript, and React, featuring a modern Glassmorphism design and internationalization.

## Tech Stack
- **Core:** Astro 5, TypeScript
- **Frontend:** React 18, Tailwind CSS v4
- **Styling:** Glassmorphism UI, Dark Mode support
- **I18n:** English and Spanish support

## Setup Commands
- Install dependencies: `npm install`
- Start dev server: `npm run dev` (running on http://localhost:4321)
- Build for production: `npm run build`

## Code Style
- **Framework:** Astro components (.astro) are the main building blocks.
- **Logic:** TypeScript for type safety.
- **Styling:** Tailwind CSS utility classes and global CSS variables for themes.
- **Directory Structure:**
  - `src/components`: UI components (including `ProjectDetail.astro`, `ProjectGallery.astro`)
  - `src/pages`: Routes and pages (including dynamic `/proyectos/[slug].astro` and `/en/proyectos/[slug].astro`)
  - `src/layouts`: Layout wrappers
  - `src/data`: Structured data (`projects.ts`)
  - `src/utils`: Helper functions (`projectAssets.ts`, i18n logic, chat)
  - `public/projects`: Project screenshot assets with automatic `.webp` / `.png` / `.svg` resolution

## Key Features
- **Performance:** Optimized for speed with Astro (prerendered dynamic case studies).
- **Accessibility:** Semantic HTML, ARIA labels, and keyboard-navigable Lightbox (`Esc`, `←`, `→`).
- **SEO & Social Sharing:** Dynamic Open Graph images per project, structured data JSON-LD, and bidirectional `hreflang`.
- **Interactive Case Studies:** Full case studies with interactive image gallery, key features, and architecture breakdowns.
