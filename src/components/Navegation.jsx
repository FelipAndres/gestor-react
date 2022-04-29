import { Link } from 'react-router-dom'
export const Navegation = () => {
  return (
    <nav className='dash-nav-list'>
      <Link to='/' className='dash-nav-item'>
        <i className='fas fa-home' /> Inicio
      </Link>

      <div className='dash-nav-dropdown'>
        <Link to='#!' className='dash-nav-item dash-nav-dropdown-toggle'>
          <i className='fas fa-cube' /> Inventario
        </Link>
        <div className='dash-nav-dropdown-menu'>
          <Link to='/administracion' className='dash-nav-dropdown-item'>
            Gestión
          </Link>
          <Link to='/productos' className='dash-nav-dropdown-item'>
            Listado
          </Link>
        </div>
      </div>
      <Link to='/reportes' className='dash-nav-item'>
        <i className='fas fa-file-download' /> Reportes
      </Link>
    </nav>
  )
}
export default Navegation
