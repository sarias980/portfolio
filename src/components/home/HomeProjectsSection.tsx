import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import type { Theme } from '@mui/material/styles';
import { siAppstore, siGoogleplay } from 'simple-icons';
import type { HomeCopy, Project, ProjectLink, ProjectLinkKind } from '../../content/profile';
import { brandGradient, easeOutExpo } from '../../modules/theme';
import { cardBase, formatLabel } from '../../pages/home/home.constants';
import BrandIcon from '../common/BrandIcon';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

type HomeProjectsSectionProps = {
  copy: HomeCopy;
  projects: Project[];
};

const storeIcons: Partial<Record<ProjectLinkKind, React.ReactNode>> = {
  appStore: <BrandIcon icon={siAppstore} size={16} />,
  googlePlay: <BrandIcon icon={siGoogleplay} size={15} />,
};

const projectCard = (theme: Theme) =>
  ({
    ...cardBase(theme),
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    p: { xs: 3, md: 4 },
    borderRadius: '24px',
    overflow: 'hidden',
    bgcolor: 'background.paper',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: '0 0 auto 0',
      height: 3,
      background: brandGradient,
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: `transform 600ms ${easeOutExpo}`,
    },
    '&:hover::before, &:focus-within::before': { transform: 'scaleX(1)' },
  }) as const;

const StackChips = ({ items }: { items: string[] }) => (
  <Stack component="ul" direction="row" sx={{ flexWrap: 'wrap', gap: 1, listStyle: 'none', m: 0, p: 0 }}>
    {items.map((item) => (
      <li key={item}>
        <Chip size="small" variant="outlined" label={item} sx={{ borderColor: 'surface.softBorder' }} />
      </li>
    ))}
  </Stack>
);

const ProjectMeta = ({ project }: { project: Project }) => {
  const meta = [project.role, project.period].filter(Boolean).join(' · ');

  return (
    <Box>
      <Stack direction="row" spacing={1.25} alignItems="center" sx={{ flexWrap: 'wrap', rowGap: 1 }}>
        <Typography variant="h3">{project.name}</Typography>
        {project.status ? <Chip size="small" color="warning" label={project.status} /> : null}
      </Stack>
      {meta ? (
        <Typography sx={{ mt: 0.75, fontWeight: 700, color: 'surface.accentText' }}>{meta}</Typography>
      ) : null}
    </Box>
  );
};

const WebsiteLink = ({ link }: { link: ProjectLink }) => (
  <Link
    href={link.href}
    target="_blank"
    rel="noopener"
    underline="none"
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 0.5,
      minHeight: 44,
      mt: 1.5,
      fontWeight: 700,
      color: 'text.primary',
      '& svg': { transition: `transform 300ms ${easeOutExpo}` },
      '&:hover svg': { transform: 'translate(2px, -2px)' },
      '&:hover': { color: 'surface.accentText' },
    }}
  >
    {link.label}
    <ArrowOutwardRoundedIcon aria-hidden fontSize="small" />
  </Link>
);

export default function HomeProjectsSection({ copy, projects }: HomeProjectsSectionProps) {
  const [featured, ...rest] = projects;
  const featuredWebsite = featured.links.find((link) => link.kind === 'website');
  const featuredStores = featured.links.filter((link) => link.kind !== 'website');

  return (
    <Container
      component="section"
      id="projects"
      aria-labelledby="projects-title"
      maxWidth="lg"
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 88 }}
    >
      <SectionHeading id="projects-title" title={copy.projectsTitle} summary={copy.projectsSummary} />

      <Grid container spacing={3}>
        <Grid size={12}>
          <Reveal sx={{ height: '100%' }}>
            <Box
              component="article"
              sx={(theme) => ({
                ...projectCard(theme),
                backgroundImage: `radial-gradient(120% 140% at 100% 0%, ${(theme.vars || theme).palette.surface.glowSecondary}, transparent 55%), radial-gradient(90% 120% at 0% 100%, ${(theme.vars || theme).palette.surface.glowWarning}, transparent 60%)`,
                '&::before': { display: 'none' },
              })}
            >
              <Grid container spacing={{ xs: 3, md: 6 }} alignItems="flex-end">
                <Grid size={{ xs: 12, md: 7 }}>
                  <ProjectMeta project={featured} />
                  <Typography color="text.secondary" sx={{ mt: 2, fontSize: { md: '1.075rem' } }}>
                    {featured.summary}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <StackChips items={featured.stack} />
                  {featuredStores.length > 0 ? (
                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1.25, mt: 3 }}>
                      {featuredStores.map((link) => (
                        <Button
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener"
                          variant="outlined"
                          color="inherit"
                          startIcon={storeIcons[link.kind]}
                          aria-label={formatLabel(copy.projectLinkLabel, {
                            project: featured.name,
                            target: link.label,
                          })}
                          sx={{ borderColor: 'surface.softBorder' }}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </Stack>
                  ) : null}
                  {featuredWebsite ? <WebsiteLink link={featuredWebsite} /> : null}
                </Grid>
              </Grid>
            </Box>
          </Reveal>
        </Grid>

        {rest.map((project, index) => {
          const website = project.links.find((link) => link.kind === 'website');

          return (
            <Grid key={project.name} size={{ xs: 12, md: 6 }}>
              <Reveal sx={{ height: '100%', transitionDelay: `${(index % 2) * 80}ms` }}>
                <Box component="article" sx={projectCard}>
                  <ProjectMeta project={project} />
                  <Typography color="text.secondary">{project.summary}</Typography>
                  <Box sx={{ mt: 'auto', pt: 1 }}>
                    <StackChips items={project.stack} />
                    {website ? <WebsiteLink link={website} /> : null}
                  </Box>
                </Box>
              </Reveal>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
