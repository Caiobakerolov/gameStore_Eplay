import Tag from '../Tag'
import { Card, Description, Title } from './styles'

const Product = () => (
  <>
    <Card>
      <img src="//placehold.it/222x250" alt="" />
      <Title>Game name</Title>
      <Tag>Category</Tag>
      <Tag>Windows</Tag>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        alias laudantium quia nobis, laborum hic cumque? Aliquid exercitationem,
        pariatur, tempora ab officia ipsum aut magnam impedit nulla rem,
        corrupti eaque?
      </Description>
    </Card>
  </>
)

export default Product
