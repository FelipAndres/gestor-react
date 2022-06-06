import { useState, useEffect, useContext } from 'react'

import FamiliaProductos from './FamiliaProductos'
import FabricantesProductos from './FabricantesProductos'
import ProductoContext from '../../ProductoContext'
import useFetch from '../../hooks/FetchHook'
import '../../Spur.css'
import toast from 'react-hot-toast'

export const FormRegistroProducto = () => {
  // const isComponentMounted = useRef(true)
  const {
    producto,
    isOpen,
    setIsOpen,
    isEdit,
    setIsEdit,
    apiURL,
    reload,
    setReload
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
  const [{ response, error }, doFetch] = useFetch(apiURL)

  // para rellenar el form cuando se edita
  useEffect(() => {
    if (producto) {
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

  useEffect(() => {
    if (response === 'Created') {
      setIsOpen(!isOpen)
      setReload(!reload)
      toast.success('Registrado con éxito')
    }
    if (response === 'OK') {
      setIsOpen(!isOpen)
      setReload(!reload)
      toast.success('Editado con éxito')
    }
    if (error) {
      // algo
      toast.error('Problema al registrar ' + error)
    }
  }, [response])

  const handleSubmitPost = (event) => {
    event.preventDefault()
    doFetch({
      method: 'post',
      data: objProducto
    })
  }
  const handleSubmitPut = (event) => {
    event.preventDefault()
    doFetch({
      method: 'put',
      data: objProducto
    })
    setIsEdit(!isEdit)
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
        <form>
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
                // defaultValue={new Date('dd/mm/yyyy')}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>
          </div>
          <button onClick={isEdit ? handleSubmitPut : handleSubmitPost} className='btn btn-primary ml-2 float-right'>
            {isEdit ? 'Editar' : 'Registrar'}
          </button>
          <button
            className='btn btn-danger float-right'
            onClick={() => {
              setIsOpen(!isOpen)
              isEdit && setIsEdit(!isEdit)
            }}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormRegistroProducto
