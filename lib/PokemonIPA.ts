
const POKEMON_API = "https://pokeapi.co/api/v2/"; 
export async function getPokemonList() {
  try {
    //getPokemonList -> Get the first 151 pokemon
    const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
    console.log("fetching 2");
    if(!response.ok){
      throw new Error('failed to feth pokemon list');
    }
    const data = await response.json();
    return data.results;
    console.log("fetching 3");

  }catch (error){
    console.error("Error fetchin pokemon list:", error);
    throw error;
  }
}

interface Stat  {
  stat : {
    name: string;
    url: string;
  };
  effort: number;
  base_stat: number;
}


type Pokemon = {
  id: number;
  name: string;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: Stat[];
 
};


// getPokemon -> given a string "pickachu", get the information of pickachu

export async function getPokemon(name: string): Promise<Pokemon> {
    // pokemon/ditto
try {
  const response = await fetch(POKEMON_API + "pokemon/" + name);

  if (!response.ok){
    throw new Error(`Failed to fetch Pokemon ${name}`)
  }
  
  const data = await response.json();
  return data
}catch (error){
  console.error(`Error fatching pokemon${name}:`, error);
  throw error;}
}