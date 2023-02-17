export type PokemonsList = {
  name: string
  url: string
}

export type PokemonDetails = {
  abilities: []
  id: number
  name: string
  description: string
  image: string
  genera: string
  pokedex_number: string
  base_experience: number
  types: Types[]
  stats: Stats[]
  height: number
  weight: number
  abilites: Ability[]
  gender_rate: number
  egg_groups: EggGroup[]
  color: PokeColor
  flavor_text_entries: FlavorEntries[]
  evolution_chain?: { url: string }
}

export type Types = {
  slot: number
  type: PokemonsList
}

export type Stats = {
  base_stat: number
  effort: number
  stat: Stat
}

export type Stat = {
  name: string
  url: string
}

export type Abilities = {
  ability: Ability
  is_hidden: boolean
  slot: number
}

export type Ability = {
  name: string
  url: string
}

export type EggGroup = {
  name: string
  url: string
}

export type PokeColor = {
  name: string
  url: string
}

export type FlavorEntries = {
  flavor_text: string
  language: PokemonsList
  version: PokemonsList
}

export type EvolutionData = {
  baby_trigger_item: number | null
  chain: EvolutionChain
  id: number
}

export type EvolutionChain = {
  evolution_details: EvolutionDetails[]
  evolves_to: string[]
  is_baby: boolean
  species: PokemonsList
}
export type EvolutionResult = {
  id: number | undefined
  species_name: any
  min_level: any
  trigger_name: any
  item: any
}

export type EvolutionDetails = {
  gender: string | number | null
  held_item: string | number | null
  item: string | number | null
  known_move: string | number | null
  known_move_type: string | number | null
  location: string | number | null
  min_affection: string | number | null
  min_beauty: string | number | null
  min_happiness: string | number | null
  min_level: string | number
  needs_overworld_rain: string | number | false
  party_species: string | number | null
  party_type: string | number | null
  relative_physical_stats: string | number | null
  time_of_day: string | number | ""
  trade_species: string | number | null
  trigger: PokemonsList
  turn_upside_down: boolean
}

export interface PokemonColor {
  fire?: String;
  grass?: String;
  water?: String;
  normal?: String;
  fighting?: String;
  flying?: String;
  poison?: String;
  ground?: String;
  rock?: String;
  bug?: String;
  ghost?: String;
  steel?: String;
  electric?: String;
  psychic?: String;
  ice?: String;
  dragon?: String;
  dark?: String;
  fairy?: String;
};