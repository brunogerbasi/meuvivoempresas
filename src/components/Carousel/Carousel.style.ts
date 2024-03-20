import styled, { css } from 'styled-components';
import vivoTheme from '../../styles/themes/vivo.style';

interface CarouselWrapperProps {
  translateValue: number;
}

interface CardProps {
  cardCenter: boolean;
  isEmpty: boolean;
}

interface TextProps {
  cardCenter: boolean;
}

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 390px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    max-width: 272px;
  }
`;

export const CarouselWrapper = styled.div<CarouselWrapperProps>`
  height: 155px;
  display: flex;
  align-items: center;
  transition: transform 0.5s ease;
  ${({ translateValue }) => css`
    transform: translateX(${translateValue}px);
  `}
`;

export const Card = styled.div.attrs<CardProps>((props) => ({
  isEmpty: props.isEmpty ? true : undefined,
})) <CardProps>`
  flex: ${(props) => (props.cardCenter ? '0 0 122px' : '0 0 70px')}; 
  height: ${(props) => (props.cardCenter ? '150px' : '88px')};
  border-radius: 15px;
  background-color: ${(props) => (props.cardCenter ? `${vivoTheme.color_primary}` : props.isEmpty ? 'transparent' : `${vivoTheme.color_primary}`)};
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;  
  opacity:  ${(props) => (props.cardCenter ? '1' : '0.33')};  
  transition: 0.2s;

  @media only screen and (max-width: 600px) {
    flex: ${(props) => (props.cardCenter ? '0 0 102px' : '0 0 50px')};
    height: ${(props) => (props.cardCenter ? '120px' : '70px')};
    margin: 0 10px;
  }
`;

export const Icon = styled.img<CardProps>`
  font-size: 36px;
  margin-bottom: 10px;  
  width: ${(props) => (props.cardCenter ? 'auto' : '32px')}; 

  @media only screen and (max-width: 600px) {
    width: ${(props) => (props.cardCenter ? '39px' : '24px')}; 
  }
`;

export const Text = styled.p<TextProps>`
  font-size: 18px; 
  font-weight: 400;
  line-height: 30px;
  color: ${(props) => (props.cardCenter ? '#FCFAFA' : `${vivoTheme.color_primary}`)}; 

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  @media only screen and (max-width: 600px) {
    left: 0px;
  }
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;

  img{
    transform: rotate(180deg);
  }
`;
