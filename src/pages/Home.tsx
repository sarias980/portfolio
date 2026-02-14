import * as React from 'react';
import { motion } from 'framer-motion';
import withRoot, { useColorMode } from '../modules/withRoot';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import { alpha, useTheme } from '@mui/material/styles';
import {
  getHomeCopy,
  getPortfolioContent,
  type Locale,
} from '../content/profile';
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const getCardBase = (isDark: boolean) =>
  ({
    border: `1px solid ${
      isDark ? 'rgba(158, 176, 192, 0.24)' : 'rgba(54, 79, 107, 0.14)'
    }`,
    boxShadow: isDark ? '0 16px 32px rgba(2, 8, 20, 0.45)' : '0 16px 32px rgba(54, 79, 107, 0.08)',
    transition: 'transform 200ms ease, box-shadow 200ms ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: isDark ? '0 22px 38px rgba(2, 8, 20, 0.62)' : '0 22px 38px rgba(54, 79, 107, 0.12)',
    },
  }) as const;

const getInitials = (company: string) =>
  company
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

const techIconMap: Record<string, React.ReactElement> = {
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

const techCategoryAccentMap: Record<string, string> = {
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

const techCategoryIconMap: Record<string, React.ReactElement> = {
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

const localeStorageKey = 'portfolio-locale';

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const savedLocale = window.localStorage.getItem(localeStorageKey);
  if (savedLocale === 'en' || savedLocale === 'es') {
    return savedLocale;
  }

  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
};

function Home() {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const isDark = mode === 'dark';
  const [locale, setLocale] = React.useState<Locale>(getInitialLocale);
  const copy = getHomeCopy(locale);
  const { caseStudies, experiences, kpis, profile, techCategories } = getPortfolioContent(locale);
  const cardBase = React.useMemo(() => getCardBase(isDark), [isDark]);
  const softBorder = isDark ? 'rgba(158, 176, 192, 0.28)' : 'rgba(54, 79, 107, 0.2)';
  const softPanel = isDark ? 'rgba(24, 34, 50, 0.8)' : 'rgba(255,255,255,0.75)';
  const sections =
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
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: alpha(theme.palette.background.default, isDark ? 0.9 : 0.82),
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.9)}`,
          color: 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 72 }}>
            <Typography variant="h6" sx={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              {profile.fullName}
            </Typography>
            <Stack direction="row" spacing={1.1} alignItems="center">
              <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
                {sections.map((section) => (
                  <Button key={section.id} href={`#${section.id}`} size="small" color="inherit">
                    {section.label}
                  </Button>
                ))}
              </Stack>
              <Tooltip title={isDark ? copy.lightModeLabel : copy.darkModeLabel}>
                <IconButton
                  size="small"
                  onClick={toggleColorMode}
                  aria-label={isDark ? copy.lightModeLabel : copy.darkModeLabel}
                  sx={{
                    border: `1px solid ${softBorder}`,
                    bgcolor: softPanel,
                  }}
                >
                  {isDark ? <LightModeRoundedIcon fontSize="small" /> : <DarkModeRoundedIcon fontSize="small" />}
                </IconButton>
              </Tooltip>
              <Stack
                direction="row"
                spacing={0.5}
                alignItems="center"
                aria-label={copy.languageLabel}
                sx={{
                  p: 0.4,
                  borderRadius: 999,
                  border: `1px solid ${softBorder}`,
                  bgcolor: softPanel,
                }}
              >
                <Button
                  size="small"
                  variant={locale === 'en' ? 'contained' : 'text'}
                  color="primary"
                  onClick={() => setLocale('en')}
                  sx={{ minWidth: 40, px: 1.2, fontWeight: 700 }}
                >
                  EN
                </Button>
                <Button
                  size="small"
                  variant={locale === 'es' ? 'contained' : 'text'}
                  color="primary"
                  onClick={() => setLocale('es')}
                  sx={{ minWidth: 40, px: 1.2, fontWeight: 700 }}
                >
                  ES
                </Button>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        component="main"
        sx={{
          pt: { xs: 12, md: 14 },
          background:
            `radial-gradient(circle at 15% 10%, ${alpha(theme.palette.secondary.main, isDark ? 0.24 : 0.22)}, transparent 44%), radial-gradient(circle at 85% 8%, ${alpha(theme.palette.warning.main, isDark ? 0.2 : 0.14)}, transparent 34%), ${theme.palette.background.default}`,
        }}
      >
        <Container maxWidth="lg" sx={{ pb: { xs: 6.8, md: 8.8 } }}>
          <Grid container spacing={3} alignItems="stretch">
            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.55 }}>
                <Chip
                  icon={<VerifiedRoundedIcon />}
                  label={copy.roleChip}
                  sx={{
                    mb: 2.2,
                    border: `1px solid ${softBorder}`,
                    bgcolor: softPanel,
                    '& .MuiChip-icon': {
                      color: isDark ? 'secondary.light' : 'secondary.main',
                    },
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{ maxWidth: 880, fontSize: 'clamp(2.1rem, 6.3vw, 4rem)' }}
                >
                  {copy.heroTitle}
                </Typography>
                <Typography variant="h5" sx={{ mt: 2.6, maxWidth: 800, color: 'text.secondary' }}>
                  {profile.summary}
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.6} sx={{ mt: 3.8 }}>
                  <Button variant="contained" color="primary" endIcon={<ArrowOutwardRoundedIcon />} href="#impact">
                    {copy.impactButton}
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<LaunchRoundedIcon />}
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.linkedinButton}
                  </Button>
                </Stack>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
              >
                <Card sx={{ ...cardBase, height: '100%', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ opacity: 0.84, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {copy.currentRole}
                    </Typography>
                    <Typography variant="h3" sx={{ mt: 1 }}>
                      {activeRole.role}
                    </Typography>
                    <Typography sx={{ opacity: 0.88 }}>
                      {activeRole.company} · {activeRole.period}
                    </Typography>
                    <Typography sx={{ mt: 2, opacity: 0.92 }}>
                      {activeRole.highlights[0]}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="lg" sx={{ pb: { xs: 6.8, md: 8.8 } }}>
          <Box>
            <Grid container alignItems="center" justifyContent="center">
              {kpis.map((kpi, index) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={kpi.label}>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-90px' }}
                        variants={fadeUp}
                        transition={{ duration: 0.42, delay: index * 0.06 }}
                    >
                      <Stack
                          alignItems="center"
                          textAlign="center"
                          spacing={0.7}
                          sx={{
                            py: { xs: 2.2, sm: 1.1 },
                            borderRight: {
                              xs: 'none',
                              sm: index < kpis.length - 1 ? `1px solid ${softBorder}` : 'none',
                            },
                            borderBottom: {
                              xs: index < kpis.length - 1 ? `1px dashed ${softBorder}` : 'none',
                              sm: 'none',
                            },
                          }}
                      >
                        <Typography variant="h2" sx={{ lineHeight: 1 }}>
                          {kpi.value}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700, letterSpacing: '0.02em' }}>
                          {kpi.label}
                        </Typography>
                      </Stack>
                    </motion.div>
                  </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        <Container maxWidth="lg" sx={{ pb: { xs: 7.2, md: 9.2 } }}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
          >
            <Box
              sx={{
                borderRadius: 2.5,
                border: `1px solid ${softBorder}`,
                bgcolor: alpha(theme.palette.primary.main, isDark ? 0.22 : 0.08),
                px: { xs: 1.4, md: 2.2 },
                py: { xs: 1.2, md: 1.5 },
              }}
            >
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 1, md: 2 }}
                alignItems={{ xs: 'flex-start', md: 'center' }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    pl: 0.2,
                    letterSpacing: '0.13em',
                    color: alpha(theme.palette.text.primary, 0.76),
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {copy.trustedBy}
                </Typography>
                <Box
                  sx={{
                    overflow: 'hidden',
                    width: '100%',
                    WebkitMaskImage:
                      'linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 9%, rgba(0,0,0,1) 91%, transparent 100%)',
                    maskImage:
                      'linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 9%, rgba(0,0,0,1) 91%, transparent 100%)',
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={{ xs: 5.5, md: 8.5 }}
                    sx={{
                      width: 'max-content',
                      alignItems: 'center',
                      animation: 'company-logo-marquee 38s linear infinite',
                      '@keyframes company-logo-marquee': {
                        '0%': { transform: 'translateX(0)' },
                        '100%': { transform: 'translateX(-50%)' },
                      },
                      '&:hover': {
                        animationPlayState: 'paused',
                      },
                    }}
                  >
                    {marqueeLogos.map((logo, index) => (
                      <Link
                        key={`${logo.company}-${index}`}
                        href={logo.website}
                        target="_blank"
                        rel="noreferrer"
                        underline="none"
                        aria-label={copy.companyWebsiteLabel.replace('{{company}}', logo.company)}
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          opacity: 0.82,
                          mr: (index + 1) % companyBannerLogos.length === 0 ? { xs: 6, md: 10 } : 0,
                          transition: 'opacity 180ms ease, transform 180ms ease',
                          '&:hover': {
                            opacity: 1,
                            transform: 'translateY(-1px)',
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={logo.logoUrl}
                          alt={`${logo.company} logo`}
                          sx={{
                            width: 'auto',
                            maxWidth: { xs: 142, md: 210 },
                            height: { xs: 38, md: 52 },
                            objectFit: 'contain',
                          }}
                        />
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </motion.div>
        </Container>

        <Container
          id="impact"
          maxWidth="lg"
          sx={{ pt: { xs: 2.1, md: 3.1 }, pb: { xs: 7.8, md: 9.8 }, scrollMarginTop: 98 }}
        >
            <Stack direction="row" spacing={1} alignItems="center">
              <VerifiedRoundedIcon sx={{ color: 'secondary.main' }} />
              <Typography variant="overline" sx={{ letterSpacing: '0.14em', color: 'secondary.dark', fontWeight: 700 }}>
                {copy.resultsMatrix}
              </Typography>
            </Stack>
            <Typography variant="h3" sx={{ mt: 0.45, color: 'text.primary', letterSpacing: '0.02em' }}>
              {copy.impactTitle}
            </Typography>
          <Grid container spacing={3.3} sx={{ mt: 2.1 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
              >
                <Card sx={{ ...cardBase, height: '100%', bgcolor: 'rgba(63, 193, 201, 0.11)' }}>
                  <CardContent sx={{ display: 'grid', gap: 1.5 }}>
                    <Typography variant="h3">{caseStudies[0].title}</Typography>
                    <Typography color="text.secondary">{caseStudies[0].summary}</Typography>
                    <Typography sx={{ fontWeight: 700 }}>{caseStudies[0].impact}</Typography>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', rowGap: 1 }}>
                      {caseStudies[0].stack.map((item) => (
                        <Chip key={item} size="small" label={item} />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                <Card sx={{ ...cardBase, height: '100%', bgcolor: 'warning.main', color: 'warning.contrastText' }}>
                  <CardContent>
                    <Stack direction="row" spacing={1.2} alignItems="center">
                      <BoltRoundedIcon />
                      <Typography variant="h6" sx={{ letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        {copy.deliveryModel}
                      </Typography>
                    </Stack>
                    <Typography sx={{ mt: 1.8 }}>
                      {copy.deliveryModelSummary}
                    </Typography>
                    <Typography sx={{ mt: 1.2, fontWeight: 700 }}>{caseStudies[1].impact}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid id="stack" size={{ xs: 12 }} sx={{ scrollMarginTop: 98 }}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.48, delay: 0.12 }}
              >
                <Box sx={{ mb: 2.5 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <TimelineRoundedIcon sx={{ color: 'secondary.main' }} />
                    <Typography
                      variant="overline"
                      sx={{ letterSpacing: '0.14em', color: 'secondary.dark', fontWeight: 700 }}
                    >
                      {copy.journeyLog}
                    </Typography>
                  </Stack>
                  <Typography variant="h3" sx={{ mt: 0.45, color: 'text.primary', letterSpacing: '0.02em' }}>
                    {copy.careerTimeline}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.75 }}>
                    {copy.careerTimelineSummary}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: 'relative',
                    py: { xs: 0.4, md: 1.2 },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: { xs: 22, md: '50%' },
                      transform: { xs: 'none', md: 'translateX(-50%)' },
                      width: '3px',
                      borderRadius: 99,
                      background:
                        `linear-gradient(180deg, ${alpha(theme.palette.secondary.main, isDark ? 0.3 : 0.18)}, ${alpha(theme.palette.primary.main, isDark ? 0.58 : 0.55)}, ${alpha(theme.palette.warning.main, isDark ? 0.36 : 0.28)})`,
                    },
                  }}
                >
                  <Stack spacing={{ xs: 2.3, md: 2.8 }}>
                    {experiences.map((experience, index) => {
                      const isLeft = index % 2 === 0;

                      const timelineItem = (
                        <Box
                          sx={{
                            position: 'relative',
                            p: { xs: 1.6, md: 2 },
                            borderRadius: 3,
                            border: `1px solid ${softBorder}`,
                            bgcolor: alpha(theme.palette.background.paper, isDark ? 0.94 : 0.9),
                            boxShadow: isDark ? '0 12px 28px rgba(2, 8, 20, 0.45)' : '0 12px 28px rgba(54, 79, 107, 0.08)',
                            backdropFilter: 'blur(8px)',
                            transition: 'transform 180ms ease, box-shadow 180ms ease',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: isDark ? '0 16px 34px rgba(2, 8, 20, 0.62)' : '0 16px 34px rgba(54, 79, 107, 0.13)',
                            },
                          }}
                        >
                          <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            justifyContent="space-between"
                            alignItems={{ xs: 'flex-start', sm: 'center' }}
                            spacing={0.8}
                          >
                            <Box>
                              <Typography sx={{ fontWeight: 700 }}>{experience.role}</Typography>
                              <Link
                                href={experience.website}
                                target="_blank"
                                rel="noreferrer"
                                underline="hover"
                                color="secondary.dark"
                                sx={{ fontWeight: 600 }}
                              >
                                {experience.company}
                              </Link>
                            </Box>
                            <Stack direction="row" spacing={0.8} sx={{ flexWrap: 'wrap', rowGap: 0.6 }}>
                              <Chip
                                label={experience.period}
                                size="small"
                                variant="outlined"
                                sx={{ bgcolor: alpha(theme.palette.background.default, isDark ? 0.52 : 0.85) }}
                              />
                              {index === 0 ? <Chip size="small" color="secondary" label={copy.currentTag} /> : null}
                            </Stack>
                          </Stack>

                          <Typography color="text.secondary" sx={{ mt: 0.75 }}>
                            {experience.highlights[0]}
                          </Typography>
                        </Box>
                      );

                      return (
                        <Box key={`${experience.company}-${experience.period}`}>
                          {/* Mobile linear timeline */}
                          <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'relative', pl: 6.6 }}>
                            <Box
                              sx={{
                                position: 'absolute',
                                left: 0,
                                top: 8,
                                width: 44,
                                height: 44,
                                borderRadius: '50%',
                                bgcolor: 'background.paper',
                                border: `1px solid ${softBorder}`,
                                display: 'grid',
                                placeItems: 'center',
                                zIndex: 1,
                              }}
                            >
                              <Avatar
                                src={experience.logoUrl}
                                alt={`${experience.company} logo`}
                                sx={{
                                  width: 32,
                                  height: 32,
                                  fontSize: 11,
                                  bgcolor: 'background.paper',
                                  border: `1px solid ${softBorder}`,
                                  '& img': { objectFit: 'contain', padding: '3px' },
                                }}
                              >
                                {getInitials(experience.company)}
                              </Avatar>
                            </Box>
                            <Box
                              sx={{
                                position: 'absolute',
                                left: 22,
                                top: 29,
                                width: 14,
                                borderTop: `2px dashed ${softBorder}`,
                              }}
                            />
                            {timelineItem}
                          </Box>

                          {/* Desktop zig-zag timeline */}
                          <Box
                            sx={{
                              display: { xs: 'none', md: 'grid' },
                              gridTemplateColumns: '1fr 88px 1fr',
                              alignItems: 'center',
                              columnGap: 2.2,
                              minHeight: 152,
                            }}
                          >
                            <Box>{isLeft ? timelineItem : null}</Box>
                            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', py: 0.2 }}>
                              <Box
                                sx={{
                                  position: 'absolute',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  left: isLeft ? 0 : '50%',
                                  right: isLeft ? '50%' : 0,
                                  borderTop: `2px dashed ${softBorder}`,
                                }}
                              />
                              <Avatar
                                src={experience.logoUrl}
                                alt={`${experience.company} logo`}
                                sx={{
                                  mt: 1,
                                  width: 46,
                                  height: 46,
                                  fontSize: 11,
                                  bgcolor: 'background.paper',
                                  border: `2px solid ${softBorder}`,
                                  zIndex: 1,
                                  boxShadow: isDark ? '0 8px 18px rgba(2, 8, 20, 0.48)' : '0 8px 18px rgba(54,79,107,0.18)',
                                  '& img': { objectFit: 'contain', padding: '4px' },
                                }}
                              >
                                {getInitials(experience.company)}
                              </Avatar>
                            </Box>
                            <Box>{!isLeft ? timelineItem : null}</Box>
                          </Box>
                        </Box>
                      );
                    })}
                  </Stack>
                </Box>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.48, delay: 0.16 }}
              >
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <SportsEsportsRoundedIcon sx={{ color: 'secondary.main' }} />
                    <Typography variant="overline" sx={{ letterSpacing: '0.14em', color: 'secondary.dark', fontWeight: 700 }}>
                      {copy.stackMatrix}
                    </Typography>
                  </Stack>
                  <Typography variant="h3" sx={{ mt: 0.45, color: 'text.primary', letterSpacing: '0.02em' }}>
                    {copy.coreStack}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.8 }}>
                    {copy.coreStackSummary}
                  </Typography>
                  <Grid container spacing={0} sx={{ mt: 1.4 }}>
                    {techCategories.map((category, index) => {
                      const accent = techCategoryAccentMap[category.title] ?? '#3FC1C9';
                      const categoryIcon = techCategoryIconMap[category.title] ?? <BoltRoundedIcon fontSize="small" />;
                      const isLast = index === techCategories.length - 1;

                      return (
                        <Grid size={{ xs: 12 }} key={category.title}>
                          <Box
                            sx={{
                              py: { xs: 1.35, md: 1.7 },
                              borderBottom: isLast ? 'none' : `1px dashed ${softBorder}`,
                            }}
                          >
                            <Stack
                              direction={{ xs: 'column', md: 'row' }}
                              spacing={{ xs: 1, md: 1.5 }}
                              alignItems={{ xs: 'flex-start', md: 'center' }}
                            >
                              <Stack
                                direction="row"
                                spacing={0.8}
                                alignItems="center"
                                sx={{ minWidth: { md: 250 }, pr: { md: 1.2 } }}
                              >
                                <Box
                                  sx={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: '50%',
                                    display: 'grid',
                                    placeItems: 'center',
                                    color: accent,
                                    border: `1px solid ${accent}77`,
                                    bgcolor: `${accent}12`,
                                  }}
                                >
                                  {categoryIcon}
                                </Box>
                                <Typography
                                  variant="subtitle2"
                                  sx={{
                                    color: accent,
                                    fontWeight: 700,
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    fontFamily: "'Space Grotesk', sans-serif",
                                  }}
                                >
                                  {category.title}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: `${accent}99`,
                                    fontWeight: 700,
                                    letterSpacing: '0.08em',
                                  }}
                                >
                                  {String(index + 1).padStart(2, '0')}
                                </Typography>
                              </Stack>
                              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', rowGap: 1 }}>
                                {category.items.map((tech) => (
                                  <Chip
                                    key={`${category.title}-${tech}`}
                                    label={tech}
                                    variant="outlined"
                                    icon={techIconMap[tech]}
                                    sx={{
                                      height: 31,
                                      borderRadius: 999,
                                      bgcolor: 'transparent',
                                      border: `1px solid ${accent}52`,
                                      color: 'text.primary',
                                      '& .MuiChip-label': {
                                        letterSpacing: '0.02em',
                                        fontWeight: 600,
                                      },
                                      '& .MuiChip-icon': {
                                        color: accent,
                                        ml: 0.8,
                                      },
                                      '&:hover': {
                                        borderColor: `${accent}87`,
                                        bgcolor: `${accent}12`,
                                      },
                                    }}
                                  />
                                ))}
                              </Stack>
                            </Stack>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        <Container id="contact" maxWidth="lg" sx={{ pt: { xs: 2.1, md: 3.1 }, pb: 10, scrollMarginTop: 98 }}>
          <Card
            sx={{
              ...cardBase,
              overflow: 'hidden',
              position: 'relative',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at 10% 20%, rgba(63, 193, 201, 0.3), transparent 46%), radial-gradient(circle at 90% 80%, rgba(252, 81, 133, 0.28), transparent 45%)',
              }}
            />
            <CardContent sx={{ p: { xs: 3, md: 5 }, position: 'relative' }}>
              <Typography variant="h2" sx={{ color: 'primary.contrastText' }}>
                {copy.contactTitle}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1.5, color: 'rgba(245,245,245,0.92)', maxWidth: 720 }}>
                {copy.contactSummary}
              </Typography>
              <Divider sx={{ my: 3, borderColor: 'rgba(245,245,245,0.24)' }} />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  variant="contained"
                  color="secondary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.linkedinContactButton}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: '#F5F5F5', borderColor: 'rgba(245,245,245,0.7)' }}
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: '#F5F5F5', borderColor: 'rgba(245,245,245,0.7)' }}
                  href={phoneHref}
                >
                  {profile.phone}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}

export default withRoot(Home);
