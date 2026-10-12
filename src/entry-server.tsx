import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { renderToString } from 'react-dom/server';
import App from './App';
import type { Locale } from './content/profile';

export { buildHead } from './seo/head';
export { buildSitemap } from './seo/sitemap';
export { locales } from './content/profile';
export { localePaths } from './seo/site';

export function render(locale: Locale) {
  // Key "css" matches Emotion's default client cache, which picks up these
  // server styles on hydration instead of inserting them again. Vendor
  // prefixing is skipped (class hashes are computed before it) to keep the
  // inlined critical CSS small; every target browser supports the unprefixed rules.
  const cache = createCache({ key: 'css', stylisPlugins: [] });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

  const html = renderToString(
    <CacheProvider value={cache}>
      <App locale={locale} />
    </CacheProvider>,
  );

  const styles = constructStyleTagsFromChunks(extractCriticalToChunks(html));

  return { html, styles };
}
