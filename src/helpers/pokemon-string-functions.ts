export function getPokemonTag(pokemonId: string | number, length = 3) {
  const strId =
    typeof pokemonId !== "string" ? pokemonId.toString() : pokemonId
  return `#${strId.padStart(length, "0")}`
}

export function pokemonDashRemove(move: string) {
  return move.charAt(0).toUpperCase() + move.slice(1).split('-').join(' ')
}

export function statsTitle(title: string) {
  return title.includes('-') ? title.split('-').map(item => item.slice(0, 3)).join('.') : title
}
