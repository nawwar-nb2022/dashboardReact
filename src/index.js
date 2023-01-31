import React from 'react';
import ReactDOM from 'react-dom/client';
import "./components/i18n/i18n"
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
 <DarkModeContextProvider>
    <App />
 </DarkModeContextProvider>
  </React.StrictMode>
);

