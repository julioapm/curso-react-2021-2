import React from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <h1>Gerenciador de Usuários</h1>
        <nav>
          <Link to="/">Principal</Link> | {' '}
          <Link to="/usuarios">Usuários</Link>  | {' '}
          <Link to="/sobre">Sobre</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Desenvolvido por Júlio Machado</p>
      </footer>
    </>
  );
}

export default App;
