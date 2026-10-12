import { screen } from '@testing-library/react';
import HomeStackSection from '../HomeStackSection';
import { getHomeCopy, getPortfolioContent } from '../../../content/profile';
import { renderWithTheme } from '../../../test/renderWithTheme';

describe('HomeStackSection', () => {
  it('renders every category and technology', () => {
    const copy = getHomeCopy('en');
    const { techCategories } = getPortfolioContent('en');

    renderWithTheme(<HomeStackSection copy={copy} techCategories={techCategories} />);

    expect(screen.getByRole('heading', { level: 2, name: copy.coreStack })).toBeInTheDocument();
    techCategories.forEach((category) => {
      expect(screen.getByText(category.title)).toBeInTheDocument();
      category.items.forEach((item) => expect(screen.getByText(item)).toBeInTheDocument());
    });
    ['SQL', 'NoSQL', 'Product Collaboration'].forEach((removed) => {
      expect(screen.queryByText(removed)).not.toBeInTheDocument();
    });
  });
});
