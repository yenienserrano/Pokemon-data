interface Pokemon {
  id: number;
  name: string;
}

interface PokemonListProps {
  pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <div>
      {pokemons.map(pokemon =>
        <div key={pokemon.id}>
          {pokemon.name}
        </div>
      )}
    </div>
  );
}
