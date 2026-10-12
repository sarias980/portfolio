import { screen } from '@testing-library/react';
import HomeTrustedBySection from '../HomeTrustedBySection';
import { getHomeCopy, getPortfolioContent } from '../../../content/profile';
import { renderWithTheme } from '../../../test/renderWithTheme';

describe('HomeTrustedBySection', () => {
  it('renders each company logo once for assistive technology', () => {
    const copy = getHomeCopy('en');
    const { experiences } = getPortfolioContent('en');
    const companyBannerLogos = experiences.map(({ company, website, logo }) => ({ company, website, logo }));

    renderWithTheme(<HomeTrustedBySection companyBannerLogos={companyBannerLogos} copy={copy} />);

    expect(screen.getByText(copy.trustedBy)).toBeInTheDocument();
    companyBannerLogos.forEach((item) => {
      const label = copy.companyWebsiteLabel.replace('{{company}}', item.company);
      const link = screen.getByRole('link', { name: label });
      expect(link).toHaveAttribute('href', item.website);

      const image = screen.getByRole('img', { name: item.company });
      expect(image).toHaveAttribute('loading', 'lazy');
      expect(image).toHaveAttribute('width', String(item.logo.width));
      expect(image).toHaveAttribute('height', String(item.logo.height));
    });
  });
});
