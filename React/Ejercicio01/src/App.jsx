import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Prueba} from './Prueba'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Prueba></Prueba>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
// Crear un proyecto compuesto de un solo Functional Component. En dicho componente
// mostrar al menos dos datos, como por ejemplo titulo y subtitulo.
// El componente debe ser llamado desde App, a continuación, se propondrá la jerarquía 
// del árbol de componentes y de como es el llamado desde main.jsx
// • main.jsx
// o App
// § Ejemplo