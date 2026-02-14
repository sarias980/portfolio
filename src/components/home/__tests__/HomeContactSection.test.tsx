import { render, screen } from '@testing-library/react';
import HomeContactSection from '../HomeContactSection';
import { getHomeCopy, getPortfolioContent } from '../../../content/profile';
import { getCardBase } from '../../../pages/home/home.constants';

describe('HomeContactSection', () => {
  it('renders contact copy and actionable links', () => {
    const copy = getHomeCopy('en');
    const { profile } = getPortfolioContent('en');
    const phoneHref = `tel:${profile.phone.replace(/\s+/g, '')}`;

    render(
      <HomeContactSection
        cardBase={getCardBase(false)}
        copy={copy}
        phoneHref={phoneHref}
        profile={profile}
      />,
    );

    expect(screen.getByRole('heading', { name: copy.contactTitle })).toBeInTheDocument();
    expect(screen.getByText(copy.contactSummary)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: copy.linkedinContactButton })).toHaveAttribute('href', profile.linkedin);
    expect(screen.getByRole('link', { name: profile.email })).toHaveAttribute('href', `mailto:${profile.email}`);
    expect(screen.getByRole('link', { name: profile.phone })).toHaveAttribute('href', phoneHref);
  });
});
