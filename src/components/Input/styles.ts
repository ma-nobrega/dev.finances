import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  background: #f0f0f5;
  border: solid #f0f0f5 1px;
  margin: 8px 0;
  input {
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
    color: var(--green);
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--green);
    `}
`;
