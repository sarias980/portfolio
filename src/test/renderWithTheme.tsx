import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import AppThemeProvider from '../modules/AppThemeProvider';

export const renderWithTheme = (ui: ReactElement) => render(<AppThemeProvider>{ui}</AppThemeProvider>);
