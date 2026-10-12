import { screen } from '@testing-library/react';
import HomeHeroSection from '../HomeHeroSection';
import { getHomeCopy, getPortfolioContent } from '../../../content/profile';
import { renderWithTheme } from '../../../test/renderWithTheme';

describe('HomeHeroSection', () => {
  it('renders the headline, summary and current role without extra headings', () => {
    const copy = getHomeCopy('en');
    const { profile, experiences } = getPortfolioContent('en');

    renderWithTheme(<HomeHeroSection activeRole={experiences[0]} copy={copy} profile={profile} />);

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toHaveTextContent(copy.roleChip);
    expect(h1).toHaveTextContent(copy.heroTitle);
    expect(screen.getAllByRole('heading')).toHaveLength(1);
    expect(screen.getByText(profile.summary)).toBeInTheDocument();
    expect(screen.getByText(profile.location)).toBeInTheDocument();
    expect(screen.getByText(experiences[0].role)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: copy.projectsButton })).toHaveAttribute('href', '#projects');
    const linkedinCta = screen.getByRole('link', { name: copy.linkedinButton });
    expect(linkedinCta).toHaveAttribute('href', profile.linkedin);
    expect(linkedinCta).toHaveAttribute('rel', 'noopener');
  });
});
