import { useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import toast from 'react-hot-toast'

import NavBar from './components/GeneralUI/Navbar'
import HBar from './components/GeneralUI/HorizontalBar'
import Productos from './pages/Productos'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/404Page'
import ReportesPage from './pages/ReportesPage'
import { ProductoContext } from './ProductoContext'

export const App = () => {
  // handle inputs on form
  const { producto, setProductos, apiURL } = useContext(ProductoContext)
  // const handleChange = (event) => {
  //   const { name, value } = event.target
  //   setProducto((producto) => ({ ...producto, [name]: value }))
  //   setProductos(...producto)
  // }
  // fecht productos
  const fechtProductos = async () => {
    try {
      const res = await fetch(apiURL)
      if (!res.ok) {
        throw new Error(res.status)
        // toast.success('Datos cargados')
        // return res.json();
      }
      const datos = await res.json()
      setProductos(datos)
    } catch (error) {
      toast.error('Hubo un problema' + error)
    }
  }
  useEffect(() => fechtProductos(), [producto])

  return (
    <>
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
                path='administracion' element={<Productos />}
              />
              <Route
                path='reportes' element={<ReportesPage />}
              />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  )
}
export default App
