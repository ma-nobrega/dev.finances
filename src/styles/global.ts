import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  --dark-blue: #363f5f;
  --green: #49AA26;
  --light-green: #3dd705;
  --red: #e92929;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 93.75%; /* 15px */
}

body {
  background: #f0f2f5;
  font-family:'Poppins', sans-serif
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.container {
  width: min(90vw, 800px);
  margin: auto;
}

/* Titles ===================== */
h2 {
  margin-top: 3.2rem;
  margin-bottom: 0.8rem;
  color: var(--dark-blue);
  font-weight: normal;
}

/* Links & Buttons ===================== */
a {
  color: var(--green);
  text-decoration: none;
}

a:hover {
  color: var(--light-green);
}

button {
  width: 100%;
  height: 50px;

  border: none;

  color: white;
  background: var(--green);

  padding: 0;

  border-radius: 0.25rem;

  cursor: pointer;
  &:hover {
    background: var(--light-green);
  }
}

.button.new {
  display: inline-block;
  margin-bottom: .8rem;
}

.button.cancel {
  color: var(--red);
  border: 2px var(--red) solid;
  border-radius: 0.25rem;

  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
}

/* Header ===================== */
header {
  background: #2D4A22;
  padding: 2rem 0 10rem;
  text-align: center;
}

#logo {
  color: #fff;
  font-weight: 100;
}

/* Balance ===================== */
#balance {
  margin-top: -8rem;
  h2 {
    color:white;
    margin-top:0;
  }
}

/* Cards ===================== */
.card {
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

  margin-bottom: 2rem;

  color: var(--dark-blue);
  h3 {
    font-weight: normal;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    font-size: 2rem;
    line-height: 3rem;

    margin-top: 1rem;
  }
}

.card.total {
  background: var(--green);
  color: white;
}

/* Table ===================== */
#transaction {
  display: block;
  width: 100%;
  overflow-x: auto;
}
#data-table {
  width: 100%;
  border-spacing: 0 0.5rem;
  color: #969cb3;
}

table thead tr th:first-child,
table tbody tr td:first-child
{
  border-radius: 0.25rem 0 0 0.25rem;
}

table thead tr th:last-child,
table tbody tr td:last-child{
  border-radius: 0 0.25rem 0.25rem 0;
}

table thead th {
  background: white;

  font-weight: normal;
  padding: 1rem 2rem;

  text-align: left;
}

table tbody tr {
  opacity: 0.7
}

table tbody tr:hover {
  opacity: 1
}

table tbody td {
  background:white;
  padding: 1rem 2rem;
}

td.description {
  color: var(--dark-blue);
}

td.income {
  color: #12a454;
}

td.expense {
  color: #e92929;
}

/* Modal ===================== */
.modal-overlay {
  width: 100%;
  height: 100%;

  background-color: rgba(0,0,0,0.7);

  position: fixed;
  top: 0;

  display:flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  visibility: hidden;

  z-index: 999;
}

.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal {
  background: #F0F2f5;
  padding: 2.4rem;

  position: relative;
  z-index: 1;
}


/* Form ===================== */
#form {
  max-width: 500px;
  h2 {
    margin-top: 0;
  }
}

input {
  border: none;
  border-radius: 0.2rem;

  padding: 0.8rem;

  width: 100%;
}

.input-group {
  margin-top: 0.8rem;
  small{
    opacity: 0.4;
  }
}

.input-group.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-group.actions .button,
.input-group.actions button {
  width: 48%;
}


/* Footer ===================== */
footer {
  text-align: center;
  padding: 4rem 0 2rem;
  color: var(--dark-blue);

  opacity: 0.6;
}


/* Responsive ===================== */
@media (min-width: 800px) {
  html {
  font-size: 87.5%;
  }

  #balance {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  }
}
`;
