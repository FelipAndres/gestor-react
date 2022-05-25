import { useEffect } from 'react'
import { useFetch } from '../../hooks/fetchHook'

export const FabricantesProductos = () => {
  // esto es para que solo haga fecth si el componente esta "renderizado" y usa el hook useRef
  // const isComponentMounted = useRef(true)
  const [{ response }, doFetch] = useFetch(
    'http://localhost:5000/api/productos/fabricantes'
  )
  useEffect(() => {
    doFetch()
  }, [doFetch])

  return (
    <>
      <option value='Selecciona un fabricante'>Selecciona un fabricante</option>
      {!response
        ? (
          <option>Cargando datos...</option>
          )
        : (
            response.map((fabricantes) =>
              <option
                key={fabricantes.id}
                value={fabricantes.id}
              >
                {fabricantes.nombre}
              </option>)
          )}
    </>
  )
}
export default FabricantesProductos
