import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const apiURL = 'http://localhost:5000/api/productos/tipos'

export const FamiliaProducto = () => {
  const [tipos, setTipos] = useState([])
  useEffect(() => fechtTipos(), [])

  const fechtTipos = async () => {
    try {
      const res = await fetch(apiURL)
      if (!res.ok) {
        throw new Error(res.status)
      }
      // toast.success('Datos cargados tipos')
      // return res.json();
      const datos = await res.json()
      setTipos(datos)
    } catch (error) {
      toast.error('Hubo un problema ' + error)
    }
  }
  return (
    <> <option value='Selecciona un tipo'>Selecciona un tipo</option>
      {tipos.map((tipos) => <option key={tipos.id} value={tipos.id}>{tipos.nombre}</option>)}
    </>
  )
}
export default FamiliaProducto
