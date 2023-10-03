import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hijo from './Hijo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
const Main = () => {
  //dentro de un div paso dos instancias de Hijo  a cada Hijo se le pasa una prop
  //llamada nombre que contiene lo que hay entre comillas
  return (<div>
  <Hijo nombre="Chiquito"/> 
  <Hijo nombre="Filomena"/>
  </div>
  );
};
export default Main;