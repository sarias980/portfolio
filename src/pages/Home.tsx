import Box from '@mui/material/Box';
import HomeContactSection from '../components/home/HomeContactSection';
import HomeExperienceSection from '../components/home/HomeExperienceSection';
import HomeFooter from '../components/home/HomeFooter';
import HomeHeader from '../components/home/HomeHeader';
import HomeHeroSection from '../components/home/HomeHeroSection';
import HomeImpactSection from '../components/home/HomeImpactSection';
import HomeProjectsSection from '../components/home/HomeProjectsSection';
import HomeStackSection from '../components/home/HomeStackSection';
import HomeTrustedBySection from '../components/home/HomeTrustedBySection';
import { getHomeCopy, getPortfolioContent, type Locale } from '../content/profile';
import { getHomeSections } from './home/home.constants';

type HomePageProps = {
  locale: Locale;
};

// Ambient light behind the hero: two slow-drifting brand glows over a faint
// dot grid. Pure CSS and decorative; frozen when reduced motion is requested.
const ambient = {
  position: 'absolute',
  inset: '0 0 auto 0',
  height: { xs: 820, md: 980 },
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: 0,
  maskImage: 'linear-gradient(180deg, #000 55%, transparent)',
  WebkitMaskImage: 'linear-gradient(180deg, #000 55%, transparent)',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(var(--mui-palette-surface-dotGrid) 1px, transparent 1.5px)',
    backgroundSize: '22px 22px',
    maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%)',
    WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%)',
  },
  '& > span': {
    position: 'absolute',
    width: { xs: 520, md: 760 },
    height: { xs: 520, md: 760 },
    borderRadius: '50%',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: 'glow-drift 22s ease-in-out infinite alternate',
    },
  },
  '& > span:first-of-type': {
    top: { xs: -220, md: -300 },
    left: { xs: -240, md: -200 },
    background: 'radial-gradient(circle, var(--mui-palette-surface-glowSecondary), transparent 65%)',
  },
  '& > span:last-of-type': {
    top: { xs: -160, md: -260 },
    right: { xs: -260, md: -180 },
    background: 'radial-gradient(circle, var(--mui-palette-surface-glowWarning), transparent 65%)',
    animationDelay: '-11s',
  },
  '@keyframes glow-drift': {
    from: { transform: 'translate3d(0, 0, 0) scale(1)' },
    to: { transform: 'translate3d(60px, 40px, 0) scale(1.12)' },
  },
} as const;

export default function HomePage({ locale }: HomePageProps) {
  const copy = getHomeCopy(locale);
  const { caseStudies, experiences, kpis, profile, projects, techCategories } = getPortfolioContent(locale);
  const sections = getHomeSections(copy);
  const companyBannerLogos = experiences.map((experience) => ({
    company: experience.company,
    website: experience.website,
    logo: experience.logo,
  }));

  return (
    <Box id="home" sx={{ position: 'relative', backgroundColor: 'background.default', overflowX: 'clip' }}>
      <Box
        component="a"
        href="#main"
        sx={{
          position: 'absolute',
          left: 16,
          top: -48,
          zIndex: 1200,
          px: 2,
          py: 1,
          borderRadius: 1,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          '&:focus': { top: 12 },
        }}
      >
        {copy.skipToContent}
      </Box>

      <Box aria-hidden sx={ambient}>
        <span />
        <span />
      </Box>

      <HomeHeader copy={copy} locale={locale} profileName={profile.fullName} sections={sections} />

      <Box
        component="main"
        id="main"
        tabIndex={-1}
        sx={{ position: 'relative', zIndex: 1, pt: { xs: 14, md: 22 }, outline: 'none' }}
      >
        <HomeHeroSection copy={copy} kpis={kpis} profile={profile} />
        <HomeTrustedBySection companyBannerLogos={companyBannerLogos} copy={copy} />
        <HomeImpactSection caseStudies={caseStudies} copy={copy} />
        <HomeExperienceSection copy={copy} experiences={experiences} />
        <HomeProjectsSection copy={copy} projects={projects} />
        <HomeStackSection copy={copy} techCategories={techCategories} />
        <HomeContactSection copy={copy} locale={locale} profile={profile} />
      </Box>

      <HomeFooter copy={copy} profile={profile} />
    </Box>
  );
}
