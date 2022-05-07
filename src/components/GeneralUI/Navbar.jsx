import Logo from './Logo'
import Navegation from './Navegation'
import '../../Spur.css'

const MainContainer = ({ children }) => {
  return <div className='dash-nav dash-nav-dark'>{children}</div>
}
export const NavBar = () => {
  return (
    <MainContainer>
      <Logo />
      <Navegation />
    </MainContainer>
  )
}

export default NavBar
