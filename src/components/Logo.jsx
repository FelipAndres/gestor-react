import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <header>
      <Link to="#!" className="menu-toggle">
        <i className="fas fa-bars"></i>
      </Link>
      <Link to="/" className="spur-logo">
        <i className="fas fa-bolt">
          <span> Gestor</span>
        </i>
      </Link>
    </header>
  );
};
export default Logo;
