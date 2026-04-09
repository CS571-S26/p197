import './ProductCard.css';

export default function ProductCard({ product, onAddToCart, isWishlisted, onToggleWishlist }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <button
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={() => onToggleWishlist(product.id)}
          title={isWishlisted ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>

        <div className="product-rating">
          {'⭐'.repeat(Math.floor(product.rating))}
          <span className="rating-value">({product.reviews})</span>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
