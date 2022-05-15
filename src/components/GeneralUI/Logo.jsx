import { Link } from 'react-router-dom'
export const Logo = () => {
  return (
    <header>
      <Link to='#!' className='menu-toggle'>
        <i className='fas fa-bars' />
      </Link>
      <Link to='/' className='spur-logo'>
        <i className='fas fa-box' />
        <span>GESTOR</span>
      </Link>
    </header>
  )
}
export default Logo
