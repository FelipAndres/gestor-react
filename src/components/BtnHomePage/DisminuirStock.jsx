export const DisminuirStock = (stock, setStock, handleChange) => {
  return (
    <div className='col-xl-6'>
      <form action=''>
        <div className='stats stats-warning'>
          <h3 className='stats-title'> Disminuye Stock </h3>
          <div className='stats-content'>
            <div className='stats-icon'>
              <i className='fas fa-window-minimize' />
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
export default DisminuirStock
