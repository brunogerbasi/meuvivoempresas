import { styled } from "styled-components";
import vivoTheme from "../../styles/themes/vivo.style";

interface NavMenuProps {
    open: boolean;
}

export const MenuWrapper = styled.div`    
    width: 100%;   
    height: calc(100vh - 5.5rem);    
`
export const MenuOverlay = styled.div`
    position: fixed;
    left: 0;
    top: 5.5rem;
    width: 100%;
    height:calc(100vh - 5.5rem);    
    background: rgba(108, 104, 104, 0.79);
    cursor: pointer;    
`

export const NavMenu = styled.nav<NavMenuProps>` 
    position: fixed;    
    top: 5.5rem;
    left: ${({ open }) => (open ? '0' : '-100%')};    
    height:calc(100vh - 5.5rem);   
    background: ${vivoTheme.color_background};
    width: 100%;
    max-width: 24vw;
    height: calc(100vh - 5.5rem);
    padding: 3.2rem 1rem;       
    transition: all 0.2s linear;
`

export const MenuItem = styled.a`
    display: block;
    margin-bottom: 21px;    
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.875rem;
    letter-spacing: 0em;    
    color: ${vivoTheme.color_secondary};
    transition: all 0.2s linear;
    border-bottom: 1px solid ${vivoTheme.color_primary};
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: ${vivoTheme.color_primary};
    }
`

