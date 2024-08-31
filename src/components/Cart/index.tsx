import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'
import { getTotalPrice, parseToAus } from '../../utils'

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
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span> {parseToAus(item.prices.current)} </span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Quantity>{items.length} jogos(s) no carrinho</Quantity>
            <Prices>
              Total de {parseToAus(getTotalPrice(items))}
              {''} <span>Em ate 6x sem juros</span>
            </Prices>
            <Button
              onClick={goToCheckout}
              title="click for continue with the purchase"
              type="button"
            >
              Continue com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho esta vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
