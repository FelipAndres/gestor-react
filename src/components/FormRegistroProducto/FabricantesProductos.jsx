import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const apiURL = 'http://localhost:5000/api/productos/fabricantes'

export const FabricantesProductos = () => {
  const [fabricantes, setFabricantes] = useState([])
  useEffect(() => fetchFabricantes(), [])
  //  creo que hacer un fetch por cada elemento no es buena idea pero por ahora funciona
  const fetchFabricantes = async () => {
    try {
      const res = await fetch(apiURL)
      if (!res.ok) {
        throw new Error(res.status)
        // toast.success('Datos cargados fabricantes')
        // return res.json();
      }
      const datos = await res.json()
      //  es mejor descontrouir el request pa solo usar lo que se necesita
      setFabricantes(datos)
      console.log()
    } catch (error) {
      toast.error('Hubo un problema ' + error)
    }
  }
  // por ahora el fecth es solo  a la tabla productos y  aqui estoy usando el fabricante_id, pero deberia ser a la tabla faabricante y el name
  return (
    <> <option value='Selecciona un fabricante'>Selecciona un fabricante</option>
      {fabricantes.map((fabricantes) =>
        <option
          key={fabricantes.id}
          value={fabricantes.id}
        >
          {fabricantes.nombre}
        </option>)}
    </>
  )
}
export default FabricantesProductos
