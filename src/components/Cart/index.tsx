import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import {
  Overlay,
  CartContainer,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'

import starWars from '../../assets/images/star_wars.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span> {item.prices.current} </span>
              </div>
              <button type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>2 jogos(s) no carrinho</Quantity>
        <Prices>
          Total de $250,00 <span>Em ate 6x sem juros</span>
        </Prices>
        <Button title="click for continue with the purchase" type="button">
          Continue com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
