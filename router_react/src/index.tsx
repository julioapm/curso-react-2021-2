import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from './components/PaginaPrincipal';
import PaginaUsuarios from './components/PaginaUsuarios';
import PaginaSobre from './components/PaginaSobre';
import PaginaNaoEncontrada from './components/PaginaNaoEncontrada';
import PaginaDetalheUsuario from './components/PaginaDetalheUsuario';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PaginaPrincipal />}/>
          <Route path="usuarios" element={<PaginaUsuarios />}>
            <Route path=":usuarioId" element={<PaginaDetalheUsuario />}/>
          </Route>
          <Route path="sobre" element={<PaginaSobre />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
