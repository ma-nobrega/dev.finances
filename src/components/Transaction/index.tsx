import React from 'react';
import { Container } from './styles';
import Minus from '../../assets/minus.svg';
import Plus from '../../assets/plus.svg';

interface TransactionProps {
  description: string;
  value: string;
  date: string;
}

const Transaction: React.FC<TransactionProps> = ({
  description,
  value,
  date,
}) => {
  return (
    <Container>
      <td className="description">{description}</td>
      {Number(value) < 0 ? (
        <td className="expense">{`- R$ ${value.replace(/-/, '')}`}</td>
      ) : (
        <td className="income">{`+ R$ ${value}`}</td>
      )}
      <td className="date">{date}</td>
      {Number(value) < 0 ? (
        <td>
          <img src={Minus} alt="Remover transação" />
        </td>
      ) : (
        <td>
          <img src={Plus} alt="Remover transação" />
        </td>
      )}
    </Container>
  );
};

export default Transaction;
