import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Header } from './components/Header'
import { GlobalCss } from './styles'
import { RoutesManager } from './routes'
import { Footer } from './components/Footer'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <RoutesManager />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
