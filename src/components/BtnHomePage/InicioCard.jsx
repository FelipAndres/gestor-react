// import { useEffect } from 'react'
export const InicioCard = () => {
  // eslint-disable-next-line no-return-assign
  // const total = productos.reduce((counter, stock) => stock > '0' ? counter += 1 : counter, 0)
  return (
    <div className='col-xl-4'>
      <div className='stats stats-primary'>
        <h3 className='stats-title'> Productos </h3>
        <div className='stats-content'>
          <div className='stats-icon'>
            <i className='fas fa-cubes' />
          </div>
          <div className='stats-data'>
            <div className='stats-number'>0</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default InicioCard
