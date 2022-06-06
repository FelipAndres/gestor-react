import { useEffect, useContext } from 'react'
// import toast from 'react-hot-toast'
import ProductoContext from '../../ProductoContext'
import useFetch from '../../hooks/fetchHook'
import Loading from '../Loading'
import '../../Spur.css'
import toast from 'react-hot-toast'

const TablaProductos = () => {
  const {
    setProducto,
    productos,
    setProductos,
    isOpen,
    setIsOpen,
    isEdit,
    setIsEdit,
    apiURL,
    setApiURL,
    reload,
    setReload
  } = useContext(ProductoContext)

  // fetch productos
  const [{ response }, doFetch] = useFetch(apiURL)

  useEffect(() => {
    setApiURL('http://localhost:5000/api/productos')
    doFetch()
  }
  , [doFetch, reload])

  useEffect(() => {
    if (!isString(response)) {
      setProductos(response)
    }
  }, [response])

  useEffect(() => {
    if (response === 'OK') {
      setReload(!reload)
      toast.success('Eliminado con éxito')
    }
  }, [response])

  function isString (objValue) {
    return (
      objValue &&
      typeof objValue === 'string' &&
      objValue.constructor === String
    )
  }

  const editProducto = (id) => {
  // Finding producto object with id xxx
    const searchObject = response.find((producto) => producto.id === id)
    setProducto(searchObject)
  }
  const setIdToApiURL = (id) => {
  // const id = productoId.toString()
    setApiURL((prev) => prev + '/' + id)
  }
  const handleSubmitDel = () => {
    doFetch({
      method: 'delete'
    })
  }

  return (
    <>
      {productos
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
                        setIsEdit(!isEdit)
                        setIsOpen(!isOpen)
                        setIdToApiURL(producto.id)
                        editProducto(producto.id)
                      }} className='btn btn-warning'
                    >Editar
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setIdToApiURL(producto.id)
                        handleSubmitDel()
                      }} className='btn btn-danger'
                    >Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )
        : (<Loading />)}
    </>
  )
}

export default TablaProductos
