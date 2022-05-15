import { Route, Routes } from 'react-router-dom'

import NavBar from './components/GeneralUI/Navbar'
import HBar from './components/GeneralUI/HorizontalBar'
import Productos from './pages/Productos'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/404Page'
import ReportesPage from './pages/ReportesPage'
import { ProductoProvider } from './ProductoContext'

export const App = () => {
  return (
    <div className='dash'>
      <NavBar />
      <div className='dash-app'>
        <HBar />
        <main className='dash-content'>
          <div className='container-fluid'>
            <Routes>
              <Route
                path='/' element={<HomePage />}
              />
              <Route
                path='administracion' element={
                  <ProductoProvider>
                    <Productos />
                  </ProductoProvider>
                }
              />
              <Route
                path='reportes' element={<ReportesPage />}
              />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}
export default App
