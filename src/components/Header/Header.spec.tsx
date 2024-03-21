import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('matches snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
