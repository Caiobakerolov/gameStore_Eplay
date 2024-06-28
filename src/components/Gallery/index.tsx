import Section from '../Section'
import { Item, Items } from './styles'

import zelda from '../../assets/images/zelda.png'

const Gallery = () => (
  <>
    <Section title="Gallery" background="black">
      <Items>
        <Item>
          <img src={zelda} alt="image Link" />
        </Item>
        <Item>
          <img src={zelda} alt="image Link" />
        </Item>
        <Item>
          <img src={zelda} alt="image Link" />
        </Item>
        <Item>
          <img src={zelda} alt="image Link" />
        </Item>
      </Items>
    </Section>
  </>
)

export default Gallery
