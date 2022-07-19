import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './pages/App';
import Vendas from './pages/Vendas';
import './styles/global.css';

const routes = ReactDOM.createRoot(document.getElementById('root'));

routes.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' static element={<App />} />
        <Route path='admin' element={<Vendas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
