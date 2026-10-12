import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
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
      sx={{ pb: { xs: 7.8, md: 9.8 }, scrollMarginTop: 98 }}
    >
      <SectionHeading
        id="experience-title"
        icon={<TimelineRoundedIcon />}
        overline={copy.journeyLog}
        title={copy.careerTimeline}
        summary={copy.careerTimelineSummary}
      />

      <Box
        component="ol"
        sx={(theme) => ({
          position: 'relative',
          listStyle: 'none',
          m: 0,
          p: 0,
          py: { xs: 0.4, md: 1.2 },
          display: 'grid',
          gap: { xs: 2.3, md: 2.8 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: { xs: 22, md: '50%' },
            transform: { xs: 'none', md: 'translateX(-50%)' },
            width: '3px',
            borderRadius: 99,
            background: (theme.vars || theme).palette.surface.timelineLine,
          },
        })}
      >
        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <Box
              component="li"
              key={`${experience.company}-${experience.period}`}
              sx={{
                position: 'relative',
                display: 'grid',
                alignItems: 'center',
                gridTemplateColumns: { xs: '44px 1fr', md: '1fr 88px 1fr' },
                columnGap: { xs: 2, md: 2.2 },
                minHeight: { md: 152 },
              }}
            >
              <Box
                sx={(theme) => ({
                  gridColumn: { xs: 1, md: 2 },
                  gridRow: 1,
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignSelf: { xs: 'start', md: 'center' },
                  pt: { xs: 1, md: 0 },
                  '&::after': {
                    content: '""',
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    top: '50%',
                    left: isLeft ? 0 : '50%',
                    right: isLeft ? '50%' : 0,
                    borderTop: `2px dashed ${(theme.vars || theme).palette.surface.softBorder}`,
                  },
                })}
              >
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
                    width: { xs: 44, md: 46 },
                    height: { xs: 44, md: 46 },
                    fontSize: 11,
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                    border: `2px solid ${(theme.vars || theme).palette.surface.softBorder}`,
                    zIndex: 1,
                    boxShadow: (theme.vars || theme).palette.surface.cardShadow,
                    '& img': { objectFit: 'contain', padding: '4px' },
                  })}
                >
                  {getInitials(experience.company)}
                </Avatar>
              </Box>

              <Reveal
                sx={{
                  gridColumn: { xs: 2, md: isLeft ? 1 : 3 },
                  gridRow: 1,
                }}
              >
                <Box
                  sx={(theme) => ({
                    p: { xs: 1.6, md: 2 },
                    borderRadius: 3,
                    border: `1px solid ${(theme.vars || theme).palette.surface.softBorder}`,
                    bgcolor: 'surface.timelineCard',
                    boxShadow: (theme.vars || theme).palette.surface.cardShadow,
                  })}
                >
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                    spacing={0.8}
                  >
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{ fontSize: '1.05rem', fontFamily: 'inherit', fontWeight: 700 }}
                      >
                        {experience.role}
                      </Typography>
                      <Link
                        href={experience.website}
                        target="_blank"
                        rel="noopener"
                        underline="hover"
                        sx={{ fontWeight: 600, color: 'surface.accentText' }}
                      >
                        {experience.company}
                      </Link>
                    </Box>
                    <Stack direction="row" spacing={0.8} sx={{ flexWrap: 'wrap', rowGap: 0.6 }}>
                      <Chip label={experience.period} size="small" variant="outlined" />
                      {index === 0 ? <Chip size="small" color="secondary" label={copy.currentTag} /> : null}
                    </Stack>
                  </Stack>

                  <Typography color="text.secondary" sx={{ mt: 0.75 }}>
                    {experience.highlights[0]}
                  </Typography>
                </Box>
              </Reveal>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
