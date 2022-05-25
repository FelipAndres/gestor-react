import { useState, createContext } from 'react'

export const ProductoContext = createContext()

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  return (
    <ProductoContext.Provider value={{
      producto,
      setProducto,
      productos,
      setProductos,
      isOpen,
      setIsOpen,
      isEdit,
      setIsEdit
    }}
    >
      {children}
    </ProductoContext.Provider>
  )
}
export default ProductoContext
