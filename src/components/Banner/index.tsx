import { Image, Title, Price } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => (
  <>
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Price>
          From <span>U$$99.00</span> <br />
          to only U$$49.99
        </Price>
      </div>
    </Image>
  </>
)

export default Banner
