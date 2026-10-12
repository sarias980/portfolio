import { screen, within } from '@testing-library/react';
import HomeHeroSection from '../HomeHeroSection';
import { getHomeCopy, getPortfolioContent } from '../../../content/profile';
import { renderWithTheme } from '../../../test/renderWithTheme';

describe('HomeHeroSection', () => {
  const copy = getHomeCopy('en');
  const { profile, experiences, kpis, projects } = getPortfolioContent('en');

  const renderHero = () =>
    renderWithTheme(
      <HomeHeroSection
        activeRole={experiences[0]}
        copy={copy}
        featuredProject={projects[0]}
        kpis={kpis}
        profile={profile}
      />,
    );

  it('renders the headline with its keywords as the only heading', () => {
    renderHero();

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toHaveTextContent(copy.heroTitle);
    expect(h1).toHaveTextContent(copy.roleChip);
    expect(screen.getAllByRole('heading')).toHaveLength(1);
    expect(screen.getByText(profile.summary)).toBeInTheDocument();
    expect(screen.getByText(profile.location)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: copy.projectsButton })).toHaveAttribute('href', '#projects');
    const linkedinCta = screen.getByRole('link', { name: copy.linkedinButton });
    expect(linkedinCta).toHaveAttribute('href', profile.linkedin);
    expect(linkedinCta).toHaveAttribute('rel', 'noopener');
  });

  it('shows the current role and the featured product', () => {
    renderHero();

    expect(screen.getByText(experiences[0].role)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: projects[0].name })).toHaveAttribute(
      'href',
      'https://touryteller.com',
    );
    expect(screen.getByText(copy.liveOnStores)).toBeInTheDocument();
  });

  it('lists the key facts', () => {
    renderHero();

    const facts = within(screen.getByRole('list', { name: copy.factsLabel })).getAllByRole('listitem');
    expect(facts).toHaveLength(kpis.length);
    kpis.forEach((kpi, index) => {
      expect(facts[index]).toHaveTextContent(kpi.value);
      expect(facts[index]).toHaveTextContent(kpi.label);
    });
    expect(screen.queryByText(/continents/i)).not.toBeInTheDocument();
  });
});
