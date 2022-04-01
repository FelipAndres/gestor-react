import { Link } from "react-router-dom";
export const Navegation = () => {
  return (
    <nav className="dash-nav-list">
      <Link to="/" className="dash-nav-item">
        <i className="fas fa-home"></i> Inicio
      </Link>

      <div className="dash-nav-dropdown">
        <Link to="#!" className="dash-nav-item dash-nav-dropdown-toggle">
          <i className="fas fa-cube"></i> Inventario
        </Link>
        <div className="dash-nav-dropdown-menu">
          <Link to="/administracion" className="dash-nav-dropdown-item">
            Control Insumos
          </Link>
          <Link to="/insumos" className="dash-nav-dropdown-item">
            Ver Insumos
          </Link>
        </div>
      </div>
      <Link to="/reportes" className="dash-nav-item">
        <i className="fas fa-home"></i> Reportes
      </Link>
    </nav>
  );
};
export default Navegation;
