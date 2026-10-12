import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type SectionHeadingProps = {
  id: string;
  icon: ReactNode;
  overline: string;
  title: string;
  summary: string;
};

export default function SectionHeading({ id, icon, overline, title, summary }: SectionHeadingProps) {
  return (
    <Box sx={{ mb: 2.5 }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box component="span" aria-hidden sx={{ display: 'inline-flex', color: 'secondary.main' }}>
          {icon}
        </Box>
        <Typography
          component="p"
          variant="overline"
          sx={{ letterSpacing: '0.14em', color: 'surface.accentText', fontWeight: 700 }}
        >
          {overline}
        </Typography>
      </Stack>
      <Typography id={id} variant="h2" sx={{ mt: 0.45, color: 'text.primary', letterSpacing: '0.01em' }}>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 0.75, maxWidth: 760 }}>
        {summary}
      </Typography>
    </Box>
  );
}
