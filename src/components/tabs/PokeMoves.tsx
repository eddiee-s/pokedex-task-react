import { FC } from "react"
import { getPokemonMoveName } from "../../helpers/pokemon-tag-move"
import { Moves } from "../../types"
import randomColor from "randomcolor"
import { Button } from "../shared/Buttons"

interface MovesPropsType {
  moves: Moves []
}

const PokeMoves: FC<MovesPropsType> = ({ moves }) => {
  return (
    <>
      <h1 className="font-bold text-indigo-500 mb-3" >Moves List</h1>
      <div className="flex flex-wrap">
        {moves.slice(0, 10).map((item, i) => (
          <div 
            key={i}
            style={{
              backgroundColor: randomColor({
                luminosity: 'bright',
                format: 'rgba',
                alpha: 0.7,
              }),
            }}
            className="p-2 m-1 rounded-xl text-sm text-white font-bold"
          >
            <span>{getPokemonMoveName(item.move.name)}</span>
          </div>
        ))}
        {moves.length > 10 ? <div className="flex justify-end"><Button className="border-0 hover:text-indigo-500 hover:bg-white" onClick={()=>console.log("first")}> Show more... </Button> </div> : <></>}
      </div>
    </>
  )
}

export default PokeMoves
