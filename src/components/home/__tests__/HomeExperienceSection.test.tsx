import { screen } from '@testing-library/react';
import HomeExperienceSection from '../HomeExperienceSection';
import { getHomeCopy, getPortfolioContent } from '../../../content/profile';
import { renderWithTheme } from '../../../test/renderWithTheme';

describe('HomeExperienceSection', () => {
  it('renders each role once with its company link', () => {
    const copy = getHomeCopy('en');
    const { experiences } = getPortfolioContent('en');

    renderWithTheme(<HomeExperienceSection copy={copy} experiences={experiences} />);

    expect(screen.getByRole('heading', { level: 2, name: copy.careerTimeline })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(experiences.length);
    experiences.forEach((experience) => {
      expect(screen.getByRole('heading', { level: 3, name: experience.role })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: experience.company })).toHaveAttribute(
        'href',
        experience.website,
      );
    });
    expect(screen.getByText(copy.currentTag)).toBeInTheDocument();
  });
});
