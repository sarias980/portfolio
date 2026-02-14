import * as React from 'react';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import {
  SiAngular,
  SiFirebase,
  SiGithubactions,
  SiGooglebigquery,
  SiGooglecloud,
  SiIonic,
  SiJavascript,
  SiJest,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';
import type { Locale } from '../../content/profile';

export type HomeSection = {
  id: 'home' | 'impact' | 'stack' | 'contact';
  label: string;
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export const localeStorageKey = 'portfolio-locale';

export const getCardBase = (isDark: boolean) =>
  ({
    border: `1px solid ${
      isDark ? 'rgba(158, 176, 192, 0.24)' : 'rgba(54, 79, 107, 0.14)'
    }`,
    boxShadow: isDark
      ? '0 16px 32px rgba(2, 8, 20, 0.45)'
      : '0 16px 32px rgba(54, 79, 107, 0.08)',
    transition: 'transform 200ms ease, box-shadow 200ms ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: isDark
        ? '0 22px 38px rgba(2, 8, 20, 0.62)'
        : '0 22px 38px rgba(54, 79, 107, 0.12)',
    },
  }) as const;

export const getInitials = (company: string) =>
  company
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

export const getHomeSections = (locale: Locale): HomeSection[] =>
  locale === 'es'
    ? [
        { id: 'home', label: 'Inicio' },
        { id: 'impact', label: 'Impacto' },
        { id: 'stack', label: 'Stack' },
        { id: 'contact', label: 'Contacto' },
      ]
    : [
        { id: 'home', label: 'Home' },
        { id: 'impact', label: 'Impact' },
        { id: 'stack', label: 'Stack' },
        { id: 'contact', label: 'Contact' },
      ];

export const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const savedLocale = window.localStorage.getItem(localeStorageKey);
  if (savedLocale === 'en' || savedLocale === 'es') {
    return savedLocale;
  }

  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
};

export const techIconMap: Record<string, React.ReactElement> = {
  React: <SiReact size={14} />,
  TypeScript: <SiTypescript size={14} />,
  JavaScript: <SiJavascript size={14} />,
  Angular: <SiAngular size={14} />,
  Ionic: <SiIonic size={14} />,
  'React Native': <SiReact size={14} />,
  Redux: <SiRedux size={14} />,
  Firebase: <SiFirebase size={14} />,
  'Node.js': <SiNodedotjs size={14} />,
  BigQuery: <SiGooglebigquery size={14} />,
  GCP: <SiGooglecloud size={14} />,
  'GitHub Actions': <SiGithubactions size={14} />,
  Jest: <SiJest size={14} />,
  SQL: <StorageRoundedIcon fontSize="small" />,
  NoSQL: <StorageRoundedIcon fontSize="small" />,
  'Product Collaboration': <GroupsRoundedIcon fontSize="small" />,
  'Colaboración con Producto': <GroupsRoundedIcon fontSize="small" />,
  Spanish: <LanguageRoundedIcon fontSize="small" />,
  Catalan: <LanguageRoundedIcon fontSize="small" />,
  English: <LanguageRoundedIcon fontSize="small" />,
  Español: <LanguageRoundedIcon fontSize="small" />,
  Catalán: <LanguageRoundedIcon fontSize="small" />,
  Inglés: <LanguageRoundedIcon fontSize="small" />,
};

export const techCategoryAccentMap: Record<string, string> = {
  Frontend: '#3FC1C9',
  'Backend & Data': '#364F6B',
  'Backend y Datos': '#364F6B',
  'Cloud & Delivery': '#FC5185',
  'Cloud y Delivery': '#FC5185',
  Collaboration: '#4D6885',
  Colaboración: '#4D6885',
  Languages: '#2CA5AC',
  Idiomas: '#2CA5AC',
};

export const techCategoryIconMap: Record<string, React.ReactElement> = {
  Frontend: <BoltRoundedIcon fontSize="small" />,
  'Backend & Data': <StorageRoundedIcon fontSize="small" />,
  'Backend y Datos': <StorageRoundedIcon fontSize="small" />,
  'Cloud & Delivery': <VerifiedRoundedIcon fontSize="small" />,
  'Cloud y Delivery': <VerifiedRoundedIcon fontSize="small" />,
  Collaboration: <GroupsRoundedIcon fontSize="small" />,
  Colaboración: <GroupsRoundedIcon fontSize="small" />,
  Languages: <LanguageRoundedIcon fontSize="small" />,
  Idiomas: <LanguageRoundedIcon fontSize="small" />,
};
