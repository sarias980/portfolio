import { render, screen } from '@testing-library/react';
import HomeKpisSection from '../HomeKpisSection';
import { getPortfolioContent } from '../../../content/profile';

describe('HomeKpisSection', () => {
  it('renders all KPI labels and values', () => {
    const { kpis } = getPortfolioContent('en');

    render(<HomeKpisSection kpis={kpis} softBorder="rgba(54, 79, 107, 0.2)" />);

    kpis.forEach((kpi) => {
      expect(screen.getByText(kpi.label)).toBeInTheDocument();
      expect(screen.getByText(kpi.value)).toBeInTheDocument();
    });
  });
});
