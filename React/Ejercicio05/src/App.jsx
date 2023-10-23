import React, { useState } from 'react'; // Importar React y el hook useState desde React

function Contador() { 
  const [contador, setContador] = useState(0); 
  // hook useState para crear variable de estado contador 
  //y una función para actualizarla llamada setContador. El estado inicial es 0.

  return ( 
    <div>
      <p>Has hecho clic {contador} veces</p> 
      <button onClick={() => setContador(contador + 1)}> // Botón qué, cuando se hace clic en él, incrementa contador en 1
        Haz clic aquí
      </button>
    </div>
  );
} 

export default Contador;