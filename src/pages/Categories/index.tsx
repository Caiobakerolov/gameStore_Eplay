import ProductList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingActionGames } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSportGames } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulationGames } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFightGames } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpgGames } = useGetRpgGamesQuery()

  return (
    <>
      <ProductList
        games={actionGames}
        title="Action"
        background="black"
        id="action"
        isLoading={isLoadingActionGames}
      />
      <ProductList
        games={sportGames}
        title="Sport"
        background="gray"
        id="sport"
        isLoading={isLoadingSportGames}
      />
      <ProductList
        games={simulationGames}
        title="Simulation"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulationGames}
      />
      <ProductList
        games={fightGames}
        title="Fight"
        background="gray"
        id="fight"
        isLoading={isLoadingFightGames}
      />
      <ProductList
        games={rpgGames}
        title="Rpg"
        background="black"
        id="rpg"
        isLoading={isLoadingRpgGames}
      />
    </>
  )
}

export default Categories
