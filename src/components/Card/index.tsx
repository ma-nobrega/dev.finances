/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  FiDollarSign,
  FiArrowUpCircle,
  FiArrowDownCircle,
} from 'react-icons/fi';
import { Container } from './styles';

interface CardProps {
  type: string;
  value: string;
  className?: string;
}

const Header: React.FC<CardProps> = ({ type, value, className }) => {
  return (
    <Container className={className}>
      <h3>
        <span>{type}</span>
        {type === 'Entradas' ? (
          <FiArrowUpCircle className="income" size={30} />
        ) : type === 'Saidas' ? (
          <FiArrowDownCircle className="expense" size={30} />
        ) : (
          <FiDollarSign size={30} />
        )}
      </h3>
      <p>{value}</p>
    </Container>
  );
};

export default Header;
