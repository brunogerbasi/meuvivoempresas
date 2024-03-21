import { render } from '@testing-library/react';
import Discovery from './Discovery';

describe('Discovery Component', () => {
  it('renders without crashing', () => {
    render(<Discovery />);
  });

  it('matches snapshot', () => {
    const { container } = render(<Discovery />);
    expect(container).toMatchSnapshot();
  });
});
