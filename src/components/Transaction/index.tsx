import React from 'react';
import { FiMinusCircle } from 'react-icons/fi';
import { Container } from './styles';

interface TransactionProps {
  description: string;
  type: string;
  value: string;
  date: string;
  setTransactions: Function;
}

const Transaction: React.FC<TransactionProps> = ({
  description,
  type,
  value,
  date,
  setTransactions,
}) => {
  function removeTransaction(): void {
    const local = localStorage.getItem('@Finances:transactions') || '';
    const localJson = JSON.parse(local);
    // eslint-disable-next-line array-callback-return
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
    <Container>
      <td className="description">{description}</td>
      <td className="description">{type}</td>
      {type === 'Saida' ? (
        <td className="expense">
          {`- R$ ${Number(value).toFixed(2).replace(/-/, '')}`}
        </td>
      ) : (
        <td className="income">{`+ R$ ${Number(value).toFixed(2)}`}</td>
      )}
      <td className="date">{date}</td>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <td onClick={() => removeTransaction()}>
        <FiMinusCircle size={20} />
      </td>
    </Container>
  );
};

export default Transaction;
