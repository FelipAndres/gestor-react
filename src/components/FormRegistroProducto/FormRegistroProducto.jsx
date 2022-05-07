import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'

import FamiliaProductos from './FamiliaProductos'
import FabricantesProductos from './FabricantesProductos'
import '../../Spur.css'

export const FormRegistroProducto = ({ setProducto, apiURL, onClose }) => {
  // make post request with fecht api

  const [nombre, setNombre] = useState('')
  // eslint-disable-next-line camelcase
  const [familia_producto_id, setFamiliaprod] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [estado, setEstado] = useState('')
  const [stock, setCantidad] = useState('')
  // eslint-disable-next-line camelcase
  const [fecha_registro, setFecha] = useState('')
  // eslint-disable-next-line camelcase
  const [fabricante_id, setFabricante] = useState('')

  const objProducto = {
    nombre,
    familia_producto_id,
    descripcion,
    estado,
    stock,
    fecha_registro,
    fabricante_id
  }
  console.log(objProducto)
  const handleSubmit = async (event) => {
    event.preventDefault()
    const postRequest = new Request(apiURL, {
      method: 'POST',
      body: JSON.stringify(objProducto),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    })
    try {
      const request = await fetch(postRequest)
      if (request.ok) {
        setProducto({ objProducto })
        toast.success('Registro con éxito')
      } else {
        throw new Error(request.status)
      }
    } catch (error) {
      toast.error('Hubo un problema al registrar', error)
    }
    // setNombre('')
    // setDescripcion('')
    // setFamiliaprod('')
    // setCantidad('')
    // setFabricante('')
    // setFecha('')
    // setEstado('')
  }
  // function handleDelete (event) {
  //   event.preventDefault()
  //   console.log('delete', inputs)
  // }

  return (
    <div className='card spur-card appear-animate modal-xl'>
      <div className='card-header'>
        <div className='spur-card-icon'>
          <i className='fas fa-chart-bar' />
        </div>
        <div className='spur-card-title'>Registro de Productos</div>
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
                value={nombre}
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
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              />
            </div>
            <div className='form-group col-md-3'>
              <label htmlFor='familia_producto_id'>Tipo</label>
              <select
                // eslint-disable-next-line camelcase
                value={familia_producto_id}
                name='familia_producto_id'
                onChange={(e) => setFamiliaprod(e.target.value)}
                className='form-control'
              >
                <FamiliaProductos />
              </select>
            </div>
            <div className='form-group col-md-6'>
              <label htmlFor='stock'>Cantidad</label>
              <input
                type='number'
                min='1'
                name='stock'
                className='form-control'
                placeholder='1'
                value={stock}
                onChange={(e) => setCantidad(e.target.value)}
                required
              />
            </div>
            <div className='form-group col-md-3'>
              <label htmlFor='fabricante_id'>Fabricante</label>
              <select
                // eslint-disable-next-line camelcase
                value={fabricante_id}
                name='fabricante_id'
                onChange={(e) => setFabricante(e.target.value)}
                className='form-control'
              >
                <FabricantesProductos />
              </select>
            </div>
            <div className='form-group col-md-3'>
              <label htmlFor='fecha_registro'>Fecha de Registro</label>
              <input
                type='date'
                name='fecha_registro'
                className='form-control'
                // eslint-disable-next-line camelcase
                value={fecha_registro}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </div>
            <div className='form-group col-md-3'>
              <label htmlFor='estado'>Estado</label>
              <input
                type='text'
                name='estado'
                className='form-control'
                placeholder='Dado de Baja'
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                required
              />
            </div>
          </div>
          <button onClick={handleSubmit} className='btn btn-primary ml-2 float-right'>
            Registrar
          </button>
          <button
            className='btn btn-danger float-right'
            onClick={onClose}
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
