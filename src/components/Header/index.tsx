import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'

import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Burgers,
  HeaderRow,
  NavMobile,
  LogoWrapper
} from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderBar>
        <HeaderRow>
          <div>
            <Burgers onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </Burgers>
            <LogoWrapper>
              <Link to="/">
                <img src={logo} alt="Eplay" />
              </Link>
            </LogoWrapper>
          </div>
          <CartButton onClick={openCart}>
            {items.length} <span> - products</span>
            <img src={cart} alt="Cart" />
          </CartButton>
        </HeaderRow>
        <NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <Links>
            <LinkItem>
              <Link
                title="Click here to access page about Categories"
                to="/categories"
              >
                Categories
              </Link>
            </LinkItem>
            <LinkItem>
              <HashLink
                title="Click here to access page about Soon"
                to="/#coming-soon"
              >
                Soon
              </HashLink>
            </LinkItem>
            <LinkItem>
              <HashLink
                title="Click here to access page about Promotions"
                to="/#on-sale"
              >
                Promotions
              </HashLink>
            </LinkItem>
          </Links>
        </NavMobile>
      </HeaderBar>
    </>
  )
}

export default Header
