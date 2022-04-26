import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const apiUrl = 'http://localhost:5000/api/productos/tipos'

export const FamiliaProducto = () => {
  const [tipos, setTipos] = useState([])
  useEffect(() => fechtTipos(), [])

  const fechtTipos = async () => {
    try {
      const res = await fetch(apiUrl)
      if (res.ok) {
        toast.success('Datos cargados tipos')
        // return res.json();
      } else {
        throw new Error(res.status)
      }
      const datos = await res.json()
      setTipos(datos)
      console.log(datos)
    } catch (error) {
      toast.error('Hubo un problema' + error)
    }
  }
  return (
    <> <option value='Selecciona un tipo'>Selecciona un tipo</option>
      {tipos.map((tipos) => <option key={tipos.id} value={tipos.id}>{tipos.nombre}</option>)}
    </>
  )
}
export default FamiliaProducto
