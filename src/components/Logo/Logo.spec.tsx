import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo Component', () => {
  it('renders without crashing', () => {
    render(<Logo />);
  });

  it('matches snapshot', () => {
    const { container } = render(<Logo />);
    expect(container).toMatchSnapshot();
  });
});
