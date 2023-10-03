import React from 'react';
import './App.css'
//Maneja el enrutamiento, hay que agregarle las rutas y en este caso tambien link.
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Main1 from './Main1';
import Main2 from './Main2';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ul>
          {/* lista que contiene un componente Link. Cuando haces clic en este enlace, te lleva a la ruta /main1 */}
          <li><Link to="/main1">Main 1</Link></li>
          <li><Link to="/main2">Main 2</Link></li>
        </ul>
        <Routes>
          <Route path='/main1' element={<Main1 />} />
          <Route path='/main2' element={<Main2 />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
// Crear un proyecto compuesto por 4 componentes bajo la siguiente jerarquía. 
// • main.jsx
// o App
// § Navbar
// § Main1 o Main2
// § Footer 
// Al hacer click sobre las dos posibles opciones en el NavBar, se deberá cambiar entre 
// Main1 y Main2 dependiendo de la navegación. Para lograrlo se deberá instalar y usar 
// React Router Dom