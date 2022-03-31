export const Navegation = () => {
  return (
    <nav className="dash-nav-list">
      <a href="/inicio" className="dash-nav-item" data-link>
        <i className="fas fa-home"></i> Inicio
      </a>

      <div className="dash-nav-dropdown">
        <a href="#" className="dash-nav-item dash-nav-dropdown-toggle">
          <i className="fas fa-cube"></i> Inventario
        </a>
        <div className="dash-nav-dropdown-menu">
          <a
            href="/administracion"
            className="dash-nav-dropdown-item"
            data-link
          >
            Control Insumos
          </a>
          <a href="/buscar" className="dash-nav-dropdown-item" data-link>
            Ver Insumos
          </a>
        </div>
      </div>
      <a href="/reportes" className="dash-nav-item" data-link>
        <i className="fas fa-home"></i> Reportes
      </a>
    </nav>
  );
};
export default Navegation;
