import type { Locale } from '../content/profile';

export const siteUrl = 'https://sarias.dev';

export const localePaths: Record<Locale, string> = {
  en: '/',
  es: '/es/',
};

export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
};

export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

export const getLocaleFromPath = (pathname: string): Locale =>
  pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
