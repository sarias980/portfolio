import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { buildHead } from './src/seo/head';
import { getLocaleFromPath } from './src/seo/site';

// In dev the page is client-rendered, but it gets the same <head> and <html lang>
// as the prerendered build, so /es/ can be checked locally too.
const devHead = (): Plugin => ({
  name: 'dev-head',
  apply: 'serve',
  transformIndexHtml(html, ctx) {
    const locale = getLocaleFromPath(new URL(ctx.originalUrl ?? ctx.path, 'http://localhost').pathname);
    const today = new Date().toISOString().slice(0, 10);

    return html
      .replace('<html lang="en">', `<html lang="${locale}">`)
      .replace('<!--app-head-->', buildHead(locale, today));
  },
});

export default defineConfig({
  // SWC keeps local feedback loops fast for daily iteration.
  plugins: [react(), devHead()],
  server: {
    port: 3000,
    strictPort: true,
  },
});
