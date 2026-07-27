# Unlocked — PWA

The active product: a fully client-side Vite/React PWA that converts screen time into the skills you could have learned instead. No backend — all state lives in `localStorage`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npx eslint src   # lint
```

See [`../PROJECT.md`](../PROJECT.md) for the full architecture handoff: file structure, design tokens, data flows, and what's not done yet.

Key data files:

- `src/data/skillLibrary.js` — 120 built-in skills across 10 categories
- `src/data/skillResourceDirectory.js` — 437 curated free resources (primary data file)
- `src/data/skillResources.js` — legacy, unimported; kept as an affiliate-links reference
