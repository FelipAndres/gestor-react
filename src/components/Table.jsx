import '../Spur.css'

const Table = ({ insumos }) => {
  return (
    <table className='table table-hover table-in-card'>
      <thead>
        <tr>
          <th scope='col'>Nombre</th>
          <th scope='col'>Tipo</th>
          <th scope='col'>Descripción</th>
          <th scope='col'>Stock</th>
          <th scope='col'>Fecha</th>
          <th scope='col'>Estado</th>
        </tr>
      </thead>
      <tbody>
        {insumos.map((insumo) => (
          <tr key={insumo.id}>
            <td>{insumo.nombre}</td>
            <td>{insumo.familia_producto}</td>
            <td>{insumo.descripcion}</td>
            <td>{insumo.stock}</td>
            <td>{insumo.fecha_registro}</td>
            <td>{insumo.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
