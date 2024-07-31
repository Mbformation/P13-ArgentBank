import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // importation du fichier style css du projet
import App from './App';
import reportWebVitals from './reportWebVitals';

// instanciation du root de l'application
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// rendu de l'application
root.render(
  <React.StrictMode>
       <App />  {/*composant de l'application*/}
  </React.StrictMode>
);


reportWebVitals();
