import React, { FormEvent, useEffect, useState } from 'react';
import Income from '../../assets/income.svg';
import Expense from '../../assets/expense.svg';
import Total from '../../assets/total.svg';
import Header from '../../components/Header';
import Card from '../../components/Card';

interface Transaction {
  description: string;
  value: string;
  date: string;
}

const App: React.FC = () => {
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

  return (
    <>
      <Header />
      <main className="container">
        <section id="balance">
          <h2 className="sr-only">Balanço</h2>
          <Card type="Entradas" img={Income} value="R$ 5.000,00" />
          <Card type="Saidas" img={Expense} value="R$ 2.000,00" />
          <Card type="Total" img={Total} value="R$ 3.000,00" />
        </section>

        <section id="transaction">
          <h2 className="sr-only">Transações</h2>

          <button type="button" onClick={() => setModalVisible(true)}>
            + Nova Transação
          </button>

          <table id="data-table">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.description}>
                  <td className="description">{transaction.description}</td>
                  <td className="expense">{transaction.value}</td>
                  <td className="date">{transaction.date}</td>
                  <td />
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      {modalVisible ? (
        <div className="modal-overlay">
          <div className="modal">
            <div id="form">
              <h2>Nova Transação</h2>
              <form onSubmit={handleAddRepository}>
                <div className="input-group">
                  <label className="sr-only" htmlFor="description">
                    Descrição
                  </label>
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
                  <label className="sr-only" htmlFor="amount">
                    Valor
                  </label>
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
                    Use o sinal - (negativo) para despesas e , (vírgula) para
                    casas decimais
                  </small>
                </div>

                <div className="input-group">
                  <label className="sr-only" htmlFor="date">
                    Data
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                  />
                </div>

                <div className="input-group actions">
                  <button
                    type="button"
                    onClick={() => setModalVisible(false)}
                    className="button cancel"
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="button save">
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      <footer>
        <p>dev.finance$</p>
      </footer>
    </>
  );
};

export default App;
