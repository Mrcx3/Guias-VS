// Definimos una clase llamada RickAndMortyService
export default class Servicio {
    // Definimos un método estático llamado getCharacters. Este método puede ser llamado directamente desde la clase.
    static async getCharacters() {
      try {
        // Hacemos una solicitud HTTP a la API de Rick and Morty utilizando la función fetch de JavaScript.
        const response = await fetch('https://rickandmortyapi.com/api/character');
        // Convertimos la respuesta de la API en JSON.
        const data = await response.json();
        // Devolvemos los primeros 20 resultados de los datos obtenidos de la API.
        return data.results.slice(0, 20);
      } catch (error) {
        // Si ocurre un error, lo registramos en la consola.
        console.error(error);
      }
    }
  }  