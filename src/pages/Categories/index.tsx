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
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportGames} title="Esportes" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
        <ProductsList games={fightGames} title="Luta" background="gray" />
        <ProductsList games={rpgGames} title="RPG" background="black" />
      </>
    )
  }

  return <Loading>Carregando...</Loading>
}
