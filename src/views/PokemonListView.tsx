import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { usePokemonsQuery } from "./../redux/api/index"
import { setAllPokemons } from "./../redux/slices/pokemonsSlice"
import { RootState, store } from "./../redux/store"
import PokeCard from "./../components/PokeCard"
import { ButtonNext, ButtonPrev } from "../components/shared/Buttons"
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
    //TODO: REMOVE CLG
    console.log(isFetching)
    if (isSuccess) {
      dispatch(setAllPokemons(data.result))
    }
  }, [data.result, pagination])

  const { allPokemons } = useSelector((state: RootState) => state.pokemons)
  //TODO: REMOVE CLG
  console.log(store.getState())

  return (
    <div className="">
      {!isFetching ? <PokeCard data={allPokemons} /> : <></>}
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
