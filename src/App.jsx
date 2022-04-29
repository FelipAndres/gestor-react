import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

import NavBar from './components/Navbar'
import HBar from './components/HorizontalBar'
import CRUDPage from './pages/CRUDPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/404Page'
import ProductosPage from './pages/ProductosPage'
import ReportesPage from './pages/ReportesPage'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})

  useEffect(() => fechtProductos(), [])

  const fechtProductos = async () => {
    try {
      const res = await fetch(apiUrl)
      if (res.ok) {
        toast.success('Datos cargados')
        // return res.json();
      } else {
        throw new Error(res.status)
      }
      const datos = await res.json()
      setProductos(datos)
      console.log(datos)
    } catch (error) {
      toast.error('Hubo un problema' + error)
    }
  }

  const apiUrl = 'http://localhost:5000/api/productos'
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
                  apiUrl={apiUrl}
                                               />}
              />
              <Route path='productos' element={<ProductosPage productos={productos} />} />
              <Route path='reportes' element={<ReportesPage productos={productos} />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  )
}
export default App
