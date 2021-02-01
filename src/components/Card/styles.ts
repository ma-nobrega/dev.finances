import styled from 'styled-components';

export const Container = styled.div`
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
`;
