import React, { useEffect, useState } from 'react';
import { CarouselWrapper, CarouselContainer, LeftArrow, RightArrow, Card, Icon, Text } from './Carousel.style';
import { technologiesItems, TechnologiesItemProps } from '../../data/technologies';
import ArrowIcon from '../../assets/icons/iconArrow.svg';

const emptyItem = { icon: '', text: '' };

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 1 ? technologiesItems.length : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === technologiesItems.length ? 1 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slideWidth = windowWidth <= 600 ? 66 : 100;

  return (
    <CarouselContainer>
      <LeftArrow onClick={prevSlide}><img src={ArrowIcon} alt='Arrow' /></LeftArrow>
      <RightArrow onClick={nextSlide}><img src={ArrowIcon} alt='Arrow' /></RightArrow>
      <CarouselWrapper translateValue={-(currentIndex - 1) * slideWidth }>
        {[emptyItem, ...technologiesItems.map((item: TechnologiesItemProps) => ({
          icon: item.icon,
          text: item.name
        })), emptyItem].map((item, index) => (
          <Card key={index} cardCenter={index === currentIndex} isEmpty={index === 0 || index === technologiesItems.length + 1}>
            <Text cardCenter={index === currentIndex}>{index === currentIndex ? item.text : ''}</Text>
            <Icon src={item.icon} alt={item.text} cardCenter={index === currentIndex} isEmpty={index === 0 || index === technologiesItems.length + 1} />      
          </Card>
        ))}
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
