import { useEffect, useContext } from 'react'

import ProductoContext from '../../ProductoContext'
import useFetch from '../../hooks/fetchHook'
import Loading from '../Loading'
import '../../Spur.css'

const TablaProductos = () => {
  const {
    producto,
    isOpen,
    setIsOpen,
    isEdit,
    setIsEdit,
    apiURL,
    setApiURL
  } = useContext(ProductoContext)

  // fecht productos
  const [{ response }, doFetch] = useFetch(apiURL)

  useEffect(() => (doFetch())
    , [doFetch, producto])
  // setear productos con response

  // console.count('Tabla productos')
  // console.log(response + ' response')
  // console.log(error + ' error')
  // console.log(isLoading + ' isLoading')
  // validar error tambienpls jsjs

  const editProducto = (id) => {
  // Finding producto object with id xxx
    const searchObject = response.find((producto) => producto.id === id)
    console.log(searchObject)
    // setProducto(searchObject)
  }
  const setIdToApiURL = (id) => {
  // const id = productoId.toString()
    setApiURL((prev) => prev + '/' + id)
  }
  return (
    <>
      {response
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
              {response.map((producto) => (
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
                        editProducto(producto.id)
                        setIdToApiURL(producto.id)
                      }} className='btn btn-warning'
                    >Editar
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                      // eliminarProducto()
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
