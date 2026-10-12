import type { ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme, { colorModeStorageKey } from './theme';

type AppThemeProviderProps = {
  children: ReactNode;
};

export default function AppThemeProvider({ children }: AppThemeProviderProps) {
  return (
    <ThemeProvider
      theme={theme}
      defaultMode="system"
      modeStorageKey={colorModeStorageKey}
      disableTransitionOnChange
    >
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
