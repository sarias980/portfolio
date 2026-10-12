import { screen } from '@testing-library/react';
import HomeImpactSection from '../HomeImpactSection';
import { getHomeCopy, getPortfolioContent } from '../../../content/profile';
import { renderWithTheme } from '../../../test/renderWithTheme';

describe('HomeImpactSection', () => {
  it('renders the section heading and every case study', () => {
    const copy = getHomeCopy('en');
    const { caseStudies } = getPortfolioContent('en');

    renderWithTheme(<HomeImpactSection caseStudies={caseStudies} copy={copy} />);

    expect(screen.getByRole('heading', { level: 2, name: copy.impactTitle })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: copy.impactTitle })).toHaveAttribute('id', 'impact');
    caseStudies.forEach((caseStudy) => {
      expect(screen.getByRole('heading', { level: 3, name: caseStudy.title })).toBeInTheDocument();
      expect(screen.getByText(caseStudy.summary)).toBeInTheDocument();
    });
  });
});
