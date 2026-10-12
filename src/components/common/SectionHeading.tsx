import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { brandGradient } from '../../modules/theme';

type SectionHeadingProps = {
  id: string;
  title: string;
  summary: string;
};

// Heading + the brand underline (the bar under the S mark) + a short lead.
export default function SectionHeading({ id, title, summary }: SectionHeadingProps) {
  return (
    <Box sx={{ mb: { xs: 4, md: 5 } }}>
      <Typography id={id} variant="h2" sx={{ color: 'text.primary' }}>
        {title}
      </Typography>
      <Box aria-hidden sx={{ width: 56, height: 4, mt: 2, borderRadius: 9, background: brandGradient }} />
      <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 640, fontSize: { md: '1.1rem' } }}>
        {summary}
      </Typography>
    </Box>
  );
}
