
import Burger from '../Burguer/Burguer';
import Logo from '../Logo/Logo';
import { HeaderContainer, HeaderWrapper } from './Header.style';
import Menu from '../Menu/Menu';
import { HeaderProvider } from '../../context/HeaderContext';

const Header = () => {  

    return (
        <HeaderProvider>
            <HeaderContainer>
                <HeaderWrapper>
                    <Burger/>
                    <Logo />
                </HeaderWrapper>
            </HeaderContainer>
            <Menu/>
        </HeaderProvider>
        
    );
}
export default Header;