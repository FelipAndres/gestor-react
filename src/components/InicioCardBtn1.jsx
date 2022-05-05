import '../styles.css'
import NombreProducto from './NombresProductos'

export const InicioCardBtn1 = (productos, stock, setStock, handleChange) => {
  return (
    <div className='col-xl-6'>
      <form action=''>
        <div className='stats stats-success'>
          <h3 className='stats-title'> Añade Stock </h3>
          <div className='stats-content'>
            <div className='stats-icon'>
              <i className='fas fa-plus' />
            </div>
            <div className='stats-prods'>
              <select
                name='producto-nombre'
                onChange={handleChange}
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
                onChange={handleChange}
                autoFocus
              />
            </div>
            <div className='stats-btn '>
              <button className='btn btn-primary mb-1 btn-add-stock'><i className='fas fa-check' /></button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default InicioCardBtn1
