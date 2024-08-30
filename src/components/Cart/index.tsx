import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'
import { formatPrice } from '../ProductsList'
import { getTotalPrice } from '../../utils'

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

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
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
          Total de {formatPrice(getTotalPrice(items))}
          {''} <span>Em ate 6x sem juros</span>
        </Prices>
        <Button
          onClick={goToCheckout}
          title="click for continue with the purchase"
          type="button"
        >
          Continue com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
