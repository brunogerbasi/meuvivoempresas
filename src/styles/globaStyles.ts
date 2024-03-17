import { createGlobalStyle } from 'styled-components';
import vivoTheme from './themes/vivo.style';
 
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${vivoTheme.color_background};
        font-family: "Poppins", sans-serif;
        color: ${vivoTheme.color_primary};
    }

    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;
 
export default GlobalStyle;