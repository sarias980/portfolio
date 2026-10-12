import { screen } from '@testing-library/react';
import HomeContactSection from '../HomeContactSection';
import { getHomeCopy, getPortfolioContent, type Locale } from '../../../content/profile';
import { renderWithTheme } from '../../../test/renderWithTheme';

describe('HomeContactSection', () => {
  it.each([
    ['en', '/cv/Sergi_Arias_Fernandez_CV_EN.pdf'],
    ['es', '/cv/Sergi_Arias_Fernandez_CV_ES.pdf'],
  ] as [Locale, string][])('renders neutral contact actions in %s', (locale, cvUrl) => {
    const copy = getHomeCopy(locale);
    const { profile } = getPortfolioContent(locale);

    renderWithTheme(<HomeContactSection copy={copy} locale={locale} profile={profile} />);

    expect(screen.getByRole('heading', { level: 2, name: copy.contactTitle })).toBeInTheDocument();
    expect(screen.getByText(copy.contactSummary)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: profile.email })).toHaveAttribute(
      'href',
      `mailto:${profile.email}`,
    );
    expect(screen.getByRole('link', { name: copy.linkedinContactButton })).toHaveAttribute(
      'href',
      profile.linkedin,
    );

    const cv = screen.getByRole('link', { name: copy.downloadCvButton });
    expect(cv).toHaveAttribute('href', cvUrl);
    expect(cv).toHaveAttribute('download');
  });
});
