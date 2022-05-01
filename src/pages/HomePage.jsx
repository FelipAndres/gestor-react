import { useState } from 'react'
import InicioCard from '../components/InicioCard'
import InicioCard1 from '../components/InicioCard1'
import InicioCard2 from '../components/InicioCard2'
import InicioCard3 from '../components/InicioCard3'
import InicioCardBtn1 from '../components/InicioCardBtn1'
import InicioCardBtn2 from '../components/InicioCardBtn2'

export const HomePage = () => {
  const [stock, setStock] = useState({})
  const handleChange = (event) => {
    const { name, value } = event.target
    setStock((prevValues) => ({ ...prevValues, [name]: value }))
  }
  return (
    <div className='row dash-row'>
      <InicioCard />
      <InicioCard1 />
      <InicioCard2 />
      <InicioCard3 />
      <InicioCardBtn1 stock={stock} setStock={setStock} handleChange={handleChange} />
      <InicioCardBtn2 />
    </div>
  )
}
export default HomePage
