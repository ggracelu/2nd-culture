Second Culture Yogurt brand website (v1), built from the PRD as a **single-page, scroll-animated site** with:

- **Next.js + React**
- **Tailwind CSS**
- **Framer Motion** (scroll reveals + micro-interactions)

## What’s on the page (PRD sections)

- Hero / Landing
- About
- The Menu (Past Pop-Ups)
- FAQ (accordion)
- Instagram (grid placeholder + link)
- Footer / Contact (final CTA)

## Getting Started

Install deps:

```bash
npm install
```

Run the development server:

```bash
# Avoids file-watcher "too many open files" on some Macs/environments
WATCHPACK_POLLING=true npm run dev -- --hostname 127.0.0.1 --port 3000
```

Open `http://127.0.0.1:3000` in your browser.

## Content edits (menus, copy, links)

Edit `src/lib/content.ts`:

- **Interest form + socials**: `LINKS`
- **Hero tagline options**: `TAGLINE_OPTIONS`
- **About copy + highlights**: `ABOUT_COPY`
- **Pop-up menus**: `POPUPS`
- **FAQ**: `FAQ`

## Branding assets

- Logo mark: `public/brand/logo-mark.png`
- Palette reference image: `public/brand/palette.png`

## Production build

```bash
npm run build
npm run start
```

## Notes

- The Instagram section is a **no-API placeholder** that links to `@sec_culture`. If you want a true embedded feed later, we can swap it to a widget (Elfsight/Curator) or an API-backed approach.

---

This project started from `create-next-app`.

```bash
npm run dev
```
