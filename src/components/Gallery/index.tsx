import Section from '../Section'
import { Item, Items, Action, Modal, ModalContent } from './styles'

import spiderMan from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/Hogwarts.png'
import close from '../../assets/images/close.png'
import monster from '../../assets/images/monster.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderMan
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=6E7ZheSlPI_18wTc'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Gallery" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`media ${index + 1} of ${name}`}
              />
              <Action>
                <img src={getMediaIcon(media)} alt="click to maximize media" />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="icon close" />
          </header>
          <img src={monster} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
