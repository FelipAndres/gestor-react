import Form from '../components/form/Form'

export const CRUDPage = ({ productos, setProductos, producto, setProducto }) => {
  return (
    <Form
      productos={productos}
      setProductos={setProductos}
      producto={producto}
      setProducto={setProducto}
    />
  )
}
export default CRUDPage
