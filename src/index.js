import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import DataProvider from './hooks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <Router>
      <App />
    </Router>
  </DataProvider>
);


