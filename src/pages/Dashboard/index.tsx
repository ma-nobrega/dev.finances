import React from 'react';
import Income from '../../assets/income.svg';
import Expense from '../../assets/expense.svg';
import Total from '../../assets/total.svg';
import Minus from '../../assets/minus.svg';
import Header from '../../components/Header';
import Card from '../../components/Card';

const App: React.FC = () => (
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

        <a href="#" className="button new">
          + Nova Transação
        </a>

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
            <tr>
              <td className="description">Luz</td>
              <td className="expense">- R$ 500,00</td>
              <td className="date">23/01/2021</td>
              <td>
                <img src={Minus} alt="Remover transação" />
              </td>
            </tr>
            <tr>
              <td className="description">Criação website</td>
              <td className="income">R$ 5.000,00</td>
              <td className="date">23/01/2021</td>
              <td>
                <img src={Minus} alt="Remover transação" />
              </td>
            </tr>
            <tr>
              <td className="description">Internet</td>
              <td className="expense">- R$ 200,00</td>
              <td className="date">23/01/2021</td>
              <td>
                <img src={Minus} alt="Remover transação" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>

    <div className="modal-overlay">
      <div className="modal">
        <div id="form">
          <h2>Nova Transação</h2>
          <form action="">
            <div className="input-group">
              <label className="sr-only" htmlFor="description">
                Descrição
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição"
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
                placeholder="0,00"
              />
              <small className="help">
                Use o sinal - (negativo) para despesas e , (vírgula) para casas
                decimais
              </small>
            </div>

            <div className="input-group">
              <label className="sr-only" htmlFor="date">
                Data
              </label>
              <input type="date" id="date" name="date" />
            </div>

            <div className="input-group actions">
              <a href="#" className="button cancel">
                Cancelar
              </a>
              <button type="button">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <footer>
      <p>dev.finance$</p>
    </footer>
  </>
);

export default App;
