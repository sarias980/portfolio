import { getHomeCopy, getPortfolioContent, locales, type Locale } from '../content/profile';
import { absoluteUrl, localePaths, ogLocales } from './site';

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// JSON inside <script> must not be able to close the tag.
const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');

export const knowsAbout = [
  'React',
  'React Native',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Fastify',
  'PostgreSQL',
  'Prisma',
  'Redis',
  'GitHub Actions',
  'Google Cloud Platform',
  'Cloudflare',
];

export const getOgImage = (locale: Locale) => absoluteUrl(`/og-image-${locale}.png`);

export function buildStructuredData(locale: Locale, modifiedDate: string) {
  const { profile } = getPortfolioContent(locale);
  const url = absoluteUrl(localePaths[locale]);

  // ProfilePage wraps the Person so Google's Rich Results Test recognises it.
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url,
    inLanguage: locale,
    dateModified: modifiedDate,
    mainEntity: {
      '@type': 'Person',
      '@id': `${absoluteUrl('/')}#person`,
      name: profile.fullName,
      jobTitle: profile.jobTitle,
      url: absoluteUrl('/'),
      image: getOgImage(locale),
      sameAs: [profile.linkedin, profile.github],
      knowsAbout,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Barcelona',
        addressCountry: 'ES',
      },
    },
  };
}

/**
 * The only source of <head> metadata. index.html carries no title, description,
 * canonical, Open Graph or hreflang tags, and the client never injects any, so
 * each prerendered page ends up with exactly one of each.
 */
export function buildHead(locale: Locale, modifiedDate: string) {
  const copy = getHomeCopy(locale);
  const url = absoluteUrl(localePaths[locale]);
  const ogImage = getOgImage(locale);
  const alternateLocales = locales.filter((item) => item !== locale);

  const tags = [
    `<title>${escapeHtml(copy.metaTitle)}</title>`,
    `<meta name="description" content="${escapeHtml(copy.metaDescription)}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...locales.map(
      (item) => `<link rel="alternate" hreflang="${item}" href="${absoluteUrl(localePaths[item])}" />`,
    ),
    `<link rel="alternate" hreflang="x-default" href="${absoluteUrl(localePaths.en)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Sergi Arias Fernández" />`,
    `<meta property="og:locale" content="${ogLocales[locale]}" />`,
    ...alternateLocales.map((item) => `<meta property="og:locale:alternate" content="${ogLocales[item]}" />`),
    `<meta property="og:title" content="${escapeHtml(copy.metaTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(copy.metaDescription)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeHtml(copy.ogImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${serializeJsonLd(buildStructuredData(locale, modifiedDate))}</script>`,
  ];

  return tags.map((tag) => `    ${tag}`).join('\n');
}
