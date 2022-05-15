import Logo from './Logo'
import Navegation from './Navegation'
import '../../Spur.css'

const Nav = ({ children }) => {
  return <div className='dash-nav dash-nav-dark'>{children}</div>
}
export const NavBar = () => {
  return (
    <Nav>
      <Logo />
      <Navegation />
    </Nav>
  )
}

export default NavBar
