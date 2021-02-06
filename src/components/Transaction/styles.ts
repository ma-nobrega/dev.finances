import styled from 'styled-components';

export const Container = styled.tr`
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  td {
    background: white;
    padding: 1rem 2rem;
    width: 22%;
    &:last-child {
      width: 8%;
      svg {
        cursor: pointer;
      }
    }
  }
  .description {
    color: var(--dark-blue);
  }
  .income {
    color: #12a454;
  }
  .expense {
    color: #e92929;
  }
  svg {
    color: var(--red);
  }
`;
