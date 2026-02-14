import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import type { HomeCopy } from '../../content/profile';
import { fadeUp } from '../../pages/home/home.constants';

export type CompanyBannerLogo = {
  company: string;
  website: string;
  logoUrl: string;
};

type HomeTrustedBySectionProps = {
  companyBannerLogos: CompanyBannerLogo[];
  copy: HomeCopy;
  isDark: boolean;
  marqueeLogos: CompanyBannerLogo[];
  softBorder: string;
};

export default function HomeTrustedBySection({
  companyBannerLogos,
  copy,
  isDark,
  marqueeLogos,
  softBorder,
}: HomeTrustedBySectionProps) {
  const theme = useTheme();

  return (
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
  );
}
