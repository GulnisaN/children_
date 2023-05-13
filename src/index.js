import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Children from './App';
import Animals from "./animal";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Children />
      <Animals/>
  </React.StrictMode>
);