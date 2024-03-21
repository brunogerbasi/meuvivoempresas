import { render, fireEvent } from '@testing-library/react';
import Menu from './Menu';
import { useHeaderContext } from '../../hooks/useHeaderContext';

jest.mock('../../hooks/useHeaderContext');

type HeaderContextValue = {
  open: boolean;
  toggleMenu: () => void;
};

describe('Menu Component', () => {
  beforeEach(() => {
    const mockUseHeaderContext = useHeaderContext as jest.Mock;
    mockUseHeaderContext.mockReturnValue({
      open: false,
      toggleMenu: jest.fn(),
    } as HeaderContextValue); 
  });

  it('renders without crashing', () => {
    render(<Menu />);
  });

  it('toggles menu on click', () => {
    const toggleMenuMock = jest.fn();
    (useHeaderContext as jest.Mock).mockReturnValue({
      open: false,
      toggleMenu: toggleMenuMock,
    } as HeaderContextValue); 

    const { getByTestId } = render(<Menu />);

    const menuButton = getByTestId('menu-button');
    fireEvent.click(menuButton);

    expect(toggleMenuMock).toHaveBeenCalled();
  });
});
