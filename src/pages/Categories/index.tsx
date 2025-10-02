import { useEffect, useState } from 'react'
import { Game } from '../Home'
import { ProductsList } from '../../components/ProductsList'

export const Categories = () => {
  const [gamesAction, setGamesAction] = useState<Game[]>([])
  const [gamesEsports, setGamesEsports] = useState<Game[]>([])
  const [gamesSimulation, setGamesSimulation] = useState<Game[]>([])
  const [gamesFight, setGamesFight] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAction(res))

    fetch('https://ebac-fake-api.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsports(res))

    fetch('https://ebac-fake-api.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulation(res))

    fetch('https://ebac-fake-api.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesFight(res))

    fetch('https://ebac-fake-api.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesAction} title="Ação" background="black" />
      <ProductsList games={gamesEsports} title="Esportes" background="gray" />
      <ProductsList
        games={gamesSimulation}
        title="Simulação"
        background="black"
      />
      <ProductsList games={gamesFight} title="Luta" background="gray" />
      <ProductsList games={gamesRPG} title="RPG" background="black" />
    </>
  )
}
