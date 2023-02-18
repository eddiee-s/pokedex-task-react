import { EvolutionData, EvolutionResult, PokemonDetails } from "../types"

export default function handleEvoChain(
  result: EvolutionData,
  pokemons: PokemonDetails[]
) {
  let evoChain = [] as any
  let evoData = result.chain as any
  do {
    let evoDetails = evoData?.evolution_details[0]
    evoChain.push({
      species_name: evoData?.species.name,
      min_level: !evoDetails ? 1 : evoDetails.min_level,
      trigger_name: !evoDetails ? null : evoDetails.trigger.name,
      item: !evoDetails ? null : evoDetails.item,
    })

    evoData = evoData?.evolves_to[0]
  } while (!!evoData && evoData.hasOwnProperty("evolves_to"))
  evoChain = evoChain
    .filter((pokemon: EvolutionResult) =>
      pokemons?.some((f) => f.name === pokemon.species_name)
    )
    .map((item: EvolutionResult) => ({
      ...item,
      id: pokemons.find((f) => f.name === item.species_name)?.id,
    }))
  return evoChain
}
