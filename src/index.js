import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Calculadora</h1>
      <Calculator />
    </div>
  </React.StrictMode>
   ,document.getElementById('root'));
   reportWebVitals();



