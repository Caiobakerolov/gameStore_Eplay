import { formatPrice } from '../ProductsList'
import Tag from '../Tag'
import Button from '../Button'

import { Image, Title, Price } from './styles'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (game) {
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
              to={`/product/${game.id}`}
              title="click here to take advantage of this offer"
            >
              Enjoy
            </Button>
          </div>
        </Image>
      </>
    )
  }

  return <h3>Loading...</h3>
}

export default Banner
