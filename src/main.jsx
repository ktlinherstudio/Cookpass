import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 全站 SCSS
import './styles/main.scss';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);