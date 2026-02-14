import { render, screen } from '@testing-library/react';
import HomeHeroSection from '../HomeHeroSection';
import { getHomeCopy, getPortfolioContent } from '../../../content/profile';
import { getCardBase } from '../../../pages/home/home.constants';

describe('HomeHeroSection', () => {
  it('renders hero content and current role summary', () => {
    const copy = getHomeCopy('en');
    const { profile, experiences } = getPortfolioContent('en');

    render(
      <HomeHeroSection
        activeRole={experiences[0]}
        cardBase={getCardBase(false)}
        copy={copy}
        isDark={false}
        profile={profile}
        softBorder="rgba(54, 79, 107, 0.2)"
        softPanel="rgba(255,255,255,0.75)"
      />,
    );

    expect(screen.getByText(copy.roleChip)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: copy.heroTitle })).toBeInTheDocument();
    expect(screen.getByText(profile.summary)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: experiences[0].role })).toBeInTheDocument();

    const linkedinCta = screen.getByRole('link', { name: copy.linkedinButton });
    expect(linkedinCta).toHaveAttribute('href', profile.linkedin);
  });
});
