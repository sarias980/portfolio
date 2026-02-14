import { render, screen } from '@testing-library/react';
import HomeTrustedBySection from '../HomeTrustedBySection';
import { getHomeCopy, getPortfolioContent } from '../../../content/profile';

describe('HomeTrustedBySection', () => {
  it('renders trusted-by marquee logos with links', () => {
    const copy = getHomeCopy('en');
    const { experiences } = getPortfolioContent('en');
    const companyBannerLogos = experiences.slice(0, 2).map((experience) => ({
      company: experience.company,
      website: experience.website,
      logoUrl: experience.logoUrl,
    }));

    render(
      <HomeTrustedBySection
        companyBannerLogos={companyBannerLogos}
        copy={copy}
        isDark={false}
        marqueeLogos={[...companyBannerLogos, ...companyBannerLogos]}
        softBorder="rgba(54, 79, 107, 0.2)"
      />,
    );

    expect(screen.getByText(copy.trustedBy)).toBeInTheDocument();

    companyBannerLogos.forEach((logo) => {
      const label = copy.companyWebsiteLabel.replace('{{company}}', logo.company);
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0);
      expect(screen.getAllByAltText(`${logo.company} logo`).length).toBeGreaterThan(0);
    });
  });
});
