import { FC, useEffect, useState } from "react"
import handleEvoChain from "../../helpers/pokemon-evolution-chain"
import { EvolutionResult } from "../../types"
import { usePokemonsEvolutionChainQuery } from "../../redux/api/index"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

interface PokeEvolutionPropsType {
  url: string
}
const PokeEvolution: FC<PokeEvolutionPropsType> = ({ url }) => {
  const { data = [], isSuccess } = usePokemonsEvolutionChainQuery(url)
  const [evolutionData, setEvolutionData] = useState<EvolutionResult[]>()
  const { allPokemons } = useSelector((state: RootState) => state.pokemons)

  useEffect(() => {
    if (isSuccess) {
      const result = handleEvoChain(data, allPokemons)
      setEvolutionData(result)
    } else return
  }, [data])

  return (
    <div className="flex flex-col mt-3">
      <h1 className="font-bold text-indigo-500 mb-3" >Evolution Chain</h1>
      <div className="flex flex-row justify-between">
        {evolutionData?.map((pokemon) => {
          return (
            <div className="flex flex-col items-center" key={pokemon.id}>
              <div>
                <p> Level {pokemon.min_level}</p>
              </div>
              <div className="justify-center">
                <figure className="flex items-center justify-center bg-pokeballgray bg-no-repeat bg-cover my-2 h-20 w-20">
                  <img
                    className="h-22"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    alt={pokemon.species_name}
                  />
                </figure>
              </div>
              <div className="text-gray-600 capitalize">
                <p>{pokemon.species_name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PokeEvolution
