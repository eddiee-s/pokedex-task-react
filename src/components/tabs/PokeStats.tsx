import React, { FC } from "react"
import { Stats } from "../../types"
import { Line } from 'rc-progress'
import { statsTitle } from "../../helpers/pokemon-string-functions"

interface PokeStatsPropsType {
  stats: Stats[]
}

const PokeStats: FC<PokeStatsPropsType> = ({ stats }) => {
  return (
    <div>
      {stats.map((item, i) => (
        <div className="flex flex-col" key={i}>
          <div className="flex flex-row h-10 justify-between items-center font-medium text-gray-500">
            <div className="w-24 capitalize">
              {statsTitle(item.stat.name)}
            </div>
            
            <div className="w-full mx-3">
              <Line percent={item.base_stat} strokeWidth={3} strokeColor={`${item.base_stat > 50 ? "#7FC99B" : "#DD6571"}`} />
            </div>
            <div className="text-gray-700">
              {item.base_stat}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PokeStats
