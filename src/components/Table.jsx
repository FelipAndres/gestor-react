import '../Spur.css'

function Table ({ insumos }) {
  return (
    <table className='table table-hover table-in-card'>
      <thead>
        <tr>
          <th scope='col'>Nombre</th>
          <th scope='col'>Tipo</th>
          <th scope='col'>Stock</th>
          <th scope='col'>Fecha</th>
          <th scope='col'>Estado</th>
          <th scope='col'>Observaciones</th>
        </tr>
      </thead>
      <tbody>
        {insumos.map((insumo) => (
          <tr key={insumo._id}>
            <td>{insumo.name}</td>
            <td>{insumo.tipo}</td>
            <td>{insumo.stock}</td>
            <td>{insumo.date}</td>
            <td>{insumo.status}</td>
            <td>{insumo.observa}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
