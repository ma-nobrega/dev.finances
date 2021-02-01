import React from 'react';
import { Container } from './styles';

interface CardProps {
  type: string;
  img: string;
  value: string;
}

const Header: React.FC<CardProps> = ({ type, img, value }) => {
  return (
    <Container>
      <h3>
        <span>{type}</span>
        <img src={img} alt="entradas" />
      </h3>
      <p>{value}</p>
    </Container>
  );
};

export default Header;
