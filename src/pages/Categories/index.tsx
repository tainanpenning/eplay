import { ProductsList } from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'
import { Loading } from '../../styles'

export const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()

  if (actionGames && simulationGames && sportGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          $background="black"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          $background="gray"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          $background="black"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          $background="gray"
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          $background="black"
          id="rpg"
        />
      </>
    )
  }

  return <Loading>Carregando...</Loading>
}
