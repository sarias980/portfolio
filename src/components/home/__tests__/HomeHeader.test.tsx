import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomeHeader from '../HomeHeader';
import { getHomeCopy } from '../../../content/profile';
import { getHomeSections } from '../../../pages/home/home.constants';

describe('HomeHeader', () => {
  const copy = getHomeCopy('en');

  it('renders profile name and navigation sections', () => {
    render(
      <HomeHeader
        copy={copy}
        isDark={false}
        locale="en"
        onLocaleChange={jest.fn()}
        onToggleColorMode={jest.fn()}
        profileName="Sergi Arias"
        sections={getHomeSections('en')}
        softBorder="rgba(54, 79, 107, 0.2)"
        softPanel="rgba(255,255,255,0.75)"
      />,
    );

    expect(screen.getByText('Sergi Arias')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Impact' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Stack' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('calls color mode toggle and locale change handlers', async () => {
    const user = userEvent.setup();
    const onToggleColorMode = jest.fn();
    const onLocaleChange = jest.fn();

    render(
      <HomeHeader
        copy={copy}
        isDark={false}
        locale="en"
        onLocaleChange={onLocaleChange}
        onToggleColorMode={onToggleColorMode}
        profileName="Sergi Arias"
        sections={getHomeSections('en')}
        softBorder="rgba(54, 79, 107, 0.2)"
        softPanel="rgba(255,255,255,0.75)"
      />,
    );

    await user.click(screen.getByRole('button', { name: copy.darkModeLabel }));
    await user.click(screen.getByRole('button', { name: 'ES' }));

    expect(onToggleColorMode).toHaveBeenCalledTimes(1);
    expect(onLocaleChange).toHaveBeenCalledWith('es');
  });
});
