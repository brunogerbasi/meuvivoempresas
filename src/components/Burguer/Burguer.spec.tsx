
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importante para asserções do Jest
import Burger from './Burguer';


// Mock do useHeaderContext
jest.mock('../../hooks/useHeaderContext', () => ({
  useHeaderContext: () => ({
    open: false,
    toggleMenu: jest.fn(),
  }),
}));

describe('Burger Component', () => {
  it('renders without crashing', () => {
    render(<Burger />);
  });

  it('toggles menu on click', () => {
    const toggleMenuMock = jest.fn();
    (useHeaderContext as jest.Mock).mockReturnValue({
      open: false,
      toggleMenu: toggleMenuMock,
    });

    const { getByLabelText } = render(<Burger />);

    const button = getByLabelText('Button Menu');
    fireEvent.click(button);

    expect(toggleMenuMock).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const { container } = render(<Burger />);
    expect(container).toMatchSnapshot();
  });
});
