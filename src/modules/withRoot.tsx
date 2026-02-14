import * as React from 'react';
import { ThemeProvider, type PaletteMode } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from './theme';

type ColorModeContextValue = {
  mode: PaletteMode;
  setMode: (mode: PaletteMode) => void;
  toggleColorMode: () => void;
};

const colorModeStorageKey = 'portfolio-color-mode';

const getInitialMode = (): PaletteMode => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedMode = window.localStorage.getItem(colorModeStorageKey);
  if (storedMode === 'light' || storedMode === 'dark') {
    return storedMode;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const ColorModeContext = React.createContext<ColorModeContextValue | null>(null);

export const useColorMode = (): ColorModeContextValue => {
  const context = React.useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorMode must be used within withRoot provider');
  }

  return context;
};

export default function withRoot<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>,
) {
  function WithRoot(props: P) {
    const [mode, setMode] = React.useState<PaletteMode>(getInitialMode);
    const theme = React.useMemo(() => createAppTheme(mode), [mode]);

    React.useEffect(() => {
      window.localStorage.setItem(colorModeStorageKey, mode);
      document.documentElement.dataset.colorMode = mode;
    }, [mode]);

    const colorModeValue = React.useMemo(
      () => ({
        mode,
        setMode,
        toggleColorMode: () => {
          setMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [mode],
    );

    return (
      <ColorModeContext.Provider value={colorModeValue}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...props} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }

  return WithRoot;
}
