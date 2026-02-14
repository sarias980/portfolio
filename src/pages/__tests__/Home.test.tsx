import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import { getHomeCopy } from '../../content/profile';

describe('Home page integration', () => {
  beforeEach(() => {
    window.localStorage.clear();
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      value: 'en-US',
    });
  });

  it('renders english content by default', () => {
    const copy = getHomeCopy('en');

    render(<Home />);

    expect(screen.getByRole('heading', { name: copy.heroTitle })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument();
  });

  it('switches locale to spanish and persists it', async () => {
    const user = userEvent.setup();
    const copyEs = getHomeCopy('es');

    render(<Home />);
    await user.click(screen.getByRole('button', { name: 'ES' }));

    expect(screen.getByRole('heading', { name: copyEs.heroTitle })).toBeInTheDocument();

    await waitFor(() => {
      expect(window.localStorage.getItem('portfolio-locale')).toBe('es');
      expect(document.documentElement.lang).toBe('es');
    });
  });

  it('toggles color mode and persists it on the document', async () => {
    const user = userEvent.setup();
    const copy = getHomeCopy('en');

    render(<Home />);
    await user.click(screen.getByRole('button', { name: copy.darkModeLabel }));

    await waitFor(() => {
      expect(document.documentElement.dataset.colorMode).toBe('dark');
      expect(window.localStorage.getItem('portfolio-color-mode')).toBe('dark');
    });
  });
});
