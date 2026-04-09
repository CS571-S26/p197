import { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';
import './ProductsPage.css';

export default function ProductsPage() {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [sortBy, setSortBy] = useState('name');

  let filteredProducts = PRODUCTS;

  if (selectedCategory !== 'todas') {
    filteredProducts = filteredProducts.filter((p) => p.category === selectedCategory);
  }

  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  } else {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Nuestra Colección</h1>
        <p>Descubre artículos de lujo para cada ocasión</p>
      </div>

      <div className="products-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="filter-group">
            <h3>Categoría</h3>
            <div className="category-filter">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Ordenar por</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="name">Nombre (A-Z)</option>
              <option value="price-low">Precio (Menor a Mayor)</option>
              <option value="price-high">Precio (Mayor a Menor)</option>
              <option value="rating">Valoración (Mayor a Menor)</option>
            </select>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="products-main">
          <div className="products-info">
            <p>{filteredProducts.length} productos encontrados</p>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={toggleWishlist}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No se encontraron productos en esta categoría.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
