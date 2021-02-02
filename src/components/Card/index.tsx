import React from 'react';
import { Container } from './styles';

interface CardProps {
  type: string;
  img: string;
  value: string;
  className?: string;
}

const Header: React.FC<CardProps> = ({ type, img, value, className }) => {
  return (
    <Container className={className}>
      <h3>
        <span>{type}</span>
        <img src={img} alt={type} />
      </h3>
      <p>{value}</p>
    </Container>
  );
};

export default Header;
