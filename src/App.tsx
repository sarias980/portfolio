import '@fontsource-variable/manrope';
import '@fontsource-variable/space-grotesk';
import './index.css';
import type { Locale } from './content/profile';
import AppThemeProvider from './modules/AppThemeProvider';
import HomePage from './pages/Home';

type AppProps = {
  locale: Locale;
};

function App({ locale }: AppProps) {
  return (
    <AppThemeProvider>
      <HomePage locale={locale} />
    </AppThemeProvider>
  );
}

export default App;
