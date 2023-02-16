import { FC } from "react"
import { PokemonDetails } from "../types"

interface PokeCardPropsType {
  data: PokemonDetails[]
}

const PokeCard: FC<PokeCardPropsType> = ({ data }) => {
  return (
    <div className="w-full">
      {data.map((pokemon) => (
        <div key={pokemon.id}>
          <p> {pokemon.name} </p>
        </div>
      ))}
    </div>
  )
}

export default PokeCard
