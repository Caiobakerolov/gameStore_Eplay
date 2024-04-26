import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="action"
          description="test"
          image="//placehold.it/222x250"
          infos={['-10%', 'U$$150']}
          system="windows"
          title="Game name"
        />
        <Product
          category="action"
          description="test"
          image="//placehold.it/222x250"
          infos={['-10%', 'U$$150']}
          system="windows"
          title="Game name"
        />
        <Product
          category="action"
          description="test"
          image="//placehold.it/222x250"
          infos={['-10%', 'U$$150']}
          system="windows"
          title="Game name"
        />
        <Product
          category="action"
          description="test"
          image="//placehold.it/222x250"
          infos={['-10%', 'U$$150']}
          system="windows"
          title="Game name"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
