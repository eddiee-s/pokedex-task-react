import { FC } from "react"
import { Moves } from "../../types"

interface MovesPropsType {
  moves: Moves []
}

const PokeMoves: FC<MovesPropsType> = ({ moves }) => {
  console.log(moves)
  return (
    <div>
      {/* {moves.map((move) => (
        <li>{move.name}</li>
      ))} */}
    </div>
  )
}

export default PokeMoves
