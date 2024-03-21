import { render } from '@testing-library/react';
import Technologies from './Technologies';

describe('Technologies Component', () => {
  it('renders without crashing', () => {
    render(<Technologies />);
  });

  it('matches snapshot', () => {
    const { container } = render(<Technologies />);
    expect(container).toMatchSnapshot();
  });
});
