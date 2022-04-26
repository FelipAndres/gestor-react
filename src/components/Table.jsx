import { toast } from 'react-hot-toast'
import '../Spur.css'
const apiUrl = 'http://localhost:5000/api/productos'

const handleSubmit = async (productoId) => {
  // event.preventDefault()
  const putRequest = new Request(apiUrl, {
    method: 'PUT',
    body: JSON.stringify(),
    headers: new Headers({
      'Content-type': 'application/json'
    })
  })
  try {
    const request = await fetch(putRequest)
    if (request.ok) {
      toast.success('Registro con éxito')
    } else {
      throw new Error(request.status)
    }
  } catch (error) {
    toast.error('Hubo un problema al registrar', error)
  }
}
const Table = ({ productos }) => {
  return (
    <table className='table table-hover table-in-card'>
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Nombre</th>
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
            <td><button onClick={() => handleSubmit(producto.id)} className='btn btn-warning'>Editar</button>
            </td>
            <td><button className='btn btn-danger'>Eliminar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
