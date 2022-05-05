import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

import NavBar from './components/Navbar'
import HBar from './components/HorizontalBar'
import Productos from './pages/Productos'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/404Page'
import ReportesPage from './pages/ReportesPage'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  const apiURL = 'http://localhost:5000/api/productos'

  // handle inputs on form
  // const handleChange = (event) => {
  //   const { name, value } = event.target
  //   setProducto((producto) => ({ ...producto, [name]: value }))
  //   setProductos(...producto)
  // }
  // fecht productos
  const fechtProductos = async () => {
    try {
      const res = await fetch(apiURL)
      if (res.ok) {
        toast.success('Datos cargados')
        // return res.json();
      } else {
        throw new Error(res.status)
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
                path='/' element={<HomePage
                  productos={productos}
                                  />}
              />
              <Route
                path='administracion' element={<Productos
                  productos={productos}
                  setProductos={setProductos}
                  producto={producto}
                  setProducto={setProducto}
                  apiURL={apiUrl}
                                               />}
              />
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
