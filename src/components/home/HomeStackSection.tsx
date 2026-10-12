import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { HomeCopy, TechCategory } from '../../content/profile';
import { techCategoryAccentMap, techCategoryIconMap, techIconMap } from '../../pages/home/home.constants';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

type HomeStackSectionProps = {
  copy: HomeCopy;
  techCategories: TechCategory[];
};

export default function HomeStackSection({ copy, techCategories }: HomeStackSectionProps) {
  return (
    <Container
      component="section"
      id="stack"
      aria-labelledby="stack-title"
      maxWidth="lg"
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 88 }}
    >
      <SectionHeading id="stack-title" title={copy.coreStack} summary={copy.coreStackSummary} />

      <Reveal>
        <Box component="dl" sx={{ m: 0, borderTop: 1, borderColor: 'surface.rule' }}>
          {techCategories.map((category) => {
            const accent = techCategoryAccentMap[category.id];

            return (
              <Stack
                key={category.id}
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 1, md: 1.5 }}
                alignItems={{ xs: 'flex-start', md: 'center' }}
                sx={{
                  py: { xs: 2.25, md: 2.75 },
                  borderBottom: 1,
                  borderColor: 'surface.rule',
                }}
              >
                <Stack
                  component="dt"
                  direction="row"
                  spacing={0.8}
                  alignItems="center"
                  sx={{ minWidth: { md: 250 }, pr: { md: 1.2 } }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      color: accent,
                      border: `1px solid ${accent}77`,
                      bgcolor: `${accent}12`,
                    }}
                  >
                    {techCategoryIconMap[category.id]}
                  </Box>
                  <Typography
                    component="span"
                    variant="subtitle2"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontFamily: "'Space Grotesk Variable', 'Space Grotesk', sans-serif",
                    }}
                  >
                    {category.title}
                  </Typography>
                </Stack>
                <Stack component="dd" direction="row" sx={{ flexWrap: 'wrap', gap: 1, m: 0 }}>
                  {category.items.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      variant="outlined"
                      icon={techIconMap[tech]}
                      sx={{
                        height: 31,
                        borderRadius: 999,
                        bgcolor: 'transparent',
                        border: `1px solid ${accent}66`,
                        color: 'text.primary',
                        '& .MuiChip-label': {
                          letterSpacing: '0.02em',
                          fontWeight: 600,
                        },
                        '& .MuiChip-icon': {
                          color: accent,
                          ml: 0.8,
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            );
          })}
        </Box>
      </Reveal>
    </Container>
  );
}
