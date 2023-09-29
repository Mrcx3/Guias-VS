import React from "react";
// Se crea el componente Hijo, que retorna  h1 y muestra un mensaje con el valor de props.nombre
const Hijo = (props) => { return <h1>El nombre guardado es {props.nombre}</h1>; };
export default Hijo;