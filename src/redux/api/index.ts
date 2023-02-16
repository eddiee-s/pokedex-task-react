import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { PokemonDetails } from "../../types"

type dataType = {
  count: number;
  next: string;
  previous: string;
  results: PokemonDetails[];
};

export const pokemonsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    pokemons: builder.query({
      async queryFn(data, _queryApi, _extraOptions, fetchWithBQ) {
        const fetchResult = await fetchWithBQ(`/pokemon?offset=${data.offset}&limit=${data.limit}`)
        if (fetchResult.error) return { error: fetchResult.error }
        const pokemonList = fetchResult.data as dataType
        //TODO: REMOVE CLG
        console.log(pokemonList)
        const pokemonsDetails = await Promise.all(
          pokemonList.results.map((poke: PokemonDetails) =>
            fetchWithBQ(`pokemon/${poke.name}`)
          )
        )
        const result = pokemonsDetails.map((r) => r.data)

        return result ? { data: {result, pokemonList} as {result:PokemonDetails[], pokemonList:dataType}} : { error: fetchResult.error }
      },
    }),
    pokemonsDetails: builder.query({
      query: (id) => `/pokemon-species/${id}`,
    }),
    pokemonsEvolutionChain: builder.query({
      query: (url) => `${url}`,
    }),
  }),
})

export const {
  usePokemonsQuery,
  usePokemonsDetailsQuery,
  usePokemonsEvolutionChainQuery,
} = pokemonsApi
