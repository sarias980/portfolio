import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import type { HomeCopy, Profile } from '../../content/profile';

type HomeContactSectionProps = {
  cardBase: SxProps<Theme>;
  copy: HomeCopy;
  phoneHref: string;
  profile: Profile;
};

export default function HomeContactSection({
  cardBase,
  copy,
  phoneHref,
  profile,
}: HomeContactSectionProps) {
  return (
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
  );
}
