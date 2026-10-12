import { render, screen } from '@testing-library/react';
import App from './App';
import { getHomeCopy } from './content/profile';

describe('App', () => {
  it.each(['en', 'es'] as const)('renders the %s home page', (locale) => {
    render(<App locale={locale} />);

    expect(screen.getAllByText('Sergi Arias Fernández').length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(getHomeCopy(locale).heroTitle);
  });
});
