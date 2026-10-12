import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import type { ExperienceItem, HomeCopy, KPI, Profile, Project } from '../../content/profile';
import { brandGradient, easeOutExpo } from '../../modules/theme';

type HomeHeroSectionProps = {
  activeRole: ExperienceItem;
  copy: HomeCopy;
  featuredProject: Project;
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

const labelSx = {
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'text.secondary',
} as const;

export default function HomeHeroSection({
  activeRole,
  copy,
  featuredProject,
  kpis,
  profile,
}: HomeHeroSectionProps) {
  const website = featuredProject.links.find((link) => link.kind === 'website');

  return (
    <Container maxWidth="lg" sx={{ position: 'relative', pb: { xs: 8, md: 12 } }}>
      <Grid container spacing={{ xs: 5, md: 6 }} alignItems="flex-end">
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

        <Grid size={{ xs: 12, md: 5, lg: 4 }} sx={rise(120)}>
          <Box
            component="dl"
            sx={(theme) => ({
              position: 'relative',
              m: 0,
              p: { xs: 2.5, md: 3 },
              borderRadius: '20px',
              bgcolor: 'surface.panel',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${(theme.vars || theme).palette.surface.cardBorder}`,
              boxShadow: (theme.vars || theme).palette.surface.cardShadow,
            })}
          >
            <Box component="dt" sx={labelSx}>
              {copy.currentRole}
            </Box>
            <Box component="dd" sx={{ m: 0, mt: 1 }}>
              <Typography variant="h3" component="p" sx={{ fontSize: '1.35rem' }}>
                {activeRole.role}
              </Typography>
              <Typography sx={{ mt: 0.5, fontWeight: 600, color: 'text.secondary' }}>
                {activeRole.company} ·{' '}
                <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
                  {activeRole.period}
                </Box>
              </Typography>
            </Box>

            <Box
              component="dt"
              sx={{ ...labelSx, mt: 2.5, pt: 2.5, borderTop: 1, borderColor: 'surface.rule' }}
            >
              {copy.ownProduct}
            </Box>
            <Box component="dd" sx={{ m: 0, mt: 1 }}>
              <Link
                href={website?.href}
                target="_blank"
                rel="noopener"
                underline="none"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  color: 'text.primary',
                  fontFamily: "'Space Grotesk Variable', 'Space Grotesk', sans-serif",
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  '& svg': { transition: `transform 300ms ${easeOutExpo}` },
                  '&:hover svg': { transform: 'translate(2px, -2px)' },
                }}
              >
                {featuredProject.name}
                <ArrowOutwardRoundedIcon aria-hidden fontSize="small" />
              </Link>
              <Stack direction="row" spacing={1} alignItems="baseline" sx={{ mt: 1 }}>
                <Box
                  component="span"
                  aria-hidden
                  sx={{
                    position: 'relative',
                    top: '-1px',
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    flexShrink: 0,
                    '@media (prefers-reduced-motion: no-preference)': {
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        bgcolor: 'secondary.main',
                        animation: 'live-ping 2.4s cubic-bezier(0, 0, 0.2, 1) infinite',
                      },
                      '@keyframes live-ping': {
                        '0%': { transform: 'scale(1)', opacity: 0.5 },
                        '70%, 100%': { transform: 'scale(2.4)', opacity: 0 },
                      },
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: 'text.secondary', lineHeight: 1.5 }}
                >
                  {copy.liveOnStores}
                </Typography>
              </Stack>
            </Box>
          </Box>
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
