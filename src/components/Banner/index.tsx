import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'
import { formatPrice } from '../ProductsList'

import { Image, Prices, Title } from './styles'
import { Tag } from '../Tag'
import { Button } from '../Button'

export const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game?.name}</Title>
          <Prices>
            De <span>{formatPrice(game?.prices.old)}</span> <br />
            por apenas {formatPrice(game?.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}
