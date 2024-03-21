import { render } from '@testing-library/react';
import Title from './Title';

describe('Title Component', () => {
  it('renders without crashing', () => {
    render(<Title text="Example Title" />);
  });

  it('matches snapshot', () => {
    const { container } = render(<Title text="Example Title" />);
    expect(container).toMatchSnapshot();
  });
});
