import { useEffect, useState } from "react";

export const InsumosPage = () => {
  const [insumos, setInsumos] = useState([])
  const [newElement, setNewElement] = useState(false)
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
  }, [newElement])

  const elements = insumos.map((element, index) => <p key={index}>{element}</p>)
  const adminButtons = <button>Admin</button>
  const regularButtons = <button>Regular</button>

  function updateButton() {
    setNewElement(!newElement)
  }
  return (
    <div>
      {elements && <p>No hay elementos</p> }
      {admin ? adminButtons : regularButtons}
    <button onClick={updateButton}>Agregar Elemento</button>
    </div>
    )
};
export default InsumosPage;
