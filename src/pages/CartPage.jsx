import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import './CartPage.css';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useStore();
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = cartTotal > 100 ? 0 : 10;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shippingCost + tax;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Carrito de Compras</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p className="empty-icon">🛍️</p>
            <h2>Tu carrito está vacío</h2>
            <p>Empieza a comprar para añadir artículos a tu carrito.</p>
            <Link to="/products" className="continue-shopping-btn">
              Comenzar a Comprar
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            {/* Cart Items */}
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-category">{item.category}</p>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    title="Eliminar del carrito"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <aside className="cart-summary">
              <h2>Resumen de Pedido</h2>
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Envío:</span>
                <span>{shippingCost === 0 ? 'Gratis' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
              {cartTotal <= 100 && (
                <p className="shipping-note">
                  ¡Envío gratis en pedidos mayores a $100!
                </p>
              )}
              <div className="summary-row">
                <span>Impuestos (8%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">Proceder al Pago</button>
              <Link to="/products" className="continue-shopping-btn">
                Seguir Comprando
              </Link>
            </aside>
          </div>
        )}

        {cart.length > 0 && (
          <button className="clear-cart-btn" onClick={clearCart}>
            Vaciar Carrito
          </button>
        )}
      </div>
    </div>
  );
}
