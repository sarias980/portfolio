import { motion } from 'framer-motion';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import { alpha, type SxProps, type Theme, useTheme } from '@mui/material/styles';
import type {
  CaseStudy,
  ExperienceItem,
  HomeCopy,
  LeadershipPillar,
  TechCategory,
} from '../../content/profile';
import {
  fadeUp,
  getInitials,
  techCategoryAccentMap,
  techCategoryIconMap,
  techIconMap,
} from '../../pages/home/home.constants';

type HomeImpactSectionProps = {
  cardBase: SxProps<Theme>;
  caseStudies: CaseStudy[];
  copy: HomeCopy;
  experiences: ExperienceItem[];
  isDark: boolean;
  leadershipPillars: LeadershipPillar[];
  softBorder: string;
  techCategories: TechCategory[];
};

export default function HomeImpactSection({
  cardBase,
  caseStudies,
  copy,
  experiences,
  isDark,
  leadershipPillars,
  softBorder,
  techCategories,
}: HomeImpactSectionProps) {
  const theme = useTheme();

  return (
    <Container
      id="impact"
      maxWidth="lg"
      sx={{ pt: { xs: 2.1, md: 3.1 }, pb: { xs: 7.8, md: 9.8 }, scrollMarginTop: 98 }}
    >

      <Grid container spacing={3.3} alignItems="stretch" sx={{ mt: 2.1 }}>
        {caseStudies.slice(0, 3).map((caseStudy, index) => {
          const isWarningCard = index === 1;
          const cardBackground =
            index === 0
              ? 'rgba(63, 193, 201, 0.11)'
              : isWarningCard
                ? 'warning.main'
                : alpha(theme.palette.secondary.main, isDark ? 0.2 : 0.12);

          return (
            <Grid key={caseStudy.title} size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                style={{ width: '100%' }}
              >
                <Card
                  sx={{
                    ...cardBase,
                    height: '100%',
                    width: '100%',
                    flex: 1,
                    display: 'flex',
                    bgcolor: cardBackground,
                    color: isWarningCard ? 'warning.contrastText' : 'text.primary',
                  }}
                >
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, flex: 1 }}>
                    <Typography variant="h3">{caseStudy.title}</Typography>
                    <Typography color={isWarningCard ? 'inherit' : 'text.secondary'} sx={{ opacity: isWarningCard ? 0.92 : 1 }}>
                      {caseStudy.summary}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', rowGap: 1 }}>
                      {caseStudy.stack.map((item) => (
                        <Chip key={`${caseStudy.title}-${item}`} size="small" label={item} />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          );
        })}

        <Grid id="stack" size={{ xs: 12 }} sx={{ scrollMarginTop: 98, mt: { xs: 4.5, md: 6 } }}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.48, delay: 0.12 }}
          >
            <Box sx={{ mb: 2.5 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <TimelineRoundedIcon sx={{ color: 'secondary.main' }} />
                <Typography variant="overline" sx={{ letterSpacing: '0.14em', color: 'secondary.dark', fontWeight: 700 }}>
                  {copy.journeyLog}
                </Typography>
              </Stack>
              <Typography variant="h3" sx={{ mt: 0.45, color: 'text.primary', letterSpacing: '0.02em' }}>
                {copy.careerTimeline}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 0.75 }}>
                {copy.careerTimelineSummary}
              </Typography>
            </Box>

            <Box
              sx={{
                position: 'relative',
                py: { xs: 0.4, md: 1.2 },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: { xs: 22, md: '50%' },
                  transform: { xs: 'none', md: 'translateX(-50%)' },
                  width: '3px',
                  borderRadius: 99,
                  background:
                    `linear-gradient(180deg, ${alpha(theme.palette.secondary.main, isDark ? 0.3 : 0.18)}, ${alpha(theme.palette.primary.main, isDark ? 0.58 : 0.55)}, ${alpha(theme.palette.warning.main, isDark ? 0.36 : 0.28)})`,
                },
              }}
            >
              <Stack spacing={{ xs: 2.3, md: 2.8 }}>
                {experiences.map((experience, index) => {
                  const isLeft = index % 2 === 0;

                  const timelineItem = (
                    <Box
                      sx={{
                        position: 'relative',
                        p: { xs: 1.6, md: 2 },
                        borderRadius: 3,
                        border: `1px solid ${softBorder}`,
                        bgcolor: alpha(theme.palette.background.paper, isDark ? 0.94 : 0.9),
                        boxShadow: isDark
                          ? '0 12px 28px rgba(2, 8, 20, 0.45)'
                          : '0 12px 28px rgba(54, 79, 107, 0.08)',
                        backdropFilter: 'blur(8px)',
                        transition: 'transform 180ms ease, box-shadow 180ms ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: isDark
                            ? '0 16px 34px rgba(2, 8, 20, 0.62)'
                            : '0 16px 34px rgba(54, 79, 107, 0.13)',
                        },
                      }}
                    >
                      <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        justifyContent="space-between"
                        alignItems={{ xs: 'flex-start', sm: 'center' }}
                        spacing={0.8}
                      >
                        <Box>
                          <Typography sx={{ fontWeight: 700 }}>{experience.role}</Typography>
                          <Link
                            href={experience.website}
                            target="_blank"
                            rel="noreferrer"
                            underline="hover"
                            color="secondary.dark"
                            sx={{ fontWeight: 600 }}
                          >
                            {experience.company}
                          </Link>
                        </Box>
                        <Stack direction="row" spacing={0.8} sx={{ flexWrap: 'wrap', rowGap: 0.6 }}>
                          <Chip
                            label={experience.period}
                            size="small"
                            variant="outlined"
                            sx={{ bgcolor: alpha(theme.palette.background.default, isDark ? 0.52 : 0.85) }}
                          />
                          {index === 0 ? <Chip size="small" color="secondary" label={copy.currentTag} /> : null}
                        </Stack>
                      </Stack>

                      <Typography color="text.secondary" sx={{ mt: 0.75 }}>
                        {experience.highlights[0]}
                      </Typography>
                    </Box>
                  );

                  return (
                    <Box key={`${experience.company}-${experience.period}`}>
                      <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'relative', pl: 6.6 }}>
                        <Box
                          sx={{
                            position: 'absolute',
                            left: 0,
                            top: 8,
                            width: 44,
                            height: 44,
                            borderRadius: '50%',
                            bgcolor: 'background.paper',
                            border: `1px solid ${softBorder}`,
                            display: 'grid',
                            placeItems: 'center',
                            zIndex: 1,
                          }}
                        >
                          <Avatar
                            src={experience.logoUrl}
                            alt={`${experience.company} logo`}
                            sx={{
                              width: 32,
                              height: 32,
                              fontSize: 11,
                              bgcolor: 'background.paper',
                              border: `1px solid ${softBorder}`,
                              '& img': { objectFit: 'contain', padding: '3px' },
                            }}
                          >
                            {getInitials(experience.company)}
                          </Avatar>
                        </Box>
                        <Box
                          sx={{
                            position: 'absolute',
                            left: 22,
                            top: 29,
                            width: 14,
                            borderTop: `2px dashed ${softBorder}`,
                          }}
                        />
                        {timelineItem}
                      </Box>

                      <Box
                        sx={{
                          display: { xs: 'none', md: 'grid' },
                          gridTemplateColumns: '1fr 88px 1fr',
                          alignItems: 'center',
                          columnGap: 2.2,
                          minHeight: 152,
                        }}
                      >
                        <Box>{isLeft ? timelineItem : null}</Box>
                        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', py: 0.2 }}>
                          <Box
                            sx={{
                              position: 'absolute',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              left: isLeft ? 0 : '50%',
                              right: isLeft ? '50%' : 0,
                              borderTop: `2px dashed ${softBorder}`,
                            }}
                          />
                          <Avatar
                            src={experience.logoUrl}
                            alt={`${experience.company} logo`}
                            sx={{
                              mt: 1,
                              width: 46,
                              height: 46,
                              fontSize: 11,
                              bgcolor: 'background.paper',
                              border: `2px solid ${softBorder}`,
                              zIndex: 1,
                              boxShadow: isDark
                                ? '0 8px 18px rgba(2, 8, 20, 0.48)'
                                : '0 8px 18px rgba(54,79,107,0.18)',
                              '& img': { objectFit: 'contain', padding: '4px' },
                            }}
                          >
                            {getInitials(experience.company)}
                          </Avatar>
                        </Box>
                        <Box>{!isLeft ? timelineItem : null}</Box>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{mt: { xs: 4.5, md: 6 }}}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.48, delay: 0.15 }}
          >
            <Box
              sx={{
                borderRadius: 2,
                px: { xs: 2, md: 3.2 },
                py: { xs: 2.4, md: 3.1 },
                background:
                  isDark
                    ? 'linear-gradient(120deg, rgba(8, 18, 33, 0.98) 0%, rgba(17, 30, 48, 0.98) 55%, rgba(8, 18, 33, 0.98) 100%)'
                    : 'linear-gradient(120deg, #0f1b2e 0%, #17263d 55%, #0f1b2e 100%)',
                border: `1px solid ${alpha(theme.palette.common.black, isDark ? 0.18 : 0.12)}`,
                boxShadow: isDark ? '0 18px 42px rgba(2, 8, 20, 0.54)' : '0 18px 42px rgba(8, 18, 33, 0.24)',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: 'clamp(2.1rem, 9vw, 2.8rem)', md: 'clamp(2.4rem, 4.8vw, 3.35rem)' },
                  fontWeight: 800,
                  lineHeight: 1.04,
                  letterSpacing: '0.01em',
                  background: 'linear-gradient(92deg, #FFFFFF 0%, #DCE8FF 46%, #FFFFFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 10px 26px rgba(7, 17, 36, 0.42)',
                }}
              >
                {copy.leadershipApproachTitle}
              </Typography>
              <Grid container spacing={2.2} sx={{ mt: 2.5 }}>
                {leadershipPillars.map((pillar) => (
                  <Grid key={pillar.title} size={{ xs: 12, md: 4 }} sx={{ display: 'flex' }}>
                    <Card
                      sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 2,
                        border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                        boxShadow: '0 10px 24px rgba(2, 8, 20, 0.35)',
                        bgcolor: alpha(theme.palette.common.white, 0.08),
                        color: 'common.white',
                      }}
                    >
                      <CardContent sx={{ display: 'grid', gap: 1.2 }}>
                        <Typography variant="h3" sx={{ color: '#F4C97A' }}>
                          {pillar.title}
                        </Typography>
                        <Typography sx={{ color: 'rgba(245,245,245,0.88)' }}>{pillar.description}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{mt: { xs: 4.5, md: 6 }}}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.48, delay: 0.2 }}
          >
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <SportsEsportsRoundedIcon sx={{ color: 'secondary.main' }} />
                <Typography variant="overline" sx={{ letterSpacing: '0.14em', color: 'secondary.dark', fontWeight: 700 }}>
                  {copy.stackMatrix}
                </Typography>
              </Stack>
              <Typography variant="h3" sx={{ mt: 0.45, color: 'text.primary', letterSpacing: '0.02em' }}>
                {copy.coreStack}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 0.8 }}>
                {copy.coreStackSummary}
              </Typography>

              <Grid container spacing={0} sx={{ mt: 1.4 }}>
                {techCategories.map((category, index) => {
                  const accent = techCategoryAccentMap[category.title] ?? '#3FC1C9';
                  const categoryIcon =
                    techCategoryIconMap[category.title] ?? <BoltRoundedIcon fontSize="small" />;
                  const isLast = index === techCategories.length - 1;

                  return (
                    <Grid size={{ xs: 12 }} key={category.title}>
                      <Box
                        sx={{
                          py: { xs: 1.35, md: 1.7 },
                          borderBottom: isLast ? 'none' : `1px dashed ${softBorder}`,
                        }}
                      >
                        <Stack
                          direction={{ xs: 'column', md: 'row' }}
                          spacing={{ xs: 1, md: 1.5 }}
                          alignItems={{ xs: 'flex-start', md: 'center' }}
                        >
                          <Stack
                            direction="row"
                            spacing={0.8}
                            alignItems="center"
                            sx={{ minWidth: { md: 250 }, pr: { md: 1.2 } }}
                          >
                            <Box
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
                              {categoryIcon}
                            </Box>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: accent,
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                fontFamily: "'Space Grotesk', sans-serif",
                              }}
                            >
                              {category.title}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: `${accent}99`,
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                              }}
                            >
                              {String(index + 1).padStart(2, '0')}
                            </Typography>
                          </Stack>
                          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', rowGap: 1 }}>
                            {category.items.map((tech) => (
                              <Chip
                                key={`${category.title}-${tech}`}
                                label={tech}
                                variant="outlined"
                                icon={techIconMap[tech]}
                                sx={{
                                  height: 31,
                                  borderRadius: 999,
                                  bgcolor: 'transparent',
                                  border: `1px solid ${accent}52`,
                                  color: 'text.primary',
                                  '& .MuiChip-label': {
                                    letterSpacing: '0.02em',
                                    fontWeight: 600,
                                  },
                                  '& .MuiChip-icon': {
                                    color: accent,
                                    ml: 0.8,
                                  },
                                  '&:hover': {
                                    borderColor: `${accent}87`,
                                    bgcolor: `${accent}12`,
                                  },
                                }}
                              />
                            ))}
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
