import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import RoutesSrc from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import { store } from './store'
import { GlobalCss } from './styles'

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
      </BrowserRouter>
    </Provider>
  )
}

export default App
