import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import { getHomeCopy, getPortfolioContent } from '../../content/profile';
import { renderWithTheme } from '../../test/renderWithTheme';

describe('Home page integration', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute('data-color-mode');
  });

  it('renders english content with a single h1 and one h2 per section', () => {
    const copy = getHomeCopy('en');

    renderWithTheme(<Home locale="en" />);

    const h1 = screen.getAllByRole('heading', { level: 1 });
    expect(h1).toHaveLength(1);
    expect(h1[0]).toHaveTextContent(copy.heroTitle);
    expect(h1[0]).toHaveTextContent(copy.roleChip);

    const h2 = screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent);
    expect(h2).toEqual([
      copy.impactTitle,
      copy.careerTimeline,
      copy.projectsTitle,
      copy.coreStack,
      copy.contactTitle,
    ]);
  });

  it('renders spanish content from the locale prop', () => {
    const copyEs = getHomeCopy('es');
    const { profile } = getPortfolioContent('es');

    renderWithTheme(<Home locale="es" />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(copyEs.heroTitle);
    expect(screen.getByText(profile.summary)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'ES' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'EN' })).toHaveAttribute('href', '/');
  });

  it('toggles color mode and persists it on the document', async () => {
    const user = userEvent.setup();
    const copy = getHomeCopy('en');

    renderWithTheme(<Home locale="en" />);
    await user.click(screen.getByRole('button', { name: copy.colorModeLabel }));

    await waitFor(() => {
      expect(document.documentElement.dataset.colorMode).toBe('dark');
      expect(window.localStorage.getItem('portfolio-color-mode')).toBe('dark');
    });
  });
});
