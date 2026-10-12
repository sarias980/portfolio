import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import type { HomeCopy, KPI, Profile } from '../../content/profile';
import { brandGradient, easeOutExpo } from '../../modules/theme';
import { sPath } from '../common/BrandMark';

type HomeHeroSectionProps = {
  copy: HomeCopy;
  kpis: KPI[];
  profile: Profile;
};

// Transform-only entrance: opacity stays at 1 so it never delays the LCP paint,
// and it is pure CSS so the prerendered page looks right without JavaScript.
const rise = (delay = 0) =>
  ({
    '@media (prefers-reduced-motion: no-preference)': {
      animation: `hero-rise 900ms ${easeOutExpo} ${delay}ms both`,
      '@keyframes hero-rise': {
        from: { transform: 'translateY(18px)' },
        to: { transform: 'none' },
      },
    },
  }) as const;

// The S mark as the hero's centrepiece: its outline draws in, fills, then the
// brand bar sweeps underneath. Decorative only; CSS so it also plays on the
// prerendered page, and shown complete when reduced motion is requested.
function HeroMark() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        py: 4,
        color: 'text.primary',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: '-10% -30%',
          zIndex: -1,
          background:
            'radial-gradient(closest-side, var(--mui-palette-surface-glowSecondary), transparent 70%), radial-gradient(closest-side at 70% 80%, var(--mui-palette-surface-glowWarning), transparent 70%)',
        },
        '& path': {
          fill: 'currentColor',
          stroke: 'currentColor',
          strokeWidth: 0.12,
          strokeLinejoin: 'round',
        },
        '@media (prefers-reduced-motion: no-preference)': {
          '& path': {
            strokeDasharray: 1,
            animation: `mark-draw 1600ms ${easeOutExpo} 200ms both, mark-fill 700ms ease-out 1300ms both`,
          },
          '& .hero-mark-bar': {
            animation: `mark-bar 900ms ${easeOutExpo} 1700ms both`,
          },
          '@keyframes mark-draw': {
            from: { strokeDashoffset: 1 },
            to: { strokeDashoffset: 0 },
          },
          '@keyframes mark-fill': {
            from: { fillOpacity: 0 },
            to: { fillOpacity: 1 },
          },
          '@keyframes mark-bar': {
            from: { transform: 'scaleX(0)' },
            to: { transform: 'scaleX(1)' },
          },
        },
      }}
    >
      <Box
        component="svg"
        viewBox="0.9 11.6 11 29"
        focusable="false"
        sx={{ width: { md: 112, lg: 128 }, height: { md: 296, lg: 336 }, overflow: 'visible' }}
      >
        <path d={sPath} pathLength={1} />
      </Box>
      <Box
        className="hero-mark-bar"
        sx={{
          width: { md: 150, lg: 172 },
          height: 12,
          borderRadius: 9,
          background: brandGradient,
          transformOrigin: 'left',
        }}
      />
    </Box>
  );
}

export default function HomeHeroSection({ copy, kpis, profile }: HomeHeroSectionProps) {
  return (
    <Container maxWidth="lg" sx={{ position: 'relative', pb: { xs: 8, md: 12 } }}>
      <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
        <Grid size={{ xs: 12, md: 7, lg: 8 }} sx={rise()}>
          <Typography variant="h1" sx={{ maxWidth: 900 }}>
            <Box component="span" sx={{ display: 'block' }}>
              {copy.heroTitle}
            </Box>
            <Box
              component="span"
              aria-hidden
              sx={{
                display: 'block',
                width: { xs: 72, md: 112 },
                height: { xs: 5, md: 6 },
                mt: { xs: 2.5, md: 3.5 },
                borderRadius: 9,
                background: brandGradient,
                transformOrigin: 'left',
                '@media (prefers-reduced-motion: no-preference)': {
                  animation: `brand-bar 1100ms ${easeOutExpo} 250ms both`,
                  '@keyframes brand-bar': {
                    from: { transform: 'scaleX(0)' },
                    to: { transform: 'scaleX(1)' },
                  },
                },
              }}
            />
            <Box
              component="span"
              sx={{
                display: 'block',
                mt: { xs: 2.5, md: 3 },
                fontFamily: "'Manrope Variable', 'Manrope', sans-serif",
                fontSize: { xs: '1.05rem', md: '1.3rem' },
                fontWeight: 700,
                lineHeight: 1.4,
                letterSpacing: 0,
                color: 'surface.accentText',
              }}
            >
              {copy.roleChip}
            </Box>
          </Typography>
          <Typography
            component="p"
            sx={{
              mt: 2.5,
              maxWidth: 680,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              color: 'text.secondary',
            }}
          >
            {profile.summary}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            alignItems={{ xs: 'stretch', sm: 'center' }}
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowDownwardRoundedIcon />}
              href="#projects"
            >
              {copy.projectsButton}
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              endIcon={<LaunchRoundedIcon />}
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              sx={{ borderColor: 'surface.softBorder' }}
            >
              {copy.linkedinButton}
            </Button>
            <Stack
              direction="row"
              spacing={0.75}
              alignItems="center"
              sx={{ color: 'text.secondary', pl: { sm: 1.5 }, pt: { xs: 1, sm: 0 } }}
            >
              <PlaceRoundedIcon aria-hidden fontSize="small" />
              <Typography sx={{ fontWeight: 600 }}>{profile.location}</Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ md: 5, lg: 4 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <HeroMark />
        </Grid>
      </Grid>

      <Box
        component="ul"
        aria-label={copy.factsLabel}
        sx={{
          listStyle: 'none',
          m: 0,
          p: 0,
          mt: { xs: 7, md: 10 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          borderTop: 1,
          borderColor: 'surface.rule',
        }}
      >
        {kpis.map((kpi, index) => (
          <Box
            component="li"
            key={kpi.label}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'column' },
              alignItems: { xs: 'baseline', sm: 'flex-start' },
              gap: { xs: 1.5, sm: 0.5 },
              py: { xs: 2, sm: 3 },
              pl: { sm: index === 0 ? 0 : 3 },
              borderLeft: { sm: index === 0 ? 0 : 1 },
              borderBottom: { xs: index < kpis.length - 1 ? 1 : 0, sm: 0 },
              borderColor: { xs: 'surface.rule', sm: 'surface.rule' },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontFamily: "'Space Grotesk Variable', 'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: { xs: '1.6rem', md: '2.25rem' },
                lineHeight: 1,
                letterSpacing: '-0.03em',
                fontVariantNumeric: 'tabular-nums',
                minWidth: { xs: 132, sm: 0 },
              }}
            >
              {kpi.value}
            </Typography>
            <Typography component="span" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              {kpi.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
