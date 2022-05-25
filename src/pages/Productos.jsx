import { Toaster } from 'react-hot-toast'
import { useContext } from 'react'

import ModalRegistroProducto from '../components/ModalesRegistros/ModalRegistroProducto'
import TablaProductos from '../components/Tablas/TablaProductos'
import { ProductoContext } from '../ProductoContext'

export const Productos = () => {
  const {
    isOpen,
    setIsOpen,
    isEdit,
    setIsEdit,
    setProducto

  } = useContext(ProductoContext)

  return (
    <>
      <h1 className='dash-title'>Gestiona - Productos</h1>
      <div className='row dash-row'>
        <div className='col-lg-12'>
          <button
            onClick={() => {
              setIsEdit(isOpen)
              setIsOpen(!isEdit)
              setProducto('')
            }} className='btn btn-lg btn-primary'
          >
            Añadir nuevo
          </button>
          <ModalRegistroProducto />
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
              <TablaProductos />
              <Toaster position='bottom-center' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Productos
