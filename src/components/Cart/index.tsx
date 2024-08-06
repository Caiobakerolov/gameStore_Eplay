import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'
import { formatPrice } from '../ProductsList'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

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

  const getTotalPrice = () => {
    return items.reduce((accumulator, valueCurrent) => {
      return (accumulator += valueCurrent.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
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
                <span> {formatPrice(item.prices.current)} </span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogos(s) no carrinho</Quantity>
        <Prices>
          Total de {formatPrice(getTotalPrice())}
          {''} <span>Em ate 6x sem juros</span>
        </Prices>
        <Button title="click for continue with the purchase" type="button">
          Continue com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
