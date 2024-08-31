import { useDispatch } from 'react-redux'

import Button from '../Button'
import { formatPrice } from '../ProductsList'
import Tag from '../Tag'
import { add, open } from '../../store/reducers/cart'

import { Banner, Infos, TagCont } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <>
      <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
        <div className="container">
          <TagCont>
            <Tag>{game.details.category}</Tag>
            <Tag>{game.details.system}</Tag>
          </TagCont>
          <Infos>
            <h2>{game.name}</h2>
            <p>
              {game.prices.discount && (
                <span>From {formatPrice(game.prices.old)}</span>
              )}
              {game.prices.current && (
                <>To {formatPrice(game.prices.current)}</>
              )}
            </p>
            {game.prices.current && (
              <Button
                type="button"
                variant="primary"
                title="Click here to add this game to cart"
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            )}
          </Infos>
        </div>
      </Banner>
    </>
  )
}

export default Hero
