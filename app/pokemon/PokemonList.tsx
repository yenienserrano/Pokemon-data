import { getNumberPokemon } from '@/common/utils/getNumberPokemon';
import Image from 'next/image';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListProps {
  pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  const numberPokemon = getNumberPokemon(pokemons[0].url);

  return (
    <div>
      {pokemons.map((pokemon, i) =>
        <div
          key={i}
          className="p-2 inline-flex flex-row justify-center items-center"
        >
          <Image
            src={`/pokemons/${getNumberPokemon(pokemon.url)}.png`}
            width={100}
            height={100}
            alt={pokemon.name}
          />
          <div>
            <p className="text-black text-xl capitalize pb-3">
              {pokemon.name}
            </p>
            <button className="bg-orange-400 text-white border-4 rounded-xl p-2">
              Go details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
