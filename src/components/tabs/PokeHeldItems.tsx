import { FC } from "react"
import { pokemonDashRemove } from "../../helpers/pokemon-string-functions"
import { HeldItems } from "../../types"

interface PokeHeldItemsPorpsType {
  items: HeldItems[]
}

const PokeHeldItems: FC<PokeHeldItemsPorpsType> = ({ items }) => {
  return (
    <div className="flex flex-col mt-3">
      <h1 className="font-bold text-indigo-500 mb-3">Held Items</h1>
      <div className="flex flex-wrap flex-row justify-center space-x-2">
        {items.length > 0
          ? items.map((item, index) => (
            <div key={index} className="capitalize text-gray-700">
              <figure className="flex h-12 w-full justify-center">
                <img
                  className="h-12"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.item.name}.png`}
                  alt={item.item.name}
                />
              </figure>
              <h1 className="text-sm font-medium ">
                {pokemonDashRemove(item.item.name)}
              </h1>
            </div>
          ))
          : "No held items for this pokemon"}
      </div>
    </div>
  )
}

export default PokeHeldItems
