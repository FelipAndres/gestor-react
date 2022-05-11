// import { useState } from 'react'
import InicioCard from '../components/BtnHomePage/InicioCard'
import InicioCard1 from '../components/BtnHomePage/InicioCard1'
import InicioCard2 from '../components/BtnHomePage/InicioCard2'
import InicioCard3 from '../components/BtnHomePage/InicioCard3'
import InicioCardBtn1 from '../components/BtnHomePage/InicioCardBtn1'
import InicioCardBtn2 from '../components/BtnHomePage/InicioCardBtn2'

export const HomePage = () => {
  // const [stock, setStock] = useState({})
  return (
    <>
      <div className='row dash-row'>
        <InicioCard />
        <InicioCard1 />
        <InicioCard2 />
        <InicioCard3 />
      </div>
      <div className='row dash-row'>
        <InicioCardBtn1 />
        <InicioCardBtn2 />
      </div>
    </>
  )
}
export default HomePage
