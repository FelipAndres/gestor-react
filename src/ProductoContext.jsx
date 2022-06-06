import { useState, createContext } from 'react'

export const ProductoContext = createContext()

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  const [reload, setReload] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [apiURL, setApiURL] = useState('http://localhost:5000/api/productos')

  return (
    <ProductoContext.Provider value={{
      productos,
      setProductos,
      producto,
      setProducto,
      reload,
      setReload,
      isOpen,
      setIsOpen,
      isEdit,
      setIsEdit,
      apiURL,
      setApiURL
    }}
    >
      {children}
    </ProductoContext.Provider>
  )
}
export default ProductoContext
