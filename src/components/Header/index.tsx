import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'

import { HeaderBar, Links, LinkItem, CartButton } from './styles'

import logo from '../../assets/images/logo.svg'
import car from '../../assets/images/carrinho.svg'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
        <CartButton onClick={openCart}>
          {items.length} - products
          <img src={car} alt="Car" />
        </CartButton>
      </HeaderBar>
    </>
  )
}

export default Header
