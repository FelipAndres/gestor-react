import Form from '../components/form/Form'

export const CRUDPage = ({ productos, setProductos, producto, setProducto, apiURL }) => {
  return (
    <Form
      productos={productos}
      setProductos={setProductos}
      producto={producto}
      setProducto={setProducto}
      apiURL={apiURL}
    />
  )
}
export default CRUDPage
