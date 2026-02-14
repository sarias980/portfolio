import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders home route', () => {
    render(<App />);

    expect(screen.getByText('Sergi Arias Fernández')).toBeInTheDocument();
  });
});
