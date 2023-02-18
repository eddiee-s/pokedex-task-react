import { FC } from "react"
import { TabPanel, useTabs } from "react-headless-tabs"
import { TabSelectBtn } from "../components/shared/Buttons"
import { PokemonDetails } from "../types"
import { usePokemonsDetailsQuery } from "../redux/api"
import PokeMoves from './tabs/PokeMoves' 
import PokeEvolution from './tabs/PokeEvolution' 
import PokeStats from './tabs/PokeStats' 
import PokeHeldItems from './tabs/PokeHeldItems' 

interface PokeDetailsTabPropsType {
  details: PokemonDetails
}

const PokeDetailsTab:FC<PokeDetailsTabPropsType> = ({details}) => {
  const [selectedTab, setSelectedTab] = useTabs([
    "moves",
    "evolutions",
    "held-items",
    "stats",
  ])
  const {
    data = [],
    isSuccess,
  } = usePokemonsDetailsQuery(details.id)
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
          <PokeMoves moves={details.moves}/>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "evolutions"}>
          {isSuccess && <PokeEvolution url={data.evolution_chain.url}/>}
        </TabPanel>
        <TabPanel hidden={selectedTab !== "held-items"}>
          <PokeHeldItems items={details.held_items}/>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "stats"}>
          <PokeStats stats={details.stats}/>
        </TabPanel>
      </div>
    </>
  )
}

export default PokeDetailsTab
