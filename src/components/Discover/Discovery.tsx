import React from 'react';
import { DiscoverContainer } from './Discover.style';
import Title from '../Title/Title';
import Card from '../Card/Card';


const Discovery: React.FC = () => {
  return (
    <DiscoverContainer>
        <Title text='Descobrir'/>
        <Card />
    </DiscoverContainer>
  );
}

export default Discovery;