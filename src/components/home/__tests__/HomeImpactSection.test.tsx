import { render, screen } from '@testing-library/react';
import HomeImpactSection from '../HomeImpactSection';
import { getHomeCopy, getPortfolioContent } from '../../../content/profile';
import { getCardBase } from '../../../pages/home/home.constants';

describe('HomeImpactSection', () => {
  it('renders impact cards, timeline and stack matrix', () => {
    const copy = getHomeCopy('en');
    const { caseStudies, experiences, leadershipPillars, techCategories } = getPortfolioContent('en');

    render(
      <HomeImpactSection
        cardBase={getCardBase(false)}
        caseStudies={caseStudies}
        copy={copy}
        experiences={experiences}
        isDark={false}
        leadershipPillars={leadershipPillars}
        softBorder="rgba(54, 79, 107, 0.2)"
        techCategories={techCategories}
      />,
    );

    expect(screen.getByText(copy.impactTitle)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: caseStudies[0].title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: caseStudies[2].title })).toBeInTheDocument();
    expect(screen.getByText(copy.careerTimeline)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: copy.leadershipApproachTitle })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: leadershipPillars[0].title })).toBeInTheDocument();
    expect(screen.getAllByText(experiences[0].company).length).toBeGreaterThan(0);
    expect(screen.getAllByText(copy.currentTag).length).toBeGreaterThan(0);
    expect(screen.getByText(copy.coreStack)).toBeInTheDocument();
    expect(screen.getByText(techCategories[0].title)).toBeInTheDocument();
    expect(screen.getAllByText(techCategories[0].items[0]).length).toBeGreaterThan(0);
  });
});
