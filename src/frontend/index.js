import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/RenderForm.less';
import './styles/styles.css'
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);