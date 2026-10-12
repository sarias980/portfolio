/**
 * @jest-environment node
 *
 * Builds the site and checks the prerendered HTML that Firebase will serve.
 */
import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { getHomeCopy, getPortfolioContent, type Locale } from '../content/profile';

const root = path.resolve(__dirname, '../..');
const dist = path.join(root, 'dist');

const pages: { locale: Locale; file: string; url: string }[] = [
  { locale: 'en', file: 'index.html', url: 'https://sarias.dev/' },
  { locale: 'es', file: 'es/index.html', url: 'https://sarias.dev/es/' },
];

const count = (html: string, pattern: RegExp) => (html.match(pattern) ?? []).length;

const readHead = (html: string) => html.slice(0, html.indexOf('</head>'));

beforeAll(() => {
  // Jest sets NODE_ENV=test, which would make Vite emit a development build.
  execSync('npm run build', { cwd: root, stdio: 'pipe', env: { ...process.env, NODE_ENV: 'production' } });
}, 180_000);

describe.each(pages)('prerendered $file', ({ locale, file, url }) => {
  const read = () => readFileSync(path.join(dist, file), 'utf8');

  it('contains the page text in its language', () => {
    const html = read();
    const copy = getHomeCopy(locale);
    const { profile, projects } = getPortfolioContent(locale);

    expect(html).toContain(`<html lang="${locale}">`);
    expect(html).toContain(copy.heroTitle);
    expect(html).toContain(copy.contactSummary);
    expect(html).toContain(profile.cvUrl);
    projects.forEach((project) => expect(html).toContain(project.name));
  });

  it('has exactly one title, description, canonical and hreflang block', () => {
    const html = read();
    const head = readHead(html);
    const copy = getHomeCopy(locale);

    // Counted over the whole document: inline SVG <title> elements would also confuse crawlers.
    expect(count(html, /<title>/g)).toBe(1);
    expect(head).toContain(`<title>${copy.metaTitle}</title>`);
    expect(count(head, /<meta name="description"/g)).toBe(1);
    expect(count(head, /<link rel="canonical"/g)).toBe(1);
    expect(head).toContain(`<link rel="canonical" href="${url}" />`);

    expect(count(head, /rel="alternate" hreflang=/g)).toBe(3);
    expect(head).toContain('<link rel="alternate" hreflang="en" href="https://sarias.dev/" />');
    expect(head).toContain('<link rel="alternate" hreflang="es" href="https://sarias.dev/es/" />');
    expect(head).toContain('<link rel="alternate" hreflang="x-default" href="https://sarias.dev/" />');

    ['og:title', 'og:description', 'og:url', 'og:image', 'twitter:card'].forEach((property) => {
      expect(count(head, new RegExp(`"${property}"`, 'g'))).toBe(1);
    });
  });

  it('has one h1 and one valid Person JSON-LD block', () => {
    const html = read();
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

    expect(count(html, /<h1[\s>]/g)).toBe(1);
    expect(blocks).toHaveLength(1);

    const data = JSON.parse(blocks[0][1]);
    expect(data['@type']).toBe('ProfilePage');
    expect(data.url).toBe(url);
    expect(data.mainEntity['@type']).toBe('Person');
    expect(data.mainEntity.url).toBe('https://sarias.dev/');
    expect(data.mainEntity.sameAs).toEqual(
      expect.arrayContaining(['https://github.com/sarias980', expect.stringContaining('linkedin.com')]),
    );
  });

  it('inlines critical CSS and never hides content in the markup', () => {
    const html = read();

    expect(html).toMatch(/<style data-emotion="css /);
    expect(html).not.toMatch(/style="[^"]*opacity:\s*0/);
  });
});

describe('static SEO files', () => {
  it('ships sitemap.xml, robots.txt, og images and CVs', () => {
    const sitemap = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
    expect(sitemap).toContain('<loc>https://sarias.dev/</loc>');
    expect(sitemap).toContain('<loc>https://sarias.dev/es/</loc>');

    expect(readFileSync(path.join(dist, 'robots.txt'), 'utf8')).toContain(
      'Sitemap: https://sarias.dev/sitemap.xml',
    );

    [
      'og-image-en.png',
      'og-image-es.png',
      'cv/Sergi_Arias_Fernandez_CV_EN.pdf',
      'cv/Sergi_Arias_Fernandez_CV_ES.pdf',
      '404.html',
    ].forEach((file) => expect(existsSync(path.join(dist, file))).toBe(true));
  });
});
