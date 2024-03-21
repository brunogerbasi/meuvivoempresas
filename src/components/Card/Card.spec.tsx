import { render } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<Card />);
  });

  it('matches snapshot', () => {
    const { container } = render(<Card />);
    expect(container).toMatchSnapshot();
  });
});
