import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { KPI } from '../../content/profile';
import Reveal from '../common/Reveal';

type HomeKpisSectionProps = {
  kpis: KPI[];
};

export default function HomeKpisSection({ kpis }: HomeKpisSectionProps) {
  return (
    <Container maxWidth="lg" sx={{ pb: { xs: 6.8, md: 8.8 } }}>
      <Grid
        container
        component="ul"
        alignItems="center"
        justifyContent="center"
        sx={{ listStyle: 'none', m: 0, p: 0 }}
      >
        {kpis.map((kpi, index) => (
          <Grid component="li" size={{ xs: 12, sm: 4 }} key={kpi.label}>
            <Reveal sx={{ transitionDelay: `${index * 60}ms` }}>
              <Stack
                alignItems="center"
                textAlign="center"
                spacing={0.7}
                sx={(theme) => ({
                  py: { xs: 2.2, sm: 1.1 },
                  borderRight: {
                    xs: 'none',
                    sm:
                      index < kpis.length - 1
                        ? `1px solid ${(theme.vars || theme).palette.surface.softBorder}`
                        : 'none',
                  },
                  borderBottom: {
                    xs:
                      index < kpis.length - 1
                        ? `1px dashed ${(theme.vars || theme).palette.surface.softBorder}`
                        : 'none',
                    sm: 'none',
                  },
                })}
              >
                <Typography variant="h2" component="p" sx={{ lineHeight: 1 }}>
                  {kpi.value}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: 700, letterSpacing: '0.02em' }}
                >
                  {kpi.label}
                </Typography>
              </Stack>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
