import { Toaster, toast } from 'react-hot-toast'
import { useContext, useEffect } from 'react'

import ModalRegistroProducto from '../components/ModalesRegistros/ModalRegistroProducto'
import TablaProductos from '../components/Tablas/TablaProductos'
import { ProductoContext } from '../ProductoContext'

export const Productos = () => {
  const {
    del,
    isOpen,
    setIsOpen,
    isEdit,
    setIsEdit,
    setProducto,
    setProductos,
    setApiURL,
    producto,
    setMethod
  } = useContext(ProductoContext)

  // fecht productos
  const fechtProductos = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/productos')
      if (!res.ok) {
        throw new Error(res.status)
      }
      const listadoProductos = await res.json()
      setProductos(listadoProductos)
    } catch (error) {
      toast.error('Hubo un problema' + error)
    }
  }
  useEffect(() => fechtProductos(), [producto, del])
  // use reducer hook here?
  return (
    <>
      <h1 className='dash-title'>Gestiona - Productos</h1>
      <div className='row dash-row'>
        <div className='col-lg-12'>
          <button
            onClick={() => {
              setIsEdit(isOpen)
              setIsOpen(!isEdit)
              setApiURL('http://localhost:5000/api/productos')
              setMethod('POST')
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
