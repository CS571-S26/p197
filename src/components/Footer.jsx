import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Novedades Angel y Chuy</h3>
          <p>
            We offer the finest selection of jewelry, bags, and perfumes for every occasion. Quality and elegance are our promise.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#shipping">Shipping Info</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@luxestore.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Luxury Ave, Fashion City, FC 12345</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Novedades Angel y Chuy. All rights reserved.</p>
        <div className="social-links">
          <a href="#facebook">f</a>
          <a href="#instagram">📷</a>
          <a href="#twitter">𝕏</a>
        </div>
      </div>
    </footer>
  );
}
