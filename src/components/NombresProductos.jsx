import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const apiUrl = 'http://localhost:5000/api/productos/'

export const NombreProducto = () => {
  const [nombres, setNombres] = useState([])
  useEffect(() => fetchNombres(), [])
  //  creo que hacer un fetch por cada elemento no es buena idea pero por ahora funciona
  const fetchNombres = async () => {
    try {
      const res = await fetch(apiUrl)
      if (!res.ok) {
        throw new Error(res.status)
        // toast.success('Datos cargados fabricantes')
        // return res.json();
      }
      const datos = await res.json()
      //  es mejor descontrouir el request pa solo usar lo que se necesita
      setNombres(datos)
      console.log()
    } catch (error) {
      toast.error('Hubo un problema ' + error)
    }
  }
  // por ahora el fecth es solo  a la tabla productos y  aqui estoy usando el fabricante_id, pero deberia ser a la tabla faabricante y el name
  return (
    <> <option value='Selecciona un producto'>Selecciona un producto</option>
      {nombres.map((producto) =>
        <option
          key={producto.id}
          value={producto.id}
        >
          {producto.nombre}
        </option>)}
    </>
  )
}
export default NombreProducto
