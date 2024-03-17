
import { useHeaderContext } from "../../hooks/useHeaderContext";
import { MenuItem, MenuOverlay, MenuWrapper, NavMenu } from "./Menu.style";

const Menu = ( ) => {
    const { open, toggleMenu } = useHeaderContext();

    return (
        <MenuWrapper >   
            {open && <MenuOverlay onClick={toggleMenu} />}         
            <NavMenu open={open}>
                <ul>
                    <li>
                        <MenuItem>
                            Meu Vivo empresas
                        </MenuItem>
                        <MenuItem>
                            Meu Vivo
                        </MenuItem>
                    </li>
                </ul>
            </NavMenu>            
        </MenuWrapper>
    );
}

export default Menu;