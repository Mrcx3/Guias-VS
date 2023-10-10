// Importamos React y dos hooks de React: useEffect y useState.
import React, { useEffect, useState } from 'react';//[^1^][1]
// Importamos la clase RickAndMortyService que definimos anteriormente.
import Servicio from './Servicios/Servicio';

// Definimos un componente funcional de React llamado CharacterComponent.
const CharacterComponent = () => {
  // Utilizamos el hook useState para crear una variable de estado llamada characters y una función para actualizarla llamada setCharacters.
const [characters, setCharacters] = useState([]);//[^2^][2]
  
  // Utilizamos el hook useEffect para ejecutar código después de que se haya renderizado el componente.
  useEffect(() => {
    // Definimos y llamamos a una función asíncrona llamada fetchData.
    const fetchData = async () => {
      // Esta función llama al método getCharacters del servicio RickAndMortyService y actualiza el estado del componente con los personajes obtenidos.
      const characters = await Servicio.getCharacters();
      setCharacters(characters);
    };

    fetchData();
  }, []);

  // En el método render del componente (la parte que devuelve JSX), estamos mapeando sobre el array de personajes y devolviendo un elemento <li> para cada personaje con su nombre.
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
};

// Exportamos el componente para que pueda ser importado y utilizado en otros archivos.
export default CharacterComponent;
