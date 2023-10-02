import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './main'

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
// Crear un Componente Main el cual llame dos veces a un mismo componente, es decir, 
// que Main anide a Hijo e Hijo. 
// • main.jsx
// o App
// § Main
// • Hijo
// • Hijo 
// Al primer Componente anidado pasarle como props el nombre Chiquito y al segundo el 
// nombre Filomena. Desde los componentes Hijos atrapar los valores mediante las props.