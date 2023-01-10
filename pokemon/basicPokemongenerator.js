const API_URL = "https://pokeapi.co/api/v2/pokemon/";

async function getRandomPokemon() {
  const response = await fetch(`${API_URL}${Math.floor(Math.random() * 807) + 1}`);
  return await response.json();
}

getRandomPokemon().then(pokemon => console.log(pokemon.name)); // prints the name of a random Pokémon
