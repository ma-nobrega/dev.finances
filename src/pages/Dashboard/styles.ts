import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: min(90vw, 800px);
  margin: auto;
  .positive {
    background: var(--green);
    color: white;
  }
  .negative {
    background: var(--red);
    color: white;
  }

  .new {
    display: inline-block;
    margin-bottom: 0.8rem;
  }

  .cancel {
    color: var(--red);
    background-color: #ffffff;
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
`;
