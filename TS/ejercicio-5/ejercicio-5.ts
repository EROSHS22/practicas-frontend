type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
};


const API_CONFIG = {
  baseUrl: "https://pokeapi.co/api/v2",
  endpoints: {
    pokemon: "/pokemon/"
  }
};


async function fetchJson(url: string): Promise<unknown> {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Error de red HTTP ${response.status} al intentar acceder a ${url}`);
  }

  return await response.json();
}


function isPokemon(data: unknown): data is Pokemon {
  if (typeof data !== "object" || data === null) {
    return false;
  }
  
  const obj = data as Record<string, unknown>;

  const requiredProperties = ['id', 'name', 'height', 'weight', 'sprites', 'types'];
  
  return requiredProperties.every(prop => prop in obj);
}


async function getPokemon(name: string): Promise<Pokemon> {
  const url = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.pokemon}${name}`;
  
  const data = await fetchJson(url);

  if (!isPokemon(data)) {
    throw new TypeError(`Los datos recibidos para "${name}" no tienen el formato válido de un Pokémon.`);
  }

  return data;
}


async function atraparPokemon() {
  try {
    const pokemonName = "ditto";
    const pokemon = await getPokemon(pokemonName);
    
    console.log(`¡Atrapaste a ${pokemon.name}! Pesa ${pokemon.weight} hectogramos.`);
  } catch (error) {
    console.error("Hubo un problema en tu aventura:", error);
  }
}

atraparPokemon();