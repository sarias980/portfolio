import { screen } from '@testing-library/react';
import HomeKpisSection from '../HomeKpisSection';
import { getPortfolioContent } from '../../../content/profile';
import { renderWithTheme } from '../../../test/renderWithTheme';

describe('HomeKpisSection', () => {
  it('renders all KPI labels and values', () => {
    const { kpis } = getPortfolioContent('en');

    renderWithTheme(<HomeKpisSection kpis={kpis} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(kpis.length);
    kpis.forEach((kpi) => {
      expect(screen.getByText(kpi.label)).toBeInTheDocument();
      expect(screen.getByText(kpi.value)).toBeInTheDocument();
    });
    expect(screen.queryByText(/continents/i)).not.toBeInTheDocument();
  });
});
