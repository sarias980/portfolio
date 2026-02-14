import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { KPI } from '../../content/profile';
import { fadeUp } from '../../pages/home/home.constants';

type HomeKpisSectionProps = {
  kpis: KPI[];
  softBorder: string;
};

export default function HomeKpisSection({ kpis, softBorder }: HomeKpisSectionProps) {
  return (
    <Container maxWidth="lg" sx={{ pb: { xs: 6.8, md: 8.8 } }}>
      <Box>
        <Grid container alignItems="center" justifyContent="center">
          {kpis.map((kpi, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={kpi.label}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-90px' }}
                variants={fadeUp}
                transition={{ duration: 0.42, delay: index * 0.06 }}
              >
                <Stack
                  alignItems="center"
                  textAlign="center"
                  spacing={0.7}
                  sx={{
                    py: { xs: 2.2, sm: 1.1 },
                    borderRight: {
                      xs: 'none',
                      sm: index < kpis.length - 1 ? `1px solid ${softBorder}` : 'none',
                    },
                    borderBottom: {
                      xs: index < kpis.length - 1 ? `1px dashed ${softBorder}` : 'none',
                      sm: 'none',
                    },
                  }}
                >
                  <Typography variant="h2" sx={{ lineHeight: 1 }}>
                    {kpi.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700, letterSpacing: '0.02em' }}>
                    {kpi.label}
                  </Typography>
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
