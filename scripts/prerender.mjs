// Prerenders one static HTML file per locale from the SSR bundle.
// Runs after `vite build` (client, into dist/) and `vite build --ssr` (into dist-ssr/).
import { execSync } from 'node:child_process';
import { readdir, readFile, rm, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, buildHead, buildSitemap, locales, localePaths } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
// dist/index.html is overwritten below, so a second run would reuse rendered output as the template.
if (
  !['<!--app-head-->', '<!--app-styles-->', '<!--app-html-->'].every((marker) => template.includes(marker))
) {
  throw new Error('dist/index.html is not the Vite template. Run the full `npm run build` instead.');
}
// dateModified and sitemap lastmod track the last commit that touched the visible content,
// so a deploy without content changes keeps the same date. Falls back to today without git.
const contentDate = (() => {
  try {
    return execSync('git log -1 --format=%cs -- src/content public/cv', { cwd: root, encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
})();
const buildDate = contentDate || new Date().toISOString().slice(0, 10);

// Preload the latin subsets of the two variable fonts used above the fold.
const assetFiles = await readdir(path.join(distDir, 'assets'));
const fontPreloads = assetFiles
  .filter((file) => /^(manrope|space-grotesk)-latin-wght-normal-.*\.woff2$/.test(file))
  .map((file) => `    <link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin />`)
  .join('\n');

const count = (html, pattern) => (html.match(pattern) ?? []).length;

for (const locale of locales) {
  const { html, styles } = render(locale);
  const page = template
    .replace('<html lang="en">', `<html lang="${locale}">`)
    .replace('<!--app-head-->', [buildHead(locale, buildDate), fontPreloads].filter(Boolean).join('\n'))
    .replace('<!--app-styles-->', styles)
    .replace('<!--app-html-->', html);

  // Guard against the duplicated-head regression: exactly one of each tag.
  const head = page.slice(0, page.indexOf('</head>'));
  const checks = {
    title: count(head, /<title>/g),
    description: count(head, /<meta name="description"/g),
    canonical: count(head, /<link rel="canonical"/g),
    hreflangEn: count(head, /hreflang="en" href=/g),
    hreflangEs: count(head, /hreflang="es" href=/g),
    hreflangDefault: count(head, /hreflang="x-default"/g),
    jsonLd: count(head, /application\/ld\+json/g),
    h1: count(page, /<h1[\s>]/g),
  };
  const broken = Object.entries(checks).filter(([, value]) => value !== 1);
  if (broken.length > 0) {
    throw new Error(`Prerendered ${locale} page has duplicated or missing tags: ${JSON.stringify(checks)}`);
  }

  const outFile = path.join(distDir, localePaths[locale], 'index.html');
  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, page);
  console.log(
    `prerendered ${localePaths[locale]} → ${path.relative(root, outFile)} (${(page.length / 1024).toFixed(1)} kB)`,
  );
}

await writeFile(path.join(distDir, 'sitemap.xml'), buildSitemap(buildDate));
console.log('wrote dist/sitemap.xml');

await rm(ssrDir, { recursive: true, force: true });
