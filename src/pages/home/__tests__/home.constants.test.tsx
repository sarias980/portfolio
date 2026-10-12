import { getHomeCopy } from '../../../content/profile';
import { formatLabel, getHomeSections, getInitials } from '../home.constants';

describe('home.constants helpers', () => {
  it('builds initials from company name', () => {
    expect(getInitials('Deepdots Labs')).toBe('DL');
    expect(getInitials('single')).toBe('S');
    expect(getInitials('')).toBe('');
  });

  it('returns localized home sections', () => {
    const enSections = getHomeSections(getHomeCopy('en'));
    const esSections = getHomeSections(getHomeCopy('es'));

    expect(enSections[1]).toEqual({ id: 'experience', label: 'Experience' });
    expect(esSections[1]).toEqual({ id: 'experience', label: 'Trayectoria' });
    expect(esSections.map((section) => section.id)).toEqual([
      'impact',
      'experience',
      'projects',
      'stack',
      'contact',
    ]);
  });

  it('fills label templates', () => {
    expect(formatLabel('{{project}} on {{target}}', { project: 'TouryTeller', target: 'Google Play' })).toBe(
      'TouryTeller on Google Play',
    );
  });
});
