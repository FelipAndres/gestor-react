import "../Spur.css";
import { useState } from "react";

export const FormRegister = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const {name, value} = event.target
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  function handleDelete(event) {
    event.preventDefault()
    console.log("delete", inputs)
  }

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card spur-card">
          <div className="card-header">
            <div className="spur-card-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <div className="spur-card-title">Registro de Insumos</div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Toner..."
                    value={inputs.name || ""}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="tipo">Tipo</label>
                  <select
                    value={inputs.tipo}
                    name="tipo"
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Tinta">Tinta</option>
                    <option value="Toner">Toner</option>
                    <option value="Fijo">Fijo</option>
                    <option value="General">General</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="stock">Cantidad</label>
                  <input
                    type="number"
                    min="1"
                    name="stock"
                    className="form-control"
                    placeholder=""
                    value={inputs.stock || ""}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label htmlFor="date">Fecha de Registro</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    value={inputs.date || ""}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="status">Estado</label>
                  <input
                    type="text"
                    name="status"
                    className="form-control"
                    placeholder="Dado de Baja"
                    value={inputs.status || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="observa">Observaciones</label>
                  <input
                    type="text"
                    name="observa"
                    className="form-control"
                    placeholder="En mal estado"
                    value={inputs.observa || ""}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
              <button onClick={handleDelete}className="btn btn-primary">
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
