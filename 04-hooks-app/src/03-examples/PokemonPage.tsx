import { useCounter } from "../hooks/useCounter";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {
  const {counter, increment, decrement} = useCounter(1);  // se encarga de cambiar el numero (counter)
  const {pokemon , isLoading, formattedId} = usePokemon({id:counter});   // se encarga de la informacion del pokemon

  if(isLoading){
    return (
      <div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2xl font-thin text-white">Pokémon</h1>
        <h3 className="text-xl font-bold text-white">Cargando...</h3>
      </div>
    )
  }

  if( !pokemon ){
    return (
      <div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2xl font-thin text-white">Pokémon</h1>
        <h3 className="text-xl font-bold text-white">No se encontró el pokemon</h3>
      </div>
    )
  }

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">#{formattedId} {pokemon.name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`}
        alt={pokemon.name}
      />

      <div className="flex gap-2">
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={decrement}>
          Anterior
        </button>
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={increment}>
          Siguiente
        </button>
       
      </div>
    </div>
  );
};