import { screen, within } from '@testing-library/react';
import HomeProjectsSection from '../HomeProjectsSection';
import { getHomeCopy, getPortfolioContent, type Locale } from '../../../content/profile';
import { renderWithTheme } from '../../../test/renderWithTheme';

const renderProjects = (locale: Locale) => {
  const copy = getHomeCopy(locale);
  const { projects } = getPortfolioContent(locale);
  renderWithTheme(<HomeProjectsSection copy={copy} projects={projects} />);
  return { copy, projects };
};

describe('HomeProjectsSection', () => {
  it('renders the five projects as articles', () => {
    const { copy, projects } = renderProjects('en');

    expect(screen.getByRole('heading', { level: 2, name: copy.projectsTitle })).toBeInTheDocument();
    expect(projects.map((project) => project.name)).toEqual([
      'TouryTeller',
      'ACM Barcelona',
      'lidiamourelo.com',
      'Corvi',
      'Mint5.io',
    ]);
    expect(screen.getAllByRole('article')).toHaveLength(5);
    projects.forEach((project) => {
      expect(screen.getByRole('heading', { level: 3, name: project.name })).toBeInTheDocument();
      expect(screen.getByText(project.summary)).toBeInTheDocument();
    });
  });

  it('links TouryTeller to its website and both stores with rel="noopener"', () => {
    renderProjects('en');

    const card = screen
      .getByRole('heading', { level: 3, name: 'TouryTeller' })
      .closest('article') as HTMLElement;
    const links = within(card).getAllByRole('link');

    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      'https://touryteller.com',
      'https://apps.apple.com/es/app/touryteller/id6761470076',
      'https://play.google.com/store/apps/details?id=com.touryteller',
    ]);
    links.forEach((link) => {
      expect(link).toHaveAttribute('rel', 'noopener');
      expect(link).toHaveAttribute('target', '_blank');
    });
    expect(within(card).getByRole('link', { name: 'TouryTeller on App Store' })).toBeInTheDocument();
  });

  it('shows status and period details in spanish', () => {
    renderProjects('es');

    expect(screen.getByText('En desarrollo')).toBeInTheDocument();
    expect(screen.getByText('Ingeniero del equipo fundador · 2021 – 2022')).toBeInTheDocument();
    expect(screen.getByText('CTO y único ingeniero')).toBeInTheDocument();
  });
});
