import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import type { CaseStudy, HomeCopy } from '../../content/profile';
import { cardBase } from '../../pages/home/home.constants';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

type HomeImpactSectionProps = {
  caseStudies: CaseStudy[];
  copy: HomeCopy;
};

const cardTones = [
  { bgcolor: 'rgba(63, 193, 201, 0.11)', color: 'text.primary', summary: 'text.secondary' },
  { bgcolor: 'warning.main', color: 'warning.contrastText', summary: 'inherit' },
  { bgcolor: 'rgba(63, 193, 201, 0.16)', color: 'text.primary', summary: 'text.secondary' },
] as const;

export default function HomeImpactSection({ caseStudies, copy }: HomeImpactSectionProps) {
  return (
    <Container
      component="section"
      id="impact"
      aria-labelledby="impact-title"
      maxWidth="lg"
      sx={{ pt: { xs: 2.1, md: 3.1 }, pb: { xs: 7.8, md: 9.8 }, scrollMarginTop: 98 }}
    >
      <SectionHeading
        id="impact-title"
        icon={<InsightsRoundedIcon />}
        overline={copy.impactOverline}
        title={copy.impactTitle}
        summary={copy.impactSummary}
      />

      <Grid container spacing={3.3} alignItems="stretch" sx={{ mt: 1 }}>
        {caseStudies.map((caseStudy, index) => {
          const tone = cardTones[index % cardTones.length];

          return (
            <Grid key={caseStudy.title} size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
              <Reveal sx={{ width: '100%', display: 'flex', transitionDelay: `${index * 60}ms` }}>
                <Card
                  component="article"
                  sx={(theme) => ({
                    ...cardBase(theme),
                    width: '100%',
                    display: 'flex',
                    bgcolor: tone.bgcolor,
                    color: tone.color,
                  })}
                >
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, flex: 1 }}>
                    <Typography variant="h3">{caseStudy.title}</Typography>
                    <Typography color={tone.summary}>{caseStudy.summary}</Typography>
                    <Stack
                      component="ul"
                      direction="row"
                      sx={{ flexWrap: 'wrap', gap: 1, listStyle: 'none', m: 0, p: 0, mt: 'auto' }}
                    >
                      {caseStudy.stack.map((item) => (
                        <li key={item}>
                          <Chip size="small" label={item} />
                        </li>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Reveal>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
