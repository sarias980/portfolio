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
import type { HomeSection } from '../../pages/home/home.constants';
import { localePaths } from '../../seo/site';

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

  return (
    <AppBar
      component="header"
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: 'surface.headerBg',
        backgroundImage: 'none',
        backdropFilter: 'blur(12px)',
        borderBottom: 1,
        borderColor: 'divider',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 72, gap: 1 }}>
          <Typography
            component="a"
            href={localePaths[locale]}
            sx={{
              fontFamily: "'Space Grotesk Variable', 'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: { xs: '1.05rem', sm: '1.25rem' },
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            {profileName}
          </Typography>
          <Stack direction="row" spacing={1.1} alignItems="center">
            <Box
              component="nav"
              aria-label={copy.mainNavLabel}
              sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}
            >
              {sections.map((section) => (
                <Button key={section.id} href={`#${section.id}`} size="small" color="inherit">
                  {section.label}
                </Button>
              ))}
            </Box>
            <IconButton
              size="small"
              onClick={() => setMode(isDark ? 'light' : 'dark')}
              aria-label={copy.colorModeLabel}
              aria-pressed={resolvedMode ? isDark : undefined}
              title={copy.colorModeLabel}
              sx={(theme) => ({
                border: `1px solid ${(theme.vars || theme).palette.surface.softBorder}`,
                bgcolor: 'surface.softPanel',
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
                    disableElevation
                    sx={{ minWidth: 40, px: 1.2, fontWeight: 700 }}
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
