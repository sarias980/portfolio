import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import type { CompanyLogo, HomeCopy } from '../../content/profile';
import { formatLabel } from '../../pages/home/home.constants';
import Reveal from '../common/Reveal';

// Box would treat width/height as style props; a styled img keeps them as
// attributes so the browser can reserve space before the logo loads.
const LogoImage = styled('img')({});

export type CompanyBannerLogo = {
  company: string;
  website: string;
  logo: CompanyLogo;
};

type HomeTrustedBySectionProps = {
  companyBannerLogos: CompanyBannerLogo[];
  copy: HomeCopy;
};

export default function HomeTrustedBySection({ companyBannerLogos, copy }: HomeTrustedBySectionProps) {
  // The list is rendered twice for a seamless loop; the copy is hidden from
  // assistive technology and keyboard focus.
  const loops = [false, true];

  return (
    <Container maxWidth="lg" sx={{ pb: { xs: 7.2, md: 9.2 } }}>
      <Reveal>
        <Box
          sx={(theme) => ({
            borderRadius: { xs: '20px', md: '999px' },
            border: `1px solid ${(theme.vars || theme).palette.surface.softBorder}`,
            bgcolor: 'surface.trustedBg',
            px: { xs: 1.4, md: 2.2 },
            py: { xs: 1.2, md: 1.5 },
          })}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 1, md: 2 }}
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Typography
              component="p"
              variant="overline"
              sx={{
                pl: 0.2,
                letterSpacing: '0.13em',
                color: 'text.primary',
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
                sx={{
                  width: 'max-content',
                  alignItems: 'center',
                  '@media (prefers-reduced-motion: no-preference)': {
                    animation: 'company-logo-marquee 38s linear infinite',
                  },
                  '@keyframes company-logo-marquee': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                  },
                  '&:hover, &:focus-within': {
                    animationPlayState: 'paused',
                  },
                }}
              >
                {loops.map((isCopy) => (
                  <Stack
                    key={String(isCopy)}
                    component="ul"
                    direction="row"
                    aria-hidden={isCopy || undefined}
                    spacing={{ xs: 5.5, md: 8.5 }}
                    sx={{ listStyle: 'none', m: 0, p: 0, pr: { xs: 5.5, md: 8.5 }, alignItems: 'center' }}
                  >
                    {companyBannerLogos.map((item) => (
                      <Box component="li" key={item.company} sx={{ display: 'flex' }}>
                        <Link
                          href={item.website}
                          target="_blank"
                          rel="noopener"
                          underline="none"
                          tabIndex={isCopy ? -1 : undefined}
                          aria-label={formatLabel(copy.companyWebsiteLabel, { company: item.company })}
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            opacity: 0.7,
                            filter: 'var(--mui-palette-surface-logoFilter)',
                            transition: 'opacity 300ms ease, filter 300ms ease',
                            '&:hover, &:focus-visible': { opacity: 1, filter: 'none' },
                          }}
                        >
                          <LogoImage
                            src={item.logo.src}
                            alt={item.company}
                            width={item.logo.width}
                            height={item.logo.height}
                            loading="lazy"
                            decoding="async"
                            sx={{
                              width: 'auto',
                              maxWidth: { xs: 142, md: 210 },
                              height: { xs: 38, md: 52 },
                              objectFit: 'contain',
                            }}
                          />
                        </Link>
                      </Box>
                    ))}
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Reveal>
    </Container>
  );
}
