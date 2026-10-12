import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useColorScheme } from '@mui/material/styles';
import type { HomeCopy, Locale } from '../../content/profile';
import { brandGradient, easeOutExpo } from '../../modules/theme';
import type { HomeSection } from '../../pages/home/home.constants';
import { localePaths } from '../../seo/site';
import BrandMark from '../common/BrandMark';
import useActiveSection from '../common/useActiveSection';

type HomeHeaderProps = {
  copy: HomeCopy;
  locale: Locale;
  profileName: string;
  sections: HomeSection[];
};

const localeOptions: { locale: Locale; label: string }[] = [
  { locale: 'en', label: 'EN' },
  { locale: 'es', label: 'ES' },
];

export default function HomeHeader({ copy, locale, profileName, sections }: HomeHeaderProps) {
  const { mode, systemMode, setMode } = useColorScheme();
  // `mode` is undefined until the provider mounts, so the server markup and the
  // first client render match. Icons switch through CSS instead of state.
  const resolvedMode = mode === 'system' ? systemMode : mode;
  const isDark = resolvedMode === 'dark';
  const activeSection = useActiveSection(sections.map((section) => section.id));
  const nameParts = profileName.split(' ');
  const lastName = nameParts.pop();
  const firstNames = nameParts.join(' ');

  return (
    <AppBar
      component="header"
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: 'surface.headerBg',
        backgroundImage: 'none',
        backdropFilter: 'saturate(1.4) blur(14px)',
        borderBottom: 1,
        borderColor: 'surface.rule',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 72 }, gap: 1 }}
        >
          <Box
            component="a"
            href={localePaths[locale]}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.25,
              minHeight: 44,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <BrandMark size={26} />
            <Typography
              component="span"
              sx={{
                fontFamily: "'Space Grotesk Variable', 'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: { xs: '1rem', sm: '1.15rem' },
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              {firstNames}
              {/* The second surname is dropped on narrow phones to keep the bar on one line. */}
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                {' '}
                {lastName}
              </Box>
            </Typography>
          </Box>
          <Stack direction="row" spacing={1.1} alignItems="center">
            <Box
              component="nav"
              aria-label={copy.mainNavLabel}
              sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, mr: 1 }}
            >
              {sections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <Button
                    key={section.id}
                    href={`#${section.id}`}
                    size="small"
                    color="inherit"
                    aria-current={isActive ? 'location' : undefined}
                    sx={{
                      position: 'relative',
                      px: 1.5,
                      color: isActive ? 'text.primary' : 'text.secondary',
                      '&:hover': { bgcolor: 'transparent', color: 'text.primary' },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 14,
                        right: 14,
                        bottom: 4,
                        height: 2,
                        borderRadius: 2,
                        background: brandGradient,
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: `transform 500ms ${easeOutExpo}`,
                      },
                      '&:hover::after': { transform: 'scaleX(1)' },
                    }}
                  >
                    {section.label}
                  </Button>
                );
              })}
            </Box>
            <IconButton
              onClick={() => setMode(isDark ? 'light' : 'dark')}
              aria-label={copy.colorModeLabel}
              aria-pressed={resolvedMode ? isDark : undefined}
              title={copy.colorModeLabel}
              sx={(theme) => ({
                width: 44,
                height: 44,
                border: `1px solid ${(theme.vars || theme).palette.surface.softBorder}`,
                bgcolor: 'surface.softPanel',
                transition: `transform 400ms ${easeOutExpo}`,
                '&:hover': { transform: 'rotate(-18deg)' },
                '& .icon-light': { display: 'none' },
                ...theme.applyStyles('dark', {
                  '& .icon-light': { display: 'inline-block' },
                  '& .icon-dark': { display: 'none' },
                }),
              })}
            >
              <DarkModeRoundedIcon className="icon-dark" fontSize="small" />
              <LightModeRoundedIcon className="icon-light" fontSize="small" />
            </IconButton>
            <Stack
              component="nav"
              direction="row"
              spacing={0.5}
              alignItems="center"
              aria-label={copy.languageLabel}
              sx={(theme) => ({
                p: 0.4,
                borderRadius: 999,
                border: `1px solid ${(theme.vars || theme).palette.surface.softBorder}`,
                bgcolor: 'surface.softPanel',
              })}
            >
              {localeOptions.map((option) => {
                const isCurrent = option.locale === locale;

                return (
                  <Button
                    key={option.locale}
                    size="small"
                    href={localePaths[option.locale]}
                    hrefLang={option.locale}
                    lang={option.locale}
                    aria-current={isCurrent ? 'page' : undefined}
                    variant={isCurrent ? 'contained' : 'text'}
                    color={isCurrent ? 'primary' : 'inherit'}
                    sx={{ minWidth: 44, minHeight: 36, px: 1.2, fontWeight: 700 }}
                  >
                    {option.label}
                  </Button>
                );
              })}
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
