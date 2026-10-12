import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import type { ExperienceItem, HomeCopy, Profile } from '../../content/profile';
import { cardBase } from '../../pages/home/home.constants';

type HomeHeroSectionProps = {
  activeRole: ExperienceItem;
  copy: HomeCopy;
  profile: Profile;
};

// Transform-only entrance: opacity stays at 1 so it never delays the LCP paint,
// and it is pure CSS so the prerendered page looks right without JavaScript.
const heroEntrance = {
  '@media (prefers-reduced-motion: no-preference)': {
    animation: 'hero-rise 520ms ease-out both',
    '@keyframes hero-rise': {
      from: { transform: 'translateY(14px)' },
      to: { transform: 'none' },
    },
  },
} as const;

export default function HomeHeroSection({ activeRole, copy, profile }: HomeHeroSectionProps) {
  return (
    <Container maxWidth="lg" sx={{ pb: { xs: 6.8, md: 8.8 } }}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid size={{ xs: 12, md: 8 }} sx={heroEntrance}>
          <Typography variant="h1" sx={{ maxWidth: 880 }}>
            <Box
              component="span"
              sx={(theme) => ({
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                mb: 2.2,
                px: 1.5,
                py: 0.6,
                borderRadius: 999,
                border: `1px solid ${(theme.vars || theme).palette.surface.softBorder}`,
                bgcolor: 'surface.softPanel',
                fontFamily: theme.typography.fontFamily,
                fontSize: '0.875rem',
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: 0,
                color: 'text.primary',
              })}
            >
              <VerifiedRoundedIcon aria-hidden sx={{ fontSize: 18, color: 'secondary.main' }} />
              {copy.roleChip}
            </Box>
            <Box component="span" sx={{ display: 'block' }}>
              {copy.heroTitle}
            </Box>
          </Typography>
          <Typography variant="h5" component="p" sx={{ mt: 2.6, maxWidth: 800, color: 'text.secondary' }}>
            {profile.summary}
          </Typography>
          <Stack direction="row" spacing={0.75} alignItems="center" sx={{ mt: 2, color: 'text.secondary' }}>
            <PlaceRoundedIcon aria-hidden fontSize="small" />
            <Typography sx={{ fontWeight: 600 }}>{profile.location}</Typography>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.6} sx={{ mt: 3.4 }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowDownwardRoundedIcon />}
              href="#projects"
            >
              {copy.projectsButton}
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              endIcon={<LaunchRoundedIcon />}
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
            >
              {copy.linkedinButton}
            </Button>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} sx={heroEntrance}>
          <Card
            sx={(theme) => ({
              ...cardBase(theme),
              height: '100%',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
            })}
          >
            <CardContent>
              <Typography
                sx={{ fontWeight: 700, opacity: 0.88, letterSpacing: '0.06em', textTransform: 'uppercase' }}
              >
                {copy.currentRole}
              </Typography>
              <Typography variant="h3" component="p" sx={{ mt: 1 }}>
                {activeRole.role}
              </Typography>
              <Typography sx={{ opacity: 0.9 }}>
                {activeRole.company} · {activeRole.period}
              </Typography>
              <Typography sx={{ mt: 2, opacity: 0.94 }}>{activeRole.highlights[0]}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
