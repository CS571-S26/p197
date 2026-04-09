import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import './Navbar.css';

export default function Navbar() {
  const { getCartItemCount } = useStore();
  const cartCount = getCartItemCount();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img
            src={`${import.meta.env.BASE_URL}logo.jpg`}
            alt="Novedades Angel y Chuy"
            className="brand-logo"
          />
          <h1>Novedades Angel y Chuy</h1>
        </Link>

        <ul className="navbar-menu">
          <li>
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Tienda
            </Link>
          </li>
          <li>
            <Link to="/comunidad" className="nav-link">
              Por la Comunidad
            </Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <Link to="/cart" className="cart-btn">
            🛍️ Carrito
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
