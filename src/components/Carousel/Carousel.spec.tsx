import { render } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel Component', () => {
  it('renders without crashing', () => {
    render(<Carousel />);
  });

  it('matches snapshot', () => {
    const { container } = render(<Carousel />);
    expect(container).toMatchSnapshot();
  });
});
