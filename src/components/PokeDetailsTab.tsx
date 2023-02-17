import { FC } from "react"
import { TabPanel, useTabs } from "react-headless-tabs"
import { TabSelectBtn } from "../components/shared/Buttons"
import { PokemonDetails } from "../types"
import PokeMoves from './tabs/PokeMoves'

interface PokeDetailsTabPropsType {
  data: PokemonDetails
}

const PokeDetailsTab:FC<PokeDetailsTabPropsType> = ({data}) => {
  const [selectedTab, setSelectedTab] = useTabs([
    "moves",
    "evolutions",
    "held-items",
    "stats",
  ])
  return (
    <>
      <div className="flex border-b border-gray-300 px-1">
        <TabSelectBtn
          isActive={selectedTab === "moves"}
          onClick={() => setSelectedTab("moves")}
        >
          Moves
        </TabSelectBtn>
        <TabSelectBtn
          isActive={selectedTab === "evolutions"}
          onClick={() => setSelectedTab("evolutions")}
        >
          Evolutions
        </TabSelectBtn>
        <TabSelectBtn
          isActive={selectedTab === "held-items"}
          onClick={() => setSelectedTab("held-items")}
        >
          Held items
        </TabSelectBtn>
        <TabSelectBtn
          isActive={selectedTab === "stats"}
          onClick={() => setSelectedTab("stats")}
        >
          Stats
        </TabSelectBtn>
      </div>
      <div className="p-4">
        <TabPanel hidden={selectedTab !== "moves"}>
          <PokeMoves moves={data.moves}/>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "evolutions"}>Poke Evolutions</TabPanel>
        <TabPanel hidden={selectedTab !== "held-items"}>Held-items Pokemon</TabPanel>
        <TabPanel hidden={selectedTab !== "stats"}>Poke Stats</TabPanel>
      </div>
    </>
  )
}

export default PokeDetailsTab
