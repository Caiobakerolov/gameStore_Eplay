import ProductList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductList
          games={actionGames}
          title="Action"
          background="black"
          id="action"
        />
        <ProductList
          games={sportGames}
          title="Sport"
          background="gray"
          id="sport"
        />
        <ProductList
          games={simulationGames}
          title="Simulation"
          background="black"
          id="simulation"
        />
        <ProductList
          games={fightGames}
          title="Fight"
          background="gray"
          id="fight"
        />
        <ProductList games={rpgGames} title="Rpg" background="black" id="rpg" />
      </>
    )
  }

  return <h4>Loading...</h4>
}

export default Categories
