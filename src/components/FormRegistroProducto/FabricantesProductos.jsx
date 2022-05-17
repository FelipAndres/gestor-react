import { useFetch } from '../../hooks/fetchHook2'
import { useRef } from 'react'

export const FabricantesProductos = () => {
  // esto es para que solo haga fecth si el componente esta "renderizado" y usa el hook useRef
  const isComponentMounted = useRef(true)
  const { data, loading } = useFetch(
    'http://localhost:5000/api/productos/fabricantes',
    isComponentMounted,
    []
  )
  return (
    <>
      <option value='Selecciona un fabricante'>Selecciona un fabricante</option>
      {loading
        ? (
          <option>Cargando datos...</option>
          )
        : (
            data.map((fabricantes) =>
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
