import { useState } from 'react'

import NavBar from './components/Navbar'
import HBar from './components/HorizontalBar'
import CRUDPage from './pages/CRUDPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/404Page'
import InsumosPage from './pages/ProductosPage'
import ReportesPage from './pages/ReportesPage'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  return (
    <>
      <NavBar />
      <div className='dash-app'>
        <HBar />
        <main className='dash-content'>
          <div className='container-fluid'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route
                path='administracion' element={<CRUDPage
                  productos={productos}
                  setProductos={setProductos}
                  producto={producto}
                  setProducto={setProducto}
                                               />}
              />
              <Route path='productos' element={<InsumosPage />} />
              <Route path='reportes' element={<ReportesPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  )
}
export default App
