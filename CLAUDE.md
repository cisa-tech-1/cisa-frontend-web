# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> ⚠️ The `@AGENTS.md` include above is critical: this project runs **Next.js 16** with
> React 19. Its App Router APIs and conventions differ from older Next.js. Before writing
> framework code, consult the bundled guides in `node_modules/next/dist/docs/`.

## Commands

```bash
npm run dev     # start dev server (Turbopack) at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (flat config, next core-web-vitals + typescript)
```

There is no test runner configured in this project.

## Architecture

Marketing/landing site for **Chess in Slums Africa (CISA)**. Static-content Next.js App
Router site — no backend, database, or API routes; all data is hardcoded in `src/lib/`.
Path alias `@/*` maps to `src/*`.

### Layered structure

Content flows through a strict four-layer hierarchy, top to bottom:

1. **`src/app/<route>/page.tsx`** — Route entry. Sets `metadata` and composes a page by
   stacking section components inside `<main className="bg-background">`. Pages hold almost
   no markup of their own.
2. **`src/sections/<area>/*Section.tsx`** — Full-width page bands (hero, mission, partners,
   etc.), grouped by area (`landing/`, `about/`, `impact/`, `programs/`, `donations/`,
   `shared/`). This is where most layout markup lives.
3. **`src/components/`** — Reusable pieces. `ui/` = primitives (`Button`, `Badge`,
   `SectionHeader`…); `layout/` = chrome (`Navbar`, `Footer`, `PageContainer`, and their
   `Programs*`/`Simple*` variants); other subfolders (`impact/`, `donations/`, `about/`)
   hold feature-specific components including Recharts charts under `impact/charts/`.
4. **`src/lib/*.ts`** — Content/data as exported `const … as const` objects and arrays
   (one file per area: `landing.ts`, `about.ts`, `impact.ts`, etc.). Sections import from
   here rather than inlining copy. `constants.ts` holds shared nav/footer/social link sets.

When adding a page section, follow the flow: put copy/data in the area's `lib` file, build
the band in `sections/`, and reuse `components/ui` primitives — don't inline new one-off
buttons or headers.

### Chrome variants (two systems)

There are **two** navbar/footer families, chosen per page:

- `Navbar` + `Footer` — the main site chrome (landing, about).
- `ProgramsNavbar` / `ProgramsStickyCTAs` + `SimpleFooter` — used on program-funnel pages
  (impact, programs, donate). `SimpleFooter`/`Simple*` link sets live in `constants.ts`.

Note the root `layout.tsx` renders **only** `<html>/<body>` and fonts — it does **not**
inject a navbar/footer. Each page composes its own chrome, so pick the correct variant.

### Coming-soon stub routes

Most routes are placeholders. `src/lib/coming-soon.tsx` defines `COMING_SOON_PAGES` (a keyed
config map) and `createComingSoonRoute(key)`, which returns `{ metadata, Page }`. A stub page
is three lines (see `src/app/blog/page.tsx`). To un-stub a route, remove its
`createComingSoonRoute` wrapper and build real sections; to add a placeholder, add a config
entry and wire up the helper. **Fully-built routes** today: `/` (landing), `/about`,
`/impact`, `/programs`, `/donate`. Everything else is a coming-soon stub.

## Styling

- **Tailwind CSS v4**, configured entirely in `src/app/globals.css` via `@theme inline` —
  there is no `tailwind.config.*`. Brand tokens (colors, fonts) are CSS variables in
  `:root` and exposed as Tailwind utilities (e.g. `bg-teal-500`, `text-brown-dark`,
  `font-display`). Add new design tokens there, not in a config file.
- **Fonts** are loaded via `next/font/google` in `layout.tsx` and referenced through CSS
  variables (`--font-manrope`, `--font-bricolage`, etc.). In markup, apply a font with
  `font-[family-name:var(--font-bricolage)]`.
- Layouts are frequently **pixel-perfect from design**: expect hardcoded arbitrary values
  (`h-[618px]`, `top-[23px]`, inline `radial-gradient` styles). Decorative images use
  `alt=""` + `aria-hidden`.
- `Button` (`components/ui/Button.tsx`) is the canonical CTA: `variant`/`size`/`font` props,
  renders a `next/link` when `href` is set, else a `<button>`. Its skeuomorphic shadow lives
  in `buttonStyles.ts`.

## Conventions

- Sections/components use **named exports**; `page.tsx` files use **default exports**.
- Add `"use client"` only where interactivity/hooks/Recharts require it (~20 files today);
  sections are server components by default.
- Use `next/image` for images (remote host `images.unsplash.com` is allow-listed in
  `next.config.ts`) and `next/link` for internal navigation.
