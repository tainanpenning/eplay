import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'
import { GlobalCss } from './styles'
import { RoutesManager } from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RoutesManager />
    </BrowserRouter>
  )
}

export default App
