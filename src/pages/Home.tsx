import Box from '@mui/material/Box';
import HomeContactSection from '../components/home/HomeContactSection';
import HomeExperienceSection from '../components/home/HomeExperienceSection';
import HomeFooter from '../components/home/HomeFooter';
import HomeHeader from '../components/home/HomeHeader';
import HomeHeroSection from '../components/home/HomeHeroSection';
import HomeImpactSection from '../components/home/HomeImpactSection';
import HomeKpisSection from '../components/home/HomeKpisSection';
import HomeProjectsSection from '../components/home/HomeProjectsSection';
import HomeStackSection from '../components/home/HomeStackSection';
import HomeTrustedBySection from '../components/home/HomeTrustedBySection';
import { getHomeCopy, getPortfolioContent, type Locale } from '../content/profile';
import { getHomeSections } from './home/home.constants';

type HomePageProps = {
  locale: Locale;
};

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
    <Box id="home" sx={{ position: 'relative', backgroundColor: 'background.default' }}>
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

      <HomeHeader copy={copy} locale={locale} profileName={profile.fullName} sections={sections} />

      <Box
        component="main"
        id="main"
        tabIndex={-1}
        sx={(theme) => ({
          pt: { xs: 12, md: 14 },
          outline: 'none',
          background: `radial-gradient(circle at 15% 10%, ${(theme.vars || theme).palette.surface.glowSecondary}, transparent 44%), radial-gradient(circle at 85% 8%, ${(theme.vars || theme).palette.surface.glowWarning}, transparent 34%), ${(theme.vars || theme).palette.background.default}`,
        })}
      >
        <HomeHeroSection activeRole={experiences[0]} copy={copy} profile={profile} />
        <HomeKpisSection kpis={kpis} />
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
