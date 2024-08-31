import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'
import { parseToAus } from '../../utils'

import { useGetFeaturedGameQuery } from '../../services/api'

import { Image, Title, Price } from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
        <div className="container">
          <Tag size="big">Highlight of the Day</Tag>
          <div>
            <Title>{game.name}</Title>
            <Price>
              From <span>{parseToAus(game.prices.old)}</span> <br />
              to only {parseToAus(game.prices.current)}
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

export default Banner
