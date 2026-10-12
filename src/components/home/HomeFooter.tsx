import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { HomeCopy, Profile } from '../../content/profile';
import BrandMark from '../common/BrandMark';

const footerLink = { display: 'inline-flex', alignItems: 'center', minHeight: 44, fontWeight: 600 } as const;

type HomeFooterProps = {
  copy: HomeCopy;
  profile: Profile;
};

export default function HomeFooter({ copy, profile }: HomeFooterProps) {
  return (
    <Container component="footer" maxWidth="lg" sx={{ pb: 5 }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        sx={{ pt: 3, borderTop: 1, borderColor: 'surface.rule', color: 'text.secondary' }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <BrandMark size={22} sx={{ color: 'text.primary' }} />
          <Typography variant="body2">
            {profile.fullName} · {copy.footerNote}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2.5}>
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener"
            color="inherit"
            variant="body2"
            sx={footerLink}
          >
            GitHub
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
            color="inherit"
            variant="body2"
            sx={footerLink}
          >
            LinkedIn
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
