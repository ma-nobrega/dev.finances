import styled from 'styled-components';

export const Container = styled.tr`
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  td {
    background: white;
    padding: 1rem 2rem;
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
`;
