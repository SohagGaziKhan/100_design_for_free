# Interface Library

A React 19 + Vite design library with 100 working React designs across ten categories. Each design has a dedicated URL, a responsive live preview, a source viewer, and an isolated Monaco playground.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Design architecture

`src/registry.js` is the catalog and source of truth for design names, URLs, descriptions, categories, palette, features, and preview configuration. It injects each design's configuration into its category-specific JSX template and exports the resulting standalone source string.

The detail preview, Monaco source viewer, source download, and playground all use that same generated string. Playground edits are held separately from the registry source. Reset restores the original string.

The JSX templates under `src/designs/` are grouped by page type: landing, SaaS, commerce, dashboard, authentication, portfolio, agency, blog, pricing, and component collections. To add or customize a design, add a row to the matching category in `registry.js`; category counts and routes are derived from the registry.

## Catalog scope

The catalog contains 10 designs each for Landing Pages, SaaS Websites, E-commerce Interfaces, Dashboard Interfaces, Authentication Pages, Portfolio Websites, Agency Websites, Blog & Content Websites, Pricing & Subscription Pages, and UI Components & Sections.

## Preview requirements

The iframe uses `sandbox="allow-scripts allow-forms"` without `allow-same-origin`. JSX is compiled with esbuild-wasm and previews use the Tailwind CDN and React import map, so previews require an internet connection.
