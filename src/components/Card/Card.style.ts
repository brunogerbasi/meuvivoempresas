import styled from 'styled-components';
import vivoTheme from '../../styles/themes/vivo.style';

export const CardContainer = styled.div`
  width: 100%;  
`;

export const CardItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  gap: 18px;
`;

export const CardWrapper = styled.div`  
  padding: 14px 0 0;
  border-radius: 8px;
  width: calc(33.33% - 10px);  
  max-width: 216px;
  position: relative;
  background-color: ${vivoTheme.color_background};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 20px 0px;    
  transition: transform 0.2s linear 0s;

  &:hover{
    box-shadow: rgba(0, 0, 0, 0.20) 0px 4px 20px 0px;  
    transform: translateY(-3px);
  }
`;

export const CardAlt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  height: 22px;
  text-transform: uppercase ;
  letter-spacing: 0.1em;
  text-align: center;
  color: ${vivoTheme.color_discoveryAlt}; ;
  background-color: ${vivoTheme.color_discoveryAltBg}; 
  border-radius: 5px;
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  margin: 0 20px;
`;

export const CardHeader = styled.div`
  display: flex;  
  justify-content: center;
  align-items: baseline;
  padding: 0 14px;
`;

export const CardIcon = styled.img`  
  margin-right: 10px;
  padding-top: 3px;    
  height: 24px;
  width: 32px;
`;

export const CardWrapperTitle = styled.div`
  width: 100%;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.1rem;
  color: ${vivoTheme.color_primary};
`;

export const CardSubTitle = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 16.75px;
  letter-spacing: 0.1rem;
  color: ${vivoTheme.color_primary};
  margin-bottom: 5px;
`;

export const CardDescription = styled.div`
  height: 75px;
  background: ${vivoTheme.color_background2};
`;

export const CardFooter = styled.div`
    padding: 5px 14px;
    text-align: center;
`;

export const CardButton = styled.button`  
  background-color: ${vivoTheme.color_bgbutton};
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.1rem;
  line-height: 16.75px;
  color: ${vivoTheme.color_textbutton};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  padding: 8px;
  transition: background-color 0.3s linear 0s;

  &:hover{
    background: ${vivoTheme.color_bgbutton2};
  }
`;
