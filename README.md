# GEMS World Dialogue — Next.js site

A Next.js (Pages Router) port of the standalone `index (14) (1).html` landing page, so the
site can be built/hosted independently on another domain.

## What was ported

- All markup, copy, and section structure — unchanged from the original HTML.
- All CSS (custom properties, gradients, animations) — moved to `styles/globals.css`, loaded globally.
- The two embedded base64 logo/seal images — extracted to real files in `public/images/`
  (`gems-logo-mark.png`, `gems-hero-seal.png`) instead of being inlined, which cut the
  page's HTML payload from ~650KB to ~52KB.
- The page's inline `<script>` (nations grid, board/voices grids, scroll nav, reveal-on-scroll,
  animated stat counters, and the two forms) — ported to `lib/initInteractions.js` and run
  from a `useEffect` in `pages/index.js`.
- Google Fonts (Cormorant Garamond, Montserrat) — loaded via `<Head>` in `pages/index.js`.

## Notes

- Both forms (`Share an Idea`, `Expression of Interest`) are client-side only, exactly as in
  the original file — they show a success message but do not submit anywhere. Wire them up to
  a backend/CRM/email service before relying on them in production.
- The "Stand With the Mission" supporter tiers link out to
  `https://payment.gemsworlddialogue.com/...` — an external checkout, unaffected by whichever
  domain this site is deployed to.

## Run locally

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm install
npm run build
npm start   # or deploy the project to Vercel / any Node host
```
# gems-main-website
