import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import { siAppstore, siGoogleplay } from 'simple-icons';
import type { HomeCopy, Project, ProjectLinkKind } from '../../content/profile';
import { cardBase, formatLabel } from '../../pages/home/home.constants';
import BrandIcon from '../common/BrandIcon';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

type HomeProjectsSectionProps = {
  copy: HomeCopy;
  projects: Project[];
};

const linkIcons: Record<ProjectLinkKind, React.ReactNode> = {
  website: <LaunchRoundedIcon />,
  appStore: <BrandIcon icon={siAppstore} size={16} />,
  googlePlay: <BrandIcon icon={siGoogleplay} size={15} />,
};

export default function HomeProjectsSection({ copy, projects }: HomeProjectsSectionProps) {
  return (
    <Container
      component="section"
      id="projects"
      aria-labelledby="projects-title"
      maxWidth="lg"
      sx={{ pb: { xs: 7.8, md: 9.8 }, scrollMarginTop: 98 }}
    >
      <SectionHeading
        id="projects-title"
        icon={<RocketLaunchRoundedIcon />}
        overline={copy.projectsOverline}
        title={copy.projectsTitle}
        summary={copy.projectsSummary}
      />

      <Grid container spacing={3} sx={{ mt: 1 }}>
        {projects.map((project, index) => {
          // The first project is the flagship and spans the full row.
          const isFeatured = index === 0;
          const meta = [project.role, project.period].filter(Boolean).join(' · ');

          return (
            <Grid key={project.name} size={{ xs: 12, md: isFeatured ? 12 : 6 }} sx={{ display: 'flex' }}>
              <Reveal sx={{ width: '100%', display: 'flex' }}>
                <Card
                  component="article"
                  sx={(theme) => ({
                    ...cardBase(theme),
                    width: '100%',
                    display: 'flex',
                    bgcolor: 'background.paper',
                    backgroundImage: isFeatured
                      ? `radial-gradient(circle at 100% 0%, ${(theme.vars || theme).palette.surface.glowSecondary}, transparent 55%)`
                      : 'none',
                  })}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.6,
                      flex: 1,
                      p: { xs: 2.4, md: 3 },
                    }}
                  >
                    <Box>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ flexWrap: 'wrap', rowGap: 1 }}
                      >
                        <Typography variant="h3">{project.name}</Typography>
                        {project.status ? (
                          <Chip
                            size="small"
                            color="warning"
                            label={project.status}
                            sx={{ fontWeight: 700 }}
                          />
                        ) : null}
                      </Stack>
                      {meta ? (
                        <Typography sx={{ mt: 0.5, fontWeight: 700, color: 'surface.accentText' }}>
                          {meta}
                        </Typography>
                      ) : null}
                    </Box>
                    <Typography color="text.secondary" sx={{ maxWidth: isFeatured ? 900 : 'none' }}>
                      {project.summary}
                    </Typography>
                    <Stack
                      component="ul"
                      direction="row"
                      sx={{ flexWrap: 'wrap', gap: 1, listStyle: 'none', m: 0, p: 0 }}
                    >
                      {project.stack.map((item) => (
                        <li key={item}>
                          <Chip size="small" variant="outlined" label={item} />
                        </li>
                      ))}
                    </Stack>
                    {project.links.length > 0 ? (
                      <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1.2, mt: 'auto', pt: 0.5 }}>
                        {project.links.map((link) => (
                          <Button
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener"
                            size="small"
                            variant={link.kind === 'website' ? 'contained' : 'outlined'}
                            color={link.kind === 'website' ? 'primary' : 'inherit'}
                            disableElevation
                            startIcon={link.kind === 'website' ? undefined : linkIcons[link.kind]}
                            endIcon={link.kind === 'website' ? linkIcons.website : undefined}
                            aria-label={
                              link.kind === 'website'
                                ? undefined
                                : formatLabel(copy.projectLinkLabel, {
                                    project: project.name,
                                    target: link.label,
                                  })
                            }
                          >
                            {link.label}
                          </Button>
                        ))}
                      </Stack>
                    ) : null}
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
