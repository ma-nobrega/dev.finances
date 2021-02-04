import styled from 'styled-components';

export const Container = styled.button`
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
`;
