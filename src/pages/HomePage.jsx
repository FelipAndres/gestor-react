
import { Toaster } from 'react-hot-toast'

import InicioCard from '../components/BtnHomePage/InicioCard'
import InicioCard1 from '../components/BtnHomePage/InicioCard1'
import InicioCard2 from '../components/BtnHomePage/InicioCard2'
import InicioCard3 from '../components/BtnHomePage/InicioCard3'
import AgregarStock from '../components/BtnHomePage/AgregarStock'
import DisminuirStock from '../components/BtnHomePage/DisminuirStock'

export const HomePage = () => {
  return (
    <>
      <div className='row dash-row'>
        <InicioCard />
        <InicioCard1 />
        <InicioCard2 />
        <InicioCard3 />
      </div>
      <div className='row dash-row'>
        <AgregarStock />
        <DisminuirStock />
        <Toaster position='bottom-center' />
      </div>
    </>
  )
}
export default HomePage
