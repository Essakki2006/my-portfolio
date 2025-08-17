import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';     // ✅ correct
import './index.css';           // ✅ correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
