import React from 'react';
import './App.css'
import Navbar from './Navbar';
import Main from './main';
import Footer from './footer';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
// Crear un proyecto compuesto por tres componentes bajo la misma jerarquía. Crear un 
// Navbar, Main y Footer. 
// 26
// • main.jsx
// o App
// § Navbar
// § Main
// § Footer 
// Necesitamos hacer que Footer, Main y Navbar muestren al menos un dato, de la misma 
// manera que el ejercicio anterior. 