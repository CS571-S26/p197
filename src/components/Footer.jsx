import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Acerca de Novedades Angel y Chuy</h3>
          <p>
            Ofrecemos la mejor selección de joyas, bolsos y perfumes para cada ocasión. Calidad y elegancia son nuestra promesa.
          </p>
        </div>

        <div className="footer-section">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#shop">Tienda</a></li>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#faq">Preguntas</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Servicio al Cliente</h3>
          <ul>
            <li><a href="#shipping">Información de envío</a></li>
            <li><a href="#returns">Devoluciones</a></li>
            <li><a href="#privacy">Política de privacidad</a></li>
            <li><a href="#terms">Términos y condiciones</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contáctanos</h3>
          <p>Correo: info@novedadesangelychuy.com</p>
          <p>Teléfono: (555) 123-4567</p>
          <p>Dirección: 123 Avenida Elegancia, Ciudad Moda, CM 12345</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Novedades Angel y Chuy. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="#facebook">f</a>
          <a href="#instagram">📷</a>
          <a href="#twitter">𝕏</a>
        </div>
      </div>
    </footer>
  );
}
