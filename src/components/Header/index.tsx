import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import car from '../../assets/images/carrinho.svg'

const Header = () => (
  <>
    <HeaderBar>
      <div>
        <img src={logo} alt="Eplay" />
        <nav>
          <Links>
            <LinkItem>
              <a href="#">Category</a>
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
