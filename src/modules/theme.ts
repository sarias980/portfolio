import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    surface: SurfacePalette;
  }
  interface PaletteOptions {
    surface?: SurfacePalette;
  }
}

// Mode-dependent decorative tokens. They become CSS variables so the prerendered
// HTML is correct for both color schemes before any JavaScript runs.
type SurfacePalette = {
  softBorder: string;
  softPanel: string;
  cardBorder: string;
  cardShadow: string;
  cardShadowHover: string;
  headerBg: string;
  glowSecondary: string;
  glowWarning: string;
  trustedBg: string;
  timelineCard: string;
  timelineLine: string;
  accentText: string;
};

export const colorModeStorageKey = 'portfolio-color-mode';
export const colorSchemeAttribute = 'data-color-mode';

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: colorSchemeAttribute,
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: '#4d6885',
          main: '#364F6B',
          dark: '#24364a',
          contrastText: '#F5F5F5',
        },
        secondary: {
          light: '#69d8de',
          main: '#3FC1C9',
          dark: '#2ca5ac',
          contrastText: '#10232f',
        },
        warning: {
          light: '#ff7aa3',
          main: '#FC5185',
          dark: '#dc3e6f',
          contrastText: '#10232f',
        },
        error: {
          light: '#ff7aa3',
          main: '#FC5185',
          dark: '#dc3e6f',
          contrastText: '#F5F5F5',
        },
        background: {
          default: '#F5F5F5',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#1f2933',
          secondary: '#435160',
        },
        divider: 'rgba(54, 79, 107, 0.2)',
        surface: {
          softBorder: 'rgba(54, 79, 107, 0.2)',
          softPanel: 'rgba(255, 255, 255, 0.75)',
          cardBorder: 'rgba(54, 79, 107, 0.14)',
          cardShadow: '0 16px 32px rgba(54, 79, 107, 0.08)',
          cardShadowHover: '0 22px 38px rgba(54, 79, 107, 0.12)',
          headerBg: 'rgba(245, 245, 245, 0.82)',
          glowSecondary: 'rgba(63, 193, 201, 0.22)',
          glowWarning: 'rgba(252, 81, 133, 0.14)',
          trustedBg: 'rgba(54, 79, 107, 0.08)',
          timelineCard: 'rgba(255, 255, 255, 0.9)',
          timelineLine:
            'linear-gradient(180deg, rgba(63, 193, 201, 0.18), rgba(54, 79, 107, 0.55), rgba(252, 81, 133, 0.28))',
          accentText: '#1a6f74',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          light: '#7f9abc',
          main: '#6a88ad',
          dark: '#456281',
          contrastText: '#0f1622',
        },
        secondary: {
          light: '#69d8de',
          main: '#3FC1C9',
          dark: '#2ca5ac',
          contrastText: '#10232f',
        },
        warning: {
          light: '#ff7aa3',
          main: '#FC5185',
          dark: '#dc3e6f',
          contrastText: '#10232f',
        },
        error: {
          light: '#ff7aa3',
          main: '#FC5185',
          dark: '#dc3e6f',
          contrastText: '#F5F5F5',
        },
        background: {
          default: '#0f1622',
          paper: '#182232',
        },
        text: {
          primary: '#e6edf4',
          secondary: '#9eb0c0',
        },
        divider: 'rgba(158, 176, 192, 0.24)',
        surface: {
          softBorder: 'rgba(158, 176, 192, 0.28)',
          softPanel: 'rgba(24, 34, 50, 0.8)',
          cardBorder: 'rgba(158, 176, 192, 0.24)',
          cardShadow: '0 16px 32px rgba(2, 8, 20, 0.45)',
          cardShadowHover: '0 22px 38px rgba(2, 8, 20, 0.62)',
          headerBg: 'rgba(15, 22, 34, 0.9)',
          glowSecondary: 'rgba(63, 193, 201, 0.24)',
          glowWarning: 'rgba(252, 81, 133, 0.2)',
          trustedBg: 'rgba(95, 126, 162, 0.22)',
          timelineCard: 'rgba(24, 34, 50, 0.94)',
          timelineLine:
            'linear-gradient(180deg, rgba(63, 193, 201, 0.3), rgba(95, 126, 162, 0.58), rgba(252, 81, 133, 0.36))',
          accentText: '#69d8de',
        },
      },
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "'Manrope Variable', 'Manrope', system-ui, -apple-system, 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "'Space Grotesk Variable', 'Space Grotesk', system-ui, sans-serif",
      fontWeight: 700,
      lineHeight: 1.03,
      fontSize: 'clamp(2.1rem, 6.3vw, 4rem)',
    },
    h2: {
      fontFamily: "'Space Grotesk Variable', 'Space Grotesk', system-ui, sans-serif",
      fontWeight: 700,
      lineHeight: 1.1,
      fontSize: 'clamp(1.8rem, 4vw, 2.9rem)',
    },
    h3: {
      fontFamily: "'Space Grotesk Variable', 'Space Grotesk', system-ui, sans-serif",
      fontWeight: 600,
      lineHeight: 1.2,
      fontSize: 'clamp(1.3rem, 3vw, 1.9rem)',
    },
    h5: {
      lineHeight: 1.45,
    },
    body1: {
      fontSize: '1.02rem',
      lineHeight: 1.7,
    },
    button: {
      fontFamily: "'Space Grotesk Variable', 'Space Grotesk', system-ui, sans-serif",
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        '@media (prefers-reduced-motion: reduce)': {
          html: { scrollBehavior: 'auto' },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: '1.15rem',
        },
      },
    },
  },
});

export default theme;
