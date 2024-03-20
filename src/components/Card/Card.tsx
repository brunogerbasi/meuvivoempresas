import { CardAlt, CardButton, CardContainer, CardDescription, CardFooter, CardHeader, CardIcon, CardItem, CardSubTitle, CardTitle, CardWrapper, CardWrapperTitle } from './Card.style';
import discoveryData from '../../data/discovery';


const Card = () => {
    return (
        <CardContainer>
            <CardItem>
                {discoveryData.map((item, index) => (
                    <CardWrapper key={index}>
                        {item.alt && <CardAlt>{item.alt}</CardAlt>}
                        <CardHeader>                            
                            <CardIcon src={item.icon} alt={item.alt || ''} />
                            <CardWrapperTitle>
                                <CardTitle>{item.title}</CardTitle>
                                <CardSubTitle>{item.subTitle}</CardSubTitle>
                            </CardWrapperTitle>
                        </CardHeader>
                        <CardDescription />                        
                        <CardFooter>
                            <CardButton>{item.textButton}</CardButton>
                        </CardFooter>
                    </CardWrapper>
                ))}
            </CardItem>
        </CardContainer>
    );
}

export default Card;
