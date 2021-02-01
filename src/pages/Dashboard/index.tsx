import React from 'react';
import Logo from '../../assets/logo.svg';
import Income from '../../assets/income.svg';
import Expense from '../../assets/expense.svg';
import Total from '../../assets/total.svg';
import Minus from '../../assets/minus.svg';

const App: React.FC = () => (
  <>
    <header>
      <img src={Logo} alt="Logo Dev Finance" />
    </header>

    <main className="container">
      <section id="balance">
        <h2 className="sr-only">Balanço</h2>

        <div className="card">
          <h3>
            <span>Entradas</span>
            <img src={Income} alt="entradas" />
          </h3>
          <p>R$ 5.000,00</p>
        </div>

        <div className="card">
          <h3>
            <span>Saídas</span>
            <img src={Expense} alt="saídas" />
          </h3>
          <p>R$ 2.000,00</p>
        </div>

        <div className="card total">
          <h3>
            <span>Total</span>
            <img src={Total} alt="total" />
          </h3>
          <p>R$ 3.000,00</p>
        </div>
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
