export function getPokemonTag(pokemonId: string | number, length = 3) {
  const strId =
    typeof pokemonId !== "string" ? pokemonId.toString() : pokemonId
  console.log(`#${strId.padStart(length, "0")}`)
  return `#${strId.padStart(length, "0")}`
}

export function getPokemonMoveName(move: string) {
  return move.charAt(0).toUpperCase() + move.slice(1).split('-').join(' ')
}
