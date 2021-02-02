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
`;
