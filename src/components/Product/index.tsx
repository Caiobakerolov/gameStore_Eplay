import Tag from '../Tag'
import { Card, Description, Title, Infos } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

function Product({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }

  return (
    <>
      <Card
        title={`Click here to see more details about o game: ${title}`}
        to={`/product/${id}`}
      >
        <img src={image} alt={title} />
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
        <Title>{title}</Title>
        <Tag>{category}</Tag>
        <Tag>{system}</Tag>
        <Description>{getDescription(description)}</Description>
      </Card>
    </>
  )
}

export default Product
