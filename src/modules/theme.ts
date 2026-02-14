import { createTheme, type PaletteMode } from '@mui/material/styles';

export const createAppTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        light: mode === 'dark' ? '#7f9abc' : '#4d6885',
        main: mode === 'dark' ? '#5f7ea2' : '#364F6B',
        dark: mode === 'dark' ? '#456281' : '#24364a',
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
        contrastText: '#F5F5F5',
      },
      error: {
        light: '#ff7aa3',
        main: '#FC5185',
        dark: '#dc3e6f',
        contrastText: '#F5F5F5',
      },
      background: {
        default: mode === 'dark' ? '#0f1622' : '#F5F5F5',
        paper: mode === 'dark' ? '#182232' : '#FFFFFF',
      },
      text: {
        primary: mode === 'dark' ? '#e6edf4' : '#1f2933',
        secondary: mode === 'dark' ? '#9eb0c0' : '#435160',
      },
      divider: mode === 'dark' ? 'rgba(158, 176, 192, 0.24)' : 'rgba(54, 79, 107, 0.2)',
    },
    shape: {
      borderRadius: 14,
    },
    typography: {
      fontFamily: "'Manrope', sans-serif",
      h1: {
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        lineHeight: 1.03,
        fontSize: 'clamp(2.3rem, 7vw, 4.4rem)',
      },
      h2: {
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        lineHeight: 1.1,
        fontSize: 'clamp(1.8rem, 4vw, 2.9rem)',
      },
      h3: {
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        lineHeight: 1.2,
        fontSize: 'clamp(1.3rem, 3vw, 1.9rem)',
      },
      body1: {
        fontSize: '1.02rem',
        lineHeight: 1.7,
      },
      button: {
        fontFamily: "'Space Grotesk', sans-serif",
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

const theme = createAppTheme('light');

export default theme;
