# Sergi Arias Portfolio

Source for [sarias.dev](https://sarias.dev). React 19, TypeScript, Vite and MUI, prerendered to static HTML at build time and served from Firebase Hosting.

## Scripts

- `npm run dev`: start the local development server (client-rendered; `/es/` works too).
- `npm run build`: client build, SSR build and prerender of `/` (EN) and `/es/` (ES) into `dist`.
- `npm run preview`: serve the production build locally.
- `npm test`: unit tests plus a build test that checks the prerendered HTML.
- `npm run typecheck`: TypeScript without emitting.
- `npm run assets`: regenerate favicons, manifest icons, Open Graph images and WebP logos (`scripts/generate-assets.mjs`).
- `npm run deploy`: manual deploy; builds through Firebase's `predeploy` hook and publishes `dist` to Firebase Hosting.

## How the build works

1. `vite build` bundles the client (`src/entry-client.tsx`) and writes `dist/index.html` as the template.
2. `vite build --ssr` bundles `src/entry-server.tsx`.
3. `scripts/prerender.mjs` renders each locale with `renderToString`, extracts Emotion's critical CSS, injects the `<head>` from `src/seo/head.ts` and writes `dist/index.html` and `dist/es/index.html`, plus `sitemap.xml`. It fails the build if a page ends up with a duplicated or missing title, description, canonical, hreflang, JSON-LD block or `<h1>`.

The browser hydrates the prerendered markup. The locale comes from the URL, never from storage.

## Conventions

- Copy for both languages lives in `src/content/profile.ts`.
- `src/seo/head.ts` is the only place that emits head metadata. Do not add title/meta/link tags to `index.html` or at runtime.
- Theme colors are MUI CSS variables (`src/modules/theme.ts`), so light and dark mode are correct before JavaScript runs. Use palette tokens (`surface.*`, `background.default`…) instead of branching on the current mode.
- Scroll animations use `<Reveal>` (CSS + IntersectionObserver). Content is visible without JavaScript and with `prefers-reduced-motion`.

## Deployment

`firebase.json` serves `dist` with clean URLs and trailing slashes (`/es` redirects to `/es/`), a real 404 page and long-lived caching for hashed assets.

GitHub Actions deploys automatically:

- Every push to `master` runs `npm test` and deploys to the live site (`.github/workflows/firebase-hosting-merge.yml`).
- Every pull request gets a preview channel, valid for 7 days, whose URL is commented on the PR (`.github/workflows/firebase-hosting-pull-request.yml`).

Both workflows need the `FIREBASE_SERVICE_ACCOUNT_SARIAS_66260` repository secret. Create it with `firebase init hosting:github`, and answer **No** when it asks to overwrite the existing workflow files.
