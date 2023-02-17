import { FC } from "react"
import { POKEMON_COLORS, POKEMON_FONT_COLORS } from "../helpers/constats"
import { PokemonColor, PokemonDetails } from "../types"
import { getPokemonTag } from "../helpers/pokemon-tag-move"
import PokeDetaislTab from "./PokeDetailsTab"

interface PokeCardPropsType {
  data: PokemonDetails
}

const PokeCard: FC<PokeCardPropsType> = ({ data }) => {
  console.log(POKEMON_COLORS[data.types[0].type.name as keyof PokemonColor])
  const pokeColor = data.types[0].type.name
  return (
    // <div className="flex flex-row w-full">
    //   {data.map((pokemon) => (
    //     <div className="w-1/2 border border-gray rounded-full" key={pokemon.id}>
    //       <p> {pokemon.name} </p>
    //     </div>
    //   ))}
    // </div>
    <div className="relative w-80 h-[35rem] shadow-lg bg-white border border-gray-200 rounded-xl">
      <div className="flex flex-col w-full h-full items-center">
        <div
          className="flex flex-col h-2/5 w-full rounded-t-xl p-4 capitalize text-white tracking-wider"
          style={{
            backgroundColor: `${
              POKEMON_COLORS[pokeColor as keyof PokemonColor]
            }`,
          }}
        >
          <h1 className="text-xl font-medium ">{data.name}</h1>
          <h2
            className=""
            style={{
              color: POKEMON_FONT_COLORS[pokeColor as keyof PokemonColor],
            }}
          >
            {getPokemonTag(data.id)}
          </h2>
        </div>
        <div className="h-48 bg-pokeball bg-no-repeat bg-cover absolute top-10 -right-5">
          <figure>
            <img
              className="h-48"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              alt=""
            />
          </figure>
        </div>
        <div className="flex flex-col h-3/5 w-full bg-white rounded-t-2xl -mt-2 p-2">
          <PokeDetaislTab data={data} />
        </div>
      </div>
    </div>
  )
}

export default PokeCard
