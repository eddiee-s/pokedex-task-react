import { createSlice } from "@reduxjs/toolkit"
import { PokemonDetails } from "../../types"

const slice = createSlice({
  name: "pokemons",
  initialState: {
    allPokemons: [] as PokemonDetails[],
    singlePokemon: {} as PokemonDetails,
    wishListPokemons: [] as PokemonDetails[],
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
    addPokemonToWishList: (state, action) => {
      return {
        ...state,
        wishListPokemons: [...state.wishListPokemons, action.payload],
      };
    },
    removePokemonFromWishList: (state, action) => {
      return {
        ...state,
        wishListPokemons: state.wishListPokemons.filter(
          (pokemon) => pokemon.id !== action.payload
        ),
      };
    },
  },
});

export default slice.reducer;
export const {
  setAllPokemons,
  currentPokemon,
  addPokemonToWishList,
  removePokemonFromWishList,
} = slice.actions;
