import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import ModalRegistro from '../components/ModalRegistro'
import TablaProductos from '../components/TablaProductos'

export const Productos = ({ productos, producto, setProducto, apiURL, handleChange }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <h1 className='dash-title'>Gestiona - Productos</h1>
      <div className='row dash-row'>
        <div className='col-lg-12'>
          <button onClick={() => setOpen(true)} className='btn btn-lg btn-primary'>
            Añadir nuevo
          </button>
          <ModalRegistro
            producto={producto}
            setProducto={setProducto}
            apiURL={apiURL}
            handleChange={handleChange}
            isOpen={open}
            onClose={() => setOpen(false)}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card spur-card'>
            <div className='card-header'>
              <div className='spur-card-icon'>
                <i className='fas fa-table' />
              </div>
              <div className='spur-card-title'>Productos en Inventario</div>
            </div>
            <div className='card-body '>
              <TablaProductos productos={productos} />
              <Toaster position='bottom-center' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Productos
