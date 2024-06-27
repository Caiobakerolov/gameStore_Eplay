import bannerImg from '../../assets/images/Hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos, TagCont } from './styles'

const Hero = () => (
  <>
    <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <TagCont>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </TagCont>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>From U$$ 150,00</span>
            To U$$ 99,00
          </p>
          <Button
            type="button"
            variant="primary"
            title="Click here to add this game to cart"
          >
            Add to Cart
          </Button>
        </Infos>
      </div>
    </Banner>
  </>
)

export default Hero
