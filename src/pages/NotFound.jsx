import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2>Página no encontrada</h2>
        <p>La página que buscas no existe.</p>
        <Link to="/" className="home-btn">
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}