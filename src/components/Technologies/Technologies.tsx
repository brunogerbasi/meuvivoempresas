import { TechnologiesContainer } from './Technologies.style';
import Title from "../Title/Title"
import Carousel from '../Carousel/Carousel';

const Technologies = () => {
  return (
    <TechnologiesContainer>
      <Title text='Tecnologias'/>
      <Carousel />
    </TechnologiesContainer>
  );
}

export default Technologies;