import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { StoreProvider } from './context/StoreContext';

import 'react-toastify/dist/ReactToastify.css';
import './assets/scss/tailwind.scss';
import './assets/scss/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App />
        <ToastContainer position='bottom-right' theme='colored' autoClose={3000} />
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
