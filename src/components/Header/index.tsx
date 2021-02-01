import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Logo Dev Finance" />
    </Container>
  );
};

export default Header;
