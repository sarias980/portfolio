import { screen } from '@testing-library/react';
import HomeHeader from '../HomeHeader';
import { getHomeCopy } from '../../../content/profile';
import { getHomeSections } from '../../../pages/home/home.constants';
import { renderWithTheme } from '../../../test/renderWithTheme';

describe('HomeHeader', () => {
  const copy = getHomeCopy('en');

  it('renders profile name and navigation sections', () => {
    renderWithTheme(
      <HomeHeader copy={copy} locale="en" profileName="Sergi Arias" sections={getHomeSections(copy)} />,
    );

    expect(screen.getByRole('link', { name: 'Sergi Arias' })).toHaveAttribute('href', '/');
    [
      ['Impact', '#impact'],
      ['Experience', '#experience'],
      ['Projects', '#projects'],
      ['Stack', '#stack'],
      ['Contact', '#contact'],
    ].forEach(([label, href]) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', href);
    });
  });

  it('links each language to its own URL', () => {
    renderWithTheme(
      <HomeHeader copy={copy} locale="en" profileName="Sergi Arias" sections={getHomeSections(copy)} />,
    );

    const english = screen.getByRole('link', { name: 'EN' });
    const spanish = screen.getByRole('link', { name: 'ES' });

    expect(english).toHaveAttribute('href', '/');
    expect(english).toHaveAttribute('aria-current', 'page');
    expect(spanish).toHaveAttribute('href', '/es/');
    expect(spanish).toHaveAttribute('hreflang', 'es');
    expect(spanish).not.toHaveAttribute('aria-current');
  });
});
