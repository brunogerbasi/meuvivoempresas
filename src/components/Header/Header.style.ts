import styled from "styled-components";
import vivoTheme from "../../styles/themes/vivo.style";

export const HeaderContainer  = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${vivoTheme.color_background};
    box-shadow: 0px 4px 4px 0px rgb(0,0,0,0.25);
    width: 100%;    
`
export const HeaderWrapper  = styled.div`
    display: flex;
    align-items: center;    
    gap: 27px;
    max-width: 1005px;
    height: 88px;
    width: 100%;    
`

