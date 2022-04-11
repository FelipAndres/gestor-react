import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Table from '../components/Table'
const apiUrl = 'http://localhost:5000/api/insumos'

export const InsumosPage = () => {
  // const [datos, setDatos] = useState([]);
  const [insumos, setInsumos] = useState([])
  useEffect(() => fechtInsumos(), [])

  const fechtInsumos = async () => {
    try {
      const res = await fetch(apiUrl)
      if (res.ok) {
        toast.success('Datos cargados')
        // return res.json();
      } else {
        throw new Error(res.status)
      }
      const datos = await res.json()
      setInsumos(datos)
      console.log(datos)
    } catch (error) {
      toast.error('Hubo un problema' + error)
    }
  }

  return (
    <div className='row'>
      <div className='col-lg-12'>
        <div className='card spur-card'>
          <div className='card-header'>
            <div className='spur-card-icon'>
              <i className='fas fa-table' />
            </div>
            <div className='spur-card-title'>Todos los Insumos</div>
          </div>
          <div className='card-body '>
            <Table insumos={insumos} />
            <Toaster position='bottom-center' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default InsumosPage
