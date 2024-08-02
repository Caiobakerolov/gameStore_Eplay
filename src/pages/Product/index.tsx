import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()

  const { data: gameGames } = useGetGameQuery(id!)

  if (gameGames) {
    return (
      <>
        <Hero game={gameGames} />
        <Section title="About the game" background="black">
          <p>{gameGames.description}</p>
        </Section>
        <Section title="More details" background="gray">
          <p>
            <b>Platform:</b> {gameGames.details.system} <br />
            <b>Developer:</b> {gameGames.details.developer} <br />
            <b>Publisher:</b>: {gameGames.details.publisher} <br />
            <b>Languages: </b> The game supports multiple languages, including:{' '}
            {gameGames.details.languages.join(' , ')}
          </p>
        </Section>
        <Gallery
          name={gameGames.name}
          defaultCover={gameGames.media.cover}
          items={gameGames.media.gallery}
        />
      </>
    )
  }

  return <h4>Loading...</h4>
}

export default Product
