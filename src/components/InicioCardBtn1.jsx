import '../styles.css'
import FabricantesProductos from './form/FabricantesProductos'

export const InicioCardBtn1 = (stock, setStock, handleChange) => {
  return (
    <div className='col-xl-4'>
      <form action=''>
        <div className='stats stats-success'>
          <h3 className='stats-title'> Añade Stock </h3>
          <div className='stats-content'>
            <div className='stats-icon'>
              <i className='fas fa-plus' />
            </div>
            <div className='container-column'>
              <div className='stats-prods'>
                <select
                  value={stock || ''}
                  name='stock'
                  onChange={handleChange}
                  className='form-control'
                >
                  <FabricantesProductos />
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
        </div>
      </form>
    </div>
  )
}
export default InicioCardBtn1
