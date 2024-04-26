import ProductList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promotion: Game[] = [
  {
    id: 1,
    category: 'action',
    description: 'Resident Evil 4',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'U$$150'],
    image: resident
  },
  {
    id: 2,
    category: 'action',
    description:
      'Diablo IV is an action RPG in development by Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Nintendo Switch',
    infos: ['5%', 'U$$120'],
    image: diablo
  },
  {
    id: 3,
    category: 'action',
    description: 'Zelda',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'U$$150'],
    image: zelda
  },
  {
    id: 4,
    category: 'action',
    description: 'Star Wars',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'U$$150'],
    image: starWars
  }
]

const shortly: Game[] = [
  {
    id: 5,
    category: 'action',
    description: 'Star Wars',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 6,
    category: 'action',
    description: 'Zelda',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'action',
    description:
      'Diablo IV is an action RPG in development by Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Nintendo Switch',
    infos: ['5%', 'U$$120'],
    image: diablo
  },
  {
    id: 8,
    category: 'action',
    description: 'Resident Evil 4',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'U$$150'],
    image: resident
  }
]

const Categories = () => (
  <>
    <ProductList games={promotion} title="RPG" background="gray" />
    <ProductList games={shortly} title="Action" background="black" />
    <ProductList games={shortly} title="Adventure" background="gray" />
    <ProductList games={shortly} title="FPS" background="black" />
  </>
)

export default Categories
