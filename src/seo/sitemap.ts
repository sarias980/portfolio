import { locales } from '../content/profile';
import { absoluteUrl, localePaths } from './site';

export function buildSitemap(lastModified: string) {
  const alternates = [
    ...locales.map(
      (locale) =>
        `    <xhtml:link rel="alternate" hreflang="${locale}" href="${absoluteUrl(localePaths[locale])}" />`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(localePaths.en)}" />`,
  ].join('\n');

  const urls = locales
    .map(
      (locale) => `  <url>
    <loc>${absoluteUrl(localePaths[locale])}</loc>
    <lastmod>${lastModified}</lastmod>
${alternates}
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}
