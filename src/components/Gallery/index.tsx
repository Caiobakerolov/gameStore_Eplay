import Section from '../Section'
import zelda from '../../assets/images/zelda.png'

const Gallery = () => (
  <>
    <Section title="Gallery" background="black">
      <ul>
        <li>
          <img src={zelda} alt="image link" />
        </li>
        <li>
          <img src={zelda} alt="image link" />
        </li>
        <li>
          <img src={zelda} alt="image link" />
        </li>
        <li>
          <img src={zelda} alt="image link" />
        </li>
      </ul>
    </Section>
  </>
)

export default Gallery
