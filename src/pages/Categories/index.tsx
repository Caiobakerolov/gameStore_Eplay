import { useEffect, useState } from 'react'
import { Game } from '../Home'
import ProductList from '../../components/ProductsList'

const Categories = () => {
  const [gamesAction, setGamesAction] = useState<Game[]>([])
  const [gamesSport, setGamesSport] = useState<Game[]>([])
  const [gamesSimulation, setGamesSimulation] = useState<Game[]>([])
  const [gamesFight, setGamesFight] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAction(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesSport(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulation(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesFight(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRpg(res))
  }, [])

  return (
    <>
      <ProductList games={gamesAction} title="Action" background="black" />
      <ProductList games={gamesSport} title="Sport" background="gray" />
      <ProductList
        games={gamesSimulation}
        title="Simulation"
        background="black"
      />
      <ProductList games={gamesFight} title="Fight" background="gray" />
      <ProductList games={gamesRpg} title="Rpg" background="black" />
    </>
  )
}

export default Categories
