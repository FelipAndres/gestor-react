import { useState, useEffect, useContext, useRef } from 'react'

import FamiliaProductos from './FamiliaProductos'
import FabricantesProductos from './FabricantesProductos'
import { ProductoContext } from '../../ProductoContext'
import { useFetchBody } from '../../hooks/fetchBodyHook'
import '../../Spur.css'

import toast, { Toaster } from 'react-hot-toast'

export const FormRegistroProducto = () => {
  const isComponentMounted = useRef(true)
  const [isSubmitt, setIsSubmitt] = useState(false)
  const {
    producto,
    // setProducto,
    isOpen,
    setIsOpen,
    isEdit,
    setIsEdit,
    setApiURL
  } = useContext(ProductoContext)

  // make post request with fecht api
  const [nombre, setNombre] = useState()
  // CAMBIAR ESTAS VARIALES EN BD PLS, para no usar guion bajo...
  // eslint-disable-next-line camelcase
  const [familia_producto_id, setFamiliaprod] = useState()
  const [descripcion, setDescripcion] = useState()
  const [estado, setEstado] = useState()
  const [stock, setCantidad] = useState()
  // eslint-disable-next-line camelcase
  const [fecha_registro, setFecha] = useState()
  // eslint-disable-next-line camelcase
  const [fabricante_id, setFabricante] = useState()

  useEffect(() => {
    if (Object.keys(producto).length > 0) {
      setNombre(producto.nombre)
      setFamiliaprod(producto.familia_producto_id)
      setDescripcion(producto.descripcion)
      setEstado(producto.estado)
      setCantidad(producto.stock)
      setFecha(producto.fecha_registro)
      setFabricante(producto.fabricante_id)
    }
  }, [producto])

  const objProducto = {
    nombre,
    familia_producto_id,
    descripcion,
    estado,
    stock,
    fecha_registro,
    fabricante_id
  }
  const guardarProducto = () => {
      const { status, error } = useFetchBody(
        'http://localhost:5000/api/productos',
        isComponentMounted,
        objProducto,
        'POST'
      )
      console.log(status)
      try {
        if (status.ok) {
          setIsOpen(!isOpen)
          setIsEdit(isEdit)
          const text = isEdit ? 'Editado con éxito!' : 'Registrado con éxito!'
          toast.success(text)
        }
      } catch (err) {
        toast.error('Hubo un problema al registrar' + error)
        console.error(error)
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitt(true)
  }
  return (
    <div className='card spur-card appear-animate modal-lg mx-auto mt-5'>
      <div className='card-header'>
        <div className='spur-card-icon'>
          <i className='fas fa-chart-bar' />
        </div>
        <div className='spur-card-title'>
          {isEdit ? 'Editar Producto' : 'Registrar Producto'}
        </div>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor='nombre'>Nombre</label>
              <input
                type='text'
                className='form-control'
                name='nombre'
                placeholder='Toner...'
                value={nombre || ''}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='descripcion'>Descripción</label>
              <input
                type='text'
                name='descripcion'
                className='form-control'
                placeholder='En mal estado'
                value={descripcion || ''}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label htmlFor='familia_producto_id'>Tipo</label>
              <select
                // eslint-disable-next-line camelcase
                value={familia_producto_id || ''}
                name='familia_producto_id'
                onChange={(e) => setFamiliaprod(e.target.value)}
                className='form-control'
              >
                <FamiliaProductos />
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='fabricante_id'>Fabricante</label>
              <select
                // eslint-disable-next-line camelcase
                value={fabricante_id || ''}
                name='fabricante_id'
                onChange={(e) => setFabricante(e.target.value)}
                className='form-control'
              >
                <FabricantesProductos />
              </select>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-md-3'>
              <label htmlFor='stock'>Cantidad</label>
              <input
                type='number'
                min='1'
                name='stock'
                className='form-control'
                placeholder='0'
                value={stock || ''}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
            <div className='form-group col-md-3'>
              <label htmlFor='estado'>Estado</label>
              <input
                type='text'
                name='estado'
                className='form-control'
                placeholder='Dado de Baja'
                value={estado || ''}
                onChange={(e) => setEstado(e.target.value)}
              />
            </div>
            <div className='form-group col-md-3'>
              <label htmlFor='fecha_registro'>Fecha de Registro</label>
              <input
                type='date'
                name='fecha_registro'
                className='form-control'
                // eslint-disable-next-line camelcase
                value={fecha_registro || ''}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
          </div>
          <button onClick={handleSubmit} className='btn btn-primary ml-2 float-right'>
            {isEdit ? 'Editar' : 'Registrar'}
          </button>
          <button
            className='btn btn-danger float-right'
            onClick={() => {
              setIsOpen(!isOpen)
              setIsEdit(isEdit)
              setApiURL('http://localhost:5000/api/productos')
            }}
          >
            Cancelar
          </button>
          <Toaster position='bottom-center' />
        </form>
      </div>
    </div>
  )
}

export default FormRegistroProducto
