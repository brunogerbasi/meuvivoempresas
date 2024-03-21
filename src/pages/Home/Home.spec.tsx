
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('matches snapshot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
