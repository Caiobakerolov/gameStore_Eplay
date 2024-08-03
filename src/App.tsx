import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import RoutesSrc from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import { store } from './store'
import { GlobalCss } from './styles'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <RoutesSrc />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
