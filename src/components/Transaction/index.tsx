import React from 'react';
import { Container } from './styles';
import Minus from '../../assets/minus.svg';

interface TransactionProps {
  description: string;
  value: string;
  date: string;
  setTransactions: Function;
}

const Transaction: React.FC<TransactionProps> = ({
  description,
  value,
  date,
  setTransactions,
}) => {
  function removeTransaction(): void {
    const local = localStorage.getItem('@Finances:transactions') || '';
    const localJson = JSON.parse(local);
    localJson.map((obj: Record<string, any>, index: number) => {
      const isDescription = obj.description === description;
      if (isDescription) {
        localJson.splice(index, 1);
        localStorage.setItem(
          '@Finances:transactions',
          JSON.stringify(localJson),
        );
        setTransactions(localJson);
      }
    });
  }
  return (
    <Container onClick={() => removeTransaction()}>
      <td className="description">{description}</td>
      {Number(value) < 0 ? (
        <td className="expense">{`- R$ ${value.replace(/-/, '')}`}</td>
      ) : (
        <td className="income">{`+ R$ ${Number(value).toFixed(2)}`}</td>
      )}
      <td className="date">{date}</td>
      <td>
        <img src={Minus} alt="Remover transação" />
      </td>
    </Container>
  );
};

export default Transaction;
