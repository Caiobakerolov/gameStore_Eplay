import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        games={onSaleGames}
        title="Promotions"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductList
        games={soonGames}
        title="Soon "
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
