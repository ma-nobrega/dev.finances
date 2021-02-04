import React, { FormEvent, useEffect, useState } from 'react';
import { Container, Content } from './styles';
import Income from '../../assets/income.svg';
import Expense from '../../assets/expense.svg';
import Total from '../../assets/total.svg';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Transaction from '../../components/Transaction';

interface Transaction {
  description: string;
  value: string;
  date: string;
}

const App: React.FC = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const storagedTransactions = localStorage.getItem('@Finances:transactions');

    if (storagedTransactions) {
      return JSON.parse(storagedTransactions);
    }
    return [];
  });

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const data = { description, value, date };
    setTransactions([...transactions, data]);
    setModalVisible(false);
    setDescription('');
    setValue('');
    setDate('');
  }

  useEffect(() => {
    localStorage.setItem(
      '@Finances:transactions',
      JSON.stringify(transactions),
    );
  }, [transactions]);

  useEffect(() => {
    const arrayExpense: number[] = [];
    const arrayIncome: number[] = [];
    transactions.map(transaction =>
      Number(transaction.value) < 0
        ? arrayExpense.push(Number(transaction.value))
        : arrayIncome.push(Number(transaction.value)),
    );
    const expenseTotal = arrayExpense.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );
    const incomeTotal = arrayIncome.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0,
    );
    setExpense(expenseTotal);
    setIncome(incomeTotal);
  }, [transactions, expense, income]);

  useEffect(() => {
    setTotal(income + expense);
  }, [income, expense]);

  return (
    <Container>
      <Header />
      <Content>
        <section id="balance">
          <h2 className="sr-only">Balanço</h2>
          <Card
            type="Entradas"
            img={Income}
            value={`R$ ${income.toFixed(2)}`}
          />
          <Card
            type="Saidas"
            img={Expense}
            value={`- R$ ${String(expense.toFixed(2)).replace(/-/, '')}`}
          />
          {total < 0 ? (
            <Card
              className="negative"
              type="Total"
              img={Total}
              value={`- R$ ${String(total.toFixed(2)).replace(/-/, '')}`}
            />
          ) : (
            <Card
              className="positive"
              type="Total"
              img={Total}
              value={`R$ ${String(total.toFixed(2))}`}
            />
          )}
        </section>

        <section id="transaction">
          <h2 className="sr-only">Transações</h2>

          <Button type="button" onClick={() => setModalVisible(true)}>
            + Nova Transação
          </Button>

          <table id="data-table">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data</th>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <th />
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <Transaction
                  setTransactions={setTransactions}
                  key={transaction.description}
                  description={transaction.description}
                  value={transaction.value}
                  date={transaction.date}
                />
              ))}
            </tbody>
          </table>
        </section>
      </Content>
      {modalVisible ? (
        <div className="modal-overlay">
          <div className="modal">
            <div id="form">
              <h2>Nova Transação</h2>
              <form onSubmit={handleAddRepository}>
                <div className="input-group">
                  <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <input
                    type="number"
                    step="0.01"
                    id="amount"
                    name="amount"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="0,00"
                  />
                  <small className="help">
                    Use o sinal - (negativo) para despesas
                  </small>
                </div>

                <div className="input-group">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                  />
                </div>

                <div className="input-group actions">
                  <Button
                    type="button"
                    className="cancel"
                    onClick={() => setModalVisible(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit">Salvar</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
      <Footer />
    </Container>
  );
};

export default App;
