export const InicioCard1 = () => {
  return (
    <div className='col-xl-4'>
      <div className='stats stats-info'>
        <h3 className='stats-title'> Producto más solicitado </h3>
        <div className='stats-content'>
          <div className='stats-icon'>
            <i className='fas fa-cubes' />
          </div>
          <div className='stats-data'>
            <div className='stats-number'>20</div>
            <div className='stats-change'>
              <span className='stats-percentage'> +25% </span>
              <span className='stats-timeframe'> más que el mes pasado </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default InicioCard1
