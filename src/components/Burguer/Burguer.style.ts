import styled from 'styled-components';
import vivoTheme from '../../styles/themes/vivo.style';

export const BurgerBtn = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${vivoTheme.color_primary};
        transition: transform 0.3s ease;
        transform-origin: 1px;

        &.open:first-child {
            transform: rotate(45deg) ;
        }

        &.open:nth-child(2) {
            opacity: 0;
        }

        &.open:last-child {
            transform: rotate(-45deg) ;
        }
    }
`;