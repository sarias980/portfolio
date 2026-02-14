import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import HomeContactSection from '../components/home/HomeContactSection';
import HomeHeader from '../components/home/HomeHeader';
import HomeHeroSection from '../components/home/HomeHeroSection';
import HomeImpactSection from '../components/home/HomeImpactSection';
import HomeKpisSection from '../components/home/HomeKpisSection';
import HomeTrustedBySection from '../components/home/HomeTrustedBySection';
import {
  getHomeCopy,
  getPortfolioContent,
  type Locale,
} from '../content/profile';
import withRoot, { useColorMode } from '../modules/withRoot';
import {
  getCardBase,
  getHomeSections,
  getInitialLocale,
  localeStorageKey,
} from './home/home.constants';

export function HomePage() {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const isDark = mode === 'dark';
  const [locale, setLocale] = React.useState<Locale>(getInitialLocale);
  const copy = getHomeCopy(locale);
  const { caseStudies, experiences, kpis, leadershipPillars, profile, techCategories } = getPortfolioContent(locale);
  const cardBase = React.useMemo(() => getCardBase(isDark), [isDark]);
  const softBorder = isDark ? 'rgba(158, 176, 192, 0.28)' : 'rgba(54, 79, 107, 0.2)';
  const softPanel = isDark ? 'rgba(24, 34, 50, 0.8)' : 'rgba(255,255,255,0.75)';
  const sections = getHomeSections(locale);
  const companyBannerLogos = experiences.map((experience) => ({
    company: experience.company,
    website: experience.website,
    logoUrl: experience.logoUrl,
  }));
  const phoneHref = `tel:${profile.phone.replace(/\s+/g, '')}`;
  const activeRole = experiences[0];
  const marqueeLogos = [...companyBannerLogos, ...companyBannerLogos];

  React.useEffect(() => {
    window.localStorage.setItem(localeStorageKey, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <Box id="home" sx={{ position: 'relative', backgroundColor: 'background.default' }}>
      <HomeHeader
        copy={copy}
        isDark={isDark}
        locale={locale}
        onLocaleChange={setLocale}
        onToggleColorMode={toggleColorMode}
        profileName={profile.fullName}
        sections={sections}
        softBorder={softBorder}
        softPanel={softPanel}
      />

      <Box
        component="main"
        sx={{
          pt: { xs: 12, md: 14 },
          background:
            `radial-gradient(circle at 15% 10%, ${alpha(theme.palette.secondary.main, isDark ? 0.24 : 0.22)}, transparent 44%), radial-gradient(circle at 85% 8%, ${alpha(theme.palette.warning.main, isDark ? 0.2 : 0.14)}, transparent 34%), ${theme.palette.background.default}`,
        }}
      >
        <HomeHeroSection
          activeRole={activeRole}
          cardBase={cardBase}
          copy={copy}
          isDark={isDark}
          profile={profile}
          softBorder={softBorder}
          softPanel={softPanel}
        />

        <HomeKpisSection kpis={kpis} softBorder={softBorder} />

        <HomeTrustedBySection
          companyBannerLogos={companyBannerLogos}
          copy={copy}
          isDark={isDark}
          marqueeLogos={marqueeLogos}
          softBorder={softBorder}
        />

        <HomeImpactSection
          cardBase={cardBase}
          caseStudies={caseStudies}
          copy={copy}
          experiences={experiences}
          isDark={isDark}
          leadershipPillars={leadershipPillars}
          softBorder={softBorder}
          techCategories={techCategories}
        />

        <HomeContactSection cardBase={cardBase} copy={copy} phoneHref={phoneHref} profile={profile} />
      </Box>
    </Box>
  );
}

export default withRoot(HomePage);
