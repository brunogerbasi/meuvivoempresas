import { useState } from 'react';
import Burger from '../Burguer/Burguer';
import Logo from '../Logo/Logo';
import { HeaderContainer, HeaderWrapper } from './Header.style';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Burger open={open} setOpen={setOpen}/>
                <Logo />
            </HeaderWrapper>
        </HeaderContainer>
    );
}
export default Header;