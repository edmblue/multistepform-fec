import { MultiformProvider } from './context/MultiformProvider.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MultiformProvider>
      <App />
    </MultiformProvider>
  </React.StrictMode>
);
