import { useEffect } from 'react'
import useFetch from '../../hooks/fetchHook'

export const FamiliaProducto = () => {
  const [{ response }, doFetch] = useFetch(
    'http://localhost:5000/api/productos/tipos'
  )
  useEffect(() => {
    doFetch()
  }, [doFetch])

  return (
    <>
      <option value='Selecciona un tipo'>Selecciona un tipo</option>
      {!response
        ? (
          <option>Cargando datos...</option>
          )
        : (
            response.map((tipos) =>
              <option
                key={tipos.id}
                value={tipos.id}
              >
                {tipos.nombre}
              </option>)
          )}
    </>
  )
}
export default FamiliaProducto
