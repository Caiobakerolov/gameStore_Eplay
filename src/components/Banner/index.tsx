import { Image, Title, Price } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <>
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Tag size="big">Highlight of the Day</Tag>
        <div>
          <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
          <Price>
            From <span>U$$99.00</span> <br />
            to only U$$49.99
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

export default Banner
