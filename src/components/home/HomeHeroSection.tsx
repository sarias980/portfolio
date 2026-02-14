import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import type { SxProps, Theme } from '@mui/material/styles';
import type { ExperienceItem, HomeCopy, Profile } from '../../content/profile';
import { fadeUp } from '../../pages/home/home.constants';

type HomeHeroSectionProps = {
  activeRole: ExperienceItem;
  cardBase: SxProps<Theme>;
  copy: HomeCopy;
  isDark: boolean;
  profile: Profile;
  softBorder: string;
  softPanel: string;
};

export default function HomeHeroSection({
  activeRole,
  cardBase,
  copy,
  isDark,
  profile,
  softBorder,
  softPanel,
}: HomeHeroSectionProps) {
  return (
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
            <Typography variant="h1" sx={{ maxWidth: 880, fontSize: 'clamp(2.1rem, 6.3vw, 4rem)' }}>
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
                <Typography sx={{ mt: 2, opacity: 0.92 }}>{activeRole.highlights[0]}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
