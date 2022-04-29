import toast, { Toaster } from 'react-hot-toast'

import FamiliaProductos from './FamiliaProductos'
import FabricantesProductos from './FabricantesProductos'
import '../../Spur.css'

export const Form = ({ productos, setProductos, producto, setProducto, apiURL }) => {
  // handle inputs on form
  const handleChange = (event) => {
    const { name, value } = event.target
    setProductos((prevValues) => ({ ...prevValues, [name]: value }))
  }
  // make post request with fecht api
  const handleSubmit = async (event) => {
    event.preventDefault()
    const postRequest = new Request(apiURL, {
      method: 'POST',
      body: JSON.stringify(productos),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    })
    try {
      const request = await fetch(postRequest)
      if (request.ok) {
        toast.success('Registro con éxito')
      } else {
        throw new Error(request.status)
      }
    } catch (error) {
      toast.error('Hubo un problema al registrar', error)
    }
  }
  // function handleDelete (event) {
  //   event.preventDefault()
  //   console.log('delete', inputs)
  // }
  return (
    <div className='row'>
      <div className='col-xl-12'>
        <div className='card spur-card'>
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
                    value={productos.nombre || ''}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='descripcion'>Descripción</label>
                  <input
                    type='text'
                    name='descripcion'
                    className='form-control'
                    placeholder='En mal estado'
                    value={productos.descripcion || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group col-md-3'>
                  <label htmlFor='familia_producto_id'>Tipo</label>
                  <select
                    value={productos.familia_producto_id || ''}
                    name='familia_producto_id'
                    onChange={handleChange}
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
                    value={productos.stock || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group col-md-3'>
                  <label htmlFor='fabricante_id'>Fabricante</label>
                  <select
                    value={productos.fabricante_id || ''}
                    name='fabricante_id'
                    onChange={handleChange}
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
                    value={productos.fecha_registro || ''}
                    onChange={handleChange}
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
                    value={productos.estado || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='form-row' />
              <button onClick={handleSubmit} className='btn btn-primary'>
                Registrar
              </button>
              <Toaster position='bottom-center' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
