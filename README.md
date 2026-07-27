# Unlocked

Unlocked turns your screen time into a picture of what you could have learned instead. Enter the hours from your phone's Screen Time report and it shows which skills — from a library of 120 across 10 categories — you could have fully learned in that time, with 437 curated free resources to actually start.

## Running the app

The active product is a fully client-side Vite/React PWA in [`screentimeskills-pwa/`](screentimeskills-pwa/):

```bash
cd screentimeskills-pwa
npm install
npm run dev      # → http://localhost:5173
```

No backend — all state persists in `localStorage`. See [PROJECT.md](PROJECT.md) for the full architecture handoff (file structure, design system, data flows, roadmap).

## What else is in this repo

- [`ScreenTimeSkills/`](ScreenTimeSkills/) — an earlier native SwiftUI/MVVM iteration of the same concept, kept as the starting point for a future native iOS port; not actively developed.
- [`preview-server/`](preview-server/) — a small Express + socket.io dev tool that live-streams Swift view files to the browser as a rough HTML preview; not part of the product.
- [`APP_STORE_APPROVAL_CHECKLIST.md`](APP_STORE_APPROVAL_CHECKLIST.md) — research for the eventual native App Store submission.

## License

[MIT](LICENSE)
