import { createSlice } from "@reduxjs/toolkit"
import { PokemonDetails } from "../../types"

const slice = createSlice({
  name: "pokemons",
  initialState: {
    allPokemons: [] as PokemonDetails[],
    singlePokemon: {} as PokemonDetails,
  },
  reducers: {
    setAllPokemons: (state, action) => {
      return {
        ...state,
        allPokemons: action.payload,
      };
    },
    currentPokemon: (state, action) => {
      return {
        ...state,
        ...{ singlePokemon: action.payload },
      };
    },
  },
});

export default slice.reducer;
export const {
  setAllPokemons,
  currentPokemon,
} = slice.actions;
