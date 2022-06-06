import { useEffect, useState, useContext } from 'react'
import toast from 'react-hot-toast'

import ProductoContext from '../../ProductoContext'
import useFetch from '../../hooks/fetchHook'
import '../../styles.css'
import NombreProducto from './NombresProductos'

const AgregarStock = () => {
  const {
    apiURL,
    setApiURL
  } = useContext(ProductoContext)

  const [{ response }, doFetch] = useFetch(apiURL)
  const [stock, setStock] = useState(0)
  const [idProd, setIdProd] = useState()
  const objProd = {
    stock
  }
  const handleSubmitPut = (event) => {
    setApiURL('http://localhost:5000/api/productos/' + idProd)
    event.preventDefault()
    doFetch({
      method: 'put',
      data: objProd
    })
  }
  useEffect(() => {
    if (response === 'OK') {
      toast.success('Agregado más cantidad')
      // setApiURL('http://localhost:5000/api/productos')
    }
  }, [response])

  return (
    <div className='col-xl-6'>
      <form className=''>
        <div className='stats stats-success'>
          <h3 className='stats-title'> Añade Stock </h3>
          <div className='stats-icon'>
            <i className='fas fa-plus' />
          </div>
          <div className='stats-prods'>
            <select
              name='producto-nombre'
              onChange={(e) => setIdProd(e.target.value)}
              className='form-control'
            >
              <NombreProducto />
            </select>
          </div>
          <div className='stats-input'>
            <input
              className='form-control'
              type='number'
              name='stock'
              id='stock'
              min='1'
              placeholder='1'
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className='stats-btn '>
            <button onClick={handleSubmitPut} className='btn btn-primary mb-1 btn-add-stock'><i className='fas fa-check' /></button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default AgregarStock
