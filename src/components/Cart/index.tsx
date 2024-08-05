import Button from '../Button'
import Tag from '../Tag'

import {
  Overlay,
  CartContainer,
  SideBar,
  Prices,
  Quantity,
  CartItem
} from './styles'

import starWars from '../../assets/images/star_wars.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <CartItem>
          <img src={starWars} />
          <div>
            <h3>Name game</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={starWars} />
          <div>
            <h3>Name game</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
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

export default Cart
