import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const url_api = "http://localhost:5000/api/insumos";

export const InsumosPage = () => {
  //const [datos, setDatos] = useState([]);
  const [insumos, setInsumos] = useState([]);
  useEffect(() => fechtInsumos(), []);

  const fechtInsumos = async () => {
    try {
      const res = await fetch(url_api);
      if (res.ok) {
        toast.success("Datos cargados");
        //return res.json();
      } else {
        throw new Error(res.status);
      }
      const datos = await res.json();
      setInsumos(datos);
    } catch (error) {
      toast.error("Hubo un problema" + error);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card spur-card">
          <div className="card-header">
            <div className="spur-card-icon">
              <i className="fas fa-table"></i>
            </div>
            <div className="spur-card-title">Todos los Insumos</div>
          </div>
          <div className="card-body ">
            <table className="table table-hover table-in-card">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Observaciones</th>
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
            <Toaster position="bottom-center" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InsumosPage;
