import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { alpha, useTheme } from '@mui/material/styles';
import type { HomeCopy, Locale } from '../../content/profile';
import type { HomeSection } from '../../pages/home/home.constants';

type HomeHeaderProps = {
  copy: HomeCopy;
  isDark: boolean;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  onToggleColorMode: () => void;
  profileName: string;
  sections: HomeSection[];
  softBorder: string;
  softPanel: string;
};

export default function HomeHeader({
  copy,
  isDark,
  locale,
  onLocaleChange,
  onToggleColorMode,
  profileName,
  sections,
  softBorder,
  softPanel,
}: HomeHeaderProps) {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: alpha(theme.palette.background.default, isDark ? 0.9 : 0.82),
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.9)}`,
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 72 }}>
          <Typography variant="h6" sx={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
            {profileName}
          </Typography>
          <Stack direction="row" spacing={1.1} alignItems="center">
            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {sections.map((section) => (
                <Button key={section.id} href={`#${section.id}`} size="small" color="inherit">
                  {section.label}
                </Button>
              ))}
            </Stack>
            <Tooltip title={isDark ? copy.lightModeLabel : copy.darkModeLabel}>
              <IconButton
                size="small"
                onClick={onToggleColorMode}
                aria-label={isDark ? copy.lightModeLabel : copy.darkModeLabel}
                sx={{
                  border: `1px solid ${softBorder}`,
                  bgcolor: softPanel,
                }}
              >
                {isDark ? <LightModeRoundedIcon fontSize="small" /> : <DarkModeRoundedIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              aria-label={copy.languageLabel}
              sx={{
                p: 0.4,
                borderRadius: 999,
                border: `1px solid ${softBorder}`,
                bgcolor: softPanel,
              }}
            >
              <Button
                size="small"
                variant={locale === 'en' ? 'contained' : 'text'}
                color="primary"
                onClick={() => onLocaleChange('en')}
                sx={{ minWidth: 40, px: 1.2, fontWeight: 700 }}
              >
                EN
              </Button>
              <Button
                size="small"
                variant={locale === 'es' ? 'contained' : 'text'}
                color="primary"
                onClick={() => onLocaleChange('es')}
                sx={{ minWidth: 40, px: 1.2, fontWeight: 700 }}
              >
                ES
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
