import { Toaster } from 'react-hot-toast'
import Table from '../components/Table'

export const ProductosPage = ({ productos }) => {
  console.log(typeof (productos))
  return (
    <div className='row'>
      <div className='col-lg-12'>
        <div className='card spur-card'>
          <div className='card-header'>
            <div className='spur-card-icon'>
              <i className='fas fa-table' />
            </div>
            <div className='spur-card-title'>Todos los Productos</div>
          </div>
          <div className='card-body '>
            <Table datos={productos} />
            <Toaster position='bottom-center' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductosPage
