import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';
import './HomePage.css';

export default function HomePage() {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Regalos de lujo para cada momento</h1>
          <p>Descubre nuestra selección de joyas, bolsos y perfumes</p>
          <Link to="/products" className="hero-btn">
            Comprar ahora
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Productos Destacados</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={toggleWishlist}
            />
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us">
        <h2>¿Por qué elegir Novedades Angel y Chuy?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <span className="benefit-icon">✨</span>
            <h3>Calidad Premium</h3>
            <p>Sólo los mejores materiales y acabados elegantes</p>
          </div>
          <div className="benefit">
            <span className="benefit-icon">🚚</span>
            <h3>Envío rápido</h3>
            <p>Envío gratis en pedidos mayores a $100</p>
          </div>
          <div className="benefit">
            <span className="benefit-icon">🔒</span>
            <h3>Pago seguro</h3>
            <p>Transacciones 100% seguras y encriptadas</p>
          </div>
          <div className="benefit">
            <span className="benefit-icon">😊</span>
            <h3>Atención al cliente</h3>
            <p>Soporte dedicado para tu satisfacción</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>"¡Calidad increíble! Las joyas llegaron perfectamente empacadas. ¡Muy recomendable!"</p>
            <p className="author">- Sara González</p>
          </div>
          <div className="testimonial">
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>"¡Me encanta mi nuevo perfume! La fragancia es exactamente como se describe. ¡Volveré a comprar!"</p>
            <p className="author">- Emma Rodríguez</p>
          </div>
          <div className="testimonial">
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>"El bolso de cuero es absolutamente hermoso. La mejor compra que hice este año."</p>
            <p className="author">- Miguel Hernández</p>
          </div>
        </div>
      </section>
    </div>
  );
}
