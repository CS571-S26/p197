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
          <img src="/p197/logo.png" alt="Novedades angel y Chuy" className="brand-logo" />
          <h1>Novedades angel y Chuy</h1>
        </Link>

        <ul className="navbar-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Shop
            </Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <Link to="/cart" className="cart-btn">
            🛍️ Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
