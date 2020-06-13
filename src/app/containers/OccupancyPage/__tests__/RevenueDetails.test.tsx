import React from 'react';
import { render } from '@testing-library/react';
import { RevenueDetails } from '../RevenueDetails';

const renderRevenueDetails = (
  props: Parameters<typeof RevenueDetails>[number],
) => render(<RevenueDetails {...props} />);

describe('<RevenueDetails />', () => {
  it('should match the snapshot', () => {
    const revenueDetails = renderRevenueDetails({
      data: { free: 4, usage: 3, total: 1234, currency: 'EURO' },
      title: 'Test',
    });
    expect(revenueDetails.container.firstChild).toMatchSnapshot();
  });

  it('should have the correct number of <p> elements', () => {
    const revenueDetails = renderRevenueDetails({
      data: { free: 4, usage: 3, total: 1234, currency: 'EURO' },
      title: 'Test',
    });
    expect(revenueDetails.container.querySelectorAll('p').length).toBe(3);
  });

  it('should have props displayed', () => {
    const free = 7;
    const usage = 4;
    const total = 2345;
    const currency = 'EURO';
    const title = 'Test';

    const revenueDetails = renderRevenueDetails({
      data: { free, usage, total, currency },
      title,
    });

    expect(revenueDetails.queryByText(title)).toBeInTheDocument();
  });
});
