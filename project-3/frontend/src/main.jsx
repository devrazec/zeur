import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/globals.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from './context/GlobalContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalContext>
        <App />
      </GlobalContext>
    </BrowserRouter>
  </StrictMode>
);
