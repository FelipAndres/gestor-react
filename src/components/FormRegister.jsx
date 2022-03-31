import "../Spur.css";

export const FormRegister = () => {
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
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="nombreInsumo">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombreInsumo"
                    placeholder="RISO INK F II Type UA"
                    required
                  ></input>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="inputTipo">Tipo</label>
                  <select id="inputTipo" className="form-control">
                    <option>Tinta</option>
                    <option>Toner</option>
                    <option>Fijo</option>
                    <option>General</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="inputStock">Cantidad</label>
                  <input
                    type="number"
                    min="1"
                    id="inputStock"
                    className="form-control"
                    placeholder=""
                    required
                  ></input>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label htmlFor="inputDate">Fecha de Registro</label>
                  <input
                    type="date"
                    id="inputDate"
                    className="form-control"
                    required
                  ></input>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="inputStatus">Estado</label>
                  <input
                    type="text"
                    id="inputStatus"
                    className="form-control"
                    placeholder="Dado de Baja"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputObser">Observaciones</label>
                  <input
                    type="text"
                    id="inputObser"
                    className="form-control"
                    placeholder="En mal estado"
                    required
                  ></input>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
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
