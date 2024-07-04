import { useEffect, useState } from 'react'

import { Game } from '../../pages/Home'
import { formatPrice } from '../ProductsList'
import Tag from '../Tag'
import Button from '../Button'

import { Image, Title, Price } from './styles'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
        <div className="container">
          <Tag size="big">Highlight of the Day</Tag>
          <div>
            <Title>{game.name}</Title>
            <Price>
              From <span>{formatPrice(game.prices.old)}</span> <br />
              to only {formatPrice(game.prices.current)}
            </Price>
          </div>
          <Button
            type="link"
            to="/product"
            title="click here to take advantage of this offer"
          >
            Enjoy
          </Button>
        </div>
      </Image>
    </>
  )
}

export default Banner
