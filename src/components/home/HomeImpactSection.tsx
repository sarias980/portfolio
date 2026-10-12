import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { CaseStudy, HomeCopy } from '../../content/profile';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

type HomeImpactSectionProps = {
  caseStudies: CaseStudy[];
  copy: HomeCopy;
};

export default function HomeImpactSection({ caseStudies, copy }: HomeImpactSectionProps) {
  return (
    <Container
      component="section"
      id="impact"
      aria-labelledby="impact-title"
      maxWidth="lg"
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 88 }}
    >
      <Grid container spacing={{ xs: 2, md: 8 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ position: { md: 'sticky' }, top: { md: 120 } }}>
            <SectionHeading id="impact-title" title={copy.impactTitle} summary={copy.impactSummary} />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            component="ol"
            sx={{ listStyle: 'none', m: 0, p: 0, borderTop: 1, borderColor: 'surface.rule' }}
          >
            {caseStudies.map((caseStudy) => (
              <Box component="li" key={caseStudy.title} sx={{ borderBottom: 1, borderColor: 'surface.rule' }}>
                <Reveal component="article" sx={{ py: { xs: 3.5, md: 4.5 } }}>
                  <Typography variant="h3">{caseStudy.title}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1.25, maxWidth: 620 }}>
                    {caseStudy.summary}
                  </Typography>
                  <Stack
                    component="ul"
                    direction="row"
                    sx={{ flexWrap: 'wrap', gap: 1, listStyle: 'none', m: 0, p: 0, mt: 2.25 }}
                  >
                    {caseStudy.stack.map((item) => (
                      <li key={item}>
                        <Chip
                          size="small"
                          variant="outlined"
                          label={item}
                          sx={{ borderColor: 'surface.softBorder' }}
                        />
                      </li>
                    ))}
                  </Stack>
                </Reveal>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
