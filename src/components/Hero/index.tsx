import { formatPrice } from '../ProductsList'
import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos, TagCont } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
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
            {game.prices.current && <>To {formatPrice(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              variant="primary"
              title="Click here to add this game to cart"
            >
              Add to Cart
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  </>
)

export default Hero
