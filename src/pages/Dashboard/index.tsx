import React, { FormEvent, useEffect, useState } from 'react';
import { FiCalendar, FiDollarSign, FiEdit2 } from 'react-icons/fi';
import { BsList } from 'react-icons/bs';
import { Container, Content } from './styles';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Transaction from '../../components/Transaction';
import Input from '../../components/Input';
import Select from '../../components/Select';

interface Transaction {
  description: string;
  type: string;
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
  const [type, setType] = useState('');
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
    const data = { description, type, value, date };
    setTransactions([...transactions, data]);
    setModalVisible(false);
    setDescription('');
    setType('');
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
      transaction.type === 'Saida'
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
    setTotal(income - expense);
  }, [income, expense]);

  return (
    <Container>
      <Header />
      <Content>
        <section id="balance">
          <h2 className="sr-only">Balanço</h2>
          <Card type="Entradas" value={`R$ ${income.toFixed(2)}`} />
          <Card
            type="Saidas"
            value={`- R$ ${String(expense.toFixed(2)).replace(/-/, '')}`}
          />
          {total < 0 ? (
            <Card
              className="negative"
              type="Total"
              value={`- R$ ${String(total.toFixed(2)).replace(/-/, '')}`}
            />
          ) : (
            <Card
              className="positive"
              type="Total"
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
                <th>Tipo</th>
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
                  type={transaction.type}
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
                <Input
                  icon={FiEdit2}
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Descrição"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
                <Select
                  icon={BsList}
                  name="type"
                  id="type"
                  value={type}
                  onChange={e => setType(e.target.value)}
                >
                  <option value="">Tipo de transação</option>
                  <option value="Entrada">Entrada</option>
                  <option value="Saida">Saida</option>
                </Select>
                <Input
                  icon={FiDollarSign}
                  type="number"
                  step="0.01"
                  id="amount"
                  name="amount"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  placeholder="0,00"
                />

                <Input
                  icon={FiCalendar}
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                />

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
