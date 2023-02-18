import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { usePokemonsQuery } from "./../redux/api/index"
import { setAllPokemons } from "./../redux/slices/pokemonsSlice"
import { RootState } from "./../redux/store"
import PokeCard from "./../components/PokeCard"
import { ButtonNext, ButtonPrev } from "../components/shared/Buttons"
import { HashLoader } from "react-spinners"
import Pagination from "../components/Pagination"
import DropSelection from "../components/shared/DropSelection"

const PokemonListView = () => {
  const [pagination, setPagination] = useState<{
    limit: number
    offset: number
  }>({
    limit: 10,
    offset: 0,
  })

  const {
    data = { result: [], pokemonList: { previous: "", next: "" } },
    isSuccess,
    isFetching,
  } = usePokemonsQuery({ limit: pagination.limit, offset: pagination.offset })
  const dispatch = useDispatch()

  useEffect(() => {
    if (isSuccess) {
      dispatch(setAllPokemons(data.result))
    }
  }, [data.result, pagination])

  const { allPokemons } = useSelector((state: RootState) => state.pokemons)

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-center mb-16 py-6 ">
        {isFetching ? (
          <div className="flex w-full  h-[calc(100vh-13rem)] justify-center items-center">
            <HashLoader color="#3637d6" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allPokemons.map((pokemon) => (
              <PokeCard key={pokemon.id} data={pokemon} />
            ))}
          </div>
        )}
      </div>
      <Pagination>
        <div className="flex items-center">
          <ButtonPrev
            onClick={() =>
              setPagination((prevState) => ({
                ...prevState,
                offset: prevState.offset - prevState.limit,
              }))
            }
            active={!data.pokemonList.previous}
          />
          <ButtonNext
            onClick={() =>
              setPagination((prevState) => ({
                ...prevState,
                offset: prevState.offset + prevState.limit,
              }))
            }
          />
        </div>
        <DropSelection
          value={pagination.limit}
          onChange={(e) =>
            setPagination((prevState) => ({
              ...prevState,
              limit: Number(e.target.value),
            }))
          }
        />
      </Pagination>
    </div>
  )
}

export default PokemonListView
