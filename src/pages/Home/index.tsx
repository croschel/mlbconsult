import React from 'react';
import { Link } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';
import Background from '../../components/Background';

import { Container, Content } from './styles';


const Home: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <h1>Bem vindo ao Sistema de Consulta do Mercado Livre</h1>
        <h2>Clique no Botão abaixo para começar</h2>
        <Link to="/consult">
          <span><FiLogIn /></span>
          <p>Consultar categoria</p>
        </Link>
      </Content>
    </Container>
  );
}

export default Home;