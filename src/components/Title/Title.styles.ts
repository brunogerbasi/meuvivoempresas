import styled from "styled-components";
import vivoTheme from "../../styles/themes/vivo.style";

export const TitleH2  = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.51rem;
    color: ${vivoTheme.color_secondary};
    margin-bottom: 20px;

    @media only screen and (max-width: 600px) {
        font-size: 1.38rem;
        line-height: 2.3rem;
    }

    @media only screen and (max-width: 450px) {    
        text-align: center;
    }
`