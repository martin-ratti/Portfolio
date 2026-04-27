# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Astro dev server at http://localhost:4321
npm run build     # Production build → dist/ (static) + Vercel function for /api/chat
npm run preview   # Preview the production build locally
npm run astro     # Astro CLI (e.g. npm run astro -- check for type-checking)
```

No test runner, linter, or formatter is configured. `@astrojs/check` is installed — run `npm run astro -- check` for diagnostics.

## Architecture

### Rendering model (hybrid)
- `astro.config.mjs` sets `output: 'static'` with the `@astrojs/vercel` adapter.
- All pages are prerendered to static HTML **except** `src/pages/api/chat.ts`, which opts into SSR via `export const prerender = false`. This is the only Vercel Function. Any new SSR endpoint must add the same export, otherwise it gets prerendered and breaks at runtime.
- Page routes live under `src/pages/`. Spanish is the default at `/`; English is mirrored under `/en/`. Both pages import the same components — translations come from `src/i18n/`, not from forked component code.

### i18n
- `src/i18n/ui.ts` is the single source of truth for all user-facing strings (keys grouped by section: `nav.*`, `hero.*`, `chat.*`, `contact.form.*`, etc.).
- `src/i18n/utils.ts` exposes `getLangFromUrl(url)` (parses the first path segment) and `useTranslations(lang)` (returns a `t(key)` function with fallback to `defaultLang`).
- When adding a string: add the key to **both** `es` and `en` blocks in `ui.ts`, then call `t('your.key')` in the component. Never hardcode UI text in `.astro` files.

### Layout & view transitions
- `src/layouts/Layout.astro` wraps every page. It owns: `<head>` metadata (OG, hreflang, JSON-LD via `set:html={JSON.stringify(...)}`), the theme bootstrap inline script (runs before paint, reads `localStorage.theme`), the global glass-card spotlight effect, and `<ChatWidget />`.
- `<ClientRouter />` (Astro view transitions) is enabled. **Consequence:** scripts must re-initialize on `astro:page-load` (or `astro:after-swap` for theme), because the document is not fully reloaded between routes. Every component script in this repo follows that pattern — preserve it when adding new client-side logic.
- Cleanup pattern: hot-path listeners use `AbortController` so re-init aborts the prior controller (`Stack.astro`, `Projects.astro`, Layout spotlight). Do not use `cloneNode` to "reset" listeners.

### Cross-component communication
The Stack ↔ Projects filter uses a **DOM CustomEvent** bus, not shared state:
- `Stack.astro` dispatches `window.dispatchEvent(new CustomEvent('filter-projects', { detail: { skill } }))` when a skill chip is clicked.
- `Projects.astro` listens for `filter-projects` and toggles `.is-match` / `.is-dimmed` classes on `.project-card` elements (data-techs JSON attribute holds the project's tag list).
- Filter visuals are CSS classes (in `Projects.astro` `<style>`), not inline styles — toggling classes avoids reflows.

### Chat widget
- UI: `src/components/ChatWidget.astro` (single root `#chat-widget` — the inner `chat-window` toggles `inert` + `aria-hidden` when closed; do not nest a second `id="chat-widget"`).
- Client logic: `src/utils/chat/chatApi.ts` (POSTs to `/api/chat`) + `src/utils/chat/chatUi.ts` (DOM rendering, `marked` for assistant markdown, focus trap).
- Server: `src/pages/api/chat.ts` proxies to OpenRouter (`OPENROUTER_API_KEY` env var). It enforces an **origin allowlist** (`martinratti.com.ar`, `www`, `martin-ratti-portfolio.vercel.app`, localhost:4321/3000) and an **in-memory per-IP rate limit** (10 req/min). Adding a new deployed origin requires extending `ALLOWED_ORIGINS` in that file.
- Context source: `llms.txt` at the repo root. It's read once and cached at module scope (cold-start cost only). Project facts the AI cites must be edited there, not in the system prompt.
- Model fallback: `chat.ts` iterates `models[]` (free OpenRouter tier) and breaks on the first non-error response.

### Data
- `src/data/projects.ts` and `src/data/skills.ts` are typed (`Project`, `Skills`). `Project.tags` strings must match `Skill.name` strings exactly — that string match is what powers the Stack→Projects filter. When adding a tag, mirror the canonical name from `skills.ts`.
- `Project.description` is a `{ es, en }` object; `ProjectCard` reads `project.description[lang]`.

### Styling
- Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config`). Custom variant `@custom-variant dark (&:where(.dark, .dark *))` defined in `src/styles/global.css` — dark mode is class-based and toggled by Navbar.
- Reusable utilities live in `global.css` under `@layer utilities`: `.glass-card` (with the spotlight `::before` driven by `--mouse-x` / `--mouse-y` CSS vars set from `Layout.astro`'s `mousemove` handler), `.text-gradient`, `.skip-link`, `.animate-fade-in-up`.
- `prefers-reduced-motion` is honored globally (kills animations + spotlight `::before` + `scroll-smooth`). Any new motion should respect this — either CSS-level via the existing media query or JS-level by guarding on `matchMedia('(prefers-reduced-motion: reduce)')`.

### Section IDs (anchor targets)
`#inicio` (Hero) · `#sobre-mi` (AboutMe) · `#proyectos` (Projects) · `#contacto` (Contact). Navbar links and the language toggle preserve hash state via `history.pushState`. Don't reuse these IDs on other elements.

### Icons
Two strategies coexist: `astro-icon` (`<Icon name="mdi:..." />`, with packs declared in `package.json`) for most icons, and inline `<svg>` for a handful of brand marks (GitHub, LinkedIn, Email). Prefer `astro-icon` for new additions; it tree-shakes via the icon packs already installed (`@iconify-json/devicon`, `fa6-brands`, `logos`, `mdi`, `simple-icons`).

## Conventions

- Language: comments and user-facing strings are mixed — UI text always via `t()`; code identifiers/comments are English.
- Commit format (per the user's global rules): Conventional Commits in Spanish (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`). Do **not** add `Co-Authored-By: Claude` trailers in this repo.
- Reference docs in `docs/`: `agents.md` (project summary) and `auditoria_portfolio.md` (audit findings + action items).
