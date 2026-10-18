import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import type { ExperienceItem, HomeCopy } from '../../content/profile';
import { getInitials } from '../../pages/home/home.constants';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

type HomeExperienceSectionProps = {
  copy: HomeCopy;
  experiences: ExperienceItem[];
};

export default function HomeExperienceSection({ copy, experiences }: HomeExperienceSectionProps) {
  return (
    <Container
      component="section"
      id="experience"
      aria-labelledby="experience-title"
      maxWidth="lg"
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 88 }}
    >
      <SectionHeading
        id="experience-title"
        title={copy.careerTimeline}
        summary={copy.careerTimelineSummary}
      />

      <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0, borderTop: 1, borderColor: 'surface.rule' }}>
        {experiences.map((experience, index) => (
          <Box
            component="li"
            key={`${experience.company}-${experience.period}`}
            sx={{ borderBottom: 1, borderColor: 'surface.rule' }}
          >
            <Reveal
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '48px 1fr', md: '200px 56px 1fr auto' },
                columnGap: { xs: 2, md: 3 },
                rowGap: 0.5,
                alignItems: 'start',
                py: { xs: 3, md: 3.5 },
              }}
            >
              <Typography
                sx={{
                  gridColumn: { xs: 2, md: 1 },
                  gridRow: { xs: 1, md: 1 },
                  pt: { md: 1.25 },
                  color: 'text.secondary',
                  fontWeight: 600,
                  fontVariantNumeric: 'tabular-nums',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                }}
              >
                {experience.period}
              </Typography>
              <Avatar
                src={experience.logo.src}
                alt={experience.company}
                slotProps={{
                  img: {
                    width: experience.logo.width,
                    height: experience.logo.height,
                    loading: 'lazy',
                    decoding: 'async',
                  },
                }}
                sx={(theme) => ({
                  gridColumn: { xs: 1, md: 2 },
                  gridRow: { xs: '1 / span 3', md: 1 },
                  width: 48,
                  height: 48,
                  fontSize: 12,
                  bgcolor: '#fff',
                  color: '#1f2933',
                  border: `1px solid ${(theme.vars || theme).palette.surface.cardBorder}`,
                  '& img': { objectFit: 'contain', padding: '6px' },
                })}
              >
                {getInitials(experience.company)}
              </Avatar>
              <Box sx={{ gridColumn: { xs: 2, md: 3 }, gridRow: { xs: 2, md: 1 } }}>
                <Typography variant="h3" sx={{ fontSize: { xs: '1.15rem', md: '1.35rem' } }}>
                  {experience.role}
                </Typography>{' '}
                <Link
                  href={experience.website}
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  sx={{ fontWeight: 700, color: 'surface.accentText' }}
                >
                  {experience.company}
                </Link>{' '}
                <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 640 }}>
                  {experience.highlights[0]}
                </Typography>
              </Box>
              {index === 0 ? (
                <Chip
                  size="small"
                  color="secondary"
                  label={copy.currentTag}
                  sx={{
                    gridColumn: { xs: 2, md: 4 },
                    gridRow: { xs: 3, md: 1 },
                    justifySelf: 'start',
                    mt: { xs: 1, md: 1 },
                  }}
                />
              ) : null}
            </Reveal>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
