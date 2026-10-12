import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { getLocaleFromPath } from './seo/site';

const container = document.getElementById('root') as HTMLElement;
const app = (
  <React.StrictMode>
    <App locale={getLocaleFromPath(window.location.pathname)} />
  </React.StrictMode>
);

// Production pages are prerendered (see scripts/prerender.mjs); the dev server
// serves an empty root and renders on the client.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
