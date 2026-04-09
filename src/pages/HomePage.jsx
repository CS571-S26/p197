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
          <h1>Luxury Gifts for Every Moment</h1>
          <p>Discover our curated collection of jewelry, bags, and perfumes</p>
          <Link to="/products" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Featured Products</h2>
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
        <h2>Why Choose Novedades Angel y Chuy?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <span className="benefit-icon">✨</span>
            <h3>Premium Quality</h3>
            <p>Only the finest materials and craftsmanship</p>
          </div>
          <div className="benefit">
            <span className="benefit-icon">🚚</span>
            <h3>Fast Shipping</h3>
            <p>Free shipping on orders over $100</p>
          </div>
          <div className="benefit">
            <span className="benefit-icon">🔒</span>
            <h3>Secure Payment</h3>
            <p>100% safe and encrypted transactions</p>
          </div>
          <div className="benefit">
            <span className="benefit-icon">😊</span>
            <h3>Customer Service</h3>
            <p>Dedicated support for your satisfaction</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>"Amazing quality! The jewelry arrived perfectly packaged. Highly recommend!"</p>
            <p className="author">- Sarah Johnson</p>
          </div>
          <div className="testimonial">
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>"Love my new perfume! The fragrance is exactly as described. Will order again!"</p>
            <p className="author">- Emma Wilson</p>
          </div>
          <div className="testimonial">
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p>"The leather bag is absolutely stunning. Best purchase I've made this year."</p>
            <p className="author">- Michael Chen</p>
          </div>
        </div>
      </section>
    </div>
  );
}
