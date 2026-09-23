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
    throw new Error(`HTTP ${response.status} al intentar acceder a ${url}`);
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

async function atraparEquipoPokemon() {
  const pokemonsAPedir = ["ditto", "pikachu", "no-existe"];
  
  const promesas = pokemonsAPedir.map(name => getPokemon(name));

  const resultados = await Promise.allSettled(promesas);

  resultados.forEach((resultado, index) => {
    const nombre = pokemonsAPedir[index];
    
    if (resultado.status === "fulfilled") {
      console.log(`✅ Éxito con ${nombre}: Pesa ${resultado.value.weight} hectogramos.`);
    } else {
      console.error(`❌ Fallo con ${nombre}: ${resultado.reason.message}`);
    }
  });
}

atraparEquipoPokemon();
export{}