import { FC } from "react"
import { getPokemonMoveName } from "../../helpers/pokemon-tag-move"
import { Moves } from "../../types"
import randomColor from "randomcolor"
import { Button, ButtonNext } from "../shared/Buttons"

interface MovesPropsType {
  moves: Moves []
}

const PokeMoves: FC<MovesPropsType> = ({ moves }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        {moves.slice(0, 12).map((item, i) => (
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
        {moves.length > 12 ? <div className="flex justify-end"><Button className="border-0 hover:text-indigo-500 hover:bg-white" onClick={()=>console.log("first")}> Show more... </Button> </div> : <></>}
      </div>
    </div>
  )
}

export default PokeMoves
