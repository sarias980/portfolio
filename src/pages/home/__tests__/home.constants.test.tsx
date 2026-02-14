import {
  getCardBase,
  getHomeSections,
  getInitialLocale,
  getInitials,
  localeStorageKey,
} from '../home.constants';

describe('home.constants helpers', () => {
  const originalLanguage = window.navigator.language;

  afterEach(() => {
    window.localStorage.clear();
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      value: originalLanguage,
    });
  });

  it('builds initials from company name', () => {
    expect(getInitials('Deepdots Labs')).toBe('DL');
    expect(getInitials('single')).toBe('S');
    expect(getInitials('')).toBe('');
  });

  it('returns locale from localStorage when available', () => {
    window.localStorage.setItem(localeStorageKey, 'es');

    expect(getInitialLocale()).toBe('es');
  });

  it('falls back to navigator language when storage is empty', () => {
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      value: 'es-ES',
    });

    expect(getInitialLocale()).toBe('es');

    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      value: 'en-US',
    });

    expect(getInitialLocale()).toBe('en');
  });

  it('returns localized home sections', () => {
    const enSections = getHomeSections('en');
    const esSections = getHomeSections('es');

    expect(enSections[0]).toEqual({ id: 'home', label: 'Home' });
    expect(esSections[0]).toEqual({ id: 'home', label: 'Inicio' });
    expect(enSections).toHaveLength(4);
    expect(esSections).toHaveLength(4);
  });

  it('creates different card base styles for dark and light mode', () => {
    const darkCard = getCardBase(true);
    const lightCard = getCardBase(false);

    expect(darkCard.border).toContain('rgba(158, 176, 192, 0.24)');
    expect(lightCard.border).toContain('rgba(54, 79, 107, 0.14)');
  });
});
