import * as React from 'react';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import type { Theme } from '@mui/material/styles';
import { easeOutExpo } from '../../modules/theme';
import TheaterComedyRoundedIcon from '@mui/icons-material/TheaterComedyRounded';
import {
  siAngular,
  siCloudflare,
  siDocker,
  siFastapi,
  siFastify,
  siFirebase,
  siGithubactions,
  siGooglebigquery,
  siGooglecloud,
  siIonic,
  siJest,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siRailway,
  siReact,
  siReactquery,
  siRedis,
  siRedux,
  siSentry,
  siTestinglibrary,
  siTypescript,
  siVitest,
} from 'simple-icons';
import BrandIcon from '../../components/common/BrandIcon';
import type { HomeCopy, TechCategoryId } from '../../content/profile';

export type HomeSectionId = 'impact' | 'experience' | 'projects' | 'stack' | 'contact';

export type HomeSection = {
  id: HomeSectionId;
  label: string;
};

export const sectionIds: HomeSectionId[] = ['impact', 'experience', 'projects', 'stack', 'contact'];

export const getHomeSections = (copy: HomeCopy): HomeSection[] =>
  sectionIds.map((id) => ({ id, label: copy.sections[id] }));

export const cardBase = (theme: Theme) =>
  ({
    border: `1px solid ${(theme.vars || theme).palette.surface.cardBorder}`,
    boxShadow: (theme.vars || theme).palette.surface.cardShadow,
    transition: `transform 400ms ${easeOutExpo}, box-shadow 400ms ${easeOutExpo}, border-color 400ms ${easeOutExpo}`,
    '@media (hover: hover) and (prefers-reduced-motion: no-preference)': {
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: (theme.vars || theme).palette.surface.cardShadowHover,
      },
    },
  }) as const;

export const getInitials = (company: string) =>
  company
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

export const formatLabel = (template: string, values: Record<string, string>) =>
  Object.entries(values).reduce((label, [key, value]) => label.replace(`{{${key}}}`, value), template);

const languageIcon = <LanguageRoundedIcon fontSize="small" />;

export const techIconMap: Record<string, React.ReactElement> = {
  React: <BrandIcon icon={siReact} />,
  'React Native': <BrandIcon icon={siReact} />,
  TypeScript: <BrandIcon icon={siTypescript} />,
  'Next.js': <BrandIcon icon={siNextdotjs} />,
  Redux: <BrandIcon icon={siRedux} />,
  'TanStack Query': <BrandIcon icon={siReactquery} />,
  'Node.js': <BrandIcon icon={siNodedotjs} />,
  Fastify: <BrandIcon icon={siFastify} />,
  PostgreSQL: <BrandIcon icon={siPostgresql} />,
  Prisma: <BrandIcon icon={siPrisma} />,
  Redis: <BrandIcon icon={siRedis} />,
  'Python (FastAPI)': <BrandIcon icon={siFastapi} />,
  GCP: <BrandIcon icon={siGooglecloud} />,
  BigQuery: <BrandIcon icon={siGooglebigquery} />,
  Firebase: <BrandIcon icon={siFirebase} />,
  Cloudflare: <BrandIcon icon={siCloudflare} />,
  Railway: <BrandIcon icon={siRailway} />,
  Docker: <BrandIcon icon={siDocker} />,
  'GitHub Actions': <BrandIcon icon={siGithubactions} />,
  Jest: <BrandIcon icon={siJest} />,
  Vitest: <BrandIcon icon={siVitest} />,
  'Testing Library': <BrandIcon icon={siTestinglibrary} />,
  Playwright: <TheaterComedyRoundedIcon fontSize="small" />,
  Sentry: <BrandIcon icon={siSentry} />,
  Angular: <BrandIcon icon={siAngular} />,
  Ionic: <BrandIcon icon={siIonic} />,
  Spanish: languageIcon,
  Catalan: languageIcon,
  English: languageIcon,
  Español: languageIcon,
  Catalán: languageIcon,
  Inglés: languageIcon,
};

export const techCategoryAccentMap: Record<TechCategoryId, string> = {
  frontend: '#3FC1C9',
  backend: '#5f7ea2',
  cloud: '#FC5185',
  quality: '#F4A940',
  languages: '#2CA5AC',
};

export const techCategoryIconMap: Record<TechCategoryId, React.ReactElement> = {
  frontend: <BoltRoundedIcon fontSize="small" />,
  backend: <StorageRoundedIcon fontSize="small" />,
  cloud: <CloudRoundedIcon fontSize="small" />,
  quality: <VerifiedRoundedIcon fontSize="small" />,
  languages: <LanguageRoundedIcon fontSize="small" />,
};
