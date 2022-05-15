import { useContext } from 'react'
import { toast } from 'react-hot-toast'

import { ProductoContext } from '../../ProductoContext'
import '../../Spur.css'

const TablaProductos = () => {
  const {
    productos,
    setIsOpen,
    setIsEdit,
    setMethod,
    apiURL,
    setApiURL,
    setProducto
  } = useContext(ProductoContext)

  const setIdToApiURL = (productoId) => {
    const id = productoId.toString()
    setApiURL((prev) => prev + '/' + id)
  }
  const editarProducto = (productoId) => {
    setMethod('PUT')
    // Finding producto object with id xxx
    const searchObject = productos.find((producto) => producto.id === productoId)
    setProducto(searchObject)
  }

  const eliminarProducto = async () => {
    const httpMethod = {
      method: 'DELETE',
      headers: new Headers({
        'Content-type': 'application/json'
      })
    }
    const httpReq = new Request(apiURL, httpMethod)
    try {
      const request = await fetch(httpReq)
      if (request.ok) {
        toast.success('Eliminado con éxito')
      } else {
        throw new Error(request.status)
      }
    } catch (error) {
      toast.error('Hubo un problema al eliminar', error)
    }
  }
  return (
    <>
      {productos.length > 0
        ? (
          <table className='table table-hover table-in-card'>
            <thead>
              <tr>
                <th scope='col'>Nombre de producto</th>
                <th scope='col'>Tipo</th>
                <th scope='col'>Descripción</th>
                <th scope='col'>Stock</th>
                <th scope='col'>Fabricante</th>
                <th scope='col'>Fecha</th>
                <th scope='col'>Estado</th>
                <th style={{ textAlign: 'center' }} colSpan={2}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.familia_producto_id}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.stock}</td>
                  <td>{producto.fabricante_id}</td>
                  <td>{producto.fecha_registro}</td>
                  <td>{producto.estado}</td>
                  <td>
                    <button
                      onClick={() => {
                        setIsEdit(true)
                        setIsOpen(true)
                        setIdToApiURL(producto.id)
                        editarProducto(producto.id)
                      }} className='btn btn-warning'
                    >Editar
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setIdToApiURL(producto.id)
                        eliminarProducto()
                      }} className='btn btn-danger'
                    >Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )
        : 'No hay productos para mostrar'}
    </>
  )
}

export default TablaProductos
