import { useState, createContext } from 'react'

export const ProductoContext = createContext()

export const ProductoProvider = ({ children }) => {
  const [apiURL, setApiURL] = useState('http://localhost:5000/api/productos')
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [method, setMethod] = useState('POST')

  return (
    <ProductoContext.Provider value={{
      producto,
      setProducto,
      productos,
      setProductos,
      apiURL,
      setApiURL,
      isOpen,
      setIsOpen,
      isEdit,
      setIsEdit,
      method,
      setMethod
    }}
    >
      {children}
    </ProductoContext.Provider>
  )
}
export default ProductoContext
