import { FC } from "react"
import { POKEMON_COLORS, POKEMON_FONT_COLORS } from "../helpers/constats"
import { PokemonColor, PokemonDetails, Types } from "../types"
import { getPokemonTag } from "../helpers/pokemon-string-functions"
import PokeDetaislTab from "./PokeDetailsTab"

interface PokeCardPropsType {
  data: PokemonDetails
}

const PokeCard: FC<PokeCardPropsType> = ({ data }) => {
  const pokeColor = data.types[0].type.name
  
  return (
    <div className="relative w-80 h-[35rem] shadow-lg bg-white border border-gray-200 rounded-xl">
      <div className="flex flex-col w-full h-full items-center">
        <div
          className="flex flex-col justify-center h-2/5 w-full rounded-t-xl p-4 capitalize text-white tracking-wider"
          style={{
            backgroundColor: `${
              POKEMON_COLORS[pokeColor as keyof PokemonColor]
            }`,
          }}
        >
          <div className="mb-8">
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
          <div
            className="flex flex-row space-x-2 text-sm font-medium"
            style={{
              color: POKEMON_FONT_COLORS[pokeColor as keyof PokemonColor],
            }}
          >
            {data.types.map((item: Types, index: number) => (
              <div className="bg-white/50 px-2 rounded-2xl" key={index}>
                <h1>{item.type.name}</h1>
              </div>
            ))}
          </div>
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
          <PokeDetaislTab details={data} />
        </div>
      </div>
    </div>
  )
}

export default PokeCard
