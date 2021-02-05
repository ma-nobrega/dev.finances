import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background: #f0f0f5;
  border: solid #f0f0f5 1px;
  select {
    color: #6c6c80;
    background: #f0f0f5;
    flex: 1;
    border: 0;
    outline: none;
    padding: 0.8rem 0.5rem;
    font-size: 1rem;
  }
  svg {
    margin: 0 8px;
  }
`;
