try {
} catch (err) {
  toast.error('Problema al cargar productos ' + error)
}
const setIdToApiURL = (productoId) => {
  // const id = productoId.toString()
  // setApiURL((prev) => prev + '/' + id)
}
const editarProducto = (productoId) => {
  // Finding producto object with id xxx
  // const searchObject = productos.find((producto) => producto.id === productoId)
  // setProducto(searchObject)
}

const eliminarProducto = async () => {
}

const {
  setIsOpen,
  setIsEdit
} = useContext(ProductoContext)
