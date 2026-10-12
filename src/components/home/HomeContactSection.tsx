import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import type { HomeCopy, Locale, Profile } from '../../content/profile';
import { cardBase } from '../../pages/home/home.constants';

type HomeContactSectionProps = {
  copy: HomeCopy;
  locale: Locale;
  profile: Profile;
};

const lightButton = {
  color: '#F5F5F5',
  borderColor: 'rgba(245,245,245,0.7)',
  '&:hover': { borderColor: '#F5F5F5', bgcolor: 'rgba(245,245,245,0.08)' },
} as const;

export default function HomeContactSection({ copy, locale, profile }: HomeContactSectionProps) {
  return (
    <Container
      component="section"
      id="contact"
      aria-labelledby="contact-title"
      maxWidth="lg"
      sx={{ pt: { xs: 2.1, md: 3.1 }, pb: 8, scrollMarginTop: 98 }}
    >
      <Card
        sx={(theme) => ({
          ...cardBase(theme),
          overflow: 'hidden',
          position: 'relative',
          // Same deep navy in both color schemes keeps the light text at AA contrast.
          bgcolor: '#17263d',
          color: '#F5F5F5',
        })}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 10% 20%, rgba(63, 193, 201, 0.3), transparent 46%), radial-gradient(circle at 90% 80%, rgba(252, 81, 133, 0.28), transparent 45%)',
          }}
        />
        <CardContent sx={{ p: { xs: 3, md: 5 }, position: 'relative' }}>
          <Typography id="contact-title" variant="h2" sx={{ color: 'inherit' }}>
            {copy.contactTitle}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1.5, color: 'rgba(245,245,245,0.92)', maxWidth: 720 }}>
            {copy.contactSummary}
          </Typography>
          <Divider sx={{ my: 3, borderColor: 'rgba(245,245,245,0.24)' }} />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              startIcon={<MailOutlineRoundedIcon />}
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </Button>
            <Button
              variant="outlined"
              endIcon={<LaunchRoundedIcon />}
              sx={lightButton}
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
            >
              {copy.linkedinContactButton}
            </Button>
            <Button
              variant="outlined"
              startIcon={<DownloadRoundedIcon />}
              sx={lightButton}
              href={profile.cvUrl}
              download
              hrefLang={locale}
              type="application/pdf"
            >
              {copy.downloadCvButton}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
