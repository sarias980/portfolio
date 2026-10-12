import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import type { HomeCopy, Locale, Profile } from '../../content/profile';
import { brandGradient, easeOutExpo } from '../../modules/theme';
import BrandMark from '../common/BrandMark';
import Reveal from '../common/Reveal';

type HomeContactSectionProps = {
  copy: HomeCopy;
  locale: Locale;
  profile: Profile;
};

const lightButton = {
  color: '#F5F5F5',
  borderColor: 'rgba(245,245,245,0.45)',
  '&:hover': { borderColor: '#F5F5F5', bgcolor: 'rgba(245,245,245,0.08)' },
} as const;

export default function HomeContactSection({ copy, locale, profile }: HomeContactSectionProps) {
  return (
    <Container
      component="section"
      id="contact"
      aria-labelledby="contact-title"
      maxWidth="lg"
      sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 12 }, scrollMarginTop: 88 }}
    >
      <Reveal>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: { xs: '24px', md: '32px' },
            px: { xs: 3, sm: 5, md: 8 },
            py: { xs: 6, md: 9 },
            // Same deep navy in both color schemes keeps the light text at AA contrast.
            bgcolor: '#121d2f',
            color: '#F5F5F5',
            boxShadow: '0 30px 60px rgba(8, 18, 33, 0.28)',
            backgroundImage:
              'radial-gradient(60% 80% at 0% 0%, rgba(63, 193, 201, 0.28), transparent 60%), radial-gradient(50% 70% at 100% 100%, rgba(252, 81, 133, 0.26), transparent 60%)',
          }}
        >
          <BrandMark
            size={420}
            withBar={false}
            sx={{
              position: 'absolute',
              right: { xs: -120, md: 40 },
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'rgba(245, 245, 245, 0.05)',
              pointerEvents: 'none',
            }}
          />
          <Box sx={{ position: 'relative', maxWidth: 760 }}>
            <Typography id="contact-title" variant="h2" sx={{ color: 'inherit' }}>
              {copy.contactTitle}
            </Typography>
            <Typography sx={{ mt: 2, color: 'rgba(245,245,245,0.82)', fontSize: { md: '1.15rem' } }}>
              {copy.contactSummary}
            </Typography>
            <Link
              href={`mailto:${profile.email}`}
              underline="none"
              sx={{
                position: 'relative',
                display: 'inline-block',
                mt: { xs: 4, md: 5 },
                pb: 1,
                color: '#F5F5F5',
                fontFamily: "'Space Grotesk Variable', 'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: { xs: '1.45rem', sm: '2.2rem', md: '3rem' },
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                overflowWrap: 'anywhere',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: { xs: 3, md: 4 },
                  borderRadius: 9,
                  background: brandGradient,
                  transformOrigin: 'left',
                  transform: 'scaleX(0.18)',
                  transition: `transform 700ms ${easeOutExpo}`,
                },
                '&:hover::after, &:focus-visible::after': { transform: 'scaleX(1)' },
              }}
            >
              {profile.email}
            </Link>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: { xs: 4, md: 5 } }}>
              <Button
                variant="outlined"
                size="large"
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
                size="large"
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
          </Box>
        </Box>
      </Reveal>
    </Container>
  );
}
