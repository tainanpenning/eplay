import { ProductsList } from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

export const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRPGGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        $background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        $background="gray"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        $background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        $background="gray"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        $background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}
