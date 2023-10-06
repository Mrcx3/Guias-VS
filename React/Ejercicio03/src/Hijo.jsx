import React from "react";
// Se crea el componente Hijo, que contiene propiedades y retorna h1 
// y muestra un mensaje con el valor de props.nombre
const Hijo = (props) => { return <h1>El nombre es {props.nombre} el apellido es :{props.apellido}</h1>; };
export default Hijo;