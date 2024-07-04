import { Game } from '../Home'
import ProductList from '../../components/ProductsList'

const promotion: Game[] = []

const shortly: Game[] = []

const Categories = () => (
  <>
    <ProductList games={promotion} title="RPG" background="gray" />
    <ProductList games={shortly} title="Action" background="black" />
    <ProductList games={shortly} title="Adventure" background="gray" />
    <ProductList games={shortly} title="FPS" background="black" />
  </>
)

export default Categories
