import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="About the game" background="black">
        <p>
          Hogwarts Legacy is an immersive, open-world action RPG set in the
          world first introduced in the Harry Potter books. Embark on a journey
          through new and familiar locations as you explore and discover
          fantastic beasts, customise your character, brew potions, master spell
          casting, enhance talents, and become the wizard you want to be.
          Experience Hogwarts in the 1800s. Your character is a student holding
          the key to an ancient secret that threatens to destroy the wizarding
          world. Make allies, battle dark wizards, and determine the fate of the
          wizarding world. Your legacy is what you make of it. Live the
          Unforeseen.
        </p>
      </Section>
      <Section title="More details" background="gray">
        <p>
          <b>Platform</b>: PlayStation 5 <br />
          <b>Developer</b>: Avalanche Software <br />
          <b>Publisher</b>: Portkey Games, a subsidiary of Warner Bros.
          Interactive Entertainment <br />
          <b>Languages</b>: The game supports multiple languages, including
          English, Spanish, French, German, Italian, Portuguese, among others.
          Audio and subtitle options can be adjusted in the game settings.
        </p>
      </Section>
      <Gallery />
    </>
  )
}

export default Product
