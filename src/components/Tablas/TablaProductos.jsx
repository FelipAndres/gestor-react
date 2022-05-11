import { useContext } from 'react'
import { ProductoContext } from '../../ProductoContext'
import '../../Spur.css'

const TablaProductos = () => {
  const { productos, setProducto, setIsOpen, setIsEdit, setMethod, setApiURL } = useContext(ProductoContext)

  const editarProducto = async (productoId) => {
    const searchId = productoId
    const id = searchId.toString()
    // Finding producto object with id xxx
    const searchObject = productos.find((producto) => producto.id === searchId)
    setIsOpen(true)
    setIsEdit(true)
    setMethod('PUT')
    setApiURL('http://localhost:5000/api/productos/' + id)
    setProducto(searchObject)
  }
  return (
    <>
      <table className='table table-hover table-in-card'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
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
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.familia_producto_id}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.stock}</td>
              <td>{producto.fabricante_id}</td>
              <td>{producto.fecha_registro}</td>
              <td>{producto.estado}</td>
              <td>
                <button
                  onClick={editarProducto(producto.id)} className='btn btn-warning'
                >Editar
                </button>
              </td>
              <td><button className='btn btn-danger'>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TablaProductos
