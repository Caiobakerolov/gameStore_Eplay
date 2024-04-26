import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import car from '../../assets/images/carrinho.svg'

const Header = () => (
  <>
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="Eplay" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/">Home</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/categories">Categories</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">News</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promotions</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart href="#">
        0 - products
        <img src={car} alt="Car" />
      </LinkCart>
    </HeaderBar>
  </>
)

export default Header
