import { Metadata } from 'next';
import PokemonList from './PokemonList';

export const metadata: Metadata = {
  title: 'Pokemons'
};

interface Pokemon {
  url: string;
  name: string;
}

interface Response {
  results: Pokemon[];
  previous: string;
  next: string;
  count: number;
}

async function fetchPokemons({ limit = 32, offset = 0 }): Promise<Response> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      results: [],
      previous: '',
      next: '',
      count: 0
    };
  }
}

export default async function Pokemons() {
  const { results: pokemons } = await fetchPokemons({});
  return (
    <div>
      <h1 className="text-center text-4xl text-black pb-4">List of Pokemons</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
