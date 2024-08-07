import type { Metadata } from 'next'
import PokemonList from './PokemonList';

export const metadata: Metadata = {
  title: 'Pokemons',
};

interface Pokemon {
  id: number;
  name: string;
}

async function fetchPokemons(): Promise<Pokemon[]> {
  // Simular una llamada a una API
  return [{ id: 1, name: 'Bulbasaur' }, { id: 2, name: 'Ivysaur' }];
}

export default async function Pokemons() {
  const pokemons = await fetchPokemons();
  return (
    <div>
      <h1>Pokemons</h1>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

