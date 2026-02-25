import React from 'react';
import ReactDOM from 'react-dom/client';
import { DemoApp } from './DemoApp';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>,
);

