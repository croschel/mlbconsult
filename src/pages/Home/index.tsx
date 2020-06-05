import React from 'react';
import { Link } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <div id="container">
      <div id="home-page" />
      <div id="content">
        <h1>Bem vindo ao Sistema de Consulta do Mercado Livre</h1>
        <h2>Clique no Botão abaixo para começar</h2>
        <Link to="/consult">
          <span><FiLogIn /></span>
          <p>Consultar categoria</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;